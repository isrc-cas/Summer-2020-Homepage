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
import data from './data.js';


export default class Howitworks extends React.Component{
    constructor(props){
       super(props)
       this.state ={
           data,
       }
    }

    gettime(time){
        
        const retime = time.split("_");
        if(retime[1]){
            return retime[0]+"月"+retime[1]+"日"
        }else{
            return retime
        }
        
    }

    componentDidMount(){
       
        const location = window.location.hash.split("to=")
        if(location[1]){
            let position;
            if(location[1] === 'timeline'){
                position = document.getElementsByClassName("HowitworksContent")[0].offsetHeight + 600;
            }else{
                position = document.getElementsByClassName("HowitworksCommittee")[0].offsetHeight + 700;
            } 
            window.scrollTo({
                top: position,
                left: 0,
                behavior: 'smooth'
              });
              
        }else{
            window.scrollTo(0,0);
        }
    }

    goLink(url){
        window.location.hash = url
    }
    
    


    render(){
       
       
       
        
        return(
           <div className="Howitworks">
               <div className="HowitworksBanner">
                   <div className="HowitworksBannerContent content1200">
                       <div className="HowitworksBannerTitle">开源软件供应链点亮计划-暑期2020 活动规划</div>
                       <div className="HowitworksBannerTitleMobile">
                            <div className="HowitworkOne">开源软件供应链点亮计划</div>
                            <div  className="HowitworkTwo">暑期2020 活动规划</div>
                       </div>
                       <div className="HowitworksList" >
                           {
                               this.state.data.bannerlist.map((item,index)=>{
                                   return (
                                    <div className="HowitworksListItem" key={index}>
                                            <div className={["HowitworksListItemImage",item.stitle].join(" ")}></div>
                                            <div className="HowitworksListItemTitle">{item.title}</div>
                                            <div className="HowitworksListItemContent">{item.text}</div>
                                    </div>

                                   )
                               })
                           }
                           
                       </div>

                   </div>

               </div>
               <div className="HowitworksContent">
                   <div className="HowitworksContentWrapper content1200">
                        {
                            this.state.data.contents.map((item,index)=>{
                                return(
                                    <div className="HowitworksContentItem" key={index}>
                                            <div className="HowitworksContentTitle">{item.title}</div>
                                            <div className="HowitworksContentContent">{item.text}</div>
                                    </div>
                                )
                            })
                        }

                   </div>
                   

               </div>
               <div className="HowitworksTimeline">
                    <div className="HowitworksTimelineWrapper content1200">
                        <div className="HowitworksTimeTitle mobiledisplaynone">开源软件供应链点亮计划-暑期2020 活动里程碑</div>
                        <div className="HowitworksBannerTitleMobile">
                            <div className="HowitworkOne">开源软件供应链点亮计划</div>
                            <div  className="HowitworkTwo">暑期2020 活动里程碑</div>
                       </div>
                       <div className="HowitworksTimelineList">
                            {
                                this.state.data.time.map((item,index)=>{
                                    return (
                                        <div className="HowitworksTimelineItem" key={index}>
                                            <div className="HowitworksTimelineItemIcon"></div>
                                            <div className="HowitworksTimelineItemCons">
                                                <div className="HowitworksTimelineItemTitle">{this.gettime(item.time1)}</div>
                                                <div className="HowitworksTimelineItemText">{item.text}</div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                       </div>
                       <div className="HowitworksTimeTitle opensource"> “大咖说开源” 系列直播讲座</div>
                       <div className="HowitworksTimelineList" >
                            最新直播将在5 月 23 日 20:00 - 21：00进行，请关注官网和公众号消息， <span onClick={()=>{this.goLink('liveshow')}}>点击此处查看讲座信息。</span>                  
                       </div>
                       <div className="HowitworksTimeTitle opensource">指导委员会委员</div>
                       <div className="HowitworksCommittee">
                            {
                                this.state.data.committee.map((item,index)=>{
                                    return(
                                        <div className="HowitworksCommitteeItem" key={index}>
                                            <div className="HowitworksCommitteeItemUniversity">{item.university}</div>
                                            <div className="HowitworksCommitteeItemName">{item.name}</div>
                                        </div>
                                    )
                                })
                            }
                       </div>
                       <div className="HowitworksCommitteePinyin">*按委员姓名拼音排序</div>
                    </div>
               </div>
           </div>
        )
    }
}