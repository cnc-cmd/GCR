// 主题切换器
class ThemeSwitcher {
  constructor() {
    this.themes = {
      anime: '二次元',
      camping: '摇曳露营',
      cyberpunk: '赛博朋克'
    };
    this.currentTheme = localStorage.getItem('selected-theme') || 'anime';
    this.init();
  }

  init() {
    this.createSwitcher();
    this.applyTheme(this.currentTheme);
    this.bindEvents();
  }

  createSwitcher() {
    // 创建主题切换按钮容器
    const switcher = document.createElement('div');
    switcher.className = 'theme-switcher';
    switcher.innerHTML = `
      <div class="theme-switcher-button">
        <span class="theme-icon">🎨</span>
        <span class="theme-text">${this.themes[this.currentTheme]}</span>
        <span class="theme-arrow">▼</span>
      </div>
      <div class="theme-dropdown">
        ${Object.entries(this.themes).map(([key, name]) => 
          `<div class="theme-option" data-theme="${key}">
            <span class="theme-preview ${key}"></span>
            <span>${name}</span>
          </div>`
        ).join('')}
      </div>
    `;

    // 插入到页面头部
    const header = document.querySelector('.md-header');
    if (header) {
      header.appendChild(switcher);
    }
  }

  bindEvents() {
    const button = document.querySelector('.theme-switcher-button');
    const dropdown = document.querySelector('.theme-dropdown');
    const options = document.querySelectorAll('.theme-option');

    // 切换下拉菜单
    button?.addEventListener('click', () => {
      dropdown?.classList.toggle('show');
    });

    // 点击外部关闭下拉菜单
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.theme-switcher')) {
        dropdown?.classList.remove('show');
      }
    });

    // 主题选择
    options.forEach(option => {
      option.addEventListener('click', () => {
        const theme = option.dataset.theme;
        this.switchTheme(theme);
        dropdown?.classList.remove('show');
      });
    });
  }

  switchTheme(theme) {
    if (this.currentTheme === theme) return;
    
    // 移除当前主题
    document.body.classList.remove(`theme-${this.currentTheme}`);
    
    // 应用新主题
    this.currentTheme = theme;
    this.applyTheme(theme);
    
    // 保存到本地存储
    localStorage.setItem('selected-theme', theme);
    
    // 更新按钮文本
    const themeText = document.querySelector('.theme-text');
    if (themeText) {
      themeText.textContent = this.themes[theme];
    }

    // 触发主题切换动画
    this.playTransition();
  }

  applyTheme(theme) {
    document.body.classList.add(`theme-${theme}`);
    
    // 动态加载主题CSS
    this.loadThemeCSS(theme);
  }

  loadThemeCSS(theme) {
    // 移除之前的主题CSS
    const existingThemeCSS = document.querySelector('link[data-theme-css]');
    if (existingThemeCSS) {
      existingThemeCSS.remove();
    }

    // 加载新主题CSS
    if (theme !== 'anime') {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = `assets/stylesheets/theme-${theme}.css`;
      link.setAttribute('data-theme-css', theme);
      document.head.appendChild(link);
    }
  }

  playTransition() {
    // 创建过渡动画
    const overlay = document.createElement('div');
    overlay.className = 'theme-transition-overlay';
    document.body.appendChild(overlay);

    // 动画效果
    overlay.style.opacity = '1';
    setTimeout(() => {
      overlay.style.opacity = '0';
      setTimeout(() => {
        overlay.remove();
      }, 300);
    }, 150);
  }
}

// 页面加载完成后初始化主题切换器
document.addEventListener('DOMContentLoaded', () => {
  new ThemeSwitcher();
});

// 导出供其他脚本使用
window.ThemeSwitcher = ThemeSwitcher;