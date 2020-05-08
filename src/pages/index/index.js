import React from 'react';
import './index.less';
import logolistMap from './logo.js'


export default class Index extends React.Component{
    constructor(props){
        super(props);
        this.state = {
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
                        img:'hanwuji.jpg',
                        url:'http://www.cambricon.com/'
                    },
                    {
                        img:'jisuan.jpg',
                        url:'http://www.ict.ac.cn/'
                    }
                ]
            }
        }
       
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
        window.open(url)
    }

    getOpensource(){
        // const logolen = 30;
        var divContainer = []
        const divider = Object.keys(this.state.logolistMap);
        divider.map((item,index1)=>{
            
            this.state.logolistMap[item].map((item,index)=>{
                divContainer.push(<div 
                    key = {index1+'_'+index}
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
       
       
       
        
        return(
           <div className="indexHomeZ">
               <div className="indexHomeOne">
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
               <div className="indexHomeThird">
                        <div className="indexHomeThirdWrapper content1200">
                            <div className="indexHomeThirdButton">
                                {this.getButtons()}
                            </div>
                            <div className="indexHomeThirdTitle">主办单位</div>
                            <div className="indexHomeOrList holder">
                                    {this.getOrList(this.state.logoMain.holder)}
                            </div>
                            <div className="indexHomeThirdTitle">承办单位</div>
                            <div className="indexHomeOrList">
                                <div 
                                    onClick={()=>{this.goLogoLink('https://nsi.jit.edu.cn')}}
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