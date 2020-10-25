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

import {linkDataMap} from './../components/header/listLink.js';
import {readyWeixin, initWeixin} from './weixin.js';

var gettitle = function(){
    var titleContent = ` - 开源软件供应链点亮计划 - 暑期2020 | 中国科学院软件研究所 | openEuler 社区`;
    var location = window.location.hash.split("?")[0].split("/");
    if(location.length === 2){
        document.title = `${linkDataMap[location[1]]||'首页'}${titleContent}`;
        document.getElementsByTagName("meta")[2].content = "关注开源软件和开源社区，培养和发掘更多优秀的开发者。";
    }
    try {
        readyWeixin();
    } catch (e) {
        console.log(e);
    }
    
}


var titleChange = function(){
    initWeixin();
    gettitle();
   
    window.addEventListener('hashchange',()=>{
        var anounceflag = window.location.hash.split("announcement#").length === 1;
        console.log(anounceflag)
        if(anounceflag && !window.location.hash.includes('?') ) {
            window.scrollTo(0,0);
        }
        gettitle();
    })

}

export {
    titleChange
}