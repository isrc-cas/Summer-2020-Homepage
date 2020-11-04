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

import React from 'react';
import './index.less';
import {holderlist} from './../index/logo.js';
import './../index/banner4.less';
import data from './list.json';
import twocode from './../../img/stats/twocode.png';
import daoxiangpng from './../../img/stats/baoming.png';
import {datalist} from './data.js'
export default class Summitmeeting extends React.Component{
    constructor(props){
       super(props)
       this.state ={
        data,
        holderlist,
        title:["操作系统","虚拟化&云原生","人工智能","大数据","分布式系统"],
        showflag:"",
        showdata:{},
        link:"https://maka.im/pcdanyeviewer/13229884/HAUZ4967W13229884",
        datalist,
       }
    }

    toggleHover(type,index,indexl,e){
        this.setState({
            showflag:this.state.data[type][index].name,
            showdata:this.state.data[type][index]["content"][indexl]
        })
        // console.log(this.state.data[type][index]["content"][indexl])

    }
    gourl(url){
        window.open(url)
    }

    toggleleave(){
        // console.log("00000")
        this.setState({
            showflag:""
        })
    }

    getBack(len){
        if(len<5){
            var divcon = []
            for(var i=0;i<6-len;i++){
                divcon.push(
                <div className="SummitMeetThreeTableItem greyback" key={"_"+i} >
                    <div className="SummitMeetThreeTableItemContent">...</div>
                    <div className="SummitMeetThreeTableItemBack"></div>
                </div>

                )
            }
            return divcon
        }
        
    }
   
    
 


    render(){
       
        return(
            <div className="Summitmeeting">
                <div className="indexHomeOneBanner indexHomeOneBannerFour">
                    <div className="indexHomeFourBanner content1200">
                    
                            <div className="indexHomeFourBannerLogo"></div>
                            <div className="indexHomeFourBannerTitle">
                                <span className="One">共献·开源</span>
                                <span className="Two">“开源软件供应链 2020 峰会”</span>
                            </div>
                            <div className="indexHomeFourBannerCompany">
                                <div className="indexHomeFourBannerCompanyItem">中国科学院软件研究所</div>
                                <div className="indexHomeFourBannerCompanyItem">openEuler 社区</div>
                                <div className="indexHomeFourBannerCompanyItem">中科院软件研究所南京软件技术研究院</div>
                                <div className="indexHomeFourBannerCompanyItem">华为技术有限公司</div>
                            </div>
                            <div className="indexHomeFourBannerMainTile">峰会将围绕现代软件构建模式的关键供应关系网络——开源软件供应链展开深入解读，论道开源最新技术前沿话题</div>
                            <div className="indexHomeFourLabels">
                                {
                                    this.state.holderlist.bannerfourdata.map((item,index)=>{
                                        return (
                                            <div className="indexHomeFourLabelItem" key={index}>
                                                {item}
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <div className="SummitMeetTextTwo" >主办方：中国科学院软件研究所、openEuler社区  |  承办方：中国科学院软件研究所南京软件技术研究院  |  赞助方：华为技术有限公司  |  媒体合作方：开源社、开源中国、SegmentFault 思否、芽木科技</div>
                        </div>
                    
                   
                </div>
                <div className="SummitMeetTwo">
                    <div className="SummitMeetTwoContent">
                            <div className="SummitMeetTwoContentRight">
                                <div className="SummitMeetTwoContentRightOne">开源软件供应链 2020 峰会</div>
                                <div className="SummitMeetTwoContentRightTwo"> 2020年11月14日 于 南京玄武苏宁诺富特酒店 盛大开幕</div>
                                <div className="SummitMeetTwoContentTwocode phonenone">
                                    <img className="SummitMeetTwoContentTwocodePng" alt="twocode" src={twocode}></img>
                                    <img className="SummitMeetTwoContentDaoxiang" alt="daoxiangpng" src={daoxiangpng}></img>
                                    <span>手机扫一扫 报名线下参会！</span>
                                </div>
                                <div className="SummitMeetTwoContentTwocode phoneshow">
                                    <div className="SummitMeetTwoContentButton" onClick={()=>{this.gourl(this.state.link)}}> 点击报名</div>
                                    <span>手机扫一扫 报名线下参会！</span>
                                </div>
                            </div>
                            <div className="SummitMeetTwoContentMiddle">
                                <span>峰会将围绕现代软件构建模式的关键供应关系网络 — 开源软件供应链展开深入解读，</span><br/>
                                <span>邀请全国各大高校及研究机构老师代表、企业技术专家、开源社区大咖等齐聚南京，共同论道开源最新技术前沿话题及发展趋势</span>
                            </div>
                    </div>
                </div>
                <div className="SummitMeetThree">
                    <div className="SummitMeetThreeContent">
                        <div className="SummitMeetThreeContentTimeline">
                            {
                                this.state.datalist.map((item,index)=>{
                                    return (
                                        <div className={["HowitworksTimelineItem","timeline"+index].join(" ")} key={index}>
                                            <div className="HowitworksTimelineItemIcon"></div>
                                            <div className="HowitworksTimelineItemCons">
                                                <div className="HowitworksTimelineItemLine">
                                                    <div className="HowitworksTimelineItemLineTitle">{item.name}</div>
                                                    <div className="HowitworksTimelineItemLineTime">{item.time}</div>
                                                </div>
                                               
                                               
                                            </div>

                                        </div>
                                    )
                                })
                            }

                        </div>
                        {/* <div className="SummitMeetThreeContentTitle">7 大专题论坛分会场持续更新中...</div> */}
                        <div className="SummitMeetThreeTableOne tech">
                            <div className="SummitMeetThreeTableOneTile">
                                <span className="SummitMeetThreeTableOneTileText">技术专题论坛</span>
                                <span className="SummitMeetThreeTableOneTileText backimg"></span>
                            </div>
                            {
                                this.state.data["tech"].map((ele,index)=>{
                                    return (
                                        <div className="SummitMeetThreeTableContent" key={index}>
                                            <div  className={["SummitMeetThreeTableContentTitle",ele.name].join(" ")}><span>{ele.chi}</span></div>
                                            <div className="SummitMeetThreeTableContentWrapper">
                                                {
                                                    ele.content.map((item,indexl)=>{
                                                        return (
                                                            <div className="SummitMeetThreeTableItem" key={index+"_"+indexl} 
                                                            onMouseEnter={(e)=>{this.toggleHover('tech',index,indexl)}}
                                                            onMouseLeave={()=>{this.toggleleave()}}
                                                            >
                                                                <div className="SummitMeetThreeTableItemContent">
                                                                   
                                                                    <div className="SummitMeetThreeTableItemContenttitle" title={item.title}>{item.title}</div>
                                                                    <div className="SummitContentBottom">
                                                                        <div className="SummitMeetThreeTableItemContentName">{item.name}</div>
                                                                        <div className="SummitMeetThreeTableItemContentcommunity">{item.community}</div>

                                                                    </div>
                                                                    
                                                                </div>
                                                                <div className="SummitMeetThreeTableItemBack"></div>
                                                            </div>
                                                        )
                                                    })
                                                }
                                                {
                                                    this.getBack(ele.content.length)
                                                }

                                            </div>
                                            <div className={["SummitMeetThreeTableModal", this.state.showflag === ele.name?"show":""].join(" ")}>
                                               {
                                                   this.state.showdata.name ?
                                                   <div className="SummitMeetThreeTableModalWrapper">
                                                       <div className="SummitMeetThreeTableModalHeader">
                                                           <div 
                                                            className="SummitMeetThreeTableModalHeaderIcon" 
                                                            style={{backgroundImage: "url(" + require("./../../img/iconT/"+this.state.showdata.img) + ")"}}></div>
                                                           <div className="SummitMeetThreeTableModalHeaderText">
                                                            <div className="SummitMeetThreeTableModalName">
                                                                <span>{this.state.showdata.name}</span>
                                                                {
                                                                    this.state.showdata.community? <span> | {this.state.showdata.community}</span>:""
                                                                }
                                                            </div>
                                                           

                                                            {
                                                                this.state.showdata.profile?<div className="SummitMeetThreeTableModalProfile">{this.state.showdata.profile}</div>:""
                                                            }

                                                           </div>
                                                       </div>
                                                        
                                                       <div className="SummitMeetThreeTableuTitle">{this.state.showdata.title}</div>
                                                        
                                                        {
                                                            this.state.showdata.desc?<div className="SummitMeetThreeTableModalDesc">议题背景: {this.state.showdata.desc}</div>:""
                                                        }
                                                        
                                                        
                                                    </div>:""
                                               }
                                
                                            </div>
                                            
                                        </div>
                                    )
                                })
                            }
                            

                        </div>
                        <div className="SummitMeetThreeTableOne two">
                            <div className="SummitMeetThreeTableOneTile ">
                                <span className="SummitMeetThreeTableOneTileText">开源专题论坛</span>
                                <span className="SummitMeetThreeTableOneTileText backimg"></span>
                            </div>
                            {
                                this.state.data["opensource"].map((ele,index)=>{
                                    return (
                                        <div className="SummitMeetThreeTableContent" key={index}>
                                            <div  className={["SummitMeetThreeTableContentTitle",ele.name].join(" ")}><span>{ele.chi}</span></div>
                                            <div className="SummitMeetThreeTableContentWrapper">
                                                {
                                                    ele.content.map((item,indexl)=>{
                                                        return (
                                                            <div 
                                                            onMouseEnter={(e)=>{this.toggleHover('opensource',index,indexl)}}
                                                            onMouseLeave={()=>{this.toggleleave()}}
                                                            className="SummitMeetThreeTableItem" key={index+"_"+indexl}>
                                                                <div className="SummitMeetThreeTableItemContent">
                                                                    {/* <div   
                                                                        className={["SummitMeetThreeTableItemContentImage","backimg"+index].join(" ")}>
                                                                            
                                                                        
                                                                    </div> */}
                                                                    <div className="SummitMeetThreeTableItemContenttitle" title={item.title}>{item.title}</div>
                                                                    <div className="SummitContentBottom">
                                                                        <div className="SummitMeetThreeTableItemContentName">{item.name}</div>
                                                                        <div className="SummitMeetThreeTableItemContentcommunity">{item.community}</div>

                                                                    </div>
                                                                    
                                                                </div>
                                                                <div className="SummitMeetThreeTableItemBack"></div>
                                                            </div>
                                                        )
                                                    })
                                                }
                                                {
                                                    this.getBack(ele.content.length)
                                                }

                                            </div>
                                            <div className={["SummitMeetThreeTableModal", this.state.showflag === ele.name?"show":""].join(" ")}>
                                                {
                                                    this.state.showdata.name ?
                                                    <div className="SummitMeetThreeTableModalWrapper">
                                                        <div className="SummitMeetThreeTableModalHeader">
                                                           <div 
                                                            className="SummitMeetThreeTableModalHeaderIcon" 
                                                            style={{backgroundImage: "url(" + require("./../../img/iconT/"+this.state.showdata.img) + ")"}}></div>
                                                           <div className="SummitMeetThreeTableModalHeaderText">
                                                            <div className="SummitMeetThreeTableModalName">
                                                                <span>{this.state.showdata.name}</span>
                                                                {
                                                                    this.state.showdata.community? <span> | {this.state.showdata.community}</span>:""
                                                                }
                                                            </div>
                                                           

                                                            {
                                                                this.state.showdata.profile?<div className="SummitMeetThreeTableModalProfile">{this.state.showdata.profile}</div>:""
                                                            }

                                                           </div>
                                                       </div>
                                                        
                                                       <div className="SummitMeetThreeTableuTitle">{this.state.showdata.title}</div>
                                                        
                                                        {
                                                            this.state.showdata.desc?<div className="SummitMeetThreeTableModalDesc">议题背景: {this.state.showdata.desc}</div>:""
                                                        }
                                                        
                                                        
                                                    </div>:""
                                                }
                                                
                                
                                            </div>
                                            
                                        </div>
                                    )
                                })
                            }
                        <div className="SummitMeetThreeContentTimeline">
                            <div className="HowitworksTimelineItem last" >
                                <div className="HowitworksTimelineItemIcon"></div>
                                <div className="HowitworksTimelineItemCons">
                                    <div className="HowitworksTimelineItemLine ">
                                        <div className="HowitworksTimelineItemLineTitle">11月15日 上午 优秀学生线上分享</div>
                                        
                                    </div>
                                   
                                    
                                </div>

                            </div>

                        </div>


                            


                        </div>
                        
                    </div>
                </div>
                
            </div>
         )
       
        
        
    }
}
