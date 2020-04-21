import React from 'react'
import './index.less';


export default class Index extends React.Component{
    componentDidMount(){
       
    }
    
    


    render(){
       
       
       
        
        return(
           <div className="indexHome">
               <div className="indexHomeOne">
                    <div className="indexHomeOneWrapper content1200">
                    <div className="indexHomeOneTextCons">
                        
                        <span className="indexHomeOneTextConsChi">OSSSC summer 活动鼓励大家关注开源软件和开源社区，培养和发掘更多优秀的开发者。</span><br/>
                        <span className="indexHomeOneTextConsChi">活动将在暑期进行，我们将与与开源社区合作，并为参与的开发者们提供社区导师，并定期邀请技术大神来讲座。</span>
                        {/* <span className="indexHomeOneTextConsChi two">我们鼓励研究人员、开源爱好者、在校师生参与开源软件的开发与维护，
                        促进开源软件在国内的发展和优秀开源软件社区建设，增加开源项目在国内的活跃度，在开源领域与世界接轨。</span> */}
                    </div>
                    <div className="indexHomeOneImage"></div>

                    </div>
               </div>
               <div className="indexHomeSecond">
                    <div className="indexHomeOneWrapper content1200">
                    <div className="indexHomeTwoImage"></div>
                    <div className="indexHomeOneTextCons">
                    <span className="indexHomeOneTextConsChi two">参与活动的开发者不仅可以利用暑期来提升自己的编程能力，同时，你将认识更多志同道合的朋友和技术牛人。ISCAS与合作的开源社区将为开发者们提供资深社区导师，并在活动结束后根据开发者的活跃度和贡献给与奖金。</span>
                    <span className="indexHomeOneTextConsChi">我们鼓励研究人员、开源爱好者、在校师生参与开源软件的开发与维护，
                        促进开源软件在国内的发展和优秀开源软件社区建设，增加开源项目在国内的活跃度，在开源领域与世界接轨。</span>
                    </div>


                    </div>
               </div>
           </div>
        )
    }
}