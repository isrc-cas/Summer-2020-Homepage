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
import './banner4.less';
import './index.css';
import {logolistMap,holderlist} from './logo.js';
import { Carousel } from 'antd';
import data from '../liveshow/data';
import liveTwoCode from './../../img/index/twoCode.jpg';


export default class Index extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data,
            buttonLeft:false,
            buttonRight:true,
            logolistMap,
            holderlist,
            videoFlag:false,
        }
       
    }
    componentDidMount() {
       
        let $list = document.getElementsByClassName("indexHomeLiveList")[0];
        $list.style.transform = 'translateX(0)';
        if (window.location.hash.includes("cooperation")) { //go to cooperation list
            document.getElementById("cooperation").scrollIntoView();
        }
    }
    move(flag){
       
        let $list = document.getElementsByClassName("indexHomeLiveList")[0]
        let movNumber = $list.style.transform.split("(")[1].split("px")[0]
        let windowwidth = window.innerWidth;
        let widthItem = 1227;
        if(windowwidth>700 && windowwidth<1200){
            widthItem = Math.round(windowwidth*0.9)
        }
        if(flag === 'left'){
            movNumber = Number(movNumber) + Number(widthItem)
        }
        if(flag === 'right'){
            
            movNumber = Number(movNumber) - Number(widthItem) ;
               
        }
        console.log(movNumber)
        if(Number(movNumber) === 0){
            this.setState({
                buttonLeft:false
            })
        }else{
            if(this.state.buttonLeft !== true){
                this.setState({
                    buttonLeft:true
                })
            }
        }
        
        if(Math.round(Number(movNumber)/widthItem) === -1){
            this.setState({
                buttonRight:false
            })
        }else{
            if(this.state.buttonRight !== true){
                this.setState({
                    buttonRight:true
                })
            }
        }
        
        $list.style.transform = 'translateX('+ movNumber + 'px)'
        console.log($list.style.transform)   
    }

    getOrList(orList){
        let divContainer = [];
        orList.map((item,index)=>{
            divContainer.push(<div 
                className={["indexHomOrItem",item.url?'':'cursordefault'].join(" ")}
                
                key={index} 
                onClick={()=>{this.goLogoLink(item.url)}}
                style={{backgroundImage: "url("+require("./../../img/logolist/"+item.img) + ")"}}>
                </div>)
            return 0;
        })
        return divContainer
    }

    goLogoLink(url){
        if(url){
            window.open(url)
        }
        
    }
    liveUrl(time){
        if(time.split(" ").length>1){
            window.open(this.state.data.liveurl)
        }else{
            window.location.hash = "liveshow"
        }
        
    }

    getOpensource(){
        // const logolen = 30;
        var divContainer = []
        const divider = Object.keys(this.state.logolistMap);
        divider.map((item,index1)=>{
            
            this.state.logolistMap[item].map((item,index)=>{
                divContainer.push(<div 
                    key = {index1+'_'+index}
                    onClick={()=>{this.goLogoLink(item.url)}}
                    style={{backgroundImage:"url("+require("./../../img/logolist/"+item.img) + ")"}}
                    className={["indexHomOpensourceItem",item.url?'':'cursordefault'].join(" ")}></div>)
                return 0;
            })
            divContainer.push(<br key={index1}/>)
            return 0;
        })
        return divContainer
    }

    getTextTwo(){
        const data = [
            {
                text:'参与暑期2020活动，给你的编程能力加个buff',
                img:'icon1'
            },
            {
                text:'结识更多的小伙伴和技术大咖，一起热爱开源',
                img:'icon2'
            },
            {
                text:'软件所与开源社区将为您匹配资深的社区导师',
                img:'icon3'
            },
            {
                text:'根据活动中的“战绩”，您将获得活动荣誉奖杯和奖金奖励',
                img:'icon4'
            },
        ]

        let div = []
        data.map((item,index)=>{
            div.push(<div className="indexHomeIconItem" key={index}>
                {/* <div className="indexHomeIconItemIcon" style={{backgroundImage: "url("+require("./../../img/index/"+item.img) + ")"}}></div> */}
                <div className={["indexHomeIconItemIcon",item.img].join(" ")}></div>
                <div className="indexHomeIconItemText">{item.text}</div>
            </div>)
            return 0;
        })
        return div;
    }

    getButtons(){
        let div = [];
        const data = [
            {
                img:'3_1.jpg',
                name:'浏览日程',
                url:'howitworks?to=timeline',
            },
            {
                img:'3_2.jpg',
                name:'活动进程',
                url:'started',
            },
            {
                img:'3_3.jpg',
                name:'浏览项目',
                url:'organisations',
            },
        ]
        data.map((item,index)=>{
            div.push(
                <div 
                    onClick={()=>{this.goLink(item.url)}}
                    className="indexHomeThirdButtonItem" key={index}>
                    <div 
                        style={{backgroundImage: "url("+require("./../../img/index/"+item.img) + ")"}}
                        className="indexHomeThirdButtonItemImg">
                    </div>
                    <div className="indexHomeThirdButtonItemText">
                        {item.name}
                    </div>
                </div>
            )
            return 0
        })
        return div
    }

    goLink(url){
        window.location.hash = url
    }

    
    


    render(){
       
       
        let settings = {
           
            speed: 500,
            autoplaySpeed: 5000,
          }

        return(
           <div className="indexHomeZ">
               <div className="indexHomeOne">
               <Carousel autoplay {...settings}>

                    <div className="indexHomeOneBanner indexHomeOneBannerOne">
                            <div className="indexHomeOneWrapper content1200">
                                <div className="indexHomeOneTextCons">
                                <div className="indexHomeOneTextConsEngOne">
                                 ISCAS & openEuler Community
                                </div>
                                <div className="indexHomeOneTextConsEngTwo">

                                Open Source Promotion Plan <span className="mobiledisplaynone">-</span><br className="indexHomeOneTextConsEngTwoNone"/> Summer 2020
                                </div>
                                {/* <div className="indexHomeFourBannerTitle">
                                    <span className="One">共献·开源  </span>
                                    <span className="Two">
                                        <span>开源软件供应链 2020 峰会</span>
                                    </span>
                                </div> */}

                                <div className="indexHomeOneTextWrapper">

                                     我们在 2020年11月14日-15日 于南京玄武苏宁诺富特酒店 盛大举行<span className="blue">2020峰会</span>，<br className="mobiledisplaynone"/>
                                     我们会在官网上线全程<span className="blue">录播</span>，敬请关注“2020峰会”页录播回放链接！
                                </div>

                                <div className="indexHomeOneListenItem fire"  onClick={()=>{this.goLogoLink('https://wx.vzan.com/live/tvchat-425619793#/')}}>
                                    <span className="indexHomeOneListenItemText">11月14日-15日  开源软件供应链2020峰会 录播</span>
                                    <span className="indexHomeOneListenItemTextButton">了解更多 </span>
                                </div>
                                <div className="indexHomeOneListenItem" onClick={()=>{this.goLink('announcement')}}>
                                    <span className="indexHomeOneListenItemText">10月底  结项评审已结束，组委会公告项目评审结果</span>
                                    <span className="indexHomeOneListenItemTextButton">查看公示 </span>
                                </div>
                                <div className="indexHomeOneListenItem " onClick={()=>{this.goLogoLink('https://space.bilibili.com/578074510/channel/detail?cid=132789')}}>
                                    <span className="indexHomeOneListenItemText">5月-7月 我们举办了“大咖说开源”讲座活动</span>
                                    <span className="indexHomeOneListenItemTextButton">精彩回放</span>
                                </div>
                            </div>

                            </div>
                    </div>
                    <div className="indexHomeOneBanner indexHomeOneBannerFour">
                        <div className="indexHomeFourBanner content1200"  onClick={()=>{this.goLink('summitmeeting')}}>
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
                           
                            <div className="indexHomeFourBannerMainTile">峰会将围绕现代软件构建模式的关键供应关系网络——开源软件供应链展开深入解读，论道开源最新技术前沿话题</div>
                            <div className="SummitMeetTextTwo" >主办方：中国科学院软件研究所、openEuler社区  |  承办方：中国科学院软件研究所南京软件技术研究院 
                            <br className= "phonenone" />
                            <span className="phoneshow"> | </span>
                             赞助方：华为技术有限公司  |  协办方：江苏润和软件股份有限公司、江苏鲲鹏•昇腾生态创新中心、南京中科启明星软件有限公司 | 
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
                            <div className="indexHomeFourText4">2020.11.14-2020.11.15 于南京盛大开幕，官网全程在线直播！了解更多></div>
                        </div>
                    </div>
                    <div className="indexHomeOneBanner indexHomeOneBannerThree">
                        <div className="indexHomeThreeBanner content1200">
                            <div className="indexHomeThreeBannerTitle"></div>
                            <div className="indexHomeThreeBannerTime">6.3-6.5/已结束</div>
                            <div className="indexHomeThreeBannerTextCommittee">组委会联合开源社区通过
                                <span 
                                        className="indexToBilibili" 
                                        onClick={()=>{this.goLogoLink('https://live.bilibili.com/22221041')}}>
                                            Bilibili直播
                                </span>
                            </div>
                            <div className="indexHomeThreeBannerTextCommittee">为大家全方位解读活动细则，深入剖析开源社区及项目。在线问答，解疑释惑！</div>
                            <div className="indexHomeThreeBannerButton" onClick={()=>{this.goLogoLink('https://space.bilibili.com/578074510/channel/detail?cid=132789')}}>观看回放</div>
                        </div>
                    </div>
                   <div className="indexHomeOneBanner indexHomeOneBannerTwo">
                            <div className="indexHomeTwoWrapper content1200">                            
                                <div className="indexHomeOneDakaTitle"></div>
                                <div className="indexHomeOneDakaCompany">
                                        <span>中国科学院软件研究所</span>
                                        <span className="mobiledisplaynone">&nbsp;&nbsp;|&nbsp;&nbsp;</span>
                                        <span>openEuler 社区</span>
                                        <span className="mobiledisplaynone">&nbsp;&nbsp;|&nbsp;&nbsp;</span>
                                        <span>开源社</span>
                                </div>
                              
                                <div className="indexHomeOneDakaDescriptionTwo">
                                大咖讲座将为大家带来开源理念的系列介绍，帮助深入了解开源文化、参与开源社区的方式方法。
                                <span 
                                    className="indexToBilibili" 
                                    onClick={()=>{this.goLogoLink('https://live.bilibili.com/22221041')}}>
                                        讲座通过 Bilibili 网站进行直播</span>,
                                    每周一期进行直播。
                                </div>
                                <div 
                                    onClick={()=>{this.goLink('liveshow')}}
                                    className="indexHomeOneDakaButtonMore">了解更多</div>
                           

                            </div>
                    </div>
                   
                     </Carousel>

               </div>
               <div className="indexHomeVideo">
                   <div className="indexHomeVideoContainer content1200">
                        <div className="indexHomeVideoTitle">专家寄语</div>
                        <div  className="indexHomeVideoItem">
                            
                            <div className="indexHomeVideoSelf" >
                                <div className="indexHomeVideoSelfOveflay"></div>
                                <div className="indexHomeVideoSelfiframe">
                                    
                                    <iframe title="iframetitle"  src="//player.bilibili.com/player.html?aid=413293097&bvid=BV1pV411C7Bs&page=1&high_quality=1" scrolling="no" border="0" frameBorder="no" framespacing="0" allowFullScreen={true}> </iframe>
                                </div>
                                <div className="indexHomeVideoSelfCommitte">
                                    <div className="indexHomeVideoSelfCommitteText">本届活动邀请的指导委员会专家们通过云录制视频给同学们寄语，鼓励大家共同投入开源！</div>
                                    <div className="indexHomeVideoSelfCommitteButton" onClick={()=>{this.goLink('howitworks?to=committee')}}>指导委员会名单</div>
                                    <div className="indexHomeVideoSelfBilibili">
                                       
                                        <img className="indexHomeVideoSelfBilibiliImage" src={liveTwoCode} alt="二维码"></img>
                                        <div className="indexHomeVideoSelfBilibiliText">
                                            <div className="indexHomeVideoSelfBilibiliTextOne">扫一扫关注B站主页查看更多精彩视频</div>
                        
                                            <div className="indexHomeVideoSelfBilibiliButton" onClick={()=>{this.goLogoLink(this.state.data.spaceurl)}}>查看主页</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        
                      
                   </div>

               </div>
              
               
               <div className="indexHomeThirdWrapper content1200">
                    <div className="indexHomeThirdButton">
                        {this.getButtons()}
                    </div>
                </div>
               <div className="indexHomeLiveShowWrapper">
                   <div className="indexHomeLiveShowContent content1200">
                       <div className="indexHomeLiveTitle">
                       “大咖说开源” 系列直播讲座
                       </div>
                       {/* <div 
                            onClick={()=>{this.move("left")}}
                            className={["indexHomeLiveListContentButtonLeft",this.state.buttonLeft?'':'displaynone'].join(" ")}></div>
                        <div 
                            onClick={()=>{this.move("right")}}
                            className={["indexHomeLiveListContentButtonRight",this.state.buttonRight?'':'displaynone'].join(" ")}></div> */}
                       <div className="indexHomeLiveListContent">
                           
                               
                           
                            <div className="indexHomeLiveList">
                                {
                                    this.state.data.speechlist.map((item,index)=>{
                                        return (
                                           
                                           <div className="indexHomeLiveListItem" key={index} onClick={()=>{this.liveUrl(item.time)}}>
                                                <div 
                                                    style={{backgroundImage:"url("+require("./../../img/index/"+item.profilelist[0].imgurl) + ")"}}
                                                    className="indexHomeLiveListItemImage">                                                   
                                                </div>
                                                <div className="indexHomeLiveListItemDetail">
                                                    <div className="indexHomeLiveListItemTitle" title={item.title}>{item.title}</div>
                                                    <div className="indexHomeLiveListItemName">
                                                    {
                                    
                                                        item.profilelist.map((iteml,indexl)=>{
                                                            return (
                                                                <span  key={indexl}>{iteml.name}</span>
                                                            )
                                                        })
                                                        
                                                    }</div>
                                                    <div className="indexHomeLiveListItemTime">{item.time}</div>
                                                    <div className="indexHomeLiveListItemText">了解更多 / 右侧可扫码观看 </div>
                                                    <div className="indexHomeLiveListItemTwoCode">
                                                        <img src={liveTwoCode} alt="直播二维码"/>
                                                    </div>
                                                </div>
                                            </div>
                                        )

                                    })
                                }
                                
                            </div>
                       </div>
                       <div onClick={()=>{this.goLink('liveshow')}} className="indexHomeLiveButtonMore">更多讲座</div>

                   </div>

               </div>

               <div className="indexHomeSecond">        
                    <div className="indexHomeSecondText ">
                        <span>我们鼓励研究人员、开源爱好者、在校师生参与开源软件的开发与维护，促进开源软件在国内的发展</span>
                        <br className="mobiledisplaynone"/>
                        <span>和优秀开源软件社区建设，增加开源项目在国内的活跃度，在开源领域与世界接轨。</span>
                    </div>
                    <div className="indexHomeSecondWrapper content1200">
                        <div className="indexHomeSecondTextCons">
                            
                                {this.getTextTwo()}
                        
                        </div>
                    </div>               
               </div>
              

               <div className="indexHomeThird">
                        <div className="indexHomeThirdWrapper content1200">
                            <div className="indexHomeThirdTitle">主办单位</div>
                            <div className="indexHomeOrList holder">
                                    {this.getOrList(this.state.holderlist.holder)}
                            </div>
                            <div className="indexHomeThirdTitle">承办单位</div>
                            <div className="indexHomeOrList">
                                <div 
                                    
                                    className="indexHomOrItem nanjing" ></div>                         
                            </div>
                            <div id="cooperation" className="indexHomeThirdTitle">协办单位</div>
                            <div className="indexHomeOrList">
                                    {this.getOrList(this.state.holderlist.cooperation)}       
                            </div>
                            <div className="indexHomeThirdTitle">合作单位</div>
                            {/* <div className="indexHomeOrList relateThree">
                                <div className="indexHomOrItem jisuan" ></div>
                                <div className="indexHomOrItem hanwuji" ></div> 
                                <div className="indexHomOrItem tengxun" ></div>                         
                            </div> */}
                            <div  className="indexHomeOrListOpensource">
                                {this.getOpensource()}
                            </div>
                            <div className="HowitworksCommitteePinyin">*按单位名称英文字母、中文拼音字母排序</div>
                        </div>
               </div>
           </div>
        )
    }
}
