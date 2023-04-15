"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PageEnum = void 0;
var PageEnum;
(function (PageEnum) {
    // basic login path
    PageEnum["BASE_LOGIN"] = "/login";
    // basic home path
    PageEnum["BASE_HOME"] = "/dashboard";
    // error page path
    PageEnum["ERROR_PAGE"] = "/exception";
    // error log page path
    PageEnum["ERROR_LOG_PAGE"] = "/error-log/list";
})(PageEnum = exports.PageEnum || (exports.PageEnum = {}));
function getArea(shape) {
    switch (shape.kind) {
        case 'circle':
            return Math.PI * shape.radius ** 2;
        case 'square':
            return shape.sidelength ** 2;
        default:
            // todo当Shape不包含Triangle 时是不会走default的，
            // todo如果包含了就会提示不能将Triangle分配给never
            // todo所以此举是为了做穷尽性检查
            const _exhaustiveCheck = shape;
            return _exhaustiveCheck;
    }
}
console.log(getArea({ kind: 'circle', radius: 2 }));
// !never 类型与穷尽性检查
// never 不应该存在的类型
// never 可以分配给任何类型，但是没有任何类型可以分配给never除never本身以外
// 例子看上面的     _exhaustiveCheck
