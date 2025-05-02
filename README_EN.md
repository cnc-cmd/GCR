# GCR: CNC-CMD Knowledge Sharing Platform
Good Computer Resources  
CNC-CMD Knowledge Sharing Platform  

<p align="center">
[ <b>En</b> |
<a href="docs/README.md">中</a> ]
</p>
**This project aims to help everyone learn and get started. Although it's basic, what if some newcomers need exactly this?**  
Project incubators: cnc-cmd, [YunForge Open Source Team](https://www.yunforge.xyz/)
Anyone can share resources they consider valuable (articles, videos, etc.) in this repository, including but not limited to computer-related content.  
Articles and videos are shared via links. Since GitHub repositories have only 1GB of free space, please save articles directly and share videos through links or cloud storage links.  
Note: All resources are collected from the internet. If there's any copyright infringement, please contact us for removal. We collect these resources to facilitate learning for members of our community, clubs, studios, and students interested in computer science. Neither the contributors nor we bear any legal responsibility for any legal consequences that may arise!
If this project helps you, we welcome you to join us and share the latest articles, videos, projects, etc. that you find valuable, along with your insights and related notes.  
As a token of appreciation, those who contribute the most each year will receive a small gift. Though not expensive, it comes from the heart.


# How to Participate
```
git clone https://github.com/cnc-cmd/GCR.git
```
1. First, git clone this repository
2. Fork this repository, add resources and make modifications
3. Submit contributions and pull requests
4. Wait for merging
5. Congratulations, you're now a contributor  

Name your submission branch after yourself. After submission, wait for merging; your branch won't be deleted. Therefore, you need to pull the latest changes every time after branch merging and updating.

Please also learn the following tools:
1. [git](https://git-scm.com/)  
2. [github](https://github.com/)  
3. [markdown](https://zh.wikipedia.org/wiki/Markdown)  
4. [mkdocs](https://www.mkdocs.org/)  
5. [mkdocs-material](https://squidfunk.github.io/mkdocs-material/)  
6. [mkdocs-git-revision-date-localized-plugin](https://github.com/vaxsi/mkdocs-git-revision-date-localized-plugin)  
7. [mkdocs-git-authors-plugin](https://github.com/vaxsi/mkdocs-git-authors-plugin)

Git semantic commit message conventions:  
1. feat: New feature, used to mark a commit that adds a new functionality. Whenever the development team adds a completely new functional module, extends the boundaries of existing functionality, or introduces innovative interaction logic, they can prefix the commit message with feat  
2. fix: Bug fix, meaning this commit is to fix an existing problem in the project. The scope of problems here is broad, including code logic errors, interface display abnormalities, performance bottlenecks, and security vulnerabilities  
3. docs: Documentation modification, specifically for updating project documentation, whether modifying README files, updating API manuals, or improving code comments within the project, all can use this prefix  
4. style: Style modification, when modifying CSS, LESS, SCSS and other style sheet files, or adjusting inline styles in HTML, it's appropriate to use the style prefix, precisely indicating that this commit only involves changes in visual style, without affecting business logic and functionality implementation
5. refactor: Code refactoring, representing code restructuring, that is, optimizing the structure and design patterns of existing code. The code functionality remains unchanged, only improving code quality, readability, and maintainability. If a lengthy, highly coupled function is split into several small functions with clear responsibilities, you can write git commit -m "refactor: decompose large user registration function". Team members seeing this commit message will clearly know that there's an optimization action in the code architecture, but the functionality still operates as usual, and when reviewing the code, they can focus on the code structure  
6. perf: Performance optimization, discovering that a database query operation takes too long, and after algorithm optimization, significantly improving query speed. At this time, the commit message can be git commit -m "perf: speed up database query with index optimization". When developers and operations personnel later investigate performance bottlenecks, such commit records are key clues  
7. test: Testing, covering both adding new test cases and updating existing test methods. For example, git commit -m "test: add unit tests for new payment gateway" indicates adding unit tests for a new payment gateway feature; git commit -m "test: update integration tests after API change" indicates updating integration tests after an API change  
8. build: Build, used when making changes to project build scripts or build tool configuration files. For example, upgrading from Webpack 4 to Webpack 5, the commit message is written as git commit -m "build: upgrade webpack from version 4 to 5", letting colleagues responsible for deployment and continuous integration quickly know that there are adjustments in the build process  
9. ci: Continuous integration, modifying files and configurations related to the continuous integration process, such as .gitlab-ci.yml or .travis.yml configuration files for CI platforms, using git commit -m "ci: add new step to GitHub Actions pipeline" to inform the team that this commit is related to the optimization or extension of the CI process
10. chore: Routine maintenance, changing versions of old third-party libraries in the project, cleaning up redundant files in the project directory, and other such chores, can be marked as chore: clean up unused project files", meaning there's no substantial impact on the core business, but rather making the project environment healthier
11. revert: Rollback, when discovering that the previous commit introduced new problems and needing to cancel that commit, use revert. For example, git commit -m "revert: undo last feat commit due to breaking bug", simply and clearly indicating the cancellation of the last feature commit, because it produced a serious bug


MkDocs basic commands:  
1. Create project: ```mkdocs new [project name]```  
2. Start service: ```mkdocs serve```  
3. Build documentation: ```mkdocs build```  
4. Deploy to GitHub Pages: ```mkdocs gh-deploy```  
5. View help information: ```mkdocs --help```

# Contributors
(Note: Ranking is not in any particular order, determined by initial contribution time, subsequent contributors will be appended)  
| No. | Contributor Name | Avatar |
| ---- | ---- | ---- |
| 1 | moonsky33 | <a href="https://github.com/moonsky33"><img src="https://avatars.githubusercontent.com/u/152702773?v=4" alt="moonsky33" width="100px" height="100px"></a> |
| 2 | lim1t0722 | <a href="https://github.com/lim1t0722"><img src="https://avatars.githubusercontent.com/u/110522531?v=4" alt="lim1t0722" width="100px" height="100px"></a> |
| 3 | teriyakisushi | <a href="https://github.com/teriyakisushi"><img src="https://avatars.githubusercontent.com/u/83644729?v=4" alt="teriyakisushi" width="100px" height="100px"></a> |
| 4 | BinbimTech | <a href="https://github.com/BB0813"><img src="https://avatars.githubusercontent.com/u/151659564?s=400&u=cf5787878352049c66efdb596bc0faf64ca5cfba&v=4" alt="BinbimTech" width="100px" height="100px"></a> |