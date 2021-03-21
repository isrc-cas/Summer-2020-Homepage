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
import './mobile.less';
import './ipad.less';
import {listLinks} from './listLink.js';
import {NavLink} from 'react-router-dom';
import {titleChange} from './../../config/titleChange.js';


// var withl = window.innerWidth

// if(withl<1200 && withl>700){
   
//     //1.0 判定为移动手机设备
//     var scaleIndex = withl/1200-0.014;
//     document.getElementsByTagName("body")[0].style.transform = "scale("+scaleIndex+")";
//     document.getElementsByTagName("body")[0].style.transformOrigin = "left top"
// }






    

export default class Header extends React.Component{
    constructor(props){
        super(props);
        this.state={
            listLinks,
            pageflag:'index',

            moblieListFlag:false,
            
        }

       
      
    }

    componentDidMount(){
       
         titleChange();
        setTimeout(()=>{
            let hashopl = window.location.hash.split("#/");         
            if(hashopl[1] === ""){
                window.history.replaceState('','',window.location.pathname)
            }
        },5) 

    }

    gohash(url){
        window.location.hash = "/"+url
    }
    getLink(title){
        this.gohash(title)
        this.closeHeaderList()
    }

    getHeaderList(){
        this.setState({
            moblieListFlag:true
        })
    }
    closeHeaderList(){
        this.setState({
            moblieListFlag:false
        })
    }

    goHashUrl(item){
        const title = item.title
        this.setState({
            pageflag:title
        })
        
        if(title === 'summer2021'){
            window.open(item.link)
            return
        }
        if(title !== 'acall'){
            this.gohash(title)
        }     
    }

    goAcLink(title){
        this.setState({
            pageflag:'acall'
        })
        this.gohash(title)
    }



    render(){
        return(
            <div className="osscHeader">
               <div className="osscHeaderContent content1200">
                   
                   <NavLink to="/index">
                    <div className="osscHeaderLogo"></div>
                    </NavLink>
                    <div className="ossHeaderMobileIcon" onClick={()=>this.getHeaderList()}></div>
                   
                    <div className="osscHeaderList">
                        {
                            this.state.listLinks.map((item,index)=>{
                            return (
                                
                                    <div  className="osscLItem" key={index}>
                                        <div  
                                            className={["osscListItem",item.title,this.state.pageflag===item.title?'left0':''].join(" ")} 
                                            onClick={()=>{this.goHashUrl(item)}}>
                                            <span > {item.name} </span>                         
                                        </div>
                                        {
                                            item.content?
                                            <div className="osscListLine">
                                                {
                                                    item.content.map((sitem,sindex)=>{
                                                        return(
                                                            <div className="osscListLineItem" key={sindex} onClick={()=>{this.goAcLink(sitem.title)}}>{sitem.name}</div>
                                                        )
                                                    })
                                                }

                                            </div>:""
                                            }        
                                    </div>
                               
                            )
                                
                            })
                        }
                    </div>
                    
                    <div className={["osscHeaderMobileList " ,this.state.moblieListFlag?"displayblock":""].join(" ")}>
                        <div className="osscClose" onClick={()=>this.closeHeaderList()}></div>
                        {
                            this.state.listLinks.map((item,index)=>{
                            return (
                                item.content?'':
                                <div key={index}
                                    onClick={()=>this.goHashUrl(item)}
                                    className={["osscListItem",item.title].join(" ")}>
                                
                                    <span> {item.name}</span>                     
                                </div>                                               
                                 )                                
                            })
                        }
                        {
                            this.state.listLinks[5].content.map((sitem,sindex)=>{
                            return (
                            
                            <div key={sindex}
                                onClick={()=>this.goAcLink(sitem.title)}
                                className="acall osscListItem">
                               
                                <span> {sitem.name}</span>                     
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