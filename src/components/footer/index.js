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
                    {/* <div className="osscFooterItem">
                        <div className="osscFooterItemTitle">Phone:</div>
                        <div className="osscFooterItemText">+86-(10)-62661689</div>
                    </div> */}
                    <div className="osscFooterItem">
                        <div className="osscFooterItemTitle">Email:</div>
                        <div className="osscFooterItemText"><a href="mailto:summer2020@iscas.ac.cn">summer2020@iscas.ac.cn</a></div>
                    </div>
                    </div>
                    <div className="osscFooterItem copyright">版权所有 @开源软件供应链点亮计划-暑期2020 活动组委会</div>
               </div>
            </div>
        )
    }
}