// 二次元风格动态效果脚本

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    // 添加樱花飘落效果
    createSakuraEffect();
    
    // 添加鼠标跟随效果
    createMouseFollower();
    
    // 添加页面加载动画
    addPageLoadAnimation();
    
    // 添加点击波纹效果
    addRippleEffect();
    
    // 添加标题打字机效果
    addTypewriterEffect();
});

// 樱花飘落效果
function createSakuraEffect() {
    const sakuraContainer = document.createElement('div');
    sakuraContainer.id = 'sakura-container';
    sakuraContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 1000;
        overflow: hidden;
    `;
    document.body.appendChild(sakuraContainer);
    
    // 创建樱花花瓣
    function createSakuraPetal() {
        const petal = document.createElement('div');
        petal.innerHTML = '🌸';
        petal.style.cssText = `
            position: absolute;
            font-size: ${Math.random() * 20 + 15}px;
            left: ${Math.random() * 100}%;
            top: -50px;
            animation: sakuraFall ${Math.random() * 3 + 2}s linear infinite;
            opacity: ${Math.random() * 0.6 + 0.4};
        `;
        
        sakuraContainer.appendChild(petal);
        
        // 移除花瓣
        setTimeout(() => {
            if (petal.parentNode) {
                petal.parentNode.removeChild(petal);
            }
        }, 5000);
    }
    
    // 定期创建樱花
    setInterval(createSakuraPetal, 300);
    
    // 添加樱花飘落动画CSS
    const style = document.createElement('style');
    style.textContent = `
        @keyframes sakuraFall {
            to {
                transform: translateY(100vh) rotate(360deg);
            }
        }
    `;
    document.head.appendChild(style);
}

// 鼠标跟随效果
function createMouseFollower() {
    const follower = document.createElement('div');
    follower.id = 'mouse-follower';
    follower.style.cssText = `
        position: fixed;
        width: 20px;
        height: 20px;
        background: radial-gradient(circle, #ff6b9d, transparent);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        transition: transform 0.1s ease;
        opacity: 0.7;
    `;
    document.body.appendChild(follower);
    
    document.addEventListener('mousemove', (e) => {
        follower.style.left = e.clientX - 10 + 'px';
        follower.style.top = e.clientY - 10 + 'px';
    });
    
    // 鼠标点击时的特效
    document.addEventListener('click', (e) => {
        const spark = document.createElement('div');
        spark.innerHTML = '✨';
        spark.style.cssText = `
            position: fixed;
            left: ${e.clientX}px;
            top: ${e.clientY}px;
            font-size: 20px;
            pointer-events: none;
            z-index: 9999;
            animation: sparkAnimation 1s ease-out forwards;
        `;
        document.body.appendChild(spark);
        
        setTimeout(() => {
            if (spark.parentNode) {
                spark.parentNode.removeChild(spark);
            }
        }, 1000);
    });
    
    // 添加火花动画CSS
    const style = document.createElement('style');
    style.textContent = `
        @keyframes sparkAnimation {
            0% {
                transform: scale(0) rotate(0deg);
                opacity: 1;
            }
            100% {
                transform: scale(2) rotate(180deg);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

// 页面加载动画
function addPageLoadAnimation() {
    const elements = document.querySelectorAll('.md-content > *');
    elements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'all 0.6s ease';
        
        setTimeout(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, index * 100 + 200);
    });
}

// 波纹点击效果
function addRippleEffect() {
    const buttons = document.querySelectorAll('a, button, .md-nav__link');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: rgba(255, 107, 157, 0.4);
                border-radius: 50%;
                transform: scale(0);
                animation: rippleAnimation 0.6s ease-out;
                pointer-events: none;
            `;
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => {
                if (ripple.parentNode) {
                    ripple.parentNode.removeChild(ripple);
                }
            }, 600);
        });
    });
    
    // 添加波纹动画CSS
    const style = document.createElement('style');
    style.textContent = `
        @keyframes rippleAnimation {
            to {
                transform: scale(2);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

// 标题打字机效果
function addTypewriterEffect() {
    const mainTitle = document.querySelector('h1');
    if (mainTitle && mainTitle.textContent.includes('欢迎来到')) {
        const text = mainTitle.textContent;
        mainTitle.textContent = '';
        mainTitle.style.borderRight = '2px solid #ff6b9d';
        
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                mainTitle.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            } else {
                // 移除光标
                setTimeout(() => {
                    mainTitle.style.borderRight = 'none';
                }, 1000);
            }
        };
        
        setTimeout(typeWriter, 500);
    }
}

// 添加悬浮按钮
function addFloatingButton() {
    const floatingBtn = document.createElement('div');
    floatingBtn.innerHTML = '🎀';
    floatingBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 60px;
        height: 60px;
        background: linear-gradient(135deg, #ff6b9d 0%, #c44569 100%);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 24px;
        cursor: pointer;
        box-shadow: 0 4px 20px rgba(255, 107, 157, 0.4);
        z-index: 1000;
        transition: all 0.3s ease;
        animation: float 3s ease-in-out infinite;
    `;
    
    floatingBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
    floatingBtn.addEventListener('mouseenter', () => {
        floatingBtn.style.transform = 'scale(1.1)';
    });
    
    floatingBtn.addEventListener('mouseleave', () => {
        floatingBtn.style.transform = 'scale(1)';
    });
    
    document.body.appendChild(floatingBtn);
}

// 初始化悬浮按钮
addFloatingButton();

// 添加节日特效（可选）
function addSeasonalEffects() {
    const now = new Date();
    const month = now.getMonth() + 1;
    
    // 春季樱花效果（3-5月）
    if (month >= 3 && month <= 5) {
        document.body.style.background = 'linear-gradient(135deg, #ffeef8 0%, #fff0f5 100%)';
    }
    // 夏季星空效果（6-8月）
    else if (month >= 6 && month <= 8) {
        createStarEffect();
    }
    // 秋季枫叶效果（9-11月）
    else if (month >= 9 && month <= 11) {
        createMapleLeafEffect();
    }
    // 冬季雪花效果（12-2月）
    else {
        createSnowEffect();
    }
}

// 星空效果
function createStarEffect() {
    // 实现星空效果的代码
    console.log('夏季星空效果激活');
}

// 枫叶效果
function createMapleLeafEffect() {
    // 实现枫叶效果的代码
    console.log('秋季枫叶效果激活');
}

// 雪花效果
function createSnowEffect() {
    // 实现雪花效果的代码
    console.log('冬季雪花效果激活');
}

// 启用季节性效果
addSeasonalEffects();