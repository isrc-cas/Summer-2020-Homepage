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
        name:'开源社区',
        title:'organisations',
    },
    {
        name:'活动规划',
        title:'howitworks',
    },
    {
        name:'活动进程',
        title:'stats',
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
    qa:'热点问题',
    contactus:'帮助',
    liveshow:'大咖说开源',
    started:'如何加入！',
    stats:'活动进程'
}

export {
    listLinks,
    linkDataMap
}