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

var datalist = [
    {
        name:"开幕及主题演讲",
        time:"09:00-10:00",
        content:[
            {
                name:"会议启动",
                time:"09:00-09:10"
            },
            {
                name:"软件所领导致辞",
                time:"09:10-09:20"
            },
            {
                name:"华为领导致辞",
                time:"09:20-09:30 "
            },
        ]
    },
    {
        name:"暑期2020总结及优秀学生颁奖",
        time:"10:00-10:30",
    },
    {
        name:"科研机构代表演讲",
        time:"10:30-10:50",
    },
    {
        name:"开放原子开源基金会代表演讲",
        time:"10:50-11:10",
    },
    {
        name:"圆桌论坛",
        time:"11:10-11:50",
    },
    {
        name:"科研成果开源倡议",
        time:"11:50-12:00",
    },
    {
        name:"7大开源专题论坛 持续更新中...",
        time:"14:00-17:30",
    },
]

var dataall = {
   
    "SanchorTwo":{
        "name":"特邀嘉宾",
        "content":[
            {
                name:"赵琛",
                img:"zhaochen.png",
                desc:[
                    "中国科学院软件研究所 所长"
                ]
            },
            {
                name:"堵俊平",
                img:"dujun.png",
                desc:[
                    "华为 云与计算开源业务 总经理"
                ]
            },
            {
                name:"江大勇",
                img:"jiangdayong.png",
                desc:[
                    "openEuler社区理事会理事长"
                ]
            },
            {
                name:"刘明",
                img:"liuming.png",
                desc:[
                    "鹏城实验室人工智能中心",
                    "AI开源办公室主任"
                ]
            },
            {
                name:"包云岗",
                img:"bao.png",
                desc:[
                    "中国科学院计算技术研究所 所长助理"
                ]
            },
            {
                name:"陈渝",
                img:"chenyu.png",
                desc:[
                    "清华大学计算机系",
                    "长聘副教授，博导"
                ]
            },
            {
                name:"杜玉杰",
                img:"duyu.png",
                desc:["开放原子开源基金会 秘书长"]
            },
            {
                name:"马越",
                img:"mayue.png",
                desc:["恒拓开源 董事长，开源中国CEO"]
            },
            {
                name:"魏永明",
                img:"weiyongming.png",
                desc:[
                    "MiniGUI/HybridOS/HVML ",
                    "开源项目创始人，飞漫软件 总经理"
                ]
            },
            {
                name:"武延军",
                img:"wuyanjun.png",
                desc:["中国科学院软件研究所 副总工程师"]
            },
        ]
    },
    "SanchorThree":{
        "name":"11月14日下午（开源专题论坛）",
        "content":[
            {
                name:"7大开源专题论坛",
                time:"14:00-17:30",
            }
        ]
    },
    "SanchorFour":{
        "name":"11月15日"
    },
    "SanchorFive":{
        "name":"会议位置指引",
        "content":[
            {
                title:"1. 会场指引",
                text:[
                    "会场位置：南京玄武苏宁诺富特酒店，南京市玄武区苏宁大道9号（近地铁4号线徐庄·苏宁总部地铁站）"
                ]
            },
            {
                title:"2. 交通指引",
                text:[
                    "由禄口机场出发，可乘坐地铁 S1 号线转 3 号线转 4 号线，约 50 km，预计用时 1h40min；",
                    "由禄口机场出发，也可乘坐机场大巴，乘车地点位于 T1 航站楼 2 号门，发车频率约每 1.5h 一趟，025-85208888-8018；",
                    "由南京站出发，可乘坐地铁 1 号线转 4 号线，约 11 km，预计用时 40min；",
                    "由南京南站出发，可乘坐地铁 3 号线转 4 号线，约 18 km，预计用时 1h；",
                    "南京是历史文化名城，有丰富的旅游资源，如总统府、夫子庙、中山陵、玄武湖等。会后，可选择乘坐地铁4号线等出行游览，尽享南京“六朝胜地、十代都会”的独特魅力。"
                ]
            },
            {
                title:"3. 会议联系人",
                text:[
                    "中国科学院软件研究所：夏艺菲，18609402511",
                    "中国科学院软件研究所南京软件技术研究院：王浩，17512518779",
                    "南京玄武苏宁诺富特酒店：前台025-85208888；邹宇豪，13701582627"
                ]
            }

        ]
    }
}

var  SanchorOne = {
    "name":"11月14日上午",
    "content":[
        {
            name:"会议开幕",
            time:"09:00-09:10",
        },
        {
            name:"嘉宾致辞：中国科学院软件研究所所长 赵琛",
            time:"09:10-09:20",
        },
        {
            name:"嘉宾致辞：华为技术有限公司 堵俊平",
            time:"09:20-09:30",
        },
        {
            name:"主题演讲：开源软件供应链的研究和实践",
            time:"09:30-10:00",
            title:"演讲嘉宾：中国科学院软件研究所 武延军",
            ppt: "morning/wuyanjun.pdf"
        },
        {
            name:"活动演讲：暑期2020 总结及优秀学生颁奖",
            time:"10:00-10:20",
            title:"演讲嘉宾：暑期2020 活动组委会 屈晟",
            ppt: "morning/qusheng.pdf"
        },
        {
            name:"特邀演讲：处理器芯片发展新趋势 - 开源芯片",
            time:"10:20-10:50",
            title:"演讲嘉宾：中国科学院计算技术研究所 包云岗",
            ppt: "morning/baoyungang.pdf"
        },
        {
            name:"特邀演讲：开放包容、和而不同",
            time:"10:50-11:10",
            title:"演讲嘉宾：开放原子开源基金会 杜玉杰",
            ppt: "morning/duyujie.pdf"
        },
        {
            name:"圆桌论坛：开源的新时代与新愿景",
            time:"11:10-11:50",
            title:"圆桌嘉宾：江大勇、刘明、陈渝、杜玉杰、马越、魏永明、武延军",
        },
        {
            name:"科研成果开源倡议",
            time:"11:50-12:00",
        },
    ]
}

export {
    datalist,
    dataall,
    SanchorOne

}
