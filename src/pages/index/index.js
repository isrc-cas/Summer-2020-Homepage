import React from 'react'
import './index.less';


export default class Index extends React.Component{
    componentDidMount(){
        
       
    }

    getOrList(){
        const orList = ['iscaslogo.png','openeuler.png'];
        let divContainer = [];
        orList.map((item,index)=>{
            divContainer.push(<div className="indexHomOrItem" key={index} style={{backgroundImage: "url("+require("./../../img/or/"+item) + ")"}}></div>)
            return 0;
        })
        return divContainer
    }

    getTextTwo(){
        const data = [
            {
                text:'参与活动的学生可以利用暑期来提升自己的编程能力',
                img:'icon1'
            },
            {
                text:'你将认识更多志同道合的朋友和技术牛人',
                img:'icon2'
            },
            {
                text:'ISCAS与合作的开源社区为学生提供资深社区导师',
                img:'icon3'
            },
            {
                text:'活动结束后根据学生的活跃度和贡献给与奖金',
                img:'icon4'
            },
        ]

        let div = []
        data.map((item,index)=>{
            div.push(<div className="indexHomeIconItem" key={index}>
                {/* <div className="indexHomeIconItemIcon" style={{backgroundImage: "url("+require("./../../img/index/"+item.img) + ")"}}></div> */}
                <div className={["indexHomeIconItemIcon",item.img].join(" ")}></div>
                <div className="indexHomeIconItemText">{item.text}</div>
            </div>)
            return 0;
        })
        return div;
    }
    
    


    render(){
       
       
       
        
        return(
           <div className="indexHomeZ">
               <div className="indexHomeOne">
                    <div className="indexHomeOneWrapper content1200">
                    <div className="indexHomeOneTextCons">
                        
                        <span className="indexHomeOneTextConsChi">OSSSC summer 活动鼓励大家关注开源软件和开源社区，培养和发掘更多优秀的开发者。</span><br/>
                        <span className="indexHomeOneTextConsChi">活动将在暑期进行，我们将与开源社区合作，并为参与的学生们提供社区导师，并定期邀请技术大神来讲座。</span>
                        {/* <span className="indexHomeOneTextConsChi two">我们鼓励研究人员、开源爱好者、在校师生参与开源软件的开发与维护，
                        促进开源软件在国内的发展和优秀开源软件社区建设，增加开源项目在国内的活跃度，在开源领域与世界接轨。</span> */}
                    </div>
                    <div className="indexHomeOneImage"></div>

                    </div>
               </div>
               <div className="indexHomeSecond">
                    <div className="content1200">
                        <div className="indexHomeSecondText">
                            <span>我们鼓励研究人员、开源爱好者、在校师生参与开源软件的开发与维护，促进开源软件在国内的发展</span>
                            <br/>
                            <span>和优秀开源软件社区建设，增加开源项目在国内的活跃度，在开源领域与世界接轨。</span>
                        </div>
                        <div className="indexHomeSecondWrapper ">
                        <div className="indexHomeSecondTextCons">
                            
                                {this.getTextTwo()}
                           
                        </div>

                        </div>
                    {/* <div className="indexHomeOneWrapper ">
                        <div className="indexHomeTwoImage"></div>
                        <div className="indexHomeOneTextCons">
                            <span className="indexHomeOneTextConsChi two">
                                {this.getTextTwo()}
                            </span>
                        </div>

                    </div>
                    
                    <span className="indexHomeOneTextConsChi indexTwo">我们鼓励研究人员、开源爱好者、在校师生参与开源软件的开发与维护，
                        促进开源软件在国内的发展和优秀开源软件社区建设，增加开源项目在国内的活跃度，在开源领域与世界接轨。</span>
                    */}

                    </div> 
               </div>
               <div className="indexHomeThird">
                        <div className="indexHomeThirdWrapper content1200">
                            <div className="indexHomeThirdTitle">主办单位</div>
                            <div className="indexHomeOrList">
                                    {this.getOrList()}
                            </div>
                            <div className="indexHomeThirdTitle">承办单位</div>
                            <div className="indexHomeOrList">
                            <div className="indexHomOrItem naijing" ></div>
                            </div>
                        </div>
               </div>
           </div>
        )
    }
}