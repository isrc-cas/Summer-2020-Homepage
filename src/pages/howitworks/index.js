import React from 'react'
import './index.less';
import data from './data.js';
import scrollSmoothTo from './../../config/scroll.js'

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
        window.scrollTo(0,0);
        const location = window.location.hash.split("to=")
        if(location[1]){
            const position = document.getElementsByClassName("HowitworksTimelineWrapper")[0].offsetHeight - 400;
            console.log(position)
            scrollSmoothTo(position)
        }
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
                       <div className="HowitworksTimelineList">
                      第一期将在 5 月 16 日直播，请关注官网和公众号的后续消息。
                                {/* <div className="HowitworksTimelineItem">
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
                                </div> */}
                       </div>
                    </div>
               </div>
           </div>
        )
    }
}