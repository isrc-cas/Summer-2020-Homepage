import React from 'react';
import './index.less';
import './index.css';
import logolistMap from './logo.js';
import { Carousel } from 'antd';
import data from './../liveshow/data.json';


export default class Index extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data,
            buttonLeft:false,
            buttonRight:true,
            logolistMap,
            logoMain:{
                holder: [
                    {
                        img:'iscaslogo.jpg',
                        url:'http://www.iscas.ac.cn'
                    },
                    {
                        img:'openeuler.jpg',
                        url:'https://openeuler.org/zh/'
                    }
                ],
                cooperation: [
                    {
                        img:'huawei.jpg',
                        url:'https://www.huawei.com/cn/'
                    },
                    {
                        img:'zhongkeruan.jpg',
                        url:'http://www.sinosoft.com.cn/'
                    },
                    {
                        img:'huaruijinrong.jpg',
                        url:'http://www.archforce.cn'
                    },
                    
                   
                ]
            }
        }
       
    }
    componentDidMount() {
        window.scrollTo(0,0); 
        let $list = document.getElementsByClassName("indexHomeLiveList")[0] 
        $list.style.transform = 'translateX(0)'
    }
    move(flag){
       
        let $list = document.getElementsByClassName("indexHomeLiveList")[0]
        let movNumber = $list.style.transform.split("(")[1].split("px")[0]
        console.log(flag)
        if(flag === 'left'){
            movNumber = Number(movNumber) + 1227
        }
        if(flag === 'right'){
            
            movNumber = Number(movNumber) - 1227 ;
               
        }
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
        
        if(Math.round(Number(movNumber)/1200) === -2){
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
                className="indexHomOrItem" 
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
                    className="indexHomOpensourceItem"></div>)
                return 0;
            })
            divContainer.push(<br key={index1}/>)
            return 0;
        })
        // this.state.logolistMap.map((item,index)=>{
        //     divContainer.push(<div 
        //         key = {index}
        //         style={{backgroundImage:"url("+require("./../../img/logolist/"+item.img) + ")"}}
        //         className="indexHomOpensourceItem"></div>)
        //     return 0;
        // })
        return divContainer
    }

    getTextTwo(){
        const data = [
            {
                text:'参与暑期2020活动，给你的编程能力加个buff',
                img:'icon1'
            },
            {
                text:'结识更多的小伙伴和技术大牛，一起热爱开源',
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
                name:'如何报名',
                url:'started',
            },
            {
                img:'3_3.jpg',
                name:'浏览项目',
                url:'organisations?to=head',
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
                                / ISCAS & openEuler Community
                                </div>
                                <div className="indexHomeOneTextConsEngTwo">
                                Open Source Promotion Plan <span className="mobiledisplaynone">-</span><br className="indexHomeOneTextConsEngTwoNone"/> Summer 2020
                                </div>
                                <div className="indexHomeOneTextConsChi">开源软件供应链点亮计划鼓励大家关注开源软件和开源社区，培养和发掘更多优秀的开发者。</div><br/>
                                <span className="indexHomeOneTextConsChi">活动将在暑期进行，我们将与开源社区紧密合作，提供一对一的导师指导，邀技术大牛免费讲座。</span>
                                {/* <span className="indexHomeOneTextConsChi two">我们鼓励研究人员、开源爱好者、在校师生参与开源软件的开发与维护，
                                促进开源软件在国内的发展和优秀开源软件社区建设，增加开源项目在国内的活跃度，在开源领域与世界接轨。</span> */}
                            </div>
                            <div className="indexHomeOneImage"></div>

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
                                <div className="indexHomeOneDakaDescription">
                                    大咖讲座将为大家带来开源理念的系列介绍，帮助深入了解开源文化、参与开源社区的方式方法。
                                    <br></br>
                                    讲座通过 Bilibili 网站进行直播，由中科院软件所提供直播的技术支持，每周一期固定时间进行直播。
                                </div>
                                <div 
                                    onClick={()=>{this.goLink('liveshow')}}
                                    className="indexHomeOneDakaButtonMore">了解更多</div>
                           

                            </div>
                    </div>
                    </Carousel>

               </div>
               <div className="indexHomeSecond">
                    {/* <div> */}
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


                    {/* </div>  */}
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
                       <div 
                            onClick={()=>{this.move("left")}}
                            className={["indexHomeLiveListContentButtonLeft",this.state.buttonLeft?'':'displaynone'].join(" ")}></div>
                        <div 
                            onClick={()=>{this.move("right")}}
                            className={["indexHomeLiveListContentButtonRight",this.state.buttonRight?'':'displaynone'].join(" ")}></div>
                       <div className="indexHomeLiveListContent">
                           
                               
                           
                            <div className="indexHomeLiveList">
                                {
                                    this.state.data.speechlist.map((item,index)=>{
                                        return (
                                            <div className="indexHomeLiveListItem" key={index}>
                                                <div 
                                                    style={{backgroundImage:"url("+require("./../../img/index/"+item.profilelist[0].imgurl) + ")"}}
                                                    className="indexHomeLiveListItemImage">                                                   
                                                </div>
                                                <div className="indexHomeLiveListItemDetail">
                                                    <div className="indexHomeLiveListItemTitle" title={item.title}>{item.title}</div>
                                                    <div className="indexHomeLiveListItemName">{item.profilelist[0].name}</div>
                                                    <div className="indexHomeLiveListItemTime">{item.time}</div>
                                                    <div className="indexHomeLiveListItemText">直播时间 / 右侧可扫码观看 </div>
                                                    <div className="indexHomeLiveListItemTwoCode"></div>
                                                </div>
                                            </div>
                                        )

                                    })
                                }
                                
                            </div>
                       </div>
                       <div onClick={()=>{this.goLink('liveshow')}} className="indexHomeLiveButtonMore">更多讲座></div>

                   </div>

               </div>

               <div className="indexHomeThird">
                        <div className="indexHomeThirdWrapper content1200">
                            {/* <div className="indexHomeThirdButton">
                                {this.getButtons()}
                            </div> */}
                            <div className="indexHomeThirdTitle">主办单位</div>
                            <div className="indexHomeOrList holder">
                                    {this.getOrList(this.state.logoMain.holder)}
                            </div>
                            <div className="indexHomeThirdTitle">承办单位</div>
                            <div className="indexHomeOrList">
                                <div 
                                    
                                    className="indexHomOrItem nanjing" ></div>                         
                            </div>
                            <div className="indexHomeThirdTitle">协办单位</div>
                            <div className="indexHomeOrList">
                                    {this.getOrList(this.state.logoMain.cooperation)}       
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
                        </div>
               </div>
           </div>
        )
    }
}