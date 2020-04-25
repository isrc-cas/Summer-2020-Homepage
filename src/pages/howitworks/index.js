import React from 'react'
import './index.less';
import data from './data.js'

export default class Howitworks extends React.Component{
    constructor(props){
       super(props)
       this.state ={
           data,
       }
    }

    gettime(time){
        const retime = time.split("_");
        return retime[0]+"月"+retime[1]+"日"
    }
    
    


    render(){
       
       
       
        
        return(
           <div className="Howitworks">
               <div className="HowitworksBanner">
                   <div className="HowitworksBannerContent content1200">
                       <div className="HowitworksBannerTitle">开源软件供应链点亮计划-暑期2020 活动规划</div>
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
                        <div className="HowitworksTimeTitle">开源软件供应链点亮计划-暑期2020 活动里程碑</div>
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
                       <div className="HowitworksTimeTitle opensource">“开源大咖”系列讲座</div>
                       <div className="HowitworksTimelineList">
                                <div className="HowitworksTimelineItem">
                                    <div className="HowitworksTimelineItemIcon"></div>
                                    <div className="HowitworksTimelineItemCons">
                                        <div className="HowitworksTimelineItemTitle">5月15日</div>
                                        <div className="HowitworksTimelineItemText">“开源大咖”系列讲座开始，我们将邀请合作的开源社区的技术大牛进行讲座。</div>
                                    </div>
                                </div>
                                <div className="HowitworksTimelineItem">
                                    <div className="HowitworksTimelineItemIcon"></div>
                                    <div className="HowitworksTimelineItemCons">
                                        <div className="HowitworksTimelineItemTitle">10月30日</div>
                                        <div className="HowitworksTimelineItemText">“开源大咖”系列讲座结束</div>
                                    </div>
                                </div>
                       </div>
                    </div>
               </div>
           </div>
        )
    }
}