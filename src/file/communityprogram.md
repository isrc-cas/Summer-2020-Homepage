# 项目模板

**说明：**

1. 项目设置说明
   - 项目难度分为高、中、低三档，对应税前奖金分别为高（12000 元）、中（9000 元）、低（6000 元）。
   - 难度分级由社区导师根据项目任务自行决定。难度参考标准：  
     - 高：奖金 12000
       - 目标：能力相当于编程能力很强的计算机专业的研究生
       - 典型高难度是优化类的工作，提高时间、降低内存占用、提供性能等。
     - 中：奖金 9000
       - 目标：能力相当于研一、研二计算机专业的学生
     - 低：奖金 6000
       - 目标：能力相当于大三、大四计算机专业的学生
     - 注：以上奖金额度为税前金额。
2. 项目类别说明
   “暑期2020” 活动优先支持开发类项目，同时兼顾各类有利于社区发展的项目，例如，技术文档汉化等，非开发类项目预估总占比不超过 20%
3. 项目奖励说明
   项目奖金分 2 笔发放：中期达标 50%，最终结果分通过或不通过，由主办方和社区导师根据实际项目完成程度和完成质量评判给出。
4. 项目参与人限制说明  
   - 每个项目最终确定唯一一位学生作为中选者参与开发
   - 建议每位社区导师负责的项目任务不超过 3 个
5. 项目成果相关知识产权说明  
   学生在中选后相关的开发工作，需满足提供该项目社区的规定，具体要求由该社区负责在社区活动页面说明，例如要求学生签订 CLA、申明对应的成果的开源协议等
6. 项目信息说明  
   社区除需要收集汇总项目清单及详细信息提交给“暑期2020”工作组外，还需要提供本社区的介绍信息（见社区信息），用于活动的统一宣传。

## 社区介绍示例

1. 社区名称：openEuler 社区
2. 社区官方网址：https://www.openeuler.org/
3. 社区Logo文件：Logo 文件在线地址或附件
4. 社区简短描述：openEuler 是一个开源、免费的 Linux 发行版平台
5. 社区成段描述：openEuler 是一个开源、免费的 Linux 发行版平台，将通过开放的社区形式与全球的开发者共同构建一个开放、多元和架构包容的软件生态体系。同时，openEuler 也是一个创新的平台，鼓励任何人在该平台上提出新想法、开拓新思路、实践新方案
6. 社区邮件列表（用于帮助学生了解社区，一般为开发者公共邮箱）：community@openEuler.org  
7. 社区官方公共联系邮箱：contact@openeuler.org
8. 社区 “暑期2020” 项目列表页面链接：
9. 技术标签：Linux、Git、GCC、RPM
10. 专注领域：操作系统、内核、包管理

## 项目任务示例

**说明**：**为便于学生理解，建议项目详情至少要有中文描述**

1. 项目标题：精简版的树莓派镜像
2. 项目描述：树莓派（英语：Raspberry Pi）是基于 Linux 的单片机电脑，目的是以低价硬件及自由软件促进学校的基本计算机科学教育。树莓派需要刷写文件系统镜像来实现启动，镜像文件常常都较大，不利于快速分发和安装，本项目目标是实现一个小于 NNN MB 的树莓派镜像，并能够通过 DNF 安装软件源中更多的软件进来。
3. 项目难度：高
4. 项目社区导师：姓名 或 ID
5. 导师联系方式：电子邮箱
6. 合作导师联系方式（选填）：ID或姓名，电子邮箱
7. 项目产出要求：
   - 小于 NNN MB 的树莓派镜像，该镜像可刷写在树莓派 Pi 4 上
   - 镜像中版本号信息
   - 镜像支持 DNF 安装软件源中的软件
8. 项目技术要求：
   - 基本的 Linux 命令
   - DNF/RPM 包管理
   - 具备一种脚本语言，如 Python、Bash script 等
   - 压缩算法
9. 相关的开源软件仓库列表：
   - https://gitee.com/openeuler/raspberrypi
   - https://gitee.com/openeuler/raspberrypi-kernel