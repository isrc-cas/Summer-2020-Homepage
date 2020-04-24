import React from 'react'
import './index.less';


export default class Start extends React.Component{
    componentDidMount(){
       
    }

    render(){  
        return(
           <div className="indexHome">
               <div className="indexHomeOne">
                    <div className="indexHomeOneWrapper content1200">
                    <div className="indexHomeOneTextCons">
                        
                        <span className="indexHomeOneTextConsChi">合作单位</span><br/>
                        <span className="indexHomeOneTextConsChi">负责审核合格的社区进入支持列表，审核申请者资格，并在活动期间为开发者、社区导师等参与方平台支持和沟通支持，为开发者、社区导师提供资金支持，项目开发周期结束后，主办方将进行成果汇总、奖金发放、证书颁发。</span>
                        {/* <span className="indexHomeOneTextConsChi two">我们鼓励研究人员、开源爱好者、在校师生参与开源软件的开发与维护，
                        促进开源软件在国内的发展和优秀开源软件社区建设，增加开源项目在国内的活跃度，在开源领域与世界接轨。</span> */}
                    </div>
                    <div className="indexHomeOneTextCons">
                        
                        <span className="indexHomeOneTextConsChi">社区：</span><br/>
                        <span className="indexHomeOneTextConsChi">作为活动目标贡献的接收方，负责提供项目列表、项目指导、项目成果评审。</span>
                        {/* <span className="indexHomeOneTextConsChi two">我们鼓励研究人员、开源爱好者、在校师生参与开源软件的开发与维护，
                        促进开源软件在国内的发展和优秀开源软件社区建设，增加开源项目在国内的活跃度，在开源领域与世界接轨。</span> */}
                    </div>
                    {/* <div className="indexHomeOneTextCons"></div> */}
                    <div className="indexHomeOneTextCons">
                        
                        <span className="indexHomeOneTextConsChi">开发者：</span><br/>
                        <span className="indexHomeOneTextConsChi">自由选择项目，与社区导师沟通实现方案并撰写项目计划书。被选中的开发者将在社区导师指导下，按计划完成开发工作，并将成功贡献给社区。社区评估开发者的完成度，主办方根据评估结果发放资助金额给开发者的。</span>
                        {/* <span className="indexHomeOneTextConsChi two">我们鼓励研究人员、开源爱好者、在校师生参与开源软件的开发与维护，
                        促进开源软件在国内的发展和优秀开源软件社区建设，增加开源项目在国内的活跃度，在开源领域与世界接轨。</span> */}
                    </div>
                    {/* <div className="indexHomeOneImage"></div> */}

                    </div>
               </div>
               <div className="indexHomeSecond">
                    <div className="indexHomeOneWrapper content1200">
                    {/* <div className="indexHomeTwoImage"></div> */}
                    <div className="indexHomeOneTextCons">
                        <span className="indexHomeOneTextConsChi two">合作单位要求</span>
                        <span className="indexHomeOneTextConsChi">1. 提供项目列表和描述，并安排项目对应的导师。</span>
                        <span className="indexHomeOneTextConsChi">2. 导师与申请者沟通方案、并从申请者中选中一位承接项目。</span>
                        <span className="indexHomeOneTextConsChi">3. 在为期三个月的开发周期中，导师指导开发者进行对应项目的开发工作。</span>
                    </div>
                    <div className="indexHomeOneTextCons">
                        <span className="indexHomeOneTextConsChi two">社区要求</span>
                        <span className="indexHomeOneTextConsChi">1. 提供项目列表和描述，并安排项目对应的导师。</span>
                        <span className="indexHomeOneTextConsChi">2. 导师与申请者沟通方案、并从申请者中选中一位承接项目。</span>
                        <span className="indexHomeOneTextConsChi">3. 在为期三个月的开发周期中，导师指导开发者进行对应项目的开发工作。</span>
                    </div>
                    <div className="indexHomeOneTextCons">
                        <span className="indexHomeOneTextConsChi two">学生要求</span>
                        <span className="indexHomeOneTextConsChi">1. 主要目标人群为国内各级学校学生，包括研究生、本科生，也可以是其他在校学生（不排除有中小学生）开发者在开放的项目中自由选择。</span>
                        <span className="indexHomeOneTextConsChi">2. 同时也接受爱好者的参与（爱好者比例不超过 20%，优先选择学生）</span>
                    </div>


                    </div>
               </div>
           </div>
        )
    }
}