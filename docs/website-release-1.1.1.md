# 支持站 1.1.1 · 2026-09-05

修复 App Store 短链接跳转至中国区 iPhone Today 首页的问题。

在当前网络环境中复现：无地区链接和已测试的美国区 VolMix 链接返回 HTTP 200，但最终落点是 /cn/iphone/today，未显示产品。不能仅用 HTTP 200 判断商店链接有效。

使用 Apple iTunes Lookup API（country=cn）返回的三款完整产品地址，保留 mt=12。逐一跟随跳转核验，最终 URL 包含对应 App ID，页面包含产品 ID。页面链接明确标记中国区，避免暗示通用地区入口。此修复不改变 App Store Connect 销售地区。

当前默认中国区；不承诺其他 Apple 账户地区可购买。未来海外推广应按目标 storefront 分别验证链接及最终落点，不能只依赖 App ID 或语言自动判断账户地区。

此记录修正 1.1.0 发布说明中关于“不锁定地区直达链接”的方案；具体 Apple 重定向内部原因无法从外部响应确定。
