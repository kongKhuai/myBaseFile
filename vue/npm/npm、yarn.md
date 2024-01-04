设置为淘宝镜像
npm 设置为淘宝镜像
npm config set registry <https://registry.npm.taobao.org/>

yarn 设置为淘宝镜像
yarn config set registry <https://registry.npm.taobao.org/>

设置为官方镜像
npm 设置为官方镜像
npm config set registry <https://registry.npmjs.org/>

yarn 设置为官方镜像
yarn config set registry <https://registry.yarnpkg.com>

判断是否设置成功
yarn
yarn config get registry

执行上面这条命令后，查看控制台输出是否为你设置的镜像地址。

npm
npm get registry

执行上面这条命令后，查看控制台输出是否为你设置的镜像地址。

# npm 命令与 yarn 命令切换

| npm                                       | Yarn                                 |
| :---------------------------------------- | :----------------------------------- |
| `npm install`                             | `yarn install`                       |
| (N/A)                                     | `yarn install --flat`                |
| (N/A)                                     | `yarn install --har`                 |
| (N/A)                                     | `yarn install --no-lockfile`         |
| (N/A)                                     | `yarn install --pure-lockfile`       |
| `npm install [package]`                   | (N/A)                                |
| `npm install --save [package]`            | `yarn add [package]`                 |
| `npm install --save-dev [package]`        | `yarn add [package] [--dev/-D]`      |
| (N/A)                                     | `yarn add [package] [--peer/-P]`     |
| `npm install --save-optional [package]`   | `yarn add [package] [--optional/-O]` |
| `npm install --save-exact [package]`      | `yarn add [package] [--exact/-E]`    |
| (N/A)                                     | `yarn add [package] [--tilde/-T]`    |
| `npm install --global [package]`          | `yarn global add [package]`          |
| `npm rebuild`                             | `yarn install --force`               |
| `npm uninstall [package]`                 | (N/A)                                |
| `npm uninstall --save [package]`          | `yarn remove [package]`              |
| `npm uninstall --save-dev [package]`      | `yarn remove [package]`              |
| `npm uninstall --save-optional [package]` | `yarn remove [package]`              |
| `npm cache clean`                         | `yarn cache clean`                   |
| `rm -rf node_modules && npm install`      | `yarn upgrade`                       |

| npm                                       | Yarn                                 |
| :---------------------------------------- | :----------------------------------- |
| `npm install`                             | `yarn install`                       |
| _(N/A)_                                   | `yarn install --flat`                |
| _(N/A)_                                   | `yarn install --har`                 |
| _(N/A)_                                   | `yarn install --no-lockfile`         |
| _(N/A)_                                   | `yarn install --pure-lockfile`       |
| `npm install [package]`                   | _(N/A)_                              |
| `npm install --save [package]`            | `yarn add [package]`                 |
| `npm install --save-dev [package]`        | `yarn add [package] [--dev/-D]`      |
| _(N/A)_                                   | `yarn add [package] [--peer/-P]`     |
| `npm install --save-optional [package]`   | `yarn add [package] [--optional/-O]` |
| `npm install --save-exact [package]`      | `yarn add [package] [--exact/-E]`    |
| _(N/A)_                                   | `yarn add [package] [--tilde/-T]`    |
| `npm install --global [package]`          | `yarn global add [package]`          |
| `npm rebuild`                             | `yarn install --force`               |
| `npm uninstall [package]`                 | _(N/A)_                              |
| `npm uninstall --save [package]`          | `yarn remove [package]`              |
| `npm uninstall --save-dev [package]`      | `yarn remove [package]`              |
| `npm uninstall --save-optional [package]` | `yarn remove [package]`              |
| `npm cache clean`                         | `yarn cache clean`                   |
| `rm -rf node_modules && npm install`      | `yarn upgrade`                       |
