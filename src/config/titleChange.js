import {linkDataMap} from './../components/header/listLink.js';
 import {readyWeixin} from './weixin.js';

var gettitle = function(){
    var titleContent = ` - 开源软件供应链点亮计划 - 暑期2020 | 中国科学院软件研究所 | openEuler 社区`;
    var location = window.location.hash.split("?")[0].split("/");
    // if(location[2]){
    //     document.title = location[2] +'社区详情-'+ titleContent;
    // }else{
    //     document.title = `${linkDataMap[location[1]]||'首页'}${titleContent}`;
    // }
    if (location.length < 3) {
      document.title = `${linkDataMap[location[1]]||'首页'}${titleContent}`
    }
    
}

var titleChange = function(){
    gettitle()
    window.addEventListener('hashchange',()=>{
        window.scrollTo(0,0);
        gettitle() 
        readyWeixin();
    })

}

export {
    titleChange
}