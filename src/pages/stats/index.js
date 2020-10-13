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
// import rd3 from 'rd3';
import BarChart from './bar';
import PieChart from './pie';
import StackChart from './stackbar';
import data from './data.json';
import {Row,Col} from 'antd';

import './index.less';


export default class Stats extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            data
        };
    }

    /**
     * open markdown link in new tab.
     * @param {string} indexStr 
     */
    openInNewTab (indexStr) {
        switch (indexStr) {
            case "#/organisations":
                window.location.hash = `/organisations`;
                break;
            default:
                window.location.hash = `/organisations`;
                break;
        }
        return 0;
    }

    render() {
        return(
           <div className="indexStats">
               <div className="statsBanner">
                    <div className="statsBannerContent content1200">
                        <div className="statsList" >
                            {
                                this.state.data.bannerlistNew.map( (item, index) => {
                                    return (
                                        <div className="statsListItem" key={index} onClick={() => {item.url ? this.openInNewTab(item.url) : void(0);}}>
                                                {
                                                typeof item.title === 'object' ?
                                                item.title.map((i,idx)=>{
                                                  return <div className="statsListItemTitle" key={i}>{i}</div>
                                                })
                                                :
                                                <div className="statsListItemTitle">{item.title}</div>
                                                }
                                                {
                                                    typeof item.desc === 'object' ? 
                                                    item.desc.map((i,idx)=>{
                                                        return <div className="statsListItemContent" key={i}>{i}</div>
                                                    })
                                                    :
                                                    <div className="statsListItemContent">{item.desc}</div>
                                                }
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
               </div>
               <div className="indexStatsSecond">
                    <div className="statsWrapper">
                      <div className="content1200">
                        <div className="statsDataTitle">中期考核数据</div>
                        {
                          window.innerWidth > 1200 ?
                          (
                          <div className="midterm-legend">
                            <span className="midterm-pass">通过中期考核的项目</span>
                            <span className="midterm-fail">未通过中期考核的项目</span>
                          </div>
                          ) :
                          (
                          <div className="midterm-legend">
                            <div className="midterm-pass">通过中期考核的项目</div>
                            <div className="midterm-fail">未通过中期考核的项目</div>
                          </div> 
                          )
                        }
                        {
                          window.innerWidth > 1200 ?
                            (
                              <Row>
                                <Col span={12}>
                                  <Row>
                                    <Col span={12}>
                                      <PieChart/>
                                    </Col>
                                    <Col span={12}>
                                      <div className="pie-label">
                                        <div>通过中期考核的项目 90.2%</div> 
                                        <div>167</div>
                                      </div>
                                    </Col> 
                                  </Row>
                                  <div className="pie-text">原申请中选项目共185</div>
                                </Col>
                                
                                <Col span={12}><StackChart/></Col>
                              </Row>
                            ) :
                            (
                              <div>
                                <Row>
                                  <Col span={12}>
                                    <PieChart/>
                                  </Col>
                                  <Col span={12}>
                                    <div className="pie-label">
                                      <div>通过中期考核的项目 90.2% 共167</div>
                                    </div>
                                  </Col> 
                                </Row>
                                <div className="pie-text">原申请中选项目共185</div>
                                <StackChart/> 
                              </div>
                            )
                        }
                        
                        
                        <div className="statsDataTitle">活动数据统计</div>
                          {
                            this.state.data.stats.map(
                              (item, index) => {
                                return (
                                <div className="statsDataItem" key={`stats${index}`}>
                                  <div className={["statsDataItemIcon",item.icon].join(" ")}></div>
                                  <div className="statsDataItemText">
                                    <div className="statsDataItemValue">
                                      <span style={{fontWeight: "bold"}}>{item.value}</span>
                                      <span style={{fontSize: "18px"}}>{item.unit}</span>
                                    </div>
                                    <div className="statsDataItemTitle">{item.name}</div>
                                  </div>
                                </div>
                                );
                              }
                            )
                          }
                      </div>
                    </div>
                    <div className="statsTotalWrapper content1200">
                        <div className="statsDataTitle">项目申请统计</div>
                        <div className="statsTotalDesc">共389个项目 (包含1个团队项目)</div>
                        <div className="statsTotalLabel" style={{marginLeft: this.state.data.applyNo/389*101+"%"}}>共{this.state.data.applyNo}个项目有申请记录</div>
                        <div style={{background: "linear-gradient(to right, #4180ff 0%, #26b5ff "+this.state.data.applyNo/389*100+"%, #4171ff "+this.state.data.applyNo/389*100+"%)"}} className="statsTotalBar"></div>
                    </div>
                    <div className="statsWrapper">
                      <div className="statsDataTitle">高校项目申请数分布</div>
                      <div className="content1200"><BarChart/></div>
                      <div className="statsNote content1200">*项目申请数相同的学校排名不分先后</div>
                    </div>
                    
                    
               </div>

               <div className="statsBannerEnd">
                        <a 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="statsQAButton"
                            href="https://isrc.iscas.ac.cn/summer2020/help/">查看热点问题 Q&A
                        </a>
               </div>
           </div>
        )
    }
}
