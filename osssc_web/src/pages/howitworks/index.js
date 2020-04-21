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
                       <div className="HowitworksBannerTitle">活动规划</div>
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
                        <div className="HowitworksTimeTitle">OSSSC Summer 时间线</div>
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
                    </div>
               </div>
           </div>
        )
    }
}