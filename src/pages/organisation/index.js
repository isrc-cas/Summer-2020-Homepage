import React from 'react'
import './index.less';
import data from './data.json';
// import scrollSmoothTo from './../../config/scroll.js';
export default class Organisation extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            data,
        }
    }

    componentDidMount(){
        window.scrollTo(0,0)
        // const location = window.location.hash.split("to=")
        // if(location[1] && location[1] === 'head'){
        //     scrollSmoothTo(0)
        // }
    }
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
    showModal(index, project_url, isDetail) {
        if (window.innerWidth < 320) {
            this.openInNewTab(project_url);
        }
        else if (document.getElementById(index+"-tooltip").style.display && document.getElementById(index+"-tooltip").style.display !== 'none' && !isDetail) {
            document.getElementById(index+"-tooltip").style.display = 'none';
        }
        else {
            this.state.data.orgList.map((item,index) => {
                document.getElementById(index+"-tooltip").style.display = 'none';
                if (isDetail) {
                    document.getElementById(index+"-orgListItem").style.display = 'none';

                }
                return 0;
            })

            // alert()
            if (window.innerWidth > 800) {


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
            } else {
                document.getElementById(index+"-tooltip").style.display = 'block';
            }
            if (isDetail) {
                document.getElementById(index+"-tooltip").setAttribute("class", "org-tooltip org-detail");
                document.getElementById(index+"-tooltip").style.display = 'block';
                // document.getElementById(index+"-tooltip").style.left = '0';
                document.getElementById("orgListOWrapper").style.display = 'none';

            } else {
                document.getElementById(index+"-tooltip").setAttribute("class", "org-tooltip");
            }


        }
    }
    closeModal (index) {
        document.getElementById(index+"-tooltip").style.display = 'none';
    }
    getProjectList(orgIndex, orgItem, orgName, projectUrl) {
        var divContainer = [];
        // alert(orgItem[0].name)
        if (orgItem[0].name !== "") {
            orgItem.map((item,index)=>{
                divContainer.push(<div
                    key = {orgIndex+'-'+index}
                    className="orgProjectItem">
                        <div className={"orgProjectItemColumn orgLeft org-"+index%3}>
                        <div>
                            <div
                            className="orgProjectTitle"
                            // style={{backgroundImage:"url("+require("./../../img/organisation/"+index%3+".jpg") + ")"}}
                            >
                                {item.name}
                            </div>
                           <div className="orgProjectTitleIcon"><img alt="0000000" src={require("./../../img/organisation/"+index%3+".jpg")} /></div>
                        </div>
                            <div className="orgProjectGap"></div>
                            <div className="orgProjectBottomLeft">
                                <div>项目难度：{item.difficulty}</div>
                                {/* <div>已：{item.student_count}</div> */}
                                <div className="orgProjectName">{orgName}</div>
                            </div>

                        </div>

                        <div className="orgProjectItemColumn orgRight">
                            <div className="orgProjectDes">{item.description}</div>
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
                return 0;
            });
        }
        else {
            return [];
        }

        return divContainer;
    }
    getOpensource(){
        var divContainer = []
        this.state.data.creditList.map((item,index)=>{
            divContainer.push(<div
                key = {'os'+index}
                style={{backgroundImage:"url("+require("./../../img/logolist/"+item.img) + ")"}}
                className="orgOpensourceItem"
                onClick={() => this.openInNewTab(item.url)}>
                </div>)
            return 0;
        });
        return divContainer
    }
    render(){
        return(
            <div className="organisation">
                <div className="orgBanner">
                    <div className="orgBannerTitle content1200">开源社区</div>
                </div>
                {/* <div className="orgListTab">
                    <div className="orgListTabItem tabSelected">社区列表</div>
                    <div className="orgListTabItem">项目列表</div>
                </div> */}
                <div className="orgListWrapper">

                <div className="orgList content1200">

                    {
                        this.state.data.orgList.map((item,index)=>{

                            return (
                                <div key={index}>
                                    {/* <div className="orgListItem" key={index} onClick={() => this.openInNewTab(item.project_url ? item.project_url : item.url)}> */}
                                    <div className="orgListItem" key={index} onClick={() => this.showModal(index, item.project_url ? item.project_url : item.url)} id={index+"-orgListItem"}>
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
                                        <div className="tooltip-close" onClick={() => {this.closeModal(index)}}></div>
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
                                            : ("敬请期待")}
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
                                        {/* <div className="tooltip-detail-button" onClick={() => this.showModal(index,item.project_url ? item.project_url : item.url, true)}>社区详情
                                        <img src={require("./../../img/organisation/arrow.png")} alt=">"></img>
                                        </div> */}
                                        <div className="tooltip-project-wrapper tooltip-detail">
                                            {this.getProjectList(index, item.project_list, item.title, item.project_url ? item.project_url : item.url)}
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
                <div className="indexOrgThirdTitle content1200">鸣谢社区</div>
                <div  className="orgListOpensource content1200">

                    {this.getOpensource()}
                </div>
                </div>

            </div>
        )
    }

}