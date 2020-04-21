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
           </div>
        )
    }
}