import React from 'react'
import './index.less';


export default class Contactus extends React.Component{
    constructor(props){
       super(props)
       this.state ={
           relatelinks: [
            {
                title:'软件研究所',
                url:'http://www.iscas.ac.cn/'
            },
            {
                title:'openEuler官网',
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
                                <div className="contentUsListItem">
                                    <div className="contentUsListItemTitle">邮箱</div>
                                    <div className="contentUsListItemText">summer2020@iscas.ac.cn</div>
                                </div>
                                <div className="contentUsListItem">
                                    <div className="contentUsListItemTitlelong">智能软件研究中心公众号</div>
                                    <div className="contentUsListItemImage"></div>
                                </div>
                            </div>

                        </div>
                        <div className="contentUsRelateLink">
                            <div className="contentUsTitle">友情链接</div>
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
                            <div className="contentUsListItem">
                                    <div className="contentUsListItemTitlelong">开源点亮计划-暑期2020-讨论1群</div>
                                    <div className="contentUsListItemImage wx_discuss"></div>
                                </div>
                        </div>

                    </div>
                </div>
            </div>
         )
       
        
        
    }
}