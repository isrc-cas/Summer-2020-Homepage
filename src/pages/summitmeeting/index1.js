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
import {holderlist} from '../index/logo.js';
import './../index/banner4.less';
import data from './list.json';
import {datalist,dataall} from './data.js';
import { Map, Marker } from 'react-amap';



// eslint-disable-next-line
let timeTemp = 0;
// eslint-disable-next-line
let pre=0;
// eslint-disable-next-line
const tablist=["SanchorOne","SanchorTwo","SanchorThree","SanchorFour","SanchorFive"]
export default class Summitmeeting extends React.Component{
    constructor(props){
       super(props)
       this.state ={
        data,
        dataall,
        holderlist,
        title:["操作系统","虚拟化&云原生","人工智能","大数据","分布式系统"],
        showflag:"",
        showdata:{},
        link:"https://wx.vzan.com/live/tvchat-425619793",
        datalist,
        tabflag:"",
        
       }
       this.scrollHandle = this.scrollHandle.bind(this)
    }

    componentDidMount(){
        
        if(window.location.hash === "#/summitmeeting"){
            window.addEventListener('scroll', this.scrollHandle, true);
        }
        
    }
    
   



    scrollHandle(){
      var now = Date.now();
      
      if(now - pre >= 100){
          for(var i=0;i<5;i++){
            const elell = document.getElementsByClassName(tablist[i]+"Item")[0]
            if(!elell){
                return 0
            }
            const offset = elell.getBoundingClientRect();
            const offsetTop = offset.top;
            const offsetBottom = offset.bottom;
            
            
            if (offsetTop+80 <= window.innerHeight && offsetBottom >= 0) {
                  //console.log("进入可视区域")
                this.setState({
                    tabflag:tablist[i]
                })   
            //    break;
            }
             // 进入可视区域
            //  console.log(this.state.tabflag)

          }
         
        
       }
       pre = now;
      
       
       
    }

   

    toggleHover(type,index,indexl,e){
        timeTemp=new Date().getTime();
        this.setState({
            showflag:this.state.data[type][index].name,
            showdata:this.state.data[type][index]["content"][indexl],
            
        })
       

    }
    gourl(url){
        window.open(url)
    }

    toggleleave(e){
       
        var timestamp=new Date().getTime();
       
     
        if(timestamp-timeTemp>3){
            this.setState({
                showflag:""
            })
        }
        
        
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

    getTabFlag(tabflag){
       setTimeout(()=>{
        this.setState({
            tabflag
        })
       },100)
        let position = document.getElementsByClassName(tabflag+"Item")[0].getBoundingClientRect().top+window.scrollY - 120;
       
        window.scrollTo({
            top: position,
            left: 0,
            // behavior: 'smooth'
        });
    }
   
    
   


    render(){
        const plugins = [
            'MapType',
            'Scale',
            'OverView',
            'ControlBar', // v1.1.0 新增
           
          ]
       
        return(
            <div className="Summitmeeting">
                <div className="indexHomeOneBanner indexHomeOneBannerFour">
                    <div className="indexHomeFourBanner content1200">
                    
                            
                            <div className="indexHomeFourBannerTitle">
                                <span className="One">共献·开源  </span>
                                <span className="Two">
                                    <span>开源软件供应链 2020 峰会</span>
                                    <div className="summitButtonOnline">
                                        <span className="summitButtonText">线上同步直播！</span>
                                        <div className="summitButtonBack"></div>
                                    </div>
                                </span>
                            </div>
                            {/* <div className="indexHomeFourBannerCompany">
                                <div className="indexHomeFourBannerCompanyItem">中国科学院软件研究所</div>
                                <div className="indexHomeFourBannerCompanyItem">openEuler 社区</div>
                                <div className="indexHomeFourBannerCompanyItem">中科院软件研究所南京软件技术研究院</div>
                                <div className="indexHomeFourBannerCompanyItem">华为技术有限公司</div>
                            </div> */}
                            <div className="indexHomeFourBannerMainTile">峰会将围绕现代软件构建模式的关键供应关系网络——开源软件供应链展开深入解读，论道开源最新技术前沿话题</div>
                            <div className="SummitMeetTextTwo" >主办方：中国科学院软件研究所、openEuler社区  |  承办方：中国科学院软件研究所南京软件技术研究院 
                            <br className= "phonenone" />
                             <span className="phoneshow"> | </span>赞助方：华为技术有限公司  |  协办方：江苏润和软件股份有限公司、江苏鲲鹏•昇腾生态创新中心、南京中科启明星软件有限公司 | 
                            媒体合作方：开源社、开源中国、SegmentFault 思否、芽木科技</div>
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
                            <div className="indexHomeFourText4">2020.11.14-2020.11.15 于南京盛大开幕，官网全程在线直播！</div>
                           
                        </div>
                    
                   
                </div>
                <div className="SummitMeetTwo">
                    <div className="SummitMeetTwoContent">
                        <div className="SummitMeetTwoContentTop">
                            <div className="SummitMeetTwoContentRight">
                                <div className="SummitMeetTwoContentRightOne">开源软件供应链 2020 峰会</div>
                                <div className="SummitMeetTwoContentRightTwo"> 2020年11月14日-15日 于南京盛大开幕</div>
                                <div className="SummitButtonZhibo">
                                    <div className="SummitButtonZhiboButton" onClick={()=>{this.gourl(this.state.link)}}>观看直播 ></div>
                                    {/* <span className="SummitTip">暂未开放，敬请期待！</span> */}
                                </div>
                                <div className="SummitPdf">
                                    <span className="SummitPdfDown">
                                        <a className="SummitPdfAD" href="https://isrc.iscas.ac.cn/summer2020/downloads/summit/summer_7.0.pdf" download="summer2020——会议手册"> 会议手册.pdf</a>
                                    </span>
                                    <span className="SummitPdfText">来下载会议手册了解大会详细内容吧！</span>
                                </div>
                                <div className="SummitPngDown">
                                    <div className="SummitPngDownload">
                                        <div id="SummitPngIcon"></div>
                                        <div className="SummitPngPanText">会议图片下载:</div>
                                        <a className="SummitPngPan" href="https://pan.baidu.com/s/1bV1Erxdcdk1Dx-9FO_oFsQ">https://pan.baidu.com/s/1bV1Erxdcdk1Dx-9FO_oFsQ</a>
                                    </div>
                                    <div className="SummitPngDownload">
                                        <div className="SummitPngPanText Text2">提取码:</div>
                                        <div className="SummitPngPanNumber">kwoj</div>
                                    </div>

                                </div>
                               
                            </div>
                            <div className="SummitImage"></div>

                        </div>
                            
                            <div className="SummitMeetTwoContentMiddle">
                                <span>峰会将围绕现代软件构建模式的关键供应关系网络 — 开源软件供应链展开深入解读，</span><br/>
                                <span>邀请全国各大高校及研究机构老师代表、企业技术专家、开源社区大咖等齐聚南京，共同论道开源最新技术前沿话题及发展趋势</span>
                            </div>
                    </div>
                </div>
                <div className="SummitMeetThree">
                   <div className="SummitMeetThreeHeader">
                    <div className="content1200 SummitMeetThreeHeaderWrapper">
                            {
                                Object.keys(this.state.dataall).map((ele,index)=>{
                                    return (
                                        <div 
                                        onClick={()=>{this.getTabFlag(ele)}}
                                        className={["SummitTabHeaderItem",ele, ele===this.state.tabflag?"intoview":""].join(" ")} key={index}>
                                            {this.state.dataall[ele].name}
                                        </div>
                                    )
                                })
                            }

                        </div>
                   </div>
                    <div className="SummitMeetThreeContent">
                        <div className="SummitMeetThreeContentTimeline SanchorOneItem">
                            {
                                this.state.dataall.SanchorOne.content.map((item,index)=>{
                                    return (
                                        <div className={["HowitworksTimelineItem","timeline"+index].join(" ")} key={index}>
                                            <div className="HowitworksTimelineItemIcon"></div>
                                            <div className="HowitworksTimelineItemCons">
                                                <div className="HowitworksTimelineItemLine">
                                                    <div className="HowitworksTimelineItemLineTime">{item.time}</div>
                                                    <div className="HowitworksTimelineItemLineTitle">
                                                        <div className="HowitworksTimelineItemLineTitleBig">{item.name}</div>
                                                        {item.title?<div className="HowitworksTimelineItemLineSmall">- {item.title}</div>:""}
                                                    </div>
                                                    
                                                </div>
                                               
                                               
                                            </div>

                                        </div>
                                    )
                                })
                            }

                        </div>

                        <div className="SummitTeyao SanchorTwoItem">
                            <div className="SummitTeyaoHeader">
                                <div className="SummitTeyaoHeaderText">特邀嘉宾</div>
                            </div>
                            <div className="SummitTeyaoContent">
                                {
                                    this.state.dataall.SanchorTwo.content.map((item,index)=>{
                                        return (
                                            <div className="SummitTeyaoItem" key={index}>
                                                <div 
                                                    style={{backgroundImage: "url(" + require("./../../img/detail/"+item.img) + ")"}}
                                                    className="SummitTeyaoImg"></div>
                                                <div className="SummitTeyaoName">
                                                    <span className="SummitTeyaoNameSpan">{item.name}</span>
                                                </div>
                                                <div className="SummitTeyaoDesc">
                                                    {
                                                        item.desc.map((sitem,sindex)=>{
                                                            return (
                                                            <div className="SummitTeyaoDescItem" key={sindex}>{sitem}</div>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>

                        </div>
                        
                        <div  className="SummitMeetThreeContent SummitThree SanchorThreeItem">
                            <div className="SummitMeetThreeContentTimeline ">
                                <div className="HowitworksTimelineItem timeline8"  >
                                    <div className="HowitworksTimelineItemIcon"></div>
                                    <div className="HowitworksTimelineItemCons">
                                        <div className="HowitworksTimelineItemLine">
                                            <div className="HowitworksTimelineItemLineTime">14:00-17:30</div>
                                            <div className="HowitworksTimelineItemLineTitle">
                                                <div className="HowitworksTimelineItemLineTitleBig">7大开源专题论坛</div>                                              
                                            </div>                                          
                                        </div>                                                                        
                                    </div>
                                </div>
                            </div>
                            <div className="SummitThreeTimeCon">
                                <div className="SummitThreeTimeConItem">
                                    <span className="SummitThreeTimeConItemOne">15:30-16:00  &nbsp;/</span>
                                    &nbsp;&nbsp;<span className="SummitThreeTimeConItemTwo">茶歇</span>
                                </div>
                               <div className="summitSplit"></div>
                                <div className="SummitThreeTimeConItem">
                                    <span className="SummitThreeTimeConItemOne">17:00-17:30  &nbsp;/</span>
                                    &nbsp;&nbsp;<span className="SummitThreeTimeConItemTwo">问答及讨论</span>
                                </div>
                            </div>
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
                                                            onMouseLeave={(e)=>{this.toggleleave(e)}}
                                                            >
                                                                <div className="SummitMeetThreeTableItemTime">{item.time}</div>
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
                                                                {
                                                                    this.state.showdata.ppt?
                                                                  
                                                                    <a className="SummitModalButtonPPT" href={"https://isrc.iscas.ac.cn/summer2020/downloads/summit/"+this.state.showdata.ppt}>下载PPT</a>
                                                                     : ""
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
                                                                 <div className="SummitMeetThreeTableItemTime">{item.time}</div>
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
                                                                {
                                                                    this.state.showdata.ppt?
                                                                  
                                                                    <a className="SummitModalButtonPPT" href={"https://isrc.iscas.ac.cn/summer2020/downloads/summit/"+this.state.showdata.ppt}>下载PPT</a>
                                                                     : ""
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
                        </div>



                        <div  className="SummitMeetThreeContent SummitFour SanchorFourItem">
                            <div className="SummitMeetThreeContentTimeline ">
                                <div className="HowitworksTimelineItem timeline8"  >
                                    <div className="HowitworksTimelineItemIcon"></div>
                                    <div className="HowitworksTimelineItemCons">
                                        <div className="HowitworksTimelineItemLine">
                                            <div className="HowitworksTimelineItemLineTime">09:00-12:00</div>
                                            <div className="HowitworksTimelineItemLineTitle">
                                                <div className="HowitworksTimelineItemLineTitleBig">11月15日 暑期2020活动优秀学生报告</div>                                              
                                            </div>                                          
                                        </div>                                                                        
                                    </div>
                                </div>
                            </div>
                        
                        </div>

                        <div className="SummitPosition SanchorFiveItem">
                            <div className="SummitPositionHeader">
                                <span className="SummitPositionHeaderText">会议位置指引</span>
                            </div>
                            <div className="SummitPositionWrapper">
                                {
                                    this.state.dataall.SanchorFive.content.map((item,index)=>{
                                        return (
                                            <div className="SummitPositionItem" key={index}>
                                                <div className="SummitPositionItemTitle">{item.title}</div>
                                                <div className="SummitPositionItemDesc">
                                                    {
                                                        item.text.map((sitem,sindex)=>{
                                                            return (
                                                            <div className="SummitPositionItemDescItem" key={sindex}>· {sitem}</div>
                                                            )
                                                        })
                                                    }

                                                </div>

                                            </div>
                                        )
                                    })
                                }
                                 <div className="SummitPositionItem">
                                     {/* , */}
                                        <div className="SummitPositionItemTitle">4. 地图指示</div>
                                        <div className="SummitPositionItemMap">
                                        <Map  
                                            zoom={15}
                                            center={[118.891575,32.086512]}
                                            plugins={plugins}
                                            amapkey="f68ca6f00288d7ffc9bde45c934bb160">
                                            <Marker position={[118.891575,32.086512]} />
                                        </Map>

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
