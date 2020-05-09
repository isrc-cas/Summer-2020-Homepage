import React from 'react'
import './index.less';
import data from './data.json';
import scrollSmoothTo from './../../config/scroll.js';
export default class Organisation extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            data,
        }
    }

    componentDidMount(){
        window.scrollTo(0,0)
        const location = window.location.hash.split("to=")
        if(location[1] && location[1] === 'head'){
            scrollSmoothTo(0)
        }
    }
    openInNewTab(url) {
        if (url !== "") {
            var win = window.open(url, '_blank');
            win.focus();
        }   
    }
    showModal(index, project_url) {
        if (window.innerWidth < 300) {
            this.openInNewTab(project_url);
        }
        else if (document.getElementById(index+"-tooltip").style.display && document.getElementById(index+"-tooltip").style.display !== 'none') {
            document.getElementById(index+"-tooltip").style.display = 'none';
        }
        else {
            this.state.data.orgList.map((item,index) => {
                document.getElementById(index+"-tooltip").style.display = 'none';
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

            
        }
    }
    closeModal (index) {
        document.getElementById(index+"-tooltip").style.display = 'none';
    }
    getOpensource(){
        var divContainer = []
        this.state.data.creditList.map((item,index)=>{
            divContainer.push(<div 
                key = {'2'+index}
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
                <div className="orgListWrapper">

                <div className="orgList content1200">
                    {
                        this.state.data.orgList.map((item,index)=>{
                            
                            return (
                                <div key={index}>
                                    {/* <div className="orgListItem" key={index} onClick={() => this.openInNewTab(item.project_url ? item.project_url : item.url)}> */}
                                    <div className="orgListItem" key={index} onClick={() => this.showModal(index, item.project_url ? item.project_url : item.url)}>
                                            <div 
                                                className="orgListItemImage"
                                                style={{backgroundImage:"url("+require("./../../img/organisation/"+item.img) + ")"}}
                                            >
                                            </div>
                                            <div className="orgListItemTitle">{item.title}</div>
                                            <div className="orgListItemDes">{item.description}</div>
                                    </div>
                                    <div className="org-tooltip" id={index+'-tooltip'}>
                                        
                                        <span className="triangle" id={index+'-triangle'}></span>
                                        <div className="tooltip-close" onClick={() => {this.closeModal(index)}}></div>
                                        <div className="tooltip-title">{item.title}</div>
                                        <div className="tooltip-description">{item.full_des}</div>
                                        <div className="tooltip-divider"></div>
                                        <div className="tooltip-url">
                                            官网：<a href={item.url} target="_blank" rel="noopener noreferrer">{item.url}</a>
                                        </div>
                                        <div className="tooltip-url">
                                            “暑期2020”项目：
                                            {item.project_url ? (<a href={item.project_url} target="_blank" rel="noopener noreferrer">{item.project_url}</a>)
                                            : ("敬请期待")}
                                        </div>
                                        <div className="tooltip-url-tag-divider"></div>
                                        <div className="tooltip-tag">{item.domain_tag.map((item,index)=>{
                                            return (
                                                <div className="orgTagListItem domain" key={'domain-'+index}>{item}</div>
                                            )
                                        })}</div>
                                        <div className="tooltip-tag">{item.tech_tag.map((item,index)=>{
                                            return (
                                                <div className="orgTagListItem tech" key={'tech-'+index}>{item}</div>
                                            )
                                        })}</div>
                                    </div>
                                </div>
                            )
                        })
                    } 
                </div>

                </div>
                <div className="indexOrgThirdTitle content1200">鸣谢社区</div>
                <div  className="orgListOpensource content1200">
                    
                    {this.getOpensource()}
                </div>
            </div>
        )
    }

}