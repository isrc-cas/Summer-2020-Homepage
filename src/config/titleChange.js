import {linkDataMap} from './../components/header/listLink.js';
import {readyWeixin} from './weixin.js';

var titleChange = function(){
    var hashname = linkDataMap[window.location.hash.split("#/")[1]]||'首页';
    var titleContent = ` - 开源软件供应链点亮计划 - 暑期2020 | 中国科学院软件研究所 | openEuler 社区`;
    document.title = hashname + titleContent;
    window.addEventListener('hashchange',(old)=>{
        window.scrollTo(0,0);
        hashname = linkDataMap[old.newURL.split("#/")[1]] || '首页';
        document.title = hashname + titleContent;
        // readyWeixin();
    })

}

export {
    titleChange
}