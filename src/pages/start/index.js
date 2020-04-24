import React from 'react'
import './index.less';
import {NavLink} from 'react-router-dom';
// import { Button } from 'antd';

export default class Start extends React.Component{
    componentDidMount(){
       
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
                            <span className="indexStartOneTextConsChi startButton"><NavLink to="/contactus">联系我们</NavLink></span>
                            <br/>
                            <span className="indexStartQuote">(请通过邮箱/公众号联系合作事宜)</span>

                        </div>
                        <div className="indexStartOneTextCons">
                            <span className="indexStartOneTextConsChi indexStartIcon indexStartIconTwo"></span>
                            <br/>
                            <span className="indexStartOneTextConsChi"><h2>社区</h2></span>
                            <br/>
                            <span className="indexStartOneTextConsChi">让更多的学生和开发者们加入你的社区!</span>
                            <br/>
                            <span className="indexStartOneTextConsChi startButton"><NavLink to="/contactus">立即报名</NavLink></span>
                            <br/>
                            <span className="indexStartQuote">(请通过邮箱/公众号联系报名事宜)</span>
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
                            <span className="indexStartOneTextConsChi indexStartContent">1. 支持开源的公司、高校、科研院所及其他机构。</span>
                        </div>
                        <div className="indexStartOneTextCons">
                            <span className="indexStartOneTextConsChi"><h2>社区要求</h2></span>
                            <span className="indexStartOneTextConsChi indexStartContent">
                                1. 有活跃的开源软件仓库的社区或个人。
                            </span>
                            <span className="indexStartOneTextConsChi indexStartContent">
                                2. 开源软件仓库采用的协议需要是<a href="https://opensource.org/licenses">OSI 组织认可的协议</a>。 
                            </span>
                        </div>
                        <div className="indexStartOneTextCons">
                            <span className="indexStartOneTextConsChi "><h2>学生要求</h2></span>
                            <span className="indexStartOneTextConsChi indexStartContent">
                                1. 年满 18 周岁的在校学生。
                            </span>
                            <span className="indexStartOneTextConsChi indexStartContent">
                                2. 具有有效的学生证和身份证。
                            </span>
                        </div>
                    </div>
               </div>
           </div>
        )
    }
}