# jquery-startkit
jQuery+gulp的webapp，基于[generator-webapp](https://github.com/yeoman/generator-webapp)

## 快速开始
克隆项目到本地后，执行命令

安装依赖
```
npm i
```

本地运行
```
npm start
```
然后打开 `http://localhost:9000` 查看页面

> 如果要编译成静态文件，先执行编译命令
> ```
> npm run build
> ```
> 然后把生成的 `dist/` 文件夹里面的文件部署到服务器上

## 项目介绍
具体介绍可以查看[generator-webapp](https://github.com/yeoman/generator-webapp)，这里介绍实际开发的操作：

### 文件目录
```
.
├── app                               // 工作主目录
│   ├── fonts                         // 存放字体
│   ├── images                        // 存放图片
│   │   ├── apple-touch-icon.png
│   ├── scripts                       // 存放js脚本
│   │   ├── common                    // 公共部分的脚本
│   │   │   └── header.js             // 头部menu的脚本
│   │   └── main.js                   // 首页的脚本
│   ├── styles                        // 存放样式
│   │   ├── common                    // 公共部分样式
│   │   │   ├── global.scss           // 全局样式
│   │   │   ├── header.scss           // 头部样式
│   │   │   └── slide-menu.scss       // 侧滑框样式
│   │   └── main.scss                 // 首页样式
│   ├── templates                     // 公共html拆出来放这里，用来公共引用
│   │   ├── header.html               // 头部的html
│   │   ├── meta.html                 // 页面<meta>部分的内容
│   │   └── slide-menu.html           // 侧滑框的html
│   ├── article.html                  // 其他页面
│   ├── favicon.ico                   // 网页tab上的小icon
│   ├── index.html                    // 首页
│   └── topic.html                    // 其他页面
├── dist                              // 编译后会生成的文件夹
├── gulpfile.js                       // 编译项目用的gulp配置
├── package-lock.json                 // 版本锁
└── package.json                      // 记录项目的各种信息，包括项目依赖, npm i 就是根据这里面记录来下载依赖的
```
