import React from 'react';
import data from './data.json';
import './index.less';


export default class LiveShow extends React.Component{

    constructor(props){
        super(props)
        this.state={
            data,
        }
    }
    componentDidMount() {
        window.scrollTo(0,0);
    }
    
    goLogoLink(url){
        if(url){
            window.open(url)
        }
        
    }

    render(){
        return(
            <div className="LiveShow"> 
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
                       
                    

                    </div>
                </div>
                <div className="LiveShowWrapper">
                    <div className="LiveShowContent content1200">
                        {
                            this.state.data.speechlist.map((item,index)=>{
                                return (
                                    <div className="LiveShowItem" key={index}>
                                        <div className="LiveShowItemHeader">
                                            <div 
                                                 style={{backgroundImage:"url("+require("./../../img/index/"+item.profilelist[0].imgurl) + ")"}}
                                                className="LiveShowItemHeaderImage"></div>
                                            <div className="LiveShowItemHeaderTitle">
                                                <div className="LiveShowItemHeaderTitleOne">{item.title}</div>
                                                <div className="LiveShowItemHeaderTitleTwo">{item.time}</div>
                                                <div 
                                                     onClick={()=>{this.goLogoLink(this.state.data.liveurl)}}
                                                    className="LiveShowItemHeaderButton" >观看直播></div>
                                            </div>
                                            <div className="LiveShowItemHeaderTwoCode">
                                                <span className="mobiledisplaynone">可扫码观看 </span>
                                            </div>
                                        </div>
                                        {
                                            item.profilelist.map((iteml,indexl)=>{
                                                return(
                                                    <div className="LiveShowItemProfile" key={indexl}>
                                                        <span className="LiveShowItemProfileName">{iteml.name}:</span><span className="LiveShowItemProfileContent">&nbsp;&nbsp;{iteml.profile}</span>
                                                    </div>
                                                )
                                            })
                                        }
                                        
                                        {
                                            item.speechcontent?
                                            <div className="LiveShowItemProfile">
                                                <span className="LiveShowItemProfileName">议题简介:</span>
                                        <span className="LiveShowItemProfileContent">&nbsp;&nbsp;{item.speechcontent}</span>
                                            </div>
                                            :
                                            ""
                                        }

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