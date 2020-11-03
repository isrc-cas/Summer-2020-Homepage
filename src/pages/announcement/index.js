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
import list from './list.json';
import { Input, Pagination } from 'antd';

const { Search } = Input;
export default class Announcement extends React.Component{
    constructor(props){
       super(props)
       this.state ={
        datastock:data,
        data,
        pagenow:1,
        pagesize:23,
        showdata:[],
        total:151,
        currentProject:0,
        currentProjectP:0,
        // tab
        list,
        showlist:list,
        tabflag:"two",//one:结项，two:优秀学生
       
       
       }
    }
    componentDidMount(){
        
        this.setState({
            total:this.state.data.length,
            datastock:this.state.data,
            showlist:this.state.list
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
                var $selectpro =  document.getElementsByClassName(proid)[0];
                
                $selectpro.style.backgroundColor="#c0caea";
                window.scrollTo({
                    top: position,
                    left: 0,
                    behavior: 'smooth'
                });
            },500)
            setTimeout(()=>{
                document.getElementsByClassName(proid)[0].style.backgroundColor="";
            },2500)
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

    changeTabFlag(flag){
        this.setState({
            tabflag:flag
        })
    }



    getPageData(page){
        
        this.setState({
            showdata:this.state.datastock.slice((page-1)*this.state.pagesize,page*this.state.pagesize)
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

    filterItem(value){
        if(value){
            var showdataTemp = []
            this.state.data.map((item)=>{
                if(item.projectid.toString().includes(value)||
                item.projectname.toLocaleLowerCase().includes(value)||
                item.name.toLocaleLowerCase().includes(value)){
                    showdataTemp.push(item)
                }
                return 0;
            })
            
            this.setState({
                datastock:showdataTemp,
                pagenow:1,
                
            })
        }else{
            this.setState({
                datastock:this.state.data,
                pagenow:1,
                
            })

        }
        
        
        setTimeout(()=>{
            this.getPageData(1)
        },100)
        
        
        return 0;
    }

    filterItemXiu(value){
        var showDatalist = []
        var showdataTemp = []
        this.state.list.map((item)=>{
            showdataTemp = []
            item.content.map((sele)=>{
               
                if(sele.projectid.toString().includes(value)||
                sele.projectname.toLocaleLowerCase().includes(value)||
                sele.name.toLocaleLowerCase().includes(value)){
                    showdataTemp.push(sele)
                }
                return 0;
            })
            
            if(showdataTemp.length>0){
                var tempobj = JSON.parse(JSON.stringify(item));
                tempobj.content = showdataTemp
                showDatalist.push(tempobj)
            }
            
            return 0;
            
        })
       
        
       this.setState({
           showlist:showDatalist
       })
       return 0;
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
                <div className="AnnouncementTab ">
                    <div className="AnnouncementTabwrapper content1200">
                        <div  
                            className={["AnnouncementTabItem",this.state.tabflag === "one"?"show":""].join(" ")}
                            onClick={()=>{this.changeTabFlag('one')}}>考核通过</div>
                        <div 
                            className={["AnnouncementTabItem",this.state.tabflag === "two"?"show":""].join(" ")}  
                            onClick={()=>{this.changeTabFlag('two')}}>优秀名单</div>
                    </div>
                </div>
                <div className={["AnnouncementContent",this.state.tabflag === "one"?"show":""].join(" ")}>
                    <div className="AnnouncementWrapper  content1200">
                        <div className="AnnouncementWrapperHeader">
                            <div className="AnnouncementSearch">
                            <Search
                                placeholder="请输入搜索的学生姓名或项目ID"
                                onSearch={value => this.filterItem(value)}
                                allowClear
                            />
                            <div className="AnnouncementWrapperHeaderRight">*按学生姓名拼音字母排序</div>
                            </div>
                            <div className="AnnouncementWrapperHeaderLeft">
                                <span className="AWHLblue">共{this.state.datastock.length}名学生 </span>
                                <span className="AWHLright">
                                    <span className="AWHLblue">第{this.state.pagenow}页</span>
                                    <span className="AWHLgrey">/共{Math.ceil(this.state.datastock.length/this.state.pagesize)}页</span>
                                </span>
                            </div>
                            

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
                                           
                                            <div className="AWCTableStudentName" >{ele.name}</div>
                                            <div className={["AWCTableCommunityName",this.state.currentProject === ele.projectid ? 'show':''].join(" ")}>
                                                <span className="AWCTableCommunityTitle" onClick={(e)=>{this.showDescData(ele.projectid,e)}}>{ele.communityname}</span>
                                                <div className="AWCTableCommunityDesc" >
                                                    <div className="AWCTableCommunityDescclose" onClick={(e)=>{this.showDescData(0,e)}}></div>
                                                    <span>{ele.communitydesc}</span>
                                                </div>
                                            </div>
                                            <div className={["AWCTableProjectName",this.state.currentProjectP === ele.projectid ? 'show':''].join(" ")} >
                                                <span className="AWCTableProjectTitle" onClick={(e)=>{this.showProjectDescData(ele.projectid,e)}}>{ele.projectname}</span>
                                                <div className="AWCTableProjectDesc" >
                                                    <div className="AWCTableCommunityDescclose" onClick={(e)=>{this.showProjectDescData(0,e)}}></div>
                                                    <div className="AWCTableProjectID">项目ID：{ele.projectid}</div>
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
                                defaultCurrent={1} total={this.state.datastock.length} pageSize={this.state.pagesize}/>

                            </div>
                        </div>

                    </div>
                    

                </div>
                <div className={["AnnouncementContent AnnouncementYouxiu",this.state.tabflag === "two"?"show":""].join(" ")}>
                    <div className="AnnouncementWrapper  content1200">
                        <div className="AnnouncementXiuText">
                            所有结项的 151 名同学都很优秀。组委会和指导委员会的老师们从 4 个方向选出这 20 位优秀代表，鼓励并希望有更多同学积极参与开源社区，为开源事业贡献自己的力量！
                        </div>
                        <div className="AnnouncementSearch">
                            <Search
                                placeholder="请输入搜索的学生姓名或项目ID"
                                onSearch={value => this.filterItemXiu(value)}
                                allowClear
                            />
                        </div>
                        <div className="AnnouncementXiuWrapper">
                            {
                                this.state.showlist.map((item, index)=>{
                                    return (
                                        <div className={["AnnouncementXiuItem", item.name].join(" ")} key={index}>
                                        <div className="AnnouncementXiuItemTitle">
                                            <span className="AnnouncementXiuItemTitleOne">优秀学生 </span>|
                                            <span className="AnnouncementXiuItemTitleTwo"> {item.title}</span>
                                        </div>
                                        <div className="AnnouncementXiuItemText">
                                            导师寄语：{item.text}
                                        </div>
                                        <div className="AnnouncementXiuItemNum">
                                            <span className="AnnouncementXiuItemNumOne">共5名学生</span>
                                            <span className="AnnouncementXiuItemNumTwo">*按学生姓名拼音字母排序</span>
                                        </div>
                                        <div className="AnnouncementTable">
                                        <div className="AWCTableHeader AWCTableLine">
                                                <div className="AWCTableStudentName">学生姓名</div>
                                                <div className="AWCTableCommunityName">社区名称</div>
                                                <div className="AWCTableProjectName">项目名称</div>
                                                <div className="AWCTableTutor">社区导师</div>
                                                <div className="AWCTableRepoaddr">仓库地址</div>
                                            </div>
                                            <div className="AWCTableContent">
                                            
                                                
                                                {
                                                    item.content.map((ele,index)=>{
                                                    return (
                                                        <div className={["AWCTableLine",ele.projectid].join(" ")} key={index}>
                                                        
                                                            <div className="AWCTableStudentName" >{ele.name}</div>
                                                            <div className={["AWCTableCommunityName",this.state.currentProject === ele.projectid ? 'show':''].join(" ")}>
                                                                <span className="AWCTableCommunityTitle" onClick={(e)=>{this.showDescData(ele.projectid,e)}}>{ele.communityname}</span>
                                                                <div className="AWCTableCommunityDesc" >
                                                                    <div className="AWCTableCommunityDescclose" onClick={(e)=>{this.showDescData(0,e)}}></div>
                                                                    <span>{ele.communitydesc}</span>
                                                                </div>
                                                            </div>
                                                            <div className={["AWCTableProjectName",this.state.currentProjectP === ele.projectid ? 'show':''].join(" ")} >
                                                                <span className="AWCTableProjectTitle" onClick={(e)=>{this.showProjectDescData(ele.projectid,e)}}>{ele.projectname}</span>
                                                                <div className="AWCTableProjectDesc" >
                                                                    <div className="AWCTableCommunityDescclose" onClick={(e)=>{this.showProjectDescData(0,e)}}></div>
                                                                    <div className="AWCTableProjectID">项目ID：{ele.projectid}</div>
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
    
                                        </div>
                                    </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                
            </div>
         )
       
        
        
    }
}
