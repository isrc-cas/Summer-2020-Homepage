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
                text:'参与暑期2020活动，给你的编程能力加个buff',
                img:'icon1'
            },
            {
                text:'结识更多的小伙伴和技术大牛，一起热爱开源',
                img:'icon2'
            },
            {
                text:'软件所与开源社区将为您匹配资深的社区导师',
                img:'icon3'
            },
            {
                text:'根据活动中的“战绩”，您将获得活动荣誉奖杯和奖金奖励',
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
                        
                        <span className="indexHomeOneTextConsChi">开源软件供应链点亮计划鼓励大家关注开源软件和开源社区，培养和发掘更多优秀的开发者。</span><br/>
                        <span className="indexHomeOneTextConsChi">活动将在暑期进行，我们将与开源社区紧密合作，提供一对一的导师指导，邀技术大牛免费讲座。</span>
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
                            <div className="indexHomeOrList holder">
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