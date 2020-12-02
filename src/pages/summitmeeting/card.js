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
import './index.less';
import './card.less';
import data from './list.json';

export default class Card extends React.Component{
    constructor(props){
       super(props)
       this.state ={
           data,
           clickIndex:"",
           height:180,
           modalwidth:1200,
       }
    }
    componentDidMount(){
        this.getmodalwidth();
        this.props.onRef(this);
       
    }

    getmodalwidth(){
        let mwidth = document.getElementsByClassName("SummitMeetThreeContent")[0].clientWidth;
        this.setState({
            modalwidth:mwidth
        })
    }

    getChi(msg){
        return {
            "tech":"技术专题论坛",
            "opensource":"开源专题论坛"
        }[msg] || "专题论坛"
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

    closeModal(){
        if(this.state.clickIndex){
            document.getElementsByClassName(this.state.clickIndex)[0].getElementsByClassName("CardModal")[0].style.height=0;
           }
        this.setState({
            clickIndex:""
        })
    }

    getClickIndex(event,indexx,index,indexl){
        event.stopPropagation();
        
       if(this.state.clickIndex){
        document.getElementsByClassName(this.state.clickIndex)[0].getElementsByClassName("CardModal")[0].style.height=0;
       }
        let selectindex = "CardItem_"+indexx+"_"+index+"_"+indexl;
        if (selectindex === this.state.clickIndex){
           
           this.closeModal()
        }else{
            
            let $CardModal = document.getElementsByClassName(selectindex)[0];
            let getheight = $CardModal.getElementsByClassName("SummitMeetThreeTableModalWrapper")[0].clientHeight;
            $CardModal.getElementsByClassName("CardModal")[0].style.height =`${getheight+50}px`;
            console.log(getheight)
            this.setState({
                clickIndex:selectindex
            })
        }

        
    }
    CardClick(event){
        this.closeModal()
    }

 


    render(){
       
        return(         
            <div className="Card" onClick={(event)=>{this.CardClick(event)}}>
               {
                   Object.keys(this.state.data).map((item,indexx)=>{
                       return (
                        <div className={["SummitMeetThreeTableOne", item].join(" ")} key={indexx}>
                            
                        <div className="SummitMeetThreeTableOneTile">
                            <span className="SummitMeetThreeTableOneTileText">{this.getChi(item)}</span>
                            <span className="SummitMeetThreeTableOneTileText backimg"></span>
                        </div>
                        {
                            this.state.data[item].map((ele,index)=>{
                                return (
                                    <div className="SummitMeetThreeTableContent" key={index}>
                                        <div  className={["SummitMeetThreeTableContentTitle",ele.name].join(" ")}>
                                            <span className="SMTTableContentTitle">
                                                <span>{ele.chi}</span>
                                            </span>
                                            <div className="SummitHeaderButton">
                                                {
                                                    ele.videourl?<a className="SummitVideoButton" href={ele.videourl}>观看回放</a>:""
                                                }
                                                {
                                                    ele.downurl?
                                                    <>
                                                    <a className="SummitDownButton" href={ele.downurl}>下载录播</a>
                                                    <span className="SummitDownNumber">
                                                        <div className="SummitDownNumberOne">提取码:</div>  
                                                        <div className="SummitDownNumberTwo">{ele.downnumber}</div>  
                                                    </span> 
                                                    
                                                    </>
                                                     
                                                     
                                                     :""
                                                }
                                                
                                            </div>
                                        </div>
                                        <div className="SummitMeetThreeTableContentWrapper">
                                            {
                                                ele.content.map((item,indexl)=>{
                                                    return (
                                                       <div className={"CardItem CardItem_"+indexx+"_"+index+"_"+indexl}  key={index+"_"+indexl} onClick={(event)=>this.getClickIndex(event,indexx,index,indexl)}>
                                                        <div className="SummitMeetThreeTableItem" >
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
                                                        <div className={["CardModal",this.state.clickIndex === "CardItem_"+indexx+"_"+index+"_"+indexl ? "show":""].join(" ")}>
                                                            <div className="SummitMeetThreeTableModal">
                                                            {
                                                                item.name ?
                                                                <div className="SummitMeetThreeTableModalWrapper">
                                                                    <div className="SummitMeetThreeTableModalHeader">
                                                                        <div 
                                                                            className="SummitMeetThreeTableModalHeaderIcon" 
                                                                            style={{backgroundImage: "url(" + require("./../../img/iconT/"+item.img) + ")"}}></div>
                                                                        <div className="SummitMeetThreeTableModalHeaderText">
                                                                            <div className="SummitMeetThreeTableModalName">
                                                                                <span>{item.name}</span>
                                                                                {
                                                                                    item.community? <span> | {item.community}</span>:""
                                                                                }
                                                                                <div className="CardClose" onClick={()=>{this.closeModal()}}></div>
                                                                              
                                                                                
                                                                            </div>
                                                                        

                                                                            {
                                                                                item.profile?<div className="SummitMeetThreeTableModalProfile">{item.profile}</div>:""
                                                                            }

                                                                        </div>
                                                                    </div>
                                                                        
                                                                    <div className="SummitMeetThreeTableuTitle">
                                                                        <span>{item.title}</span>
                                                                        <div className="SummitHeaderButton">
                                                                        {
                                                                            item.ppt?
                                                                        
                                                                            <a className="SummitModalButtonPPT" href={"https://isrc.iscas.ac.cn/summer2020/downloads/summit/"+item.ppt}>下载PPT</a>
                                                                            : ""
                                                                        }
                                                                        {
                                                                            ele.downurl?
                                                                            <>
                                                                            <a className="SummitDownButton" href={ele.downurl}>下载录播</a>
                                                                            <span className="SummitDownNumber">
                                                                                <div className="SummitDownNumberOne">提取码:</div>  
                                                                                <div className="SummitDownNumberTwo">{ele.downnumber}</div>  
                                                                            </span> 
                                                                            
                                                                            </>
                                                                            
                                                                            
                                                                            :""
                                                                        }
                                                                        </div>
                                                                    </div>
                                                                        
                                                                        {
                                                                            item.desc?<div className="SummitMeetThreeTableModalDesc">议题背景: {item.desc}</div>:""
                                                                        }
                                                                
                                                                        
                                                                    </div>:""
                                                            }
                                    
                                                            </div>

                                                        </div>

                                                       </div>
                                                    )
                                                })
                                            }
                                            {/* {
                                                this.getBack(ele.content.length)
                                            } */}

                                        </div>

                                        
                                    </div>
                                )
                            })
                        }
                        

                        </div>

                    )

                   })
               }


               

            </div>
         )
       
        
        
    }
}