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
    getLink(title){
        window.location.hash = "/"+title
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

    getActive(title){
        if(title === 'index'){
            return 'active'
        }
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
                                <NavLink key={index} to={'/'+item.title} >
                                    <div  
                                            
                                            className={["osscListItem",this.state.pageflag===item.title?'left0':'',item.title==="started"?"header-highlight":""].join(" ")}>
                                        
                                                    <span> {item.name}
                                                    {
                                                    item.name === '我要报名' ?
                                                    <img src={require("./../../img/fire.png")} alt="fire" style={{marginLeft: "5px"}}></img>
                                                    : ''
                                                }</span>
                                        
                                        
                                    </div>
                                </NavLink>  
                            )
                                
                            })
                        }
                    </div>
                    
                    <div className={["osscHeaderMobileList " ,this.state.moblieListFlag?"displayblock":""].join(" ")}>
                        <div className="osscClose" onClick={()=>this.closeHeaderList()}></div>
                        {
                            this.state.listLinks.map((item,index)=>{
                            return (
                                //<NavLink key={index} to={'/'+item.title}>
                                <div key={index}
                                onClick={()=>this.getLink(item.title)}
                                        className={["osscListItem",this.state.pageflag===item.title?'left0':''].join(" ")}>
                                       
                                                <span> {item.name}</span>

                                    
                                </div>
                                //</NavLink>  
                            )
                                
                            })
                        }
                    </div>
               </div>
            </div>
        )
    }
}