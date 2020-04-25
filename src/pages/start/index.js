import React from 'react'
import './index.less';

export default class Start extends React.Component{
    componentDidMount(){
       
    }
    scrollLocation (indexStr) {
        var widget = document.getElementById('start-'+indexStr);
        widget.scrollIntoView(true);
        return 0;
    }

    render(){  
        
        return(
           <div className="indexStart">
               <div className="indexStartOne">
                    <div className="indexStartOneWrapper content1200">
                        <div className="indexStartOneTextCons">
                            <span className="indexStartOneTextConsChi indexStartIcon indexStartIconOne"></span>
                            <br/>
                            <span className="indexStartOneTextConsChi"><h2>合作单位</h2></span>
                            <br/>
                            <span className="indexStartOneTextConsChi">和我们一起贡献开源！</span>
                            <br/>
                            <br/>
                            <span 
                                className="indexStartOneTextConsChi startButton" 
                                onClick={()=>this.scrollLocation('sponsor')}>
                                    联系我们
                            </span>

                        </div>
                        <div className="indexStartOneTextCons">
                            <span className="indexStartOneTextConsChi indexStartIcon indexStartIconTwo"></span>
                            <br/>
                            <span className="indexStartOneTextConsChi"><h2>社区</h2></span>
                            <br/>
                            <span className="indexStartOneTextConsChi">让更多的学生和开发者们加入你的社区!</span>
                            <br/>
                            <br/>
                            <span 
                                className="indexStartOneTextConsChi startButton" 
                                onClick={()=>this.scrollLocation('community')}>
                                    立即报名
                            </span>
                            
                        </div>
                        <div className="indexStartOneTextCons">
                            <span className="indexStartOneTextConsChi indexStartIcon indexStartIconThree"></span>
                            <br/>
                            <span className="indexStartOneTextConsChi"><h2>学生</h2></span>
                            <br/>
                            <span className="indexStartOneTextConsChi">利用暑期的时间，贡献你的代码吧！</span>
                            <span className="indexStartOneTextConsChi"><h4>2020年6月1日，报名正式开始！</h4></span>
                            <br/>
                            <span className="indexStartQuote"> </span>

                        </div>
                    </div>
               </div>
               <div className="indexStartSecond">
                    <div className="indexStartOneWrapper content1200">
                        <div className="indexStartOneTextCons">
                            <span className="indexStartOneTextConsChi"><h2>合作单位要求</h2></span>
                            <span className="indexStartOneTextConsChi indexStartContent">
                                <ul>
                                    <li>
                                    支持开源的公司、高校、科研院所及其他机构。
                                    </li>
                                </ul>
                            </span>
                            <span className="indexStartOneTextConsChi indexStartContact" id="start-sponsor">
                                <h5>
                                    如有意向合作，请将以下信息发送到邮箱 <a href="mailto:summer2020@iscas.ac.cn">summer2020@iscas.ac.cn</a>
                                </h5>
                                <ul>
                                    <li>
                                        合作单位名称
                                    </li>
                                    <li>
                                        联系人
                                    </li>
                                    <li>
                                        联系方式
                                    </li>
                                </ul>
                            </span>
                        </div>
                        <div className="indexStartOneTextCons">
                            <span className="indexStartOneTextConsChi"><h2>社区要求</h2></span>
                            <span className="indexStartOneTextConsChi indexStartContent">
                                <ul>
                                    <li>
                                    有活跃的开源软件仓库的社区或个人。
                                    </li>
                                    <li>
                                    开源软件仓库采用的协议需要是<a href="https://opensource.org/licenses">OSI 组织认可的协议</a>。
                                    </li>
                                </ul>
                            </span>  
                            <span className="indexStartOneTextConsChi indexStartContact" id="start-community">
                                <h5>
                                    如需申请，请将以下信息发送到邮箱 <a href="mailto:summer2020@iscas.ac.cn">summer2020@iscas.ac.cn</a>
                                </h5>
                                <ul>
                                    <li>
                                        社区或开源项目名称
                                    </li>
                                    <li>
                                        联系人
                                    </li>
                                    <li>
                                        联系方式
                                    </li>
                                </ul>
                            </span>
                        </div>
                        <div className="indexStartOneTextCons">
                            <span className="indexStartOneTextConsChi "><h2>学生要求</h2></span>
                            <div className="indexStartOverWrapper">
                                <span className="indexStartOneTextConsChi indexStartContent">
                                    <ul>
                                        <li>
                                        年满 18 周岁的在校学生。
                                        </li>
                                        <li>
                                        具有有效的学生证和身份证。
                                        </li>
                                    </ul>
                                </span>
                                <span className="indexStartOneTextConsChi indexStartContact"><h4>2020年6月1日，报名正式开始！</h4></span>
                            </div>
                            
                        </div>
                    </div>
               </div>
           </div>
        )
    }
}