import React from 'react';
import data from './data.js';
import './index.less';
import LiveModal from './modal.js'


export default class LiveShow extends React.Component{

    constructor(props){
        super(props)
        this.state={
            data,
        }
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
                                   {this.state.data.livedata}
                        </div>
                        <div className="indexHomeOneDakaDescriptionTwo">
                        大咖讲座将为大家带来开源理念的系列介绍，帮助深入了解开源文化、参与开源社区的方式方法。讲座通过 Bilibili 网站进行直播，每周一期进行直播。
                        </div>
                       
                    

                    </div>
                </div>
                <div className="LiveShowWrapper">
                    <div className="LiveShowContent content1200">
                        <div className="LiveShowContentTitle">即将直播</div>
                        {
                            this.state.data.speechlist.map((item,index)=>{
                                return (
                                    item.url?"":
                                    <LiveModal 
                                    key = {index}
                                    item ={item}/>

                                )
                            })
                        }
                        <div className="LiveShowContentTitle">历史直播</div>
                        {
                            this.state.data.speechlist.map((item,index)=>{
                                return (
                                    item.url?
                                    <LiveModal 
                                    key = {index}
                                    flag = "over"
                                    item ={item}/>:""

                                )
                            })
                        }
                        

                    </div>

                </div>
             
            </div>
        )
    }

}