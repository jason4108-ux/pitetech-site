# PITE TECH INC Static Website - Optimized Build

本版本已完成代码优化、文件命名规范化和归档清理，适合直接部署到 Cloudflare Pages / Workers Static Assets 或其他静态托管平台。

## 规范后的目录

```
PITETECH_optimized/
├── index.html
├── 404.html
├── _headers
├── _redirects
├── robots.txt
├── sitemap.xml
├── about/index.html
├── battery-tester/index.html
├── ground-fault-locator/index.html
├── dc-load-bank/index.html
├── downloads/index.html
├── contact/index.html
├── assets/
│   ├── css/site.css
│   ├── js/site.js
│   ├── images/
│   └── downloads/
└── docs/
```

## 命名规则

- 页面路由统一使用小写 kebab-case 目录：`/ground-fault-locator/`。
- 样式与脚本归档到 `assets/css/` 和 `assets/js/`。
- 图片统一归档到 `assets/images/`。
- 公共下载文件预留在 `assets/downloads/`。
- 旧的 `.html`、`about-us`、`contact-us`、`file-share` 等重复入口通过 `_redirects` 301 到规范路由。

## 本地预览

在项目根目录运行：

```bash
python3 -m http.server 8080
```

打开 `http://localhost:8080/`。

## 部署说明

- Cloudflare Pages 会读取 `_headers` 和 `_redirects`。
- 如果平台不支持 `_redirects`，请在平台控制台手动配置 `docs/ROUTE_ARCHIVE.md` 中的旧路由映射。
- 联系表单仍为静态 `mailto:sales@pitetech.com` 方案；如需在线提交，请接入表单服务后替换 `contact/index.html` 与 `assets/js/site.js` 中的提交逻辑。
