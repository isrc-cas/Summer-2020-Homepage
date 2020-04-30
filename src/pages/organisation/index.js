import React from 'react'
import './index.less';
import './mobile.less';
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
    render(){
        return(
            <div className="organisation"> 
                <div className="orgBanner"></div>
                <div className="orgListWrapper">

                <div className="orgList content1200">
                    {
                        this.state.data.orgList.map((item,index)=>{
                            
                            return (
                                <div className="orgListItem" key={index}>
                                        <div 
                                            className={["orgListItemImage",item.stitle].join(" ")}
                                            onClick={() => this.openInNewTab(item.url)}
                                        >
                                        <div className="orgListItemTitle">{item.title}</div>
                                        </div>
                                        {/* <div className="orgListItemTitle"></div> */}
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