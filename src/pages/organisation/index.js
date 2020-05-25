import React from 'react'
import './index.less';
import data from './data.json';
import { Input, Pagination } from 'antd';
import {readyWeixin} from '../../config/weixin.js';

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
            currentPage: 1,
            totalProjects: 1
        }
    }

    componentDidMount() {
        window.scrollTo(0,0);
        this.getAllProjectList();
        const location = window.location.hash;
        if (location.split("page=").length > 1 && location.split("page=")[1]==='project') {
            window.location.hash = "/organisations?page=project";
            this.switchTab(2);
        } 
        // else if (location.split("/organisations")[1]) {
        //     this.showModal(location.split("/organisations")[1], true);
        //     window.addEventListener("resize", ()=>{
        //         console.log(location.split("/organisations"))
        //         console.log(location.split("/organisations")[1])
        //         if (location.split("/organisations")[1]) {
        //             this.showModal(location.split("/organisations")[1], true);
        //         }
        //     });
        // }
    }
    resetStyle (category) {
        if (category === 'default') {
            document.getElementById('update_time-down').setAttribute("class", "org-arrow down-0");
            document.getElementById('update_time-up').setAttribute("class", "org-arrow up-0");
        }
        // let cat = category === 'update_time' ? 'hot_index' : 'update_time';
        document.getElementById('org-update_time').setAttribute("class", "org-search-bar-sort");
        // document.getElementById('update_time-down').setAttribute("class", "org-arrow down-0");
        // document.getElementById('update_time-up').setAttribute("class", "org-arrow up-0");
        // document.getElementById('org-hot_index').setAttribute("class", "org-search-bar-sort");
    }
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
    getAllProjectList () {
        document.getElementById('org-default').setAttribute("class", "org-search-bar-sort orgClick");
        this.resetStyle('default');
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

        this.setState({
            allProjects: temp,
            isLoading:false,
            totalProjects:temp.length
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
     
        return divContainer;
    };
    openInNewTab(url) {
        if (url !== "") {
            var win = window.open(url, '_blank');
            win.focus();
        }
    }
    showDetail (index) {
        this.state.data.orgList.map((item,index) => {
            document.getElementById(index+"-tooltip").style.display = 'none';
            return 0;
        })


    }
    showModal(anchor, isDetail) {
        const { orgList } = this.state.data;
        let index = orgList.findIndex(obj => obj.anchor === anchor);

        if (document.getElementById(index+"-tooltip").style.display && document.getElementById(index+"-tooltip").style.display !== 'none' && !isDetail) {
            document.getElementById(index+"-tooltip").style.display = 'none';
        }
        else {
            orgList.map((item,index) => {
                if (window.innerWidth < 320) {
                    this.openInNewTab(item.project_url);
                }
                document.getElementById(index+"-tooltip").style.display = 'none';

                if (isDetail) {
                    window.location.hash = "/organisations" + (anchor ? anchor : "");
                    document.getElementById(index+"-orgListItem").style.display = 'none';
                    document.getElementById(index+"-tooltip").style.left = 0;
                    
                }
                return 0;
            });
            if (isDetail) {
                readyWeixin(`社区详情 - ${orgList[index].title} - 开源软件供应链点亮计划 - 暑期2020 | 中国科学院软件研究所 | openEuler 社区`, orgList[index].description);
                document.title = `社区详情 - ${orgList[index].title} - 开源软件供应链点亮计划 - 暑期2020 | 中国科学院软件研究所 | openEuler 社区`;
            }
            if (window.innerWidth > 1200) {
                switch(index % 3) {
                    case 1:
                        document.getElementById(index+"-tooltip").style.left = '-409px';
                        document.getElementById(index+"-triangle").style.left = '580px';
                        break;
                    case 2:
                        document.getElementById(index+"-tooltip").style.left = '-818px';
                        document.getElementById(index+"-triangle").style.left = '989px';
                        break;
                    default:
                        break;
                }
                document.getElementById(index+"-tooltip").style.display = 'flex';
            } 
            else if(window.innerWidth > 850){
                switch(index % 2) {
                    case 1:
                        document.getElementById(index+"-tooltip").style.left = `calc(-90vw + 382px)`;
                        document.getElementById(index+"-triangle").style.left = '580px';
                        break;
                    default:
                        document.getElementById(index+"-tooltip").style.left = '0';
                        break;
                }
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
                // document.getElementById(index+"-tooltip").style.left = 0;
                window.scrollTo(0,0);
               
                
            } else {
                document.getElementById(index+"-tooltip").setAttribute("class", "org-tooltip");
            }
        }
    }
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
    getProjectList(orgIndex, item, index, orgName, projectUrl) {
      return (<div
        key = {orgIndex+'-'+index}
        className="orgProjectItem">
            <div className={"orgProjectItemColumn orgLeft org-"+index%3}>
                <div className="orgProjectTitleBar">
                    <div className="orgProjectTitle">
                        {item.name}
                        
                    </div>
                    
                
                    {/* <div className="orgProjectId">{item.label ? 'ID: '+item.label : ''}</div> */}
                    
                </div>
                <div className="orgProjectTitleIcon"><img alt="0000000" src={require("./../../img/organisation/"+index%3+".jpg")} /></div>
                <div className="orgProjectGap"></div>
                <div className="orgProjectBottomLeft">
                    {/* <div>热度：{this.showHot(item.hot_index, item.index)}</div> */}
                    <div>项目难度：{item.difficulty}</div>
                    <div className="orgProjectName">{orgName}</div>
                </div>

            </div>

            <div className="orgProjectItemColumn orgRight">
      <div className="orgProjectDes">{item.description ? item.description : "项目描述见 "}<a href={projectUrl} target="_blank" rel="noopener noreferrer">{item.description ? "" : "社区“暑期2020”主页"}</a></div>
                <div>
                    <ul>
                        <li>
                        项目社区导师：{item.mentor}
                        </li>
                        <li>
                        导师联系方式：<a href={"mailto:"+item.contact}>{item.contact}</a>
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
    getOrgProjectList(orgIndex, orgItem, orgName, projectUrl) {
        var divContainer = [];
        if (orgItem.length !== 0 && orgItem[0].name !== "") {
            orgItem.map((item,index)=>{
                divContainer.push(this.getProjectList(orgIndex, item, index, orgName, projectUrl));
                return 0;
            });
        }
        else {
            return [];
        }

        return divContainer;
    }

    switchTab (num) {
      var wrappers = ["orgWrapper", "orgProjectWrapper"];
      document.getElementById("orgListTab-"+(3-num)).setAttribute("class","orgListTabItem");
      document.getElementById("orgListTab-"+num).setAttribute("class","orgListTabItem tabSelected");
      
      document.getElementById(wrappers[num-1]).style.display = "block";
      document.getElementById(wrappers[2-num]).style.display = "none";
      if (num === 2) {
        window.location.hash = "/organisations?page=project";
        this.getAllProjectList();
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
    changePage(pageNo) {
        var divContainer = [];
        this.state.allProjects.map((item,index)=>{
            if (index < pageNo*10 && index >= (pageNo-1)*10) {
                divContainer.push(this.getProjectList(item.index, item, index, item.title, item.project_url ? item.project_url : item.url)) 

            }
            return 0;
          })
        this.setState({
            displayProjects:divContainer,
            currentPage: pageNo
        });
        window.scrollTo(0,0);
    }
    sortItemBy(category) {
        this.setState({
            currentPage: 1
        });
        if (category === 'update_time' || category === 'hot_index') {
            const {allProjects} = this.state;
            let newProjects = allProjects.reverse();
            // reset all style
            document.getElementById('org-default').setAttribute("class", "org-search-bar-sort");
            this.resetStyle(category);
            document.getElementById('org-'+category).setAttribute("class", "org-search-bar-sort orgClick");

            if (document.getElementById(category+'-down').getAttribute("class") === 'org-arrow down-0') {
                document.getElementById(category+'-down').setAttribute("class", "org-arrow down-1");
                document.getElementById(category+'-up').setAttribute("class", "org-arrow up-0");
                this.setState({
                    allProjects: newProjects.sort((a,b)=>{ return a[category] < b[category] ? 1 : -1})
                });
            } else {
                document.getElementById(category+'-down').setAttribute("class", "org-arrow down-0");
                document.getElementById(category+'-up').setAttribute("class", "org-arrow up-1");
                this.setState({
                    allProjects: newProjects.sort((a,b)=>{ return a[category] > b[category] ? 1 : -1})
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
                displayProjects: divContainer
            });
        } else {
            this.getAllProjectList();
        }
    }
    filterItem(value) {
        var divContainer = [];
        this.state.allProjects.map((item,index)=>{
                
            if (item.name.toLowerCase().includes(value.toLowerCase()) || item.title.toLowerCase().includes(value.toLowerCase()) || item.description.toLowerCase().includes(value.toLowerCase())) {
                divContainer.push(this.getProjectList(item.index, item, index, item.title, item.project_url ? item.project_url : item.url));
            }
            return 0;
          })
        this.setState({
            displayProjects:divContainer,
            totalProjects:divContainer.length,
            isLoading:false
          })
    }
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
                  <div className="orgListNavBarItem orgGrey"> > 社区详情</div>
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
                                            <div className="orgListItemTitle" id={"orgListItemTitle-"+index}>{item.title}</div>
                                            <div className="orgListItemDes">{item.description}</div>
                                    </div>
                                    {/* <div id="org-tooltip-wrapper"> */}
                                    <div className="org-tooltip" id={index+'-tooltip'}>

                                        <span className="triangle" id={index+'-triangle'}></span>
                                        <div className="tooltip-close" onClick={() => {this.closeModal(index, false)}}></div>
                                        <div className="tooltip-title">{item.title}</div>
                                        <div className="tooltip-description">{item.full_des}</div>
                                        <div className="tooltip-divider"></div>
                                        <div className="tooltip-list-title">
                                            官网：<a href={item.url} target="_blank" rel="noopener noreferrer">{item.url}</a>
                                        </div>
                                        <div className="tooltip-list-title tooltip-detail">
                                        社区邮件列表：<a href={"mailto:"+item.url} target="_blank" rel="noopener noreferrer">{item.mail_list}</a>
                                        </div>
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
                                        <div className="tooltip-tag">{item.tech_tag?item.tech_tag.map((item,index)=>{
                                            return (
                                                <div className="orgTagListItem tech" key={'tech-'+index}>{item}</div>
                                            )
                                        }):''}</div>
                                        <div className="tooltip-detail-button" onClick={() => this.showModal(item.anchor, true)}>查看详情
                                        <img src={require("./../../img/organisation/arrow.png")} alt=">"></img>
                                        </div>
                                        <div className="tooltip-project-wrapper tooltip-detail">
                                            {
                                            this.getOrgProjectList(index, item.project_list || [], item.title, item.project_url ? item.project_url : item.url)
                                            }
                                        </div>
                                    </div>
                                    {/* </div> */}

                                </div>
                            )
                        })
                    }
                </div>

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
                            <div className="org-search-bar">
                            <Search
                                placeholder="请输入搜索的项目"
                                onSearch={value => this.filterItem(value)}
                            />
                            </div>
                            <div className="org-search-bar-sort-wrapper">
                            
                            <div id="org-default" className="org-search-bar-sort orgClick" onClick={()=>this.sortItemBy('default')}>
                                按社区顺序
                            </div>
                            <div id="org-update_time" className="org-search-bar-sort" onClick={()=>this.sortItemBy('update_time')}>
                                按更新时间
                                <span id="update_time-down" className="org-arrow down-0"></span>
                                <span id="update_time-up" className="org-arrow up-0"></span>
                            </div>
                            {/* <div id="org-hot_index" className="org-search-bar-sort" onClick={()=>this.sortItemBy('hot_index')}>
                                按热度
                                <span id="hot_index-down" className="org-arrow down-0"></span>
                                <span id="hot_index-up" className="org-arrow up-0"></span>
                            </div> */}
                            </div>
                            
                            <div className="org-No">
                                <span>共{this.state.totalProjects}个项目</span>
                                <span className="org-pageNo">第{this.state.currentPage}页 / <span style={{color:'#999999'}}>共{Math.ceil(this.state.totalProjects / 10)}页</span></span>
                             
                            </div> 

                        </div>
                        
                        
                        <div>
                            {this.state.isLoading ? '' :
                                this.state.displayProjects
                            }
                        </div>
                        <Pagination 
                            onChange={page=>this.changePage(page)} 
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