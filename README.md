# Malcolm's Blog

纯 HTML / CSS / JS 手写的静态博客，托管在 GitHub Pages。

在线地址：https://victorgreatmarshal.github.io

## 目录结构

```
.
├── index.html       # 首页，文章列表
├── about.html        # 关于页
├── 404.html           # 404 页面
├── style.css          # 全站样式（含深色模式）
├── theme.js           # 深色模式切换脚本
└── posts/
    ├── hello-world.html
    └── why-static-site.html
```

## 本地预览

直接用浏览器打开 `index.html`，或者起一个本地静态服务器：

```bash
python3 -m http.server 8000
```

然后访问 http://localhost:8000

## 发布新文章

1. 复制 `posts/` 下任意一篇文章作为模板
2. 修改标题、日期和正文内容
3. 在 `index.html` 的 `<ul class="post-list">` 里加一条对应的 `<li>` 链接
4. `git add . && git commit -m "新文章：xxx" && git push`

推送到 `main` 分支后，GitHub Pages 会在一两分钟内自动更新线上站点。
