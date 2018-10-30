### 一些坑
`Error: Cannot find module '@babel/core'`
rollup-plugin-babel这个插件4以上版本会报错,建议退回到3+的版本

`Error: You must supply output.name for UMD bundles`
在config文件中的output里面增加一个name属性
**umd或iife模式下，若入口文件含 export，必须加上该属性**