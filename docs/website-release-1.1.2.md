# 支持站 1.1.2 · 2026-09-05

面向国际用户，三款产品的默认入口改为 Apple US Lookup API 返回的完整美区产品链接（保留 mt=12，去掉可选 uo=4）。中英文页面均保留独立中国区备用链接；不根据界面语言、开发者所在地或本机 IP 推断账户地区。网站版本同步为 1.1.2，应用版本不变。

验证：2026-09-05，country=us 的 Lookup API 分别返回 VolMix - Per-App Volume（6806717830）、NetworkConsole Lite（6801707344）、KSIC Studio（6801325655）及匹配的美区 trackViewUrl。核对 HTML 主入口与两个 JSON 索引一致，并保留对应中国区链接。

Apple 官方说明 campaign link 中的 /us/ 不限制其他地区用户使用，App Store 会跳转至用户本地 storefront：https://developer.apple.com/help/app-store-connect-analytics/acquisition/campaign-links/ 。本站使用普通产品链接，未伪造 campaign/provider token；不承诺所有网络环境下的最终跳转均已验证。实际购买仍取决于用户 Apple 账户地区及该地区上架状态。

1.1.1 中本机跳转到 /cn/iphone/today 的现象只证明该环境的重定向异常，不能证明美区下架，也不能据此把全球默认区设为中国。此次保留中国区备用入口方便受影响用户访问。未更改 App Store Connect 销售地区。
