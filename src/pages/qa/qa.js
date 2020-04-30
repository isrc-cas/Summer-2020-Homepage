import cp from './../../file/communityprogram.md'
const qa = [
    {
        q:"开源软件供应链点亮计划是什么？",
        a:[
            {
                con:`“开源软件供应链点亮计划” 是由中国科学院软件研究所发起并长期支持一项活动，旨在解决基础开源软件面临
                的许可、质量、维护和技术支持等问题，进而影响整个软件产业的供应链。鼓励更多的开发者参与这些开源软件，促进开源软件在国内的发展，
                增加开源项目在国内的活跃度，在开源领域与世界接轨。具体工作包括：`,
                conlist:[
                    '1. 培养吸引优秀人才，与国内研究机构、高校、开源社区进行合作，鼓励研究人员、开源爱好者、在校师生参与开源软件的开发与维护。',
                    '2. 积极促进国内优秀开源软件社区建设，推动国内软件人才积极参与开源软件社区中，逐步提高开源软件维护的可靠性和持续性。',
                    '3. 加强对软件供应链涉及的各个流程和关键环节的监管，加强软件安全审核和软件安全性检测，有效防范软件供应链安全威胁。',
                    '4. 剔除开源软件中存在的知识产权不可控风险的部分，寻找相应替代品或自主开发，建立可控的供应链。',
                    '5. 制定符合国内政策、国际惯例的开源软件供应链的标准、规范。'
                ]
            }
        ]
    },
    {
        q:'“开源软件供应链点亮计划-暑期2020” 是什么？',
        a:[
            {
                con:`“开源软件供应链点亮计划-暑期2020”（以下简称 暑期2020）是由中科院软件所与 openEuler 社区共同举办的一项
                面向高校学生的暑期活动，旨在鼓励在校学生积极参与开源软件的开发维护，促进国内优秀开源软件社区的蓬勃发展。我
                们将联合各大开源社区，针对重要开源软件的开发与维护提供 mini 项目，并向全国高校学生开放报名。学生可自主选择
                感兴趣的项目进行申请，并在中选后获得该软件资深维护者（社区导师）亲自指导的机会。根据项目的难易程度和完成情况
                ，参与者还可获取“开源软件供应链点亮计划-暑期2020”活动奖杯和奖金。`,
                
            }
        ]
    },
    {
        q:'活动的主要参与方有哪些',
        a:[
            {
                con:`活动组织方：中国科学院软件研究所、openEuler 社区主办，中国科学院软件研究所中国科学院软件研究所南京软件
                技术研究院，华为技术有限公司、中科软科技股份有限公司、深圳华锐金融技术股份有限公司等公司协办，此外，活动组组
                委会还联合国内公司、科研院所和各大高校共同推广此次活动。`,        
            },
            {
                con:`活动参与方主要角色为学生、社区和社区导师。`,
                conlist:[
                    `学生：学生自由选择项目，与社区导师沟通实现方案并撰写项目计划书。被选中的学生将在社区导师指导下，按计划
                    完成开发工作，并将成果贡献给社区。社区评估学生的完成度，主办方根据评估结果发放资助金额给学生。`,
                    ` 社区：社区提供项目列表和描述，并安排项目对应的导师，导师与申请者沟通方案、并从申请者中选中一位承接项目
                    。在为期三个月的开发周期中，导师指导学生进行对应项目的开发工作。`,
                    `导师：社区针对每一个项目指定一个社区导师，与学生一起制定合适的开发计划和方案，指导学生按计划完成开发。`
                ]

            }
        ]
    },
    {
        q:'哪些社区可以报名参与？',
        a:[
            {
                con:`本次活动是开放的，只要是开源社区中的软件仓库是以 OSI 组织认证的开源协议开放的，都是本活动支持的范围。`,           
            },
            {
                con:`对于专注于推广开源的开源组织，欢迎与我们联系沟通如何推广本次开源活动以及后续的合作。`,           
            }
        ]
    },
    {
        q:'社区如何报名？',
        a:[
            {
                con:`请将以下信息发送到邮箱 <a href="mailto:summer2020@iscas.ac.cn">summer2020@iscas.ac.cn</a>，主办方会安排人专门与社区对接，讨论后续具体合作事宜。`,
                conlist:[
                    `社区或开源项目名称：`,
                    `联系人姓名：`,
                    `联系电话：`
                ]
                
            }
        ]
    },
    {
        q:'支持社区什么类型的项目？',
        a:[
            {
                con:`暑期2020” 活动优先支持开发类项目，同时兼顾各类有利于社区发展的项目，例如，技术文档汉化等，支持的非开发类项目总占比不会超过 20%。`,
                
            }
        ]
    },
    {
        q:'项目的奖金额度是多少，如何确定？',
        a:[
            {
                con:`项目难度分为高、中、低三档，对应税前奖金分别为高（12000 元）、中（9000 元）、低（6000 元）。`,           
            },
            {
                con:`难度分级由社区根据项目任务自行决定。`,          
            },
            {
                con:`主办方会资助最终有学生申请的项目，在预算范围内主办方会尽可能的支持更多的项目，预期是 200+ 的项目。`,          
            },
            {
                con:`我们会根据社区反馈的情况，提供少量更大奖金的项目。`          
            },
        ]
    },
    {
        q:'社区报名参加活动后需要做哪些事情？',
        a:[
            {
                con:`1. 社区应在社区官网（或项目对外公开仓库） 上线 “暑期2020” 页面或活动说明（html、wiki 等方式不限），内容包括本社区/项目组提供的所有项目任务详情清单，以及配套的参考材料；在活动官网（<a href="https://isrc.iscas.ac.cn/summer2020">isrc.iscas.ac.cn/summer2020</a>）会上线社区介绍
                信息，并提供链接跳转到该社区的活动说明页面；所有项目列表会同步在活动官网上线，但以社区页面上的项目详细信息为准。`,
            },
            {
                con: `社区应按(附：<a download="社区项目模板.md" href=${cp}>社区项目模板</a>)提供社区介绍信息、预估开发工作量是 3 个月的项目任务信息及其对应的参考材料。`,
            },
            {
                con:`3. 社区针对每个项目指定一名社区导师，一般应是该项目相关的开发者（maintainer、commitor、contributor），负责：`,
                conList:[
                    `项目难度分为高、中、低三档，对应税前奖金分别为高（12000 元）、中（9000 元）、低（6000 元）。`,
                    `难度分级由社区根据项目任务自行决定。`,
                    `主办方会资助最终有学生申请的项目，在预算范围内主办方会尽可能的支持更多的项目，预期是 200+ 的项目。`,
                    `我们会根据社区反馈的情况，提供少量更大奖金的项目。`
                ],
            },
        ]
    },
    {
        q:'如何成为合作单位？',
        a:[
            {
                con:`只要是支持本次开源活动，会帮助推广宣传此次活动，无论是公司、科研院所、高校或其他组织，
                我们都欢迎成为我们的合作伙伴，一起推进此次活动。也希望能建立长期的合作关系来促进国内开源生态的发展。`,
            },
        ]
    },
    {
        q:'合作单位如何报名？',
        a:[
            {
                con:`请将以下信息发送到邮箱 <a href="mailto:summer2020@iscas.ac.cn">summer2020@iscas.ac.cn</a>，主办方会安排人专门与社区对接，讨论后续具体合作事宜。`,
                conList:[
                    `合作单位名称：`,
                    `联系人姓名：`,
                    `联系电话：`,
                ],
            },
        ]
    },
    {
        q:'合作单位需要做什么？',
        a:[
            {
                con:`1. 在合作单位的网站、公众号、朋友圈、微信群 基于活动官方文案(网站: <a href="https://isrc.iscas.ac.cn/summer2020">isrc.iscas.ac.cn/summer2020</a>，
                    公众号：ISCAS_ISRC)宣传推广本活动，鼓励并吸引更多人参与开源活动中。`,
            },
            {
                con:`2. 其他推广本次活动的事项。`,
            },
        ]
    },
    {
        q:'面向哪些学生？',
        a:[
            {
                con:`只要是国内满 18 周岁在校学生，无论是什么专业，都欢迎加入。`,
            },
        ]
    },
    {
        q:'学生如何报名？',
        a:[
            {
                con:`2020 年 5 月 15 日活动正式开始，社区的项目列表也会公布。学生针对感兴趣的社区提供的项目，可以开始与指定的社区导师联系沟通项目细节和方案，完善项目计划和方案。`,
            },
            {
                con:`学生的报名申请是 2020 年 6 月 1 日开始，6 月 15 日截止。6 月 15 日之前都可以报名。`,
            },
            {
                con:`具体报名方法会在 5 月 15 日公布。`,
            },
        ]
    },
    {
        q:'是否支持团体报名？',
        a:[
            {
                con:`除了少量更大奖金的项目支持团体报名外，一般项目都只支持一个学生报名。`,
            }
        ]
    },

]

export default qa