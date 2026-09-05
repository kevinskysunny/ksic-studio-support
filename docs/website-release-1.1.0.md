# 支持站 1.1.0 · 2026-09-05

本次发布完善产品使用资料与商店信息导航。保留既有支持、隐私、视频地址，不托管安装包，不收款，不添加注册表单、广告或访客统计。没有修改 App Store Connect 元数据。

## 已核实的商店信息

来源：2026-09-05 Apple iTunes Search API（US storefront，macSoftware）；产品名称与截图相符、开发者相同。

| 产品 | App Store ID | 版本 | 系统要求 |
| --- | --- | --- | --- |
| VolMix - Per-App Volume | 6806717830 | 1.1.6 | macOS 14.2+ |
| NetworkConsole Lite | 6801707344 | 1.0 | macOS 14.0+ |
| KSIC Studio | 6801325655 | 1.0.0 | macOS 14.0+ |

产品页使用不锁定地区的直达链接；价格与地区可用性以商店为准。不虚构评分、销量、推荐或渠道 token。

NetworkConsole Lite 隐私文本来自其仓库 docs/PRIVACY.md（2026-08-15），附加说明连接测试会向端点发送请求，不能把“本地诊断”理解为无网络通信。开发者需持续核对该声明与发布二进制、商店隐私标签的一致性。

## 风险与边界

1. GitHub Pages 条款禁止将其作为主要促成商业交易或提供商业 SaaS 的免费托管。支持文档、普通商店资料链接不能等同于已获商业站豁免。本版保持文档与支持用途，不代表 GitHub 合规保证。正式广告落地页、促销首页应迁至明确允许商业用途的托管；换自定义域名但继续使用 GitHub Pages 不会改变条款。源码仍可放 GitHub。必要时向 GitHub 取得书面确认。
2. 上架不等于 Apple 背书，不证明商标权、素材授权或所有地区的法律合规。VolMix 有同名其他产品；本次未完成商标检索。大额推广前应按目标市场核查名称与图标权利，避免造成来源混淆。
3. 宣传与商店已发布能力保持一致，明确 VolMix 音频权限及兼容性限制、NetworkConsole Lite 只读诊断边界。不得承诺全部应用兼容、网络自动修复、永久免费升级或未经验证的零延迟。
4. 无广告统计不等于完全不处理数据：GitHub 托管请求、支持邮件和语言本地存储各有处理范围。本版添加网站隐私说明。未来增加统计、邮件订阅、第三方视频嵌入时重新评估通知、同意与数据保留要求。
5. 只链接 App Store 不消除开发者的消费者保护、税务、隐私与知识产权责任。具体义务取决于销售地区和经营主体，超出本次网站检查范围。
6. 现有视频与素材没有在本次逐帧完成版权、音乐授权及个人信息审计；扩大传播前复核。不新增未经核实的客户案例或评价。

## 官方依据

- https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits
- https://docs.github.com/en/site-policy/github-terms/github-terms-for-additional-products-and-features
- https://developer.apple.com/app-store/marketing/guidelines/
- https://www.apple.com/legal/intellectual-property/guidelinesfor3rdparties.html
- https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement

## 维护

新增页面采用静态 HTML，无脚本时中英文内容与链接仍可访问。assets/site.js 提供自动/中文/英文即时切换、持久化及浏览器语言变化响应；assets/site.css 提供移动端、深色模式与键盘焦点样式。既有支持页保持原地址与内容。

未来推广：将销售型官网部署到合适托管，再把社交主页指向对应产品页面。App Store 营销链接必须在 App Store Connect 生成后再使用，不假造 pt/ct。

## 验证记录

- 7 个新增/更新页面的内部链接和资源存在性检查通过。
- JavaScript 语法与 Git diff 空白检查通过。
- 浏览器实测中英即时切换、刷新后保留选择、跨页面保留选择、跟随系统中文均正常。
- 桌面布局及 390px 窄屏产品页截图检查通过，无横向溢出。
- 添加 notranslate 标记，避免浏览器自动翻译破坏双语页面。
