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

export default class Summitmeeting extends React.Component{
    constructor(props){
       super(props)
       this.state ={
        holderlist,
        title:["操作系统","虚拟化&云原生","人工智能","大数据","分布式系统"],
        datalist:[
           [
            {
                "system":"操作系统&编译器"
            },
            {
                "yun":"虚拟化&云原生"
            },
            {
                "ai":"人工智能"
            },
            {
                "bigdata":"大数据"
            },
            {
                "distributedsystem":"分布式系统"
            }
           ],
           [
            {
                "culture":"开源文化&开源商业"
            },
            {
                "education":"开源&教育"
            }, 
           ]
        ]
       }
    }
   
    
 


    render(){
       
        return(
            <div className="Summitmeeting">
                <div className="indexHomeOneBanner indexHomeOneBannerFour">
                    <div className="indexHomeFourBanner content1200">
                        <div className="indexHomeFourBannerTitle">重磅! “开源软件供应链 2020 峰会”</div>
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
                        <div className="SummitMeetTextOne">专题论坛议题火热征集中！</div>
                    </div>
                   
                </div>
                <div className="SummitMeetTwo">
                    <div className="SummitMeetTwoContent">
                            <div className="SummitMeetTwoContentRight">
                                <div className="SummitMeetTwoContentRightOne">开源软件供应链 2020 峰会</div>
                                <div className="SummitMeetTwoContentRightTwo">2020年11月14日  于南京盛大开幕</div>
                            </div>
                            <div className="SummitMeetTwoContentMiddle">
                                <span>峰会将围绕现代软件构建模式的关键供应关系网络 — 开源软件供应链展开深入解读，</span><br/>
                                <span>邀请全国各大高校及研究机构老师代表、企业技术专家、开源社区大咖等齐聚南京，共同论道开源最新技术前沿话题及发展趋势</span>
                            </div>
                    </div>
                </div>
                <div className="SummitMeetThree">
                    <div className="SummitMeetThreeContent">
                        <div className="SummitMeetThreeContentTitle">7 大专题论坛分会场</div>
                        <div className="SummitMeetThreeTableOne">
                            <div className="SummitMeetThreeTableOneTile">
                                <span className="SummitMeetThreeTableOneTileText">技术专题论坛</span>
                                <span className="SummitMeetThreeTableOneTileText backimg"></span>
                            </div>
                            <div className="SummitMeetThreeTableContent">
                                {
                                    this.state.title.map((item,index)=>{
                                        return (
                                            <div className="SummitMeetThreeTableItem" key={index}>
                                                <div className="SummitMeetThreeTableItemContent">
                                                    <div   
                                                        className={["SummitMeetThreeTableItemContentImage","backimg"+index].join(" ")}>
                                                            
                                                        
                                                    </div>
                                                    <div className="SummitMeetThreeTableItemContentText">{item}</div>
                                                </div>
                                                <div className="SummitMeetThreeTableItemBack"></div>
                                            </div>
                                        )
                                    })
                                }
                            </div>

                        </div>
                        <div className="SummitMeetThreeTableOne two">
                            <div className="SummitMeetThreeTableOneTile ">
                                <span className="SummitMeetThreeTableOneTileText">开源专题论坛</span>
                                <span className="SummitMeetThreeTableOneTileText backimg"></span>
                            </div>
                            <div className="SummitMeetThreeTableContent">
                                <div className="SummitMeetThreeTableItem" >
                                    <div className="SummitMeetThreeTableItemContent">
                                        <div   
                                            className="SummitMeetThreeTableItemContentImage backimg5">                                    
                                        </div>
                                        <div className="SummitMeetThreeTableItemContentText">开源文化&开源商业专题</div>
                                    </div>
                                    <div className="SummitMeetThreeTableItemBack"></div>
                                </div>
                                <div className="SummitMeetThreeTableItem" >
                                    <div className="SummitMeetThreeTableItemContent">
                                        <div   
                                            className="SummitMeetThreeTableItemContentImage backimg6">                                    
                                        </div>
                                        <div className="SummitMeetThreeTableItemContentText">开源&示范性软件学院</div>
                                    </div>
                                    <div className="SummitMeetThreeTableItemBack"></div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                
            </div>
         )
       
        
        
    }
}