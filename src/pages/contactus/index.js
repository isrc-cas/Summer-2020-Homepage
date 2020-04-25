import React from 'react'
import './index.less';


export default class Contactus extends React.Component{
    constructor(props){
       super(props)
       this.state ={
           relatelinks: [
            {
                title:'中国科学院软件研究所',
                url:'http://www.iscas.ac.cn/'
            },
            {
                title:'openEuler社区',
                url:'https://openeuler.org/zh/'
            },
            //    {
            //        title:'智能软件研究中心部门网站',
            //        url:'https://isrc.iscas.ac.cn/'
            //    },
               
               
           ]
       }
    }
    goLink(url){
        window.open(url)
    }

 


    render(){
       
        return(
            <div className="contactUs">
                <div className="contactUsBanner"></div>
                <div className="contactUsWrapper">
                    <div className="contactUsContent content1200">
                        <div className="contentUsContact">
                            <div className="contentUsTitle">联系我们</div>
                            <div className="contentUsContactList">
                                {/* <div className="contentUsListItem">
                                    <div className="contentUsListItemTitle">联系电话</div>
                                    <div className="contentUsListItemText">+86-(10)-62661689</div>
                                </div> */}
                                 <div className="contentUsListItem gray">
                                    欢迎发邮件给我们，并留下联系方式，我们会尽快与您联系
                                </div>
                                <div className="contentUsListItem">
                                    <div className="contentUsListItemTitle">邮&nbsp;&nbsp;&nbsp;&nbsp;箱:</div>
                                    <div className="contentUsListItemText">summer2020@iscas.ac.cn</div>
                                </div>
                                <div className="contentUsListItem imageweixin">
                                    <div className="contentUsListItemTitlelong">公众号：ISCAS_ISRC -> 活动专栏 -> 暑期2020</div>
                                    <div className="contentUsListItemImage"></div>
                                </div>
                            </div>

                        </div>
                        <div className="contentUsRelateLink">
                            <div className="contentUsTitle">主办单位</div>
                            <div className="contentUsRelateLinkList">
                                {
                                    this.state.relatelinks.map((item,index)=>{
                                        return (
                                            <div 
                                                key={index}
                                                onClick={()=>this.goLink(item.url)}
                                                className="contentUsRelateLinkItem">
                                                {item.title}
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <div className="contentUsListItem weixindiscuss">
                                    <div className="contentUsListItemTitlelongS">开源点亮计划-暑期2020-微信讨论群</div>
                                    <div className="contentUsListItemImage wx_discuss"></div>
                                </div>
                        </div>

                    </div>
                </div>
            </div>
         )
       
        
        
    }
}