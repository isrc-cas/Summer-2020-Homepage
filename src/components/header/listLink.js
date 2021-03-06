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
const listLinks = [
    {
        name:'首页',
        title:'index',
    },
    {
        name:'2021活动主页',
        title:'summer2021',
        link:'https://summer.iscas.ac.cn/',
    },
    {
        name:'开源社区',
        title:'organisations',
    },
    {
        name:'2020峰会',
        title:'summitmeeting',
    },
    {
        name:'结项公示',
        title:'announcement',
    },
    {
        name:'活动规划',
        title:'acall',
        content:[
            {
                name:'活动进程',
                title:'started',
            },
            {
                name:'活动详情',
                title:'howitworks',
            }
        ]
    },
   
    {
        name:'大咖说开源',
        title:'liveshow',
    },
    {
        name:'帮助',
        title:'contactus',
    },
  

]

const linkDataMap = {
    index:'首页',
    howitworks:'活动规划',
    organisations:'开源社区',
    summitmeeting:'2020峰会',
    qa:'热点问题',
    contactus:'帮助',
    liveshow:'大咖说开源',
    started:'活动进程'
}

export {
    listLinks,
    linkDataMap
}