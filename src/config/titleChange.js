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
        console.log(2)
        window.scrollTo(0,0);
        gettitle();
    })

}

export {
    titleChange
}