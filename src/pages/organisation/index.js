import React from 'react'
import './index.less';
import data from './data.js'

export default class Organisation extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            data,
        }
    }
    openInNewTab(url) {
        var win = window.open(url, '_blank');
        win.focus();
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
        })
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
                                <div className="orgListItem" key={index} onClick={() => this.openInNewTab(item.url)}>
                                        <div 
                                            className="orgListItemImage"
                                            style={{backgroundImage:"url("+require("./../../img/organisation/"+item.img) + ")"}}
                                        >
                                        </div>
                                        <div className="orgListItemTitle">{item.title}</div>
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