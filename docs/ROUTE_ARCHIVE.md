# 路由归档与命名映射

| 旧入口 | 规范入口 | 处理方式 |
|---|---|---|
| /about.html | /about/ | 301 redirect |
| /about-us.html | /about/ | 301 redirect |
| /about-us/ | /about/ | 301 redirect |
| /products.html | / | 301 redirect |
| /products/ | / | 301 redirect |
| /product.html | / | 301 redirect |
| /product/ | / | 301 redirect |
| /all-products.html | / | 301 redirect |
| /all-products/ | / | 301 redirect |
| /contact.html | /contact/ | 301 redirect |
| /contact-us.html | /contact/ | 301 redirect |
| /contact-us/ | /contact/ | 301 redirect |
| /download.html | /downloads/ | 301 redirect |
| /download/ | /downloads/ | 301 redirect |
| /downloads.html | /downloads/ | 301 redirect |
| /file-share.html | /downloads/ | 301 redirect |
| /file-share/ | /downloads/ | 301 redirect |
| /battery-tester.html | /battery-tester/ | 301 redirect |
| /ground-fault-locator.html | /ground-fault-locator/ | 301 redirect |
| /dc-load-bank.html | /dc-load-bank/ | 301 redirect |
| /assets/styles.css | /assets/css/site.css | 301 redirect |
| /assets/main.js | /assets/js/site.js | 301 redirect |
| /assets/img/* | /assets/images/* | 301 redirect |

## 命名约定

- URL：小写 kebab-case，目录式结尾斜杠。
- CSS：`assets/css/site.css`。
- JS：`assets/js/site.js`。
- 图片：`assets/images/[semantic-name].webp`。
- 下载文件：`assets/downloads/[product-or-document-name].pdf`。
