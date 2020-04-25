import React from 'react'
import './index.less';
// import {NavLink} from 'react-router-dom';
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
                                onClick={()=>this.scrollLocation('sponsor')}
                                >
                                联系我们
                                {/* <NavLink to="/contactus">联系我们</NavLink> */}
                                    
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
                                onClick={()=>this.scrollLocation('community')}
                                >
                                立即报名
                                {/* <NavLink to="/contactus">立即报名</NavLink>    */}
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
                    <div className="content1200">
                        <div className="startLineTwo">
                        <div className="indexStartOneTextCons">
                            <span className="indexStartOneTextConsChi"><h2>合作单位要求</h2></span>
                            <span className="indexStartOneTextConsChi indexStartContent">
                                <ul>
                                    <li>
                                    支持开源的公司、高校、科研院所及其他机构。
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
                                    开源软件仓库采用的协议需要是<a href="https://opensource.org/licenses" target="_blank" rel="noopener noreferrer">OSI 组织认可的协议</a>。
                                    </li>
                                </ul>
                            </span>  
                            
                        </div>
                        <div className="indexStartOneTextCons">
                            <span className="indexStartOneTextConsChi "><h2>学生要求</h2></span>
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
                        </div>
                        </div>
                        <div className="startLineThree">
                            <span className="indexStartOneTextConsChi indexStartContact" id="start-sponsor">
                                    <h2>如何联系</h2>
                                    <h3>
                                        请将以下信息发送到邮箱 <a href="mailto:summer2020@iscas.ac.cn?subject=合作单位报名暑期2020！&body=请填写合作单位名称、联系人姓名和联系人联系方式，我们会尽快联系您。">summer2020@iscas.ac.cn</a>
                                    </h3>
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

                            <span className="indexStartOneTextConsChi indexStartContact" id="start-community">
                                <h2>如何报名</h2>
                                <h3>
                                    请将以下信息发送到邮箱 <a href="mailto:summer2020@iscas.ac.cn?subject=开源社区报名暑期2020！&body=请填写社区名称、联系人姓名和联系人联系方式，我们会尽快联系您。">summer2020@iscas.ac.cn</a>
                                </h3>
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

                            <span className="indexStartOneTextConsChi indexStartContact">
                                <h3>2020年6月1日</h3>
                                <h3>学生报名正式开始！</h3>
                            </span>

                        </div>
                    </div>
               </div>
           </div>
        )
    }
}