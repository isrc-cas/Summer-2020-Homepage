import React from 'react';
import './index.less';

export default class Footer extends React.Component{
    constructor(props){
        super(props);
        this.state={
          
            
        }

       
      
    }


    render(){
        return(
            <div className="osscFooter">
               <div className="content1200 ossscFooterWrapper">
                    <div className="osscFooterItem">
                    <div className="osscFooterItem">
                        <div className="osscFooterItemTitle">Phone:</div>
                        <div className="osscFooterItemText">+86-(10)-62661689</div>
                    </div>
                    <div className="osscFooterItem">
                        <div className="osscFooterItemTitle">Email:</div>
                        <div className="osscFooterItemText">summer2020@iscas.ac.cn</div>
                    </div>
                    </div>
                    <div className="osscFooterItem copyright">版权所有 2020 @中国科学院软件研究所 - 智能软件研究中心</div>
               </div>
            </div>
        )
    }
}