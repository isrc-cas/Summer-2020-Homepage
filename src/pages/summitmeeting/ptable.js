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
import './ptable.less';
import {SanchorTwo} from './data.js';

export default class Ptable extends React.Component{
    constructor(props){
       super(props)
       this.state ={
        SanchorTwo
       }
    }

 


    render(){
       
        return(         
            <div className="SummitTeyao SanchorTwoItem">
                <div className="SummitTeyaoHeader">
                    <div className="SummitTeyaoHeaderText">特邀嘉宾</div>
                </div>
                <div className="SummitTeyaoContent">
                    {
                        this.props.SanchorTwo.content.map((item,index)=>{
                            return (
                                <div className="SummitTeyaoItem" key={index}>
                                    <div 
                                        style={{backgroundImage: "url(" + require("./../../img/detail/"+item.img) + ")"}}
                                        className="SummitTeyaoImg"></div>
                                    <div className="SummitTeyaoName">
                                        <span className="SummitTeyaoNameSpan">{item.name}</span>
                                    </div>
                                    <div className="SummitTeyaoDesc">
                                        {
                                            item.desc.map((sitem,sindex)=>{
                                                return (
                                                <div className="SummitTeyaoDescItem" key={sindex}>{sitem}</div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

            </div>
         )
       
        
        
    }
}