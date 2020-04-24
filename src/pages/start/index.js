import React from 'react'
import './index.less';


export default class Start extends React.Component{
    componentDidMount(){
       
    }

    render(){  
        return(
           <div className="indexStart">
               <div className="indexStartOne">
                    <div className="indexStartOneWrapper content1200">
                        <div className="indexStartOneTextCons">
                            <span className="indexStartOneTextConsChi">合作单位</span><br/>
                            <span className="indexStartOneTextConsChi">负责审核合格的社区进入支持列表，审核申请者资格，并在活动期间为开发者、社区导师等参与方平台支持和沟通支持，为开发者、社区导师提供资金支持，项目开发周期结束后，主办方将进行成果汇总、奖金发放、证书颁发。</span>
                        </div>
                        <div className="indexStartOneTextCons">
                            
                            <span className="indexStartOneTextConsChi">社区：</span><br/>
                            <span className="indexStartOneTextConsChi">作为活动目标贡献的接收方，负责提供项目列表、项目指导、项目成果评审。</span>
                        </div>
                        <div className="indexStartOneTextCons">
                            
                            <span className="indexStartOneTextConsChi">开发者：</span><br/>
                            <span className="indexStartOneTextConsChi">自由选择项目，与社区导师沟通实现方案并撰写项目计划书。被选中的开发者将在社区导师指导下，按计划完成开发工作，并将成功贡献给社区。社区评估开发者的完成度，主办方根据评估结果发放资助金额给开发者的。</span>
                        </div>
                    </div>
               </div>
               <div className="indexStartSecond">
                    <div className="indexStartOneWrapper content1200">
                        <div className="indexStartOneTextCons">
                            <span className="indexStartOneTextConsChi two">合作单位要求</span>
                            <span className="indexStartOneTextConsChi">1. 国内具有法人的公司或机构。</span>
                        </div>
                        <div className="indexStartOneTextCons">
                            <span className="indexStartOneTextConsChi two">社区要求</span>
                            <span className="indexStartOneTextConsChi">
                                1. 有活跃的开源软件仓库的社区或个人。
                            </span>
                            <span className="indexStartOneTextConsChi">
                                2. 开源软件仓库采用的协议需要是<a href="https://opensource.org/licenses">OSI 组织认可的协议</a>。 
                            </span>
                            <span className="indexStartOneTextConsChi">
                                3. 参与协议：需要补充社区参与的协议。 
                            </span>
                        </div>
                        <div className="indexStartOneTextCons">
                            <span className="indexStartOneTextConsChi two">开发者要求</span>
                            <span className="indexStartOneTextConsChi">
                                1. 在校学生或年满 18+ 周岁，提交学生证和身份证。
                            </span>
                            <span className="indexStartOneTextConsChi">
                                2. 非在校学生仅提交身份证。
                            </span>
                            <span className="indexOneTextConsChi">
                                参与协议：需要补充开发者参与的协议。
                            </span>
                        </div>
                    </div>
               </div>
           </div>
        )
    }
}