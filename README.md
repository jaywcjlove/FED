# 前端导航网

弄个纯静态，便于维护的前端导航站。顺便放一些前端资源。[提交网址](https://github.com/jaywcjlove/FED/wiki/%E6%B7%BB%E5%8A%A0%E7%BD%91%E7%AB%99)


## 分类搜索

![FED](https://raw.githubusercontent.com/jaywcjlove/FED/gh-pages/img/fed.gif)

## 关键字搜索

![FED](https://raw.githubusercontent.com/jaywcjlove/FED/gh-pages/img/fed2.gif)

## 关键字点击

![FED](https://raw.githubusercontent.com/jaywcjlove/FED/gh-pages/img/fed3.gif)

# 添加网站


## 方法一

- [Fork](https://github.com/jaywcjlove/FED/issues#fork-destination-box)到自己仓库
- 修改根目录的`data.json`文件
- `Pull requests` 给我 哈！哈！哈！

```js
{
    // 必填－名字
    "name":"JSLint", 
    // 必填－网址
    "url":"http://jslint.com/", 
    // 选填－图标 
    // => 默认在根目录下的 favicon.ico 可以不填这项
    "ico":"http://easings.net/favicon.png",
    // 必填－可以留空 － 描述说明
    "des":"在线JS校验工具" ,
    // 选填－标签，便于归类
    "tags":["工具"]
}
```

如果你已经fork了你得先更新上游代码，方法如下：

```shell
# 列出远程仓库 URL
$ git remote -v
# List the current remotes （列出当前远程仓库）
# origin  https://github.com/user/repo.git (fetch)
# origin  https://github.com/user/repo.git (push)

# 添加上游仓库URL
$ git remote add upstream https://github.com/otheruser/repo.git
# Set a new remote (设置一个新的远程仓库)

# 再次列出远程仓库 URL
$ git remote -v
# Verify new remote (验证新的原唱仓库)
# origin    https://github.com/user/repo.git (fetch)
# origin    https://github.com/user/repo.git (push)
# upstream  https://github.com/otheruser/repo.git (fetch)
# upstream  https://github.com/otheruser/repo.git (push)

# 获取上游代码
$ git fetch upstream

# 检查你的 fork’s 本地 master 分支，如果不在master 分支就切换到该分支
$ git checkout master
# Switched to branch 'master'

# 合并来自 upstream/master 的更改到本地 master 分支上。
$ git merge upstream/master
```

## 方法二

给我来个 [issue](https://github.com/jaywcjlove/FED/issues) 告诉我，数据填写参考方法一。

# 开发

```bash
$ npm install
$ npm run build #编译并起服务本地预览可以测试Ajax请求
$ npm run watch:css
$ npm run watch:js
```
