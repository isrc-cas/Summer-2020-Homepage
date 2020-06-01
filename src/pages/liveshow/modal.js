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
import liveTwoCode from './../../img/index/twoCode.jpg';

export default class LiveModal extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            liveurl:'https://live.bilibili.com/22221041'
            
        }
       
    }
    goLogoLink(url){
       
        if(url){
            window.open(url)
        }
        
    }
    render(){
        return(
            <div className="LiveShowItem" >
                <div className="LiveShowItemHeader">
                    <div 
                        style={{backgroundImage:"url("+require("./../../img/index/"+this.props.item.profilelist[0].imgurl) + ")"}}
                        className="LiveShowItemHeaderImage"></div>
                    <div className="LiveShowItemHeaderTitle">
                        <div className="LiveShowItemHeaderTitleOne">{this.props.item.title}</div>
                        {
                            this.props.flag === 'over' ?
                                <>
                                 <div className="LiveShowItemHeaderTitleTwo LiveShowItemOver">{this.props.item.time}</div>
                                   
                                    <div 
                                        onClick={()=>{this.goLogoLink(this.props.item.url)}}
                                        className="LiveShowItemHeaderButton" >观看回放</div>
                                     {
                                         this.props.item.ppt?
                                         <a     
                                        download={this.props.item.pptname}  
                                        href = {this.props.item.ppt}                    
                                        className="LiveShowItemHeaderPPTX" >下载PPT</a>:""
                                     }
                                </>
                            :
                            <div>
                                <div className="LiveShowItemHeaderTitleTwo">{this.props.item.time}</div>
                            <div 
                                onClick={()=>{this.goLogoLink(this.state.liveurl)}}
                                className="LiveShowItemHeaderButton" >观看直播</div>
                            </div>

                        }
                       
                    </div>
                    <div className="LiveShowItemHeaderTwoCode">
                        <img src={liveTwoCode} alt="直播二维码"/>
                        <span className="mobiledisplaynone">可扫码观看 </span>
                    </div>
                </div>
                {
                    this.props.item.profilelist.map((iteml,indexl)=>{
                        return(
                            <div className="LiveShowItemProfile" key={indexl}>
                                <span className="LiveShowItemProfileName">{iteml.name}:</span><span className="LiveShowItemProfileContent">&nbsp;&nbsp;{iteml.profile}</span>
                            </div>
                        )
                    })
                }
                
                {
                    this.props.item.speechcontent?
                    <div className="LiveShowItemProfile">
                        <span className="LiveShowItemProfileName">议题简介:</span>
                        <span className="LiveShowItemProfileContent">&nbsp;&nbsp;{this.props.item.speechcontent}</span>
                    </div>
                    :
                    ""
                }

            </div>
        )
    }
}