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
import data from './data.json';
import { Input, Pagination, Spin } from 'antd';

const { Search } = Input;
export default class Organisation extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            isLoading: true,
            data,
            allProjects:[],
            timeProjects: [],
            displayProjects:[],
            currentProjects:[],
            currentPage: 1,
            totalProjects: 0
        }
    }

    componentDidMount() {
        const location = window.location.hash;
        
        if (location.split("page=").length > 1 && location.split("page=")[1]==='project') {
            window.location.hash = "/organisations?page=project";
            this.switchTab(2);
        } 
        else if (location.split("/organisations/")[1]) {
            const anchor = location.split("/organisations/")[1];
            this.showModal(anchor, true);
        }
        else {
            window.location.hash = "/organisations";
        }
    }

    /**
     * 
     * @param {string} category 
     */
    resetStyle (category) {
        // TODO: hide student:
        // let mCategory = category === 'update_time' ? 'student_count' : 'update_time';
        // if (typeof category === 'object') {
        //     category.map((item,index)=>{
        //         document.getElementById('org-'+category[index]).setAttribute("class", "org-search-bar-sort");
        //         document.getElementById(category[index]+'-down').setAttribute("class", "org-arrow down-0");
        //         document.getElementById(category[index]+'-up').setAttribute("class", "org-arrow up-0");
        //         return 0;
        //     }); 
        // } else {
        //     document.getElementById('org-'+mCategory).setAttribute("class", "org-search-bar-sort");
        //     document.getElementById(mCategory+'-down').setAttribute("class", "org-arrow down-0");
        //     document.getElementById(mCategory+'-up').setAttribute("class", "org-arrow up-0");
        // }
        // if (category === 'default') {
        //     document.getElementById('update_time-down').setAttribute("class", "org-arrow down-0");
        //     document.getElementById('update_time-up').setAttribute("class", "org-arrow up-0");
        // }
        // document.getElementById('org-update_time').setAttribute("class", "org-search-bar-sort");
    }

    /**
     * 
     * @param {number} hot_index 
     * @param {number} index 
     */
    showHot (hot_index, index) {
        var divContainer = [];
        for (var i = 0; i < 3; i++) {
            if (i <= hot_index) {
                divContainer.push(<div className="hot-1 orgProjectHot" key={index+'-'+hot_index+i}></div>);
            } else {
                divContainer.push(<div className="hot-0 orgProjectHot" key={index+'-'+hot_index+i}></div>);
            }  
        }
        return divContainer;
    }

    /**
     * get all projects and render first 10 projects
     */
    getAllProjectList () {
        
        document.getElementById('org-student').setAttribute("class", "org-search-bar-sort orgClick");
        document.getElementsByClassName("ant-input-clear-icon")[0].click();
        // this.resetStyle('default'); //TODO: hide student: (['update_time','student_count'])
        var temp = [];

        this.state.data.orgList.map((item,index)=>{
        if (item.project_list) {
            item.project_list.map((item1,index1)=>{
                if (item1.name !== "" && item1.mentor !== "" && item1.difficulty !== "") {
                    item1.title= item.title;
                    item1.project_url = item.project_url || item.url;
                    item1.index = index;
                    temp.push(item1);
                }
                return 0;
                })
        }
        return 0;
        });
        temp.sort((a,b)=>{return this.cmp(
            [this.cmp(a['student_name'], b['student_name']), this.cmp(a['index'], b['index'])],
            [this.cmp(b['student_name'], a['student_name']), this.cmp(b['index'], a['index'])]
        )})
        this.setState({
            allProjects: temp,
            isLoading:false,
            totalProjects:temp.length,
            currentProjects: temp
        });
        var divContainer = [];
        temp.map((item,index)=>{
            if (index < 10) {
                divContainer.push(this.getProjectList(item.index, item, index, item.title, item.project_url ? item.project_url : item.url)) 
            }
            return 0;
        });
        this.setState({
            displayProjects: divContainer
        });
        // this.sortItemBy('student', temp);
        
    };

    /**
     * 
     * @param {string} url 
     */
    openInNewTab(url) {
        if (url !== "") {
            var win = window.open(url, '_blank');
            win.focus();
        }
    }

    /**
     * 
     * @param {string} anchor 
     * @param {boolean} isDetail 
     */
    showModal(anchor, isDetail) {
        const { orgList } = this.state.data;
        let index = orgList.findIndex(obj => obj.anchor === anchor);

        if (document.getElementById(index+"-tooltip").style.display && document.getElementById(index+"-tooltip").style.display !== 'none' && !isDetail) {
            document.getElementById(index+"-tooltip").style.display = 'none';
            document.getElementById(index+"tooltip-buttons").style.display = 'none';
        }
        else {
            orgList.map((item,index) => {
                if (window.innerWidth < 320) {
                    this.openInNewTab(item.project_url);
                }
                document.getElementById(index+"-tooltip").style.display = 'none';
                document.getElementById(index+"tooltip-buttons").style.display = 'none';

                if (isDetail) {
                    document.getElementById(index+"-orgListItem").style.display = 'none';
                    document.getElementById(index+"tooltip-buttons").style.display = 'block';
                }
                return 0;
            });
            if (isDetail) {
                this.displayOrgProjectList(anchor);
                window.location.hash.split("/").length > 1 ? window.location.hash = "/organisations/" + (anchor ? anchor : "") : void(0);
                document.getElementsByTagName("meta")[2].content = orgList[index].description;
                document.title = `社区详情 - ${orgList[index].title} - 开源软件供应链点亮计划 - 暑期2020 | 中国科学院软件研究所 | openEuler 社区`;
            }
            if (window.innerWidth > 845) {
                document.getElementById(index+"-tooltip").style.display = 'flex';
            }
            else {
                document.getElementById(index+"-tooltip").style.display = 'block';
                document.getElementById(index+"-tooltip").style.left = '0';
            }
            if (isDetail) {
                document.getElementById(index+"-tooltip").setAttribute("class", "org-tooltip org-detail");
                document.getElementById(index+"-tooltip").style.display = 'block';
                document.getElementById("orgListOWrapper").style.display = 'none';
                document.getElementById("orgListNavBar").style.display = 'block';
            } else {
                document.getElementById(index+"-tooltip").setAttribute("class", "org-tooltip");
            }
            document.getElementById(index+"-orgListItem").scrollIntoView();
        }
    }

    /**
     * 
     * @param {number} index 
     * @param {boolean} isDetail 
     */
    closeModal (index, isDetail) {
        window.location.hash = "/organisations";
        document.getElementById(index+"-tooltip").style.display = 'none';
        if (isDetail) {
          document.getElementById("orgListOWrapper").style.display = 'block';
          document.getElementById("orgListNavBar").style.display = 'none';
          this.state.data.orgList.map((item,index) => {
            document.getElementById(index+"-tooltip").style.display = 'none';
            document.getElementById(index+"-orgListItem").style.display = '';
            return 0;
          })
        }
    }

    /**
     * 
     * @param {number} orgIndex 
     * @param {Dict} item 
     * @param {number} index 
     * @param {string} orgName 
     * @param {string} projectUrl 
     */
    getProjectList(orgIndex, item, index, orgName, projectUrl) {
      return item.sponsor ? 
      (<div
        key = {orgIndex+'-'+index}
        className="orgProjectItem">
            <div className="orgProjectItemColumn orgLeft org-team">
                <div className="orgProjectTitleBar">
                    <div className="orgProjectId">{item.label ? '项目ID: '+item.label : ''}</div>
                    <div className="orgProjectTitleTeam">
                        {item.name}
                    </div>
                    <div className="orgProjectRuleTeam">
                        {item.rules[0]}&nbsp;&nbsp;&nbsp;&nbsp;{item.rules[1]}&nbsp;&nbsp;&nbsp;&nbsp;{item.rules[2]}
                    </div>
                     {/* <div className="orgProjectTitleIcon">{this.showHot(item.student_count, item.index)}</div> */}
                </div>
                <div className="orgProjectGap"></div>
                <div className="orgProjectBottomLeft">
                    {/* <div>已申请团队数：{item.student_count}</div> */}
                    <div>中选学生：无</div>
                    <div className="orgProjectName">{orgName}</div>
                </div>

            </div>

            <div className="orgProjectItemColumn orgRight">
      <div className="orgProjectDes">{item.description}</div>
                <div>
                    <ul>
                        <li>
                        项目社区导师：{(typeof item.mentor) === "object" ? item.mentor[0]+"、"+item.mentor[1]
                        : item.mentor}
                        </li>
                        <li>
                        
                        导师联系方式：{(typeof item.mentor) === "object" ?
                        <span><a href={"mailto:"+item.contact[0]}>{item.contact[0]}</a> <a href={"mailto:"+item.contact[1]}>{item.contact[1]}</a></span> : <a href={"mailto:"+item.contact}>{item.contact}</a>}
                        </li>
                    </ul>
                    <div
                        className="tooltip-detail-button orgProjectButton"
                        onClick={() => this.openInNewTab("https://gitee.com/openeuler/marketing/issues/I1IJ4B")}
                    >项目详情
                    <img src={require("./../../img/organisation/arrow.png")} alt=">"></img></div>
                </div>

            </div>

        </div>)
    
      : 
      (<div
        key = {orgIndex+'-'+index}
        className="orgProjectItem">
            <div className={"orgProjectItemColumn orgLeft org-"+index%3}>
                <div className="orgProjectTitleBar">
                    <div className="orgProjectId">{item.label ? '项目ID: '+item.label : ''}</div>
                    <div className="orgProjectTitle">
                        {item.name}
                    </div>
                    {item.wiki ? 
                        <div className="orgProjectWiki"><a href={item.wiki} target="_blank" rel="noopener noreferrer">项目公示</a></div>
                        : ""}
                    {/* <div className="orgProjectTitleIcon">{this.showHot(item.student_count, item.index)}</div> */}
                </div>
                {item.sponsor ? "" : <div className="orgProjectTitleIcon"><img alt="0000000" src={require("./../../img/organisation/"+index%3+".jpg")} /></div>}
                <div className="orgProjectGap"></div>
                <div className="orgProjectBottomLeft">
                    <div>{"项目难度："+item.difficulty}</div>
                    {/* <div>已申请人数：{item.student_count}</div> */}
                    {item.student_name ? <div>中选学生：{item.student_name}</div> : <div>中选学生：无</div>}
                    <div className="orgProjectName">{orgName}</div>
                </div>

            </div>

            <div className="orgProjectItemColumn orgRight">
      <div className="orgProjectDes">{item.description ? item.description : "项目描述见 "}<a href={projectUrl} target="_blank" rel="noopener noreferrer">{item.description ? "" : "社区“暑期2020”主页"}</a></div>
                <div>
                    <ul>
                        <li>
                        项目社区导师：{(typeof item.mentor) === "object" ? item.mentor[0]+"、"+item.mentor[1]
                        : item.mentor}
                        </li>
                        <li>
                        
                        导师联系方式：{(typeof item.mentor) === "object" ?
                        <span><a href={"mailto:"+item.contact[0]}>{item.contact[0]}</a> <a href={"mailto:"+item.contact[1]}>{item.contact[1]}</a></span> : <a href={"mailto:"+item.contact}>{item.contact}</a>}
                        </li>
                    </ul>
                    <div
                        className="tooltip-detail-button orgProjectButton"
                        onClick={() => this.openInNewTab(projectUrl)}
                    >项目详情
                    <img src={require("./../../img/organisation/arrow.png")} alt=">"></img></div>
                </div>

            </div>

        </div>)
    }

    /**
     * render a list of projects for a specific organisation
     * @param {string} anchor 
     */
    displayOrgProjectList(anchor) {
        const {orgList} = this.state.data;
        let orgIndex = orgList.findIndex(obj => obj.anchor === anchor);
        let orgItem_ = orgList[orgIndex];
        let orgItem = orgItem_.project_list;
        let orgName = orgItem_.title;
        let projectUrl = orgItem_.project_url;
        var divContainer = [];
        var temp = [];
        if (orgItem && orgItem[0].name !== "") {
            orgItem.map((item)=>{
                item.index = orgIndex;
                item.title = orgName;
                item.project_url = projectUrl || orgItem.url;
                temp.push(item);
                return 0;
            });
        }
        divContainer.sort((a,b)=>{return this.cmp(
            [this.cmp(a['student_name'], b['student_name']), this.cmp(a['index'], b['index'])],
            [this.cmp(b['student_name'], a['student_name']), this.cmp(b['index'], a['index'])]
        )});
        temp.sort((a,b)=>{return this.cmp(
            [this.cmp(a['student_name'], b['student_name']), this.cmp(a['index'], b['index'])],
            [this.cmp(b['student_name'], a['student_name']), this.cmp(b['index'], a['index'])]
        )});
        // console.log(divContainer)
        temp.map((item, index)=>{
            if (index < 10) {
                divContainer.push(this.getProjectList(orgIndex, item, index, orgName, projectUrl));
            }
            return 0;
        })
        this.setState({
            totalProjects: temp.length,
            currentProjects: temp,
            currentPage: 1,
            displayProjects: divContainer,
            isLoading:false
        });
    }

    /**
     * 
     * @param {number} tabNum 
     */
    switchTab (tabNum) {
      var wrappers = ["orgWrapper", "orgProjectWrapper"];
      document.getElementById("orgListTab-"+(3-tabNum)).setAttribute("class","orgListTabItem");
      document.getElementById("orgListTab-"+tabNum).setAttribute("class","orgListTabItem tabSelected");
      
      document.getElementById(wrappers[tabNum-1]).style.display = "block";
      document.getElementById(wrappers[2-tabNum]).style.display = "none";
      if (tabNum === 2) {
        this.setState({
            isLoading: true,
            totalProjects: 0
        });
        window.location.hash = "/organisations?page=project";
        setTimeout(()=>{this.getAllProjectList()},1);
        
      } else {
        window.location.hash = "/organisations";
        this.closeModal(0, true);
      }
    }

    getOpensource(){
        var divContainer = []
        this.state.data.creditList.map((item,index)=>{
            divContainer.push(<div
                key = {'os'+index}
                style={{backgroundImage:"url("+require("./../../img/logolist/"+item.img) + ")"}}
                className="orgOpensourceItem"
                onClick={() => item.url ? '' : this.openInNewTab(item.url)}>
                </div>)
            return 0;
        });
        return divContainer
    }

    /**
     * 
     * @param {number} pageNo 
     * @param {number} id 
     */
    changePage(pageNo, id) {
        var divContainer = [];
        this.state.currentProjects.map((item,index)=>{
            if (index < pageNo*10 && index >= (pageNo-1)*10) {
                divContainer.push(this.getProjectList(item.index, item, index, item.title, item.project_url ? item.project_url : item.url));
            }
            return 0;
          })
        this.setState({
            displayProjects: divContainer,
            currentPage: pageNo
        });
        id.includes("all") ? document.getElementById(id).scrollIntoView(true) : window.scrollTo(0,700);
    }

    // generic comparison function
    cmp(x, y){
        if (typeof x === "string" && x !== undefined && y === undefined) {
            return -1;
        } else if (typeof x === "string" && x !== undefined && y !== undefined) {
            return x.localeCompare(y, 'zh-Hans-CN', {sensitivity: 'accent'});
        }
        return x > y ? 1 : x < y ? -1 : 0;
    }

    /**
     * 
     * @param {string} category ("update_time","student_count")
     */
    sortItemBy(category, sortArray) {
        this.setState({
            currentPage: 1
        });

        const {allProjects} = this.state;
        let newProjects = sortArray ? sortArray : allProjects;
        console.log(newProjects)
        if (category === 'student') {
            // alert("student")
            document.getElementsByClassName("ant-input-clear-icon")[0].click();

            // reset all style
            document.getElementById('org-default').setAttribute("class", "org-search-bar-sort");
            // this.resetStyle(category);
            document.getElementById('org-student').setAttribute("class", "org-search-bar-sort orgClick");
            this.setState({
                // allProjects: newProjects.sort((a,b)=>{ return a[category] > b[category] ? 1 : -1})
                // sort category ascending then index ascending
                allProjects : 
                    newProjects.sort((a,b)=>{return this.cmp(
                        [this.cmp(a['student_name'], b['student_name']), this.cmp(a['index'], b['index'])],
                        [this.cmp(b['student_name'], a['student_name']), this.cmp(b['index'], a['index'])]
                    )})
            });
            

        } else {
            document.getElementsByClassName("ant-input-clear-icon")[0].click();

            // reset all style
            document.getElementById('org-student').setAttribute("class", "org-search-bar-sort");
            // this.resetStyle(category);
            document.getElementById('org-default').setAttribute("class", "org-search-bar-sort orgClick");
            this.setState({
                // allProjects: newProjects.sort((a,b)=>{ return a[category] > b[category] ? 1 : -1})
                // sort category ascending then index ascending
                allProjects : 
                    newProjects.sort((a,b)=>{return this.cmp(
                        [this.cmp(a['index'], b['index']), this.cmp(a['student_name'], b['student_name'])],
                        [this.cmp(b['index'], a['index']), this.cmp(b['student_name'], a['student_name'])]
                    )})
            });
        }
        var divContainer = [];
        this.state.allProjects.map((item,index)=>{
            if (index < 10) {
                divContainer.push(this.getProjectList(item.index, item, index, item.title, item.project_url ? item.project_url : item.url)) 
            }
            return 0;
        });
        this.setState({
            displayProjects: divContainer,
            totalProjects: allProjects.length,
            currentProjects: allProjects
        });
        console.log(this.state.allProjects)
    }

    /**
     * 
     * @param {string} value 
     */
    filterItem(value) {
        var divContainer = [];
        var temp = [];
        var i = 0;
        this.state.allProjects.map((item,index)=>{
            
            if (item.name.toLowerCase().includes(value.toLowerCase()) || 
                item.title.toLowerCase().includes(value.toLowerCase()) || 
                item.description.toLowerCase().includes(value.toLowerCase()) ||
                item.label.toLowerCase().includes(value.toLowerCase()) ||
                (item.student_name !== undefined && item.student_name.toLowerCase().includes(value.toLowerCase()))
            ) {
                if (i < 10) {
                    divContainer.push(this.getProjectList(item.index, item, index, item.title, item.project_url ? item.project_url : item.url));
                    temp.push(item);
                } else {
                    temp.push(item);
                }
                i++;
            }   

            return 0;
          })
        this.setState({
            displayProjects:divContainer,
            totalProjects:temp.length,
            isLoading:false,
            currentProjects: temp,
            currentPage: 1
        })
    }

    /**
     * antd pagination settings
     * @param {*} current 
     * @param {string} type 
     * @param {*} originalElement 
     */
    itemRender(current, type, originalElement) {
        if (type === 'prev') {
          // eslint-disable-next-line
          return <a>上一页</a>;
        }
        if (type === 'next') {
          // eslint-disable-next-line 
          return <a>下一页</a>;
        }
        return originalElement;
    }

    render(){
        return(
            <div className="organisation">
                <div className="orgBanner">
                    <div className="orgBannerTitle content1200">
                        <div>开源社区</div>
                        <div className="orgBannerTitle1">&nbsp;&nbsp;&nbsp;&nbsp;开源项目每日更新，欢迎关注！</div>
                        {window.location.hash.split("page=").length > 1 && window.location.hash.split("page=")[1]==='project' ? 
                        <div className= "orgBannerTeam">
                            <p>
                            特别团队项目
                            </p>
                            <p style={{"fontSize":"16px"}}>
                            “移植 openEuler 至 RK3399 平台”
                            </p>
                            <p className="orgBannerTeamDes">
                            本年度唯一团队项目&nbsp;&nbsp;&nbsp;&nbsp;限3-6人&nbsp;&nbsp;&nbsp;&nbsp;奖金额度6万
                            </p>
                            <div className="orgBannerButton" onClick={()=>this.openInNewTab("https://gitee.com/openeuler/marketing/issues/I1IJ4B")}>
                            了解更多
                            <img src={require("./../../img/organisation/arrow.png")} alt=">"></img>
                            </div>
                        </div> 
                        : 
                        <div className= "orgBannerTeam">
                            <p>
                            活动宣讲直播
                            </p>
                            <p style={{"fontSize":"16px"}}>
                            组委会联合开源社区通过bilibili直播
                            </p>
                            <p className="orgBannerTeamDes">
                            全方位解读活动细则，深入剖析开源社区及项目
                            </p>
                            <div className="orgBannerButton" onClick={()=>this.openInNewTab("https://space.bilibili.com/578074510/channel/detail?cid=132789")}>
                            观看回放
                            <img src={require("./../../img/organisation/arrow.png")} alt=">"></img>
                            </div>
                        </div> 
                        }
                    </div>
                    
                </div>
                <div className="orgListTab">
                    <div className="orgListTabItem tabSelected" id="orgListTab-1" onClick={()=>this.switchTab(1)}>社区列表</div>
                    <div className="orgListTabItem" id="orgListTab-2" onClick={()=>this.switchTab(2)}>项目列表</div>
                </div>

                <div id="orgWrapper">
                <div id="orgListNavBar">
                  <div className="content1200">
                  <div className="orgListNavBarItem orgClick" onClick={()=>{this.closeModal(0, true)}}>社区列表</div>
                  <div className="orgListNavBarItem orgGrey"> &gt; 社区详情</div>
                </div>
                  
                </div>
                  <div className="orgListWrapper">

                  <div className="orgList content1200">

                    {
                        this.state.data.orgList.map((item,index)=>{

                            return (
                                <div key={index} className="orgListWrapperItem">
                                    {/* <div className="orgListItem" key={index} onClick={() => this.openInNewTab(item.project_url ? item.project_url : item.url)}> */}
                                    <div className="orgListItem" key={'list-'+index} onClick={() => this.showModal(item.anchor)} id={index+"-orgListItem"}>
                                            <div
                                                className="orgListItemImage"
                                                style={{backgroundImage:"url("+require("./../../img/organisation/"+item.img) + ")"}}
                                            >
                                            </div>
                                            <div className="orgListItemTitle" id={item.anchor}>{item.title}</div>
                                            <div className="orgListItemDes">{item.description}</div>
                                    </div>
                                    {/* <div id="org-tooltip-wrapper"> */}
                                    <div className="org-tooltip" id={index+'-tooltip'}>

                                        <span className="triangle" id={index+'-triangle'}></span>
                                        <div className="tooltip-close" onClick={() => {this.closeModal(index, false)}}></div>
                                        <div className="tooltip-title">{item.title}
                                        <div className="tooltip-buttons" id={index+"tooltip-buttons"}>
                                        {
                                            item.slide ?
                                            <a href={'https://isrc.iscas.ac.cn/summer2020/downloads/preach/'+item.slide} target="_blank" rel="noopener noreferrer" download><span className="tooltip-title-button">下载宣讲PPT
                                            <img src={require("./../../img/index/down.png")} alt="play"></img></span></a>
                                            : ''

                                        }
                                        {
                                            item.video ?
                                            <a href={item.video} target="_blank" rel="noopener noreferrer"><span className="tooltip-title-button">宣讲视频
                                            <img src={require("./../../img/organisation/play.png")} alt="play"></img></span></a>
                                            : ''
                                        }
                                        </div>
                                        </div>
                                        <div className="tooltip-description">{item.full_des}</div>
                                        <div className="tooltip-divider"></div>
                                        <div className="tooltip-list-title">
                                            官网：<a href={item.url} target="_blank" rel="noopener noreferrer">{item.url}</a>
                                        </div>
                                        {
                                            item.mail_list ? 
                                        <div className="tooltip-list-title tooltip-detail">
                                            社区邮件列表：<a href={"mailto:"+item.url} target="_blank" rel="noopener noreferrer">{item.mail_list}</a>
                                        </div>
                                        : ""
                                        }
                                        
                                        <div className="tooltip-list-title tooltip-detail">
                                        社区官方公共联系邮箱：<a href={"mailto:"+item.email} target="_blank" rel="noopener noreferrer">{item.email}</a>
                                        </div>
                                        <div className="tooltip-list-title">
                                            “暑期2020”项目：
                                            {item.project_url ? (<a href={item.project_url} target="_blank" rel="noopener noreferrer">{item.project_url}</a>)
                                            : ("即将上线")}
                                        </div>
                                        <div className="tooltip-url-tag-divider"></div>
                                        <div className="tooltip-list-title tooltip-detail">专注领域</div>
                                        <div className="tooltip-tag">{item.domain_tag?item.domain_tag.map((item,index)=>{
                                            return (
                                                <div className="orgTagListItem domain" key={'domain-'+index}>{item}</div>
                                            )
                                        }):''}</div>
                                        <div className="tooltip-list-title tooltip-detail">技术标签</div>
                                        <div id="org-project-lists" className="tooltip-tag">{item.tech_tag?item.tech_tag.map((item,index)=>{
                                            return (
                                                <div className="orgTagListItem tech" key={'tech-'+index}>{item}</div>
                                            )
                                        }):''}</div>
                                        <div className="tooltip-detail-button" onClick={() => this.showModal(item.anchor, true)}>查看详情
                                        <img src={require("./../../img/organisation/arrow.png")} alt=">"></img>
                                        </div>
                                        <div className="tooltip-project-wrapper tooltip-detail org-detail org-search-bar-wrapper">
                                            <div id="org-project-lists" className="org-No">
                                                {this.state.totalProjects > 0 ? <span>共{this.state.totalProjects}个项目</span> : ""}
                                                {Math.ceil(this.state.totalProjects / 10) > 1 ? <span className="org-pageNo">第{this.state.currentPage}页 / <span style={{color:'#999999'}}>共{Math.ceil(this.state.totalProjects / 10)}页</span></span> : ''}
                                                <span className="org-pageNo-button tooltip-detail-button">申请结束</span>
                                            </div>
                                            {this.state.isLoading ? 
                                            <Spin style={{width: "100%", height: 600}} size="Large" tip="Loading..."/> :
                                                this.state.displayProjects
                                            }
                                            <Pagination 
                                                onChange={page=>this.changePage(page, "org-project-lists")} 
                                                defaultCurrent={1} 
                                                total={this.state.totalProjects} 
                                                style={{ height: 50, marginTop: 20}}
                                                itemRender={this.itemRender}
                                                hideOnSinglePage={true}
                                                showSizeChanger={false}
                                                current={this.state.currentPage}
                                            />
                                        </div>
                                    </div>
                                    {/* </div> */}

                                </div>
                            )
                        })
                    }

                </div>
                {
                    window.location.hash === "#/organisations" ?
                        <div className="OrgCommitteePinyin content1200">*按单位名称英文字母、中文拼音字母排序</div>
                    :
                        ""
                }

                </div>
                  <div id="orgListOWrapper">
                  <div className="indexOrgThirdTitle content1200">鸣谢机构</div>
                  <div  className="orgListOpensource content1200">
                      {this.getOpensource()}
                  </div>
                </div>
                </div>

                <div id="orgProjectWrapper" className="tooltip-project-wrapper">
                  <div className="orgListWrapper content1200">
                    <div className="orgList">
                            
                      <div className="org-detail">
                        <div className="org-search-bar-wrapper">
                            <div id="all-project-lists" className="org-search-bar">
                            <Search
                                placeholder="请输入搜索的项目"
                                onSearch={value => this.filterItem(value)}
                                allowClear
                            />
                            </div>
                            <div className="org-search-bar-sort-wrapper">
                            
                            <div id="org-student" className="org-search-bar-sort orgClick" onClick={()=>this.sortItemBy('student')}>
                                中选优先
                            </div>
                            <div id="org-default" className="org-search-bar-sort" onClick={()=>this.sortItemBy('default')}>
                                按社区顺序
                            </div>
                            {/* <div id="org-update_time" className="org-search-bar-sort" onClick={()=>this.sortItemBy('update_time')}>
                                按更新时间
                                <span id="update_time-down" className="org-arrow down-0"></span>
                                <span id="update_time-up" className="org-arrow up-0"></span>
                            </div> */}
                            {/* <div id="org-student_count" className="org-search-bar-sort" onClick={()=>this.sortItemBy('student_count')}>
                                按申请人数
                                <span id="student_count-down" className="org-arrow down-0"></span>
                                <span id="student_count-up" className="org-arrow up-0"></span>
                            </div> */}
                            </div>
                            
                            <div className="org-No">
                                {this.state.totalProjects > 0 ? <span>共{this.state.totalProjects}个项目</span>:""}
                                {Math.ceil(this.state.totalProjects / 10) > 1 ? <span className="org-pageNo">第{this.state.currentPage}页 / <span style={{color:'#999999'}}>共{Math.ceil(this.state.totalProjects / 10)}页</span></span> : ''}
                                <span className="org-pageNo-button tooltip-detail-button">申请结束</span>
                            </div> 

                        </div>
                        
                        
                        <div>
                            {this.state.isLoading ? 
                            <Spin style={{width: "100%", height: 600}} size="Large" tip="Loading..."/> :
                                this.state.displayProjects
                            }
                        </div>
                        <Pagination 
                            onChange={page=>this.changePage(page, "all-project-lists")} 
                            defaultCurrent={1} 
                            total={this.state.totalProjects} 
                            style={{ height: 50, marginTop: 20}}
                            itemRender={this.itemRender}
                            hideOnSinglePage={true}
                            showSizeChanger={false}
                            current={this.state.currentPage}
                        />
                      
                      </div>
                    </div>
                  </div>
                  
                </div>
            </div>
        )
    }

}