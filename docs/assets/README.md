# 🌸 二次元风格UI模板使用指南 ✨

这是一个为MkDocs Material主题定制的二次元风格UI模板，包含了粉色调色板、动画效果和可爱的UI组件。

## 📁 文件结构

```
docs/
├── assets/
│   ├── stylesheets/
│   │   ├── anime-style.css          # 主要样式文件
│   │   └── anime-components.css     # 组件样式库
│   ├── javascripts/
│   │   └── anime-effects.js         # 动态效果脚本
│   └── images/
│       ├── logo.svg                 # 网站Logo
│       └── favicon.svg              # 网站图标
├── overrides/
│   └── main.html                    # 自定义HTML模板
└── anime-demo.md                    # UI组件演示页面
```

## 🎨 主要特性

### 视觉效果
- 🌸 粉色系二次元配色方案
- ✨ 樱花飘落背景动画
- 💫 鼠标跟随光晕效果
- 🎀 点击星星特效
- 🌈 渐变色彩和阴影效果

### UI组件
- 💖 可爱的按钮样式
- 🏷️ 彩色标签系统
- 📊 动画进度条
- 💌 多种通知框样式
- 🎯 工具提示组件
- 🔄 开关切换器
- 🏆 徽章系统

### 交互动画
- 悬停缩放效果
- 页面加载动画
- 波纹点击效果
- 打字机文字效果
- 浮动按钮动画

## 🚀 快速开始

### 1. 基础配置

在你的 `mkdocs.yml` 文件中添加以下配置：

```yaml
theme:
  name: material
  custom_dir: docs/overrides
  palette:
    - scheme: default
      primary: pink
      accent: pink
      toggle:
        icon: material/brightness-7
        name: 切换到深色模式
    - scheme: slate
      primary: pink
      accent: pink
      toggle:
        icon: material/brightness-4
        name: 切换到浅色模式
  font:
    text: Noto Sans SC
    code: Roboto Mono
  favicon: assets/images/favicon.svg
  logo: assets/images/logo.svg

extra_css:
  - assets/stylesheets/anime-style.css
  - assets/stylesheets/anime-components.css

extra_javascript:
  - assets/javascripts/anime-effects.js
```

### 2. 使用组件

在你的Markdown文件中使用以下HTML类名：

#### 按钮
```html
<button class="anime-btn">可爱按钮</button>
```

#### 卡片
```html
<div class="anime-card">
  <h4>卡片标题</h4>
  <p>卡片内容</p>
</div>
```

#### 标签
```html
<span class="anime-tag">标签文字</span>
```

#### 通知框
```html
<div class="anime-notification">
  普通通知内容
</div>

<div class="anime-notification success">
  成功通知内容
</div>

<div class="anime-notification warning">
  警告通知内容
</div>

<div class="anime-notification error">
  错误通知内容
</div>
```

#### 进度条
```html
<div class="anime-progress">
  <div class="anime-progress-bar" style="width: 75%;"></div>
</div>
```

#### 输入框
```html
<input type="text" class="anime-input" placeholder="输入内容...">
```

#### 开关
```html
<label class="anime-switch">
  <input type="checkbox">
  <span class="anime-slider"></span>
</label>
```

#### 工具提示
```html
<span class="anime-tooltip">悬停文字
  <span class="tooltip-text">提示内容</span>
</span>
```

#### 徽章
```html
<span class="anime-badge">99</span>
```

#### 分割线
```html
<hr class="anime-divider">
```

#### 加载动画
```html
<span class="anime-loading"></span>
```

## 🎯 自定义配置

### 颜色变量

你可以在 `anime-style.css` 中修改以下CSS变量来自定义颜色：

```css
:root {
  --anime-primary: #ff6b9d;        /* 主色调 */
  --anime-secondary: #c44569;      /* 辅助色 */
  --anime-accent: #f8b500;         /* 强调色 */
  --anime-bg-primary: #ffeef8;     /* 主背景色 */
  --anime-bg-secondary: #fff0f5;   /* 辅助背景色 */
  --anime-text-primary: #2c2c54;   /* 主文字色 */
  --anime-text-secondary: #40407a; /* 辅助文字色 */
  --anime-border: #ffb3d1;         /* 边框色 */
  --anime-shadow: rgba(255, 107, 157, 0.3); /* 阴影色 */
}
```

### 动画配置

在 `anime-effects.js` 中可以调整以下参数：

- 樱花生成频率：修改 `setInterval(createSakuraPetal, 300)` 中的数值
- 动画持续时间：修改各种动画的 `setTimeout` 时间
- 特效强度：调整各种动画的CSS属性值

### 季节性效果

脚本会根据当前月份自动切换不同的季节效果：
- 春季（3-5月）：樱花飘落
- 夏季（6-8月）：星空效果
- 秋季（9-11月）：枫叶飘落
- 冬季（12-2月）：雪花飘落

## 📱 响应式设计

模板已经针对不同设备进行了优化：

- **桌面端**：完整的动画效果和交互
- **平板端**：适中的组件大小和动画
- **手机端**：简化的动画和优化的布局

## 🌙 深色模式支持

模板支持Material主题的深色模式切换，会自动调整：
- 背景颜色
- 文字颜色
- 组件样式
- 边框和阴影

## 🔧 性能优化建议

1. **动画性能**：在低性能设备上可以通过CSS媒体查询禁用动画
2. **图片优化**：使用SVG格式的图标和logo以减少加载时间
3. **脚本优化**：可以根据需要选择性加载JavaScript效果

## 🐛 常见问题

### Q: 动画效果不显示？
A: 检查是否正确引入了CSS和JavaScript文件，确保路径正确。

### Q: 在移动设备上效果不佳？
A: 模板已经包含响应式设计，如果仍有问题，可以调整CSS媒体查询。

### Q: 如何禁用某些动画？
A: 在 `anime-effects.js` 中注释掉对应的函数调用。

### Q: 颜色如何自定义？
A: 修改 `anime-style.css` 中的CSS变量即可。

## 📄 许可证

本模板基于MIT许可证开源，可以自由使用和修改。

## 🤝 贡献

欢迎提交Issue和Pull Request来改进这个模板！

---

💖 希望这个二次元风格的UI模板能让你的文档网站更加可爱和有趣！