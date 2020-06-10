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
import './mobile-start.less';
import data from './data.json'
export default class Start extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            data,
        };
    }

    /**
     * open markdown link in new tab.
     * @param {string} indexStr 
     */
    openInNewTab (indexStr) {
        var win;
        switch (indexStr) {
            case "student":
                win = window.open("https://isrc.iscas.ac.cn/summer2020/help/student.html#学生如何报名", '_blank');
                win.focus();
                break;
            case "community":
                window.location.hash = `/organisations`;
                break;
            default:
                window.location.hash = `/?to=cooperation`;
                break;
        }
        
        return 0;
    }

    render() {
        return(
           <div className="indexStart">
               <div className="startBanner">
                    <div className="startBannerContent content1200">
                        <div className="startList" >
                            {
                                this.state.data.bannerlist.map( (item,index) => {
                                    
                                    return (
                                        <div className="startListItem" key={index}>
                                                <div className={["startListItemImage",item.stitle].join(" ")}></div>
                                                <div className="startListItemTitle">{item.title}</div>
                                                <div className="startListItemContent">{item.text}</div>
                                                <div className="startListItemContent">
                                                    <div 
                                                        className="startListButton"
                                                        onClick={() => this.openInNewTab(item.stitle)}
                                                    >{item.button}
                                                    </div>
                                                </div>
                                        </div>
                                    )
                                })
                            }            
                        </div>
                    </div>
               </div>
               <div className="indexStartSecond">
                    <div className="content1200">
                        <div className="startLineTwo">
                        <div className="indexStartOneTextCons">
                            <span className="indexStartOneTextConsChi"><h2>合作单位要求</h2></span>
                            <span className="indexStartOneTextConsChi indexStartContent">
                                <ul>
                                    <li>
                                    支持开源的公司、高校、科研院所及其他机构。
                                    </li>
                                     
                                </ul>
                            </span>
                        </div>
                        <div className="indexStartOneTextCons">
                            <span className="indexStartOneTextConsChi"><h2>社区要求</h2></span>
                            <span className="indexStartOneTextConsChi indexStartContent">
                                <ul>
                                    <li>
                                    有活跃的开源软件仓库的社区或个人。
                                    </li>
                                    <li>
                                    开源软件仓库采用的协议需要是<a href="https://opensource.org/licenses" target="_blank" rel="noopener noreferrer">OSI 组织认证的开源协议</a> 或者 <a href="https://opendefinition.org/licenses/" target="_blank" rel="noopener noreferrer">ODI 组织认证的推荐的开放知识协议</a>
                                    </li>
                                    <li>
                                    <a href="https://isrc.iscas.ac.cn/summer2020/help/assets/community-rules.txt" target="_blank" rel="noopener noreferrer">组织参与协议</a>。
                                    </li>
                                </ul>
                            </span>
                        </div>
                        <div className="indexStartOneTextCons">
                            <span className="indexStartOneTextConsChi "><h2>学生要求</h2></span>
                            <span className="indexStartOneTextConsChi indexStartContent">
                                <ul>
                                    <li>
                                    年满 18 周岁的在校学生。
                                    </li>
                                    <li>
                                    具有有效的学生证和身份证。
                                    </li>
                                    <li>
                                    <a href="https://isrc.iscas.ac.cn/summer2020/help/assets/student-rules.txt" target="_blank" rel="noopener noreferrer">学生参与协议</a>。
                                    </li>
                                </ul>
                            </span>
                        </div>
                        </div>
                    </div>
               </div>
               <div className="startBannerEnd">
                        <a 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="startQAButton"
                            href="https://isrc.iscas.ac.cn/summer2020/help/">查看热点问题 Q&A
                        </a>
               </div>
           </div>
        )
    }
}