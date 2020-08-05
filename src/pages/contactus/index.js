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

import React from 'react'
import './index.less';
import imgWeixin from './../../img/weixin.jpg';
import imgDiscuss from './../../img/wx_t.jpg';
// import imgDiscussM from './../../img/or/wx_t_m.png';

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
               
               
           ],
           sourceLink:[
            {
                title:'热点问题Q&A',
                url:'https://isrc.iscas.ac.cn/summer2020/help/'
            },
               {
                title:'学生参与流程',
                   url:'https://isrc.iscas.ac.cn/summer2020/help/student.html#'          
               },
               
               {
                title:'社区参与流程',
                    url:'https://isrc.iscas.ac.cn/summer2020/help/community.html'
                },
                {
                title:'导师参与流程',
                    url:'https://isrc.iscas.ac.cn/summer2020/help/mentor.html'
                },
               

           ]
       }
    }
    goLink(url){
        window.open(url)
    }
    
 


    render(){
       
        return(
            <div className="contactUs">
                <div className="contactUsBanner">
                    <div className="content1200">帮助</div>
                </div>
                <div className="contactUsWrapper">
                    <div className="contactUsContent content1200">
                    <div className="contentUsRelateLink">
                            <div className="contentUsTitle"><span>资源链接</span></div>
                            <div className="contentUsRelateLinkList sourceLink">
                                {
                                    this.state.sourceLink.map((item,index)=>{
                                        return (
                                            <div 
                                                key={index}
                                                onClick={()=>this.goLink(item.url)}
                                                className="contentUsRelateLinkItem">
                                                <span>{item.title}</span>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <div className="contentUsTitle"><span>主办单位</span></div>
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
                           
                            
                        </div>
                        <div className="contentUsContact">
                            <div className="contentUsTitle">
                                <span>联系我们</span>
                            </div>
                            <div className="contentUsContactList">
                               
                                
                                <div className="contentUsListItem mail">
                                    <div className="contentUsListItemTitle">邮&nbsp;&nbsp;&nbsp;&nbsp;箱:</div>
                                    <div className="contentUsListItemText"><a href="mailto:summer2020@iscas.ac.cn">summer2020@iscas.ac.cn</a></div>
                                </div>
                                <div className="contentUsListItem gray">
                                / 欢迎发邮件给我们，并留下联系方式，我们会尽快与您联系 /
                                </div>
                                <div className="contentUsListItem imageweixin">
                                    <div className="contentUsListItemTitle">公众号:</div>
                                    <span>ISCAS_ISRC -> 活动专栏 -> 暑期2020</span>
                                    
                                    <img src={imgWeixin} className="contactWeixinjpg" alt="公众号"></img>
                                </div>
                                {/* <div className="contentUsListItem weixindiscuss">
                                    <div className="contentUsListItemTitlelongS">开源点亮计划-暑期2020-微信讨论群</div>
                                    <img src={imgDiscuss} className="contactWeixinjpg discuss" alt="讨论群"></img> 
                                    <div className="contentUsListItemtip"> 
                                    / 扫描讨论群二维码时，请将手机摄像头稍朝下 /  
                                    </div>     
                                </div> */}
                            </div>

                        </div>

                       
                        

                    </div>
                </div>
            </div>
         )
       
        
        
    }
}