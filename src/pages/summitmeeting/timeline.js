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
import './timeline.less';
import {SanchorOne} from './data.js';

export default class Timeline extends React.Component{
    constructor(props){
       super(props)
       this.state ={
        SanchorOne,
       }
    }

 


    render(){
       
        return(         
          
        <div className="SummitMeetThreeContentTimeline SanchorOneItem">
            {
                this.state.SanchorOne.content.map((item,index)=>{
                    return (
                        <div className={["HowitworksTimelineItem","timeline"+index].join(" ")} key={index}>
                            <div className="HowitworksTimelineItemIcon"></div>
                            <div className="HowitworksTimelineItemCons">
                                <div className="HowitworksTimelineItemLine">
                                    <div className="HowitworksTimelineItemLineTime">{item.time}</div>
                                    <div className="SummitTimeWrapper">
                                    <div className="HowitworksTimelineItemLineTitle">
                                        <div className="HowitworksTimelineItemLineTitleBig">{item.name}</div>
                                        {item.title?<div className="HowitworksTimelineItemLineSmall">- {item.title}</div>:""}
                                    </div>
                                    {
                                        item.ppt?
                                        <a className="SummitModalButtonPPT" href={" https://isrc.iscas.ac.cn/summer2020/downloads/summit/"+item.ppt}>下载PPT</a>
                                        : ""
                                    }

                                    </div>
                                   
                                    
                                </div>
                                
                                
                            </div>

                        </div>
                    )
                })
            }

        </div>

   
         )
       
        
        
    }
}