/*
 * Copyright (c) 2022-2023 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import ExtendInterface from "./ExtendInterface.js";
import VerificationMode from "./VerificationMode.js";
import { ArgumentMatchers } from "./ArgumentMatchers.js";
class MockKit {
    constructor() {
        this.mFunctions = [];
        this.stubs = new Map();
        this.recordCalls = new Map();
        this.currentSetKey = new Map();
        this.mockObj = null;
        this.recordMockedMethod = new Map();
        this.mFunctions = [];
        this.stubs = new Map();
        this.recordCalls = new Map();
        this.currentSetKey = new Map();
        this.mockObj = null;
        this.recordMockedMethod = new Map();
    }
    init() {
        this.reset();
    }
    reset() {
        this.mFunctions = [];
        this.stubs = new Map();
        this.recordCalls = new Map();
        this.currentSetKey = new Map();
        this.mockObj = null;
        this.recordMockedMethod = new Map();
    }
    clearAll() {
        this.reset();
    }
    clear(obj) {
        if (!obj)
            throw Error("Please enter an object to be cleaned");
        if (typeof (obj) != 'object')
            throw new Error('Not a object');
        this.recordMockedMethod.forEach(function (value, key, map) {
            if (key) {
                obj[key] = value;
            }
        });
    }
    ignoreMock(obj, method) {
        if (typeof (obj) != 'object')
            throw new Error('Not a object');
        if (typeof (method) != 'function')
            throw new Error('Not a function');
        let og = this.recordMockedMethod.get(method.propName);
        if (og) {
            obj[method.propName] = og;
            this.recordMockedMethod.set(method.propName, undefined);
        }
    }
    extend(dest, source) {
        dest["stub"] = source["stub"];
        dest["afterReturn"] = source["afterReturn"];
        dest["afterReturnNothing"] = source["afterReturnNothing"];
        dest["afterAction"] = source["afterAction"];
        dest["afterThrow"] = source["afterThrow"];
        dest["stubMockedCall"] = source["stubMockedCall"];
        dest["clear"] = source["clear"];
        return dest;
    }
    stubApply(f, params, returnInfo) {
        let values = this.stubs.get(f);
        if (!values) {
            values = new Map();
        }
        let key = params[0];
        if (typeof key == "undefined") {
            key = "anonymous-mock-" + f.propName;
        }
        let matcher = new ArgumentMatchers();
        if (matcher.matcheStubKey(key)) {
            key = matcher.matcheStubKey(key);
            if (key) {
                this.currentSetKey.set(f, key);
            }
        }
        values.set(key, returnInfo);
        this.stubs.set(f, values);
    }
    getReturnInfo(f, params) {
        let values = this.stubs.get(f);
        if (!values) {
            return undefined;
        }
        let retrunKet = params[0];
        if (typeof retrunKet == "undefined") {
            retrunKet = "anonymous-mock-" + f.propName;
        }
        let stubSetKey = this.currentSetKey.get(f);
        if (stubSetKey && (typeof (retrunKet) != "undefined")) {
            retrunKet = stubSetKey;
        }
        let matcher = new ArgumentMatchers();
        if (matcher.matcheReturnKey(params[0], undefined, stubSetKey) && matcher.matcheReturnKey(params[0], undefined, stubSetKey) != stubSetKey) {
            retrunKet = params[0];
        }
        values.forEach(function (value, key, map) {
            if (ArgumentMatchers.isRegExp(key) && matcher.matcheReturnKey(params[0], key)) {
                retrunKet = key;
            }
        });
        return values.get(retrunKet);
    }
    findName(obj, value) {
        let properties = this.findProperties(obj);
        let name = '';
        properties.filter((item) => (item !== 'caller' && item !== 'arguments')).forEach(function (va1, idx, array) {
            if (obj[va1] === value) {
                name = va1;
            }
        });
        return name;
    }
    isFunctionFromPrototype(f, container, propName) {
        if (container.constructor != Object && container.constructor.prototype !== container) {
            return container.constructor.prototype[propName] === f;
        }
        return false;
    }
    findProperties(obj, ...arg) {
        function getProperty(new_obj) {
            if (new_obj.__proto__ === null) {
                return [];
            }
            let properties = Object.getOwnPropertyNames(new_obj);
            return [...properties, ...getProperty(new_obj.__proto__)];
        }
        return getProperty(obj);
    }
    recordMethodCall(originalMethod, args) {
        originalMethod['getName'] = function () {
            return this.name || this.toString().match(/function\s*([^(]*)\(/)[1];
        };
        let name = originalMethod.getName();
        let arglistString = name + '(' + Array.from(args).toString() + ')';
        let records = this.recordCalls.get(arglistString);
        if (!records) {
            records = 0;
        }
        records++;
        this.recordCalls.set(arglistString, records);
    }
    mockFunc(originalObject, originalMethod) {
        let tmp = this;
        this.originalMethod = originalMethod;
        const _this = this;
        let f = function () {
            let args = arguments;
            let action = tmp.getReturnInfo(f, args);
            if (originalMethod) {
                tmp.recordMethodCall(originalMethod, args);
            }
            if (action) {
                return action.apply(_this, args);
            }
        };
        f.container = null || originalObject;
        f.original = originalMethod || null;
        if (originalObject && originalMethod) {
            if (typeof (originalMethod) != 'function')
                throw new Error('Not a function');
            var name = this.findName(originalObject, originalMethod);
            originalObject[name] = f;
            this.recordMockedMethod.set(name, originalMethod);
            f.propName = name;
            f.originalFromPrototype = this.isFunctionFromPrototype(f.original, originalObject, f.propName);
        }
        f.mocker = this;
        this.mFunctions.push(f);
        this.extend(f, new ExtendInterface(this));
        return f;
    }
    verify(methodName, argsArray) {
        if (!methodName) {
            throw Error("not a function name");
        }
        let a = this.recordCalls.get(methodName + '(' + argsArray.toString() + ')');
        return new VerificationMode(a ? a : 0);
    }
    mockObject(object) {
        if (!object || typeof object === "string") {
            throw Error(`this ${object} cannot be mocked`);
        }
        const _this = this;
        let mockedObject = {};
        let keys = Reflect.ownKeys(object);
        keys.filter(key => (typeof Reflect.get(object, key)) === 'function')
            .forEach((key) => {
            mockedObject[key] = object[key];
            mockedObject[key] = _this.mockFunc(mockedObject, mockedObject[key]);
        });
        return mockedObject;
    }
}
function ifMockedFunction(f) {
    if (Object.prototype.toString.call(f) != "[object Function]" &&
        Object.prototype.toString.call(f) != "[object AsyncFunction]") {
        throw Error("not a function");
    }
    if (!f.stub) {
        throw Error("not a mock function");
    }
    return true;
}
function when(f) {
    if (ifMockedFunction(f)) {
        return f.stub.bind(f);
    }
}
function MockSetup(target, propertyName, descriptor) {
    const aboutToAppearOrigin = target.aboutToAppear;
    const setup = descriptor.value;
    target.aboutToAppear = function (...args) {
        if (target.__Param) { // copy attributes and params of the original context
            try {
                const map = target.__Param;
                for (const [key, val] of map) {
                    this[key] = val; // 'this' refers to context of current function
                }
            }
            catch (e) {
                throw new Error(`Mock setup param error: ${e}`);
            }
        }
        if (setup) { // apply the mock content
            try {
                setup.apply(this);
            }
            catch (e) {
                throw new Error(`Mock setup apply error: ${e}`);
            }
        }
        if (aboutToAppearOrigin) { // append to aboutToAppear function of the original context
            aboutToAppearOrigin.apply(this, args);
        }
    };
}
export { MockSetup, MockKit, when };
