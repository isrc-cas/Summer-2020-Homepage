/**
 * Copyright (c) 2020 Intelligent Software Research Center of ISCAS
 * Summer 2020 Homepage is licensed under Mulan PSL v2.
 * You can use this software according to the terms and conditions of the Mulan PSL v2.
 * You may obtain a copy of Mulan PSL v2 at:
 *          http://license.coscl.org.cn/MulanPSL2
 * THIS SOFTWARE IS PROVIDED ON AN "AS IS" BASIS, WITHOUT WARRANTIES OF ANY KIND,
 * EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO NON-INFRINGEMENT,
 * MERCHANTABILITY OR FIT FOR A PARTICULAR PURPOSE.
 * See the Mulan PSL v2 for more details.
 */

const data = {
    bannerlist:[
        {
            img:'1.png',
            title:'申请',
            stitle:'apply',
            text:'学生自由选择项目，撰写项目申请书提出申请。'
        },
        {
            img:'2.png',
            title:'项目',
            stitle:'program',
            text:'学生在社区导师的指导下开展项目，贡献代码至社区。'
        },
        {
            img:'3.png',
            title:'奖励',
            stitle:'reward',
            text:'根据学生参与度、代码贡献等给与奖金、证书。'
        },
    ],
    contents:[
        {
            title:'学生',
            stitle:'developer',
            text:`学生自由选择项目，与社区导师沟通实现方案并撰写项目计划书。被选中的学生将在社区导师指导下，按计划完成开发工作，并将成果贡献给社区。社区评估学生的完成度，主办方根据评估结果给学生发放奖金。`
        },
        {
            title:'社区',
            stitle:'orgnization',
            text:`社区提供项目列表和描述，并安排项目对应的导师，导师与申请者沟通方案、并从申请者中选中一位承接项目。在为期三个月的开发周期中，导师指导学生进行对应项目的开发工作。`
        },
        {
            title:'导师',
            stitle:'mentor',
            text:`社区针对每一个项目指定一个社区导师，与学生一起制定合适的开发计划和方案，指导学生按计划完成开发。`
        }

    ],



    time:[
        {
            time1:'4_25',
            time:'4_25',
            time2:'5_14',
            text:'组委会公开方案和里程碑计划，开放社区报名参加。'
        },
        {
            time1:'5_15',
            time:'5_15',
            time2:'5_28',
            text:'组委会确定合作社区列表，社区逐步公布项目，学生开始与社区导师沟通项目需求与方案。'
        },
        {
            time1:'5_29',
            time:'5_29',
            time2:'',
            text:'社区完成所有项目列表，不再新增项目。'
        },
        {
            time1:'6_1',
            time:'6_1',
            time2:'6_20',
            text:'学生开始提交报名申请，申请截止时间 6 月 20 日。'
        },
        {
            time1:'6_21',
            time:'6_21',
            time2:'6_29',
            text:'组委会汇总报名申请，社区根据提交的方案选择承担项目的学生。'
        },
        {
            time1:'6_30',
            time:'6_30',
            time2:'',
            text:'组委会公布资助的项目和承担的学生名单。'
        },
        {
            time1:'7_1',
            time:'7_1',
            time2:'',
            text:'学生开始三个月开发期，同步追踪开发进度及状态。'
        },
        {
            time1:'8_15',
            time:'8_15',
            time2:'',
            text:'学生提交中期报告的截止日期，根据组委会与社区的中期评审结果决定是否继续资助学生承担的项目。'
        },
        {
            time1:'9_22',
            time:'9_22',
            time2:'',
            text:'峰会议题开始征集。'
        },
        {
            time1:'9_30',
            time:'9_30',
            time2:'',
            text:'学生提交最终结项报告的截止日期。'
        },
        {
            time1:'10_1',
            time:'10_1',
            time2:'',
            text:'组委会与社区开始针对每个项目进行评审。'
        },
        {
            time1:'10_23',
            time:'10_23',
            time2:'',
            text:'议题征集截止。'
        },
        {
            time1:'10_30',
            time:'10_30',
            time2:'',
            text:'议题发布。'
        },
        {
            time1:'10月底',
            time:'10_31',
            time2:'',
            text:'组委会公告项目评审结果，并发放奖金给通过的学生。活动指导委员会针对项目进行评价，评选出优秀项目。'
        },
        {
            time1:'11_14',
            time:'11_14',
            time2:'',
            text:'开源软件供应链2020峰会开幕。'
        }
    ],
    committee:[
        {"university":"中国科学院软件研究所","name":"武延军"},
        {"university":"华为鲲鹏计算","name":"江大勇"},
        {"university":"中国科学院计算技术研究所","name":"包云岗"},
        {"university":"西安邮电大学","name":"陈莉君"},
        {"university":"清华大学","name":"陈渝"},
        {"university":"清华大学","name":"崔勇"},
        {"university":"北京航空航天大学","name":"胡春明"},
        {"university":"华中科技大学","name":"华宇"},
        {"university":"厦门大学","name":"纪荣嵘"},
        {"university":"浙江大学","name":"纪守领"},
        {"university":"北京信息科技大学","name":"李春强"},
        {"university":"北京工业大学","name":"李洪义"},
        {"university":"广州大学","name":"李进"},
        {"university":"西安电子科技大学","name":"李青山"},
        {"university":"南开大学","name":"李涛"},
        {"university":"中国人民大学","name":"梁彬"},
        {"university":"中国科学院大学","name":"罗铁坚"},
        {"university":"同济大学","name":"裴喜龙"},
        {"university":"西安交通大学","name":"唐亚哲"},
        {"university":"哈尔滨工业大学","name":"王宏志"},
        {"university":"华东师范大学","name":"王伟"},
        {"university":"中央财经大学","name":"王秀利"},
        {"university":"大连理工","name":"吴国伟"},
        {"university":"上海交通大学","name":"夏虞斌"},
        {"university":"武汉理工","name":"向剑文"},
        {"university":"北京邮电大学","name":"徐国爱"},
        {"university":"天津大学","name":"徐江涛"},
        {"university":"北京林业大学","name":"许福"},
        {"university":"复旦大学","name":"杨珉"},
        {"university":"中国科学技术大学","name":"杨盘隆"},
        {"university":"中国科学技术大学","name":"张兰"},
        {"university":"海南大学","name":"张永辉"},
        {"university":"中科软科技股份有限公司","name":"张正"}

    ]
}



export default data
