/**
 * Copyright (c) 2020 Intelligent Software Research Center of ISCAS
 * Summer 2020 Homepage is licensed under Mulan PSL v2.
 * You can use this software according to the terms and conditions of the Mulan PSL v2.
 * You may obtain a copy of Mulan PSL v2 at:
 *          http://license.coscl.org.cn/MulanPSL2
 * THIS SOFTWARE IS PROVIDED ON AN "AS IS" BASIS, WITHOUT WARRANTIES OF ANY KIND,
 * EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO NON-INFRINGEMENT,
 * MERCHANTABILITY OR FIT FOR A PARTICULAR PURPOSE.
 * See the Mulan PSL v2 for more details.
 */

import React from 'react';
import './index.less';
import data from './data.json';
import { Pagination } from 'antd';
export default class Announcement extends React.Component{
    constructor(props){
       super(props)
       this.state ={
        data,
        pagenow:1,
        pagesize:23,
        showdata:[],
        total:151,
        currentProject:0,
        currentProjectP:0,
       
       
       }
    }
    componentDidMount(){
        this.setState({
            total:this.state.data.length
        })
        this.getcurrentpage()
    }
    getcurrentpage(){
        const proid = parseInt(window.location.hash.split("announcement#")[1]);
        let  pagenow = this.state.pagenow;
        let indexnum = 0;
        if(proid> 0){
            
            var len =  this.state.data.length;
            for(var i=0;i<len;i++){
               
                if(this.state.data[i].projectid === proid){
                    indexnum = i;
                    break;
                }
            }
            pagenow =  Math.ceil(indexnum/this.state.pagesize);
            this.getPageData(pagenow);
            let position = 200 + indexnum%this.state.pagesize*54
            console.log(position)
           
            this.setState({
                pagenow
            })
            setTimeout(()=>{
                window.scrollTo({
                    top: position,
                    left: 0,
                    behavior: 'smooth'
                });
            },1000)
            window.location.hash = "#/announcement"
            

        }else{
            this.getPageData(1);
        }

       

        
        
        
        

        


        
        
    }
    showDescData(id,e){
        e.stopPropagation();
        this.setState({
            currentProject:id,
            currentProjectP:0
        })
        // if(id === 0){         
        //     return;
        // }
        
        // if(index > 15 && len > 800){
        //     const domele = document.getElementsByClassName("AWCTableLine 2036398")[0].children[1].children[1]
        //     const height=domele.offsetHeight+40;
        //     console.log(domele.offsetHeight)
        //     domele.style.marginTop=`-${height}px`
        // }
        
        
    }
    closeModal(){
        console.log(0)
        this.setState({
            currentProject:0,
            currentProjectP:0
        })
    }

    showProjectDescData(id,e){
        e.stopPropagation();
        this.setState({
            currentProjectP:id,
            currentProject:0,
        })
        // if(id === 0){         
        //     return;
        // }
       
        // if(index > 15 && len > 800){
        //     const domele = document.getElementsByClassName("AWCTableLine 2036398")[0].children[2].children[1]
        //     const height=domele.offsetHeight+40;
        //     console.log(domele.offsetHeight)
        //     domele.style.marginTop=`-${height}px`
        // }
    }



    getPageData(page){
        this.setState({
            showdata:this.state.data.slice((page-1)*this.state.pagesize,page*this.state.pagesize)
        })
       
       
    }

   

    onChange = page => {
        console.log(page);
        this.setState({
            pagenow: page,
        });
        
        this.getPageData(page)
      };
      goLink(url){
        window.open(url)
      }

      
   
    
 


    render(){
       
        return(
            <div className="Announcement" onClick={()=>{this.closeModal()}}>
                <div className="AnnouncementBanner">
                   <div className="content1200">
                   <div className="AnnouncementBannerText">结项公示</div>
                   <div className="AnnouncementBannerTexttwo">结项评审已结束，欢迎关注！</div>
                   </div>
                </div>
                <div className="AnnouncementContent">
                    <div className="AnnouncementWrapper  content1200">
                        <div className="AnnouncementWrapperHeader">
                            <div className="AnnouncementWrapperHeaderLeft">
                                <span className="AWHLblue">共{this.state.total}名学生 </span>
                                <span className="AWHLblue">第{this.state.pagenow}页</span>
                                <span className="AWHLgrey">/共7页</span>
                            </div>
                            <div className="AnnouncementWrapperHeaderRight">*按学生姓名拼音字母排序</div>

                        </div>
                        <div className="AnnouncementWrapperContent">
                            <div className="AWCTableHeader AWCTableLine">
                                <div className="AWCTableStudentName">学生姓名</div>
                                <div className="AWCTableCommunityName">社区名称</div>
                                <div className="AWCTableProjectName">项目名称</div>
                                <div className="AWCTableTutor">社区导师</div>
                                <div className="AWCTableRepoaddr">仓库地址</div>
                            </div>
                            <div className="AWCTableContent">
                                
                                {
                                    this.state.showdata.map((ele,index)=>{
                                       return (
                                        <div className={["AWCTableLine",ele.projectid].join(" ")} key={index}>
                                           
                                            <div className="AWCTableStudentName">{ele.name}</div>
                                            <div className="AWCTableCommunityName" >
                                                <span onClick={(e)=>{this.showDescData(ele.projectid,e)}}>{ele.communityname}</span>
                                                <div className={["AWCTableCommunityDesc",this.state.currentProject === ele.projectid ? 'show':''].join(" ")} >
                                                    <div className="AWCTableCommunityDescclose" onClick={(e)=>{this.showDescData(0,e)}}></div>
                                                    <span>{ele.communitydesc}</span>
                                                </div>
                                            </div>
                                            <div className="AWCTableProjectName">
                                                <span onClick={(e)=>{this.showProjectDescData(ele.projectid,e)}}>{ele.projectname}</span>
                                                <div className={["AWCTableProjectDesc",this.state.currentProjectP === ele.projectid ? 'show':''].join(" ")} >
                                                    <div className="AWCTableCommunityDescclose" onClick={(e)=>{this.showProjectDescData(0,e)}}></div>
                                                    <span>{ele.projectdesc}</span>
                                                </div>
                                            </div>
                                            <div className="AWCTableTutor">{ele.tutor}</div>
                                            <div className="AWCTableRepoaddr" onClick={()=>this.goLink(ele.repolink)}>访问</div>
                                        </div>
                                       )
                                    })
                                }
                            </div>
                            <div className="AWCTablePagelist">
                                <Pagination  
                                onChange={this.onChange}
                                current={this.state.pagenow}
                                defaultCurrent={1} total={this.state.data.length} pageSize={this.state.pagesize}/>

                            </div>
                        </div>

                    </div>
                    

                </div>
               
                
            </div>
         )
       
        
        
    }
}
