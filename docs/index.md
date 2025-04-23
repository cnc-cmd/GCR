# 欢迎来到 CNC-CMD 知识共享平台

本平台采用MkDocs+GitHub Pages搭建，于2024年12月26日建立，欢迎大家加入。
旨在分享平时学习过程中遇到的好的技术文章、视频、项目等不限计算机相关的知识，帮助大家一起共同学习和进步。  
**该项目是帮助大家学习和入门的，虽然很基础，但是万一有些新人就恰恰需要呢？**  
本项目孵化者：项目贡献者、[云锻开源社区](https://www.sftech.asia/)  
注：如有侵权，请联系我们进行删除，谢谢。

## 快速开始
```
git clone https://github.com/cnc-cmd/GCR.git
```
1. 先git clone 本仓库
2. fork本仓库添加资源和进行修改  
3. 创建以自己名字的分支
4. 提交 pull request
5. 等待合并
6. 恭喜你，成为贡献者

同时也请学习如下工具:  
1. [git](https://git-scm.com/)  
2. [github](https://github.com/)  
3. [markdown](https://zh.wikipedia.org/wiki/Markdown)  
4. [mkdocs](https://www.mkdocs.org/)  
5. [mkdocs-material](https://squidfunk.github.io/mkdocs-material/)  
6. [mkdocs-git-revision-date-localized-plugin](https://github.com/vaxsi/mkdocs-git-revision-date-localized-plugin)  
7. [mkdocs-git-authors-plugin](https://github.com/vaxsi/mkdocs-git-authors-plugin)

git语义化提交信息规范:  
1. feat: 新功能，用于标记一次提交是新增了某个功能特性。每当开发团队向项目里添加全新的功能模块、拓展既有功能的边界、引入创新性的交互逻辑等，都可以在提交信息开头加上feat  
2. fix: 修复bug，意味着此次提交是为了修复项目现存的某个问题，这里的问题涵盖面很广，包括代码逻辑错误、界面显示异常、性能瓶颈以及安全漏洞等  
3. docs: 文档修改，专门针对项目文档的更新，不管是修改 README 文件、更新 API 手册，还是完善项目内的代码注释，都能用这个前缀  
4. style: 样式修改，当修改了 CSS、LESS、SCSS 这类样式表文件，或是对 HTML 中的内联样式做调整，都适合用 style 前缀，精准表明此次提交只涉及视觉样式上的改变，没有影响到业务逻辑与功能实现  
5. refactor: 重构代码，代表代码重构，即对现有代码的结构、设计模式进行优化，代码功能并未改变，只是提升了代码质量、可读性、可维护性。如果把一段冗长、耦合度高的函数拆分成几个职责分明的小函数，就可以写成git commit -m "refactor: decompose large user registration function" 。团队成员看到这个提交信息，便清楚知道代码架构有优化动作，但功能依旧照常运作，审查代码时重点关注代码结构即可  
6. perf: 性能优化，发现某个查询数据库的操作耗时太久，经过优化算法后显著提升了查询速度，这时提交信息可为git commit -m "perf: speed up database query with index optimization"。开发与运维人员后续排查性能瓶颈时，这类提交记录就是关键线索  
7. test: 测试，既涵盖新增测试用例，也包括更新已有测试方法。比如，git commit -m "test: add unit tests for new payment gateway" 表明给新的支付网关功能添加了单元测试；git commit -m "test: update integration tests after API change" 则说明 API 变更后相应更新了集成测试。  
8. build: 构建，对项目的构建脚本、构建工具配置文件做出改动时使用。例如从 Webpack 4 升级到 Webpack 5，提交信息写为git commit -m "build: upgrade webpack from version 4 to 5"，让负责部署与持续集成的同事迅速知晓构建环节有调整。  
9. ci: 持续集成，修改了与持续集成流程相关的文件、配置，像 .gitlab-ci.yml 或 .travis.yml 这些 CI 平台对应的配置文件，用git commit -m "ci: add new step to GitHub Actions pipeline" 告知团队此次提交和 CI 流程的优化或扩展有关。  
10. chore: 日常维护，更换项目中老旧的第三方库的版本，清理项目目录下冗余文件这类琐事，就可以标记为chore: clean up unused project files"，意味着对核心业务没有实质冲击，更多是让项目环境更健康  
11. revert: 回滚,当发现上一次的提交引入了新问题，需要撤销该提交时，用revert。例如，git commit -m "revert: undo last feat commit due to breaking bug" ，简单明了表示撤销了上次新增功能的提交，原因是产生了严重的 bug

MkDocs基础命令:  
1. 创建项目: ```mkdocs new [项目名]```  
2. 启动服务: ```mkdocs serve```  
3. 构建文档: ```mkdocs build```  
4. 部署到GitHub Pages: ```mkdocs gh-deploy```  
5. 查看帮助信息: ```mkdocs --help```

### 贡献者
(注：排名不分先后，按最初贡献时间来定，后续贡献者将会在后面追加)  

| 序号 | 贡献者姓名 | 头像 |
| ---- | ---- | ---- |
| 1 | moonsky33 | <a href="https://github.com/moonsky33"><img src="https://avatars.githubusercontent.com/u/152702773?v=4" alt="moonsky33" width="100px" height="100px"></a> |
| 2 | lim1t0722 | <a href="https://github.com/lim1t0722"><img src="https://avatars.githubusercontent.com/u/110522531?v=4" alt="lim1t0722" width="100px" height="100px"></a> |
| 3 | teriyakisushi | <a href="https://github.com/teriyakisushi"><img src="https://avatars.githubusercontent.com/u/83644729?v=4" alt="teriyakisushi" width="100px" height="100px"></a> |
| 4 | BinbimTech | <a href="https://github.com/BB0813"><img src="https://avatars.githubusercontent.com/u/151659564?s=400&u=cf5787878352049c66efdb596bc0faf64ca5cfba&v=4" alt="BinbimTech" width="100px" height="100px"></a> |