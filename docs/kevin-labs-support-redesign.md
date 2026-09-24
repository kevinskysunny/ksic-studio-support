# Kevin Labs 支持中心与产品门户改造说明

## 一、 改造背景与核心诉求

1. **品牌统一升级**：
   * 原品牌为代号感较强的 `KSIC Studio`，现正式全面升级为人格化、有温度且具备极客工坊气质的 **`Kevin Labs`**（定位：*Native Mac tools, crafted with care / 专注 Mac 原生工具，精雕细琢*）。
2. **对标与借鉴**：
   * 参考 **(Not Boring) Software** 官方支持页（`https://support.notbor.ing/`）的极简、自查优先与高人情味风格。
3. **适配业务当前发展阶段（种子期）**：
   * 目前产品累计几十个早期用户，几乎没有传统意义上的高频客服工单。
   * 因此，支持中心战略从**“冷冰冰的售后工单防御与拦截”**，转向**“独立开发者信誉背书 + 创始人直连交流通道 + 早期需求愿望池”**。

---

## 二、 架构设计与技术约束

* **技术底座**：保持纯原生、轻量级静态架构（HTML5 + 语义化 CSS + 极简 Vanilla JS），零打包与构建依赖，全站秒开。
* **国际化适配**：深度复用现有的 `data-lang` 多语言响应式引擎（中、英为主，兼顾日韩欧等多语言降级回退）。
* **本地与线上双兼容修复**：
  * 排查并修正了全站所有目录级相对链接（如 `href="volmix/"`、`href="../"`），全部显式指向 `.html` 文件。
  * 彻底解决了在本地使用 `file:///` 协议双击预览时，Chrome 将目录当做文件夹列出索引（Directory Listing）的痛点。

---

## 三、 核心改造模块详解

### 1. 顶部视觉与品牌升级（Header & Hero）
* **全站核心页面统一**（✅ 2026-09-24 已核对，共 13 个）：首页（`index.html`）、根级 `support.html` / `privacy.html` / `website-privacy.html`，以及 VolMix、NetDoctor、PresenterDeck、KSIC Studio 的主页与支持/隐私子页，导航头统一更新为 `Kevin Labs`（各 `review/` 演示页与跳转 stub 页不在本次范围内）。
  * 注：文档早期版本称"全站 14 个页面"，经逐页核对实际核心页面为 13 个，以本节清单为准。
* **Slogan 与副标题**：明确定位为 *“专注 Mac 原生工具，精雕细琢。Kevin Labs 官方应用指南、使用手册与作者反馈通道。”*
* **动态标题联动**：`site.js` 语言切换时自动将网页标题后缀绑定为 `— Kevin Labs`。

---

### 2. 【联系作者】创始人直连通道（Founder Direct Callout）
* **文案去官僚化**：
  * 抛弃容易引起歧义的“网络直连/客服”术语，选用最亲切自然的 **`联系作者`**（英文：`Contact Maker`）徽标胶囊。
  * 核心按钮命名为 **`✉️ 发邮件给 Kevin`**（英文：`✉️ Email Kevin`）。
* **双向沟通出口**：
  * **发邮件给 Kevin**：内置预填结构化参数（自动携带【设备型号】、【macOS 版本】、【涉及应用】模板）。
  * **💡 提交功能愿望清单**：主动向早期种子用户征集工作流痛点和新功能想法。
* **邮箱交互三重保障机制（彻底解决无本地邮件 App 点击无效问题）**：
  1. **自动剪贴板复制**：全站任何地方（包括页脚“联系支持”）点击 `mailto:` 链接，JS 会在后台瞬间将 `kssicstudio@gmail.com` 复制到剪贴板。
  2. **全局悬浮气泡（Site Toast）**：屏幕底部自动滑出黑底高质感 Toast 提示：`✓ 邮箱已自动复制：kssicstudio@gmail.com ｜ 在网页版 Gmail 打开 ↗`。
  3. **网页版 Gmail 直达**：卡片内显式提供 `🌐 在网页版 Gmail 打开`，一键在新标签页打开 Gmail 网页撰写窗口。
* **已知边界（✅ 2026-09-24 已修复）**：原实现仅使用 `navigator.clipboard.writeText()`，在 `file://` 等非安全上下文下该 API 不可用，且失败被静默吞掉——Toast 仍提示"已复制"但剪贴板实际为空。现已补充 `document.execCommand('copy')` 兜底（`legacyCopy`），并根据实际复制结果切换 Toast 文案：成功显示"✓ 邮箱已自动复制"，失败降级为"⚠ 自动复制失败，请手动复制"。线上 HTTPS 行为不变。

---

### 3. 产品矩阵重构（Flagship Apps Catalog）
* **PresenterDeck 晋升为一级核心卡片**：
  * **背景**：PresenterDeck（演示流程台）已在 App Store Connect 正式过审上架（App ID: `6805086319`）。
  * **调整**：从网站底部的脚注链接移出，晋升至首页核心网格主展台。
  * **配置**：
    * 专属标识：深邃科技蓝 Monogram 徽标（**`PD`**）。
    * 双语演示视频：直露 **`[▶ 中英双语演示视频]`** 胶囊，点击全屏播放 1.1.0 演示。
    * 原生商店唤起：配置 `macappstores://apps.apple.com/app/id6805086319?mt=12&ct=ksic_website` 协议，Mac 用户点击可一键唤醒本地 App Store。
* **下架 SmoothCast**：
  * 因录屏功能重复被 Apple 4.3 审核拒审，已从首页展示与资源列表下架。
  * ✅ **2026-09-24 已彻底删除**：移除 `smoothcast/` 目录（support、privacy、review 共 3 个页面）与 `media/smoothcast/` 媒体；`index.json` 中的 SmoothCast 条目与视频引用同步删除。全站 grep 确认已无 smoothcast 残留引用（Git 历史可追溯，可恢复）。
* **networkconsole-lite 遗留目录**（✅ 2026-09-24 已定）：
  * 核实该目录 3 个页面均为"已迁移至 NetDoctor"的跳转 stub（meta refresh + canonical），属有意保留，**维持现状**。
  * 顺手修复：stub 中的裸目录链接 `../netdoctor/` 补全为 `../netdoctor/index.html`，与全站 `.html` 显式链接规范一致。
* **主力矩阵**：VolMix（单应用调音）、KSIC Studio（本地工作空间）、NetDoctor（网络体检）、PresenterDeck（演示流程台）、IE Compat Bridge（Chrome 企业兼容扩展）。

---

### 4. 【常见问题与安心保障】（Quick Answers & Trust）
借鉴 notbor.ing 的排版哲学，采用原生 HTML5 `<details class="faq-accordion">` 手风琴组件，针对潜在付费用户的信任痛点进行首页直答：
1. **数据隐私与本地优先（Local-First）**：加粗承诺沙盒隔离，100% 本地运算，零云端上传。
2. **Mac App Store 恢复购买（Restore Purchases）**：指引同一 Apple ID 免二次扣费换机恢复流程。
3. **系统权限透明释疑**：客观解释为什么 VolMix / PresenterDeck 需要音频捕获或辅助功能权限。
4. **macOS 新系统适配承诺**：明确表态持续跟进 Apple Beta 测试，打消跑路顾虑。
* **SEO 增强（✅ 2026-09-24 已补充）**：首页 `<head>` 新增 `FAQPage` JSON-LD 结构化数据（4 条问答，英文文案与可见内容逐字一致），有利于 Google 富摘要展示与自然流量获取。

---

## 四、 本次改动涉及文件清单

| 文件路径 | 核心改动说明 |
| :--- | :--- |
| `index.html` | 首页架构重构：新增作者直连 Callout、FAQ 折叠手风琴 + `FAQPage` JSON-LD、PresenterDeck 卡片入驻、移除 SmoothCast、规范全部本地链接；页脚版本号 bump。 |
| `assets/site.css` | 新增 `.callout-box`、`.callout-badge`、`.faq-accordion`、`.video-pill`、`.site-toast` 及 `.color-4` 品牌色样式。 |
| `assets/site.js` | 全局标题后缀绑定为 `Kevin Labs`；新增全站 `mailto:` 点击拦截、自动复制与底部悬浮气泡 Toast 触发逻辑；补 `execCommand` 剪贴板兜底与失败降级文案。 |
| `index.json` | 同步更新 PresenterDeck 的 `appStoreUrl`、可用状态（available）及版本元数据；删除 SmoothCast 条目；`siteVersion` bump 为 `1.3.0`、`updatedAt` 更新为 `2026-09-24`。 |
| 各应用目录 HTML（共 13 个核心页） | 首页、根级 `support.html` / `privacy.html` / `website-privacy.html`，以及 `volmix/`、`netdoctor/`、`presenter-deck/`、`ksic-studio/` 的主页与支持/隐私子页的 Header 品牌与相对跳转修正；页脚版本号统一 bump 为 `1.3.0 · 2026-09-24`。 |
| `smoothcast/`、`media/smoothcast/`（已删除） | SmoothCast 全部页面与媒体文件从仓库删除（`git rm`），`index.json` 条目同步移除。 |
| `networkconsole-lite/`（保留） | 确认 3 个页面均为迁移至 NetDoctor 的跳转 stub，维持现状；仅将裸目录链接补全为 `.html` 显式链接。 |

---

## 五、 请 Kimi 重点评审的维度

1. **品牌人设与语气（Tone of Voice）**：当前从“客服”转为“独立作者交流”的文案，是否符合海外及 Mac 高级用户的沟通习惯？
2. **种子期获客与转化建议**：在目前仅有几十个用户的阶段，页面结构是否还有利于进一步促进下载与付费转化？
3. **技术与 UX 细节**：现有的 `mailto + 复制剪贴板 + 网页 Gmail 唤起` 三重机制，在用户体验上是否还有死角？

---

## 六、 评审结论与其他待办事项

### 1. 品牌迁移的过渡策略（已定：域名与邮箱保持不变 ✅ 2026-09-24）
本次仅升级了页面文案层面的品牌；以下资产仍使用旧标识。经确认，**域名与邮箱维持现状、不迁移、不新增**，理由：换域名需重做 CNAME、全站链接、301 跳转并清零搜索权重，而种子期收益约等于零，品牌感由页面内容承载而非 URL。
* 站点域名：`support.kssicstudio.com`（`CNAME`）——**保持不变**。
* 联系邮箱：`kssicstudio@gmail.com`——**保持不变**（无新邮箱；全站 `mailto:`、Toast 文案、Gmail 直达链接均无需改动）。
* App Store 归因参数：`ct=ksic_website`——**保持不变**，仅为下载统计标签，不影响任何功能。
* `og:image` 等绝对地址仍指向 `kssicstudio.com` 域名——与域名决策一致，无需处理。
* 远期可选（非必须）：注册 `kevinlabs` 相关域名 + 免费邮箱转发（如 Cloudflare Email Routing）做别名，使对外联系地址与品牌一致。

### 2. 其他待办（2026-09-24 全部清零 ✅）
1. **页脚版本号同步**：✅ 已统一 bump 为 `1.3.0 · 2026-09-24`，覆盖全部 13 个带页脚的 HTML 页面与 `index.json`（`siteVersion` / `updatedAt`）。注意：PresenterDeck 两个页面此前已被单独 bump 为 `1.2.1 · 2026-09-23`，第一轮按 `1.2.0` 搜索漏检，第二轮改用日期模式 `· 2026-` 全量扫描后补齐——后续核对版本号请用日期/版本通配，勿只搜单一版本串。
2. **FAQ 结构化数据**：✅ 首页已新增 `FAQPage` JSON-LD（4 条问答，JSON 合法性已校验）。
3. **剪贴板兜底**：✅ 2026-09-24 已修复，见第三节第 2 条"已知边界"。
