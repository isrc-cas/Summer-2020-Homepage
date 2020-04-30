import React from 'react';
import './index.less';
import './mobile.less';
import {listLinks} from './listLink.js';
import {NavLink} from 'react-router-dom';


var withl = window.screen.width


if(withl<1200 && withl>700){
    //1.0 判定为移动手机设备
    var scaleIndex = withl/1200;
    document.getElementsByTagName("body")[0].style.transform = "scale("+scaleIndex+")";
    document.getElementsByTagName("body")[0].style.transformOrigin = "left top"
}
    

export default class Header extends React.Component{
    constructor(props){
        super(props);
        this.state={
            listLinks,
            pageflag:'index',

            moblieListFlag:false,
            
        }

       
      
    }

    componentDidMount(){
        let urlnow = window.location.hash.split("/")[1]
        this.setState({
            pageflag:urlnow?'index':urlnow.split("#")[1]
        })
      

        window.addEventListener('hashchange',function(e){
            let urlnow = window.location.hash.split("#")[1].split("/")[1]
            let flagpage = urlnow ? urlnow : 'index';   
              
            setTimeout(()=>{
                window.history.replaceState('','',`/${flagpage}`)
            },5);
            
        })


      

    }
    getLink(title){
        window.location.hash = "/"+title
        this.closeHeaderList()
    }

    getHeaderList(){
        this.setState({
            moblieListFlag:true
        })
    }
    closeHeaderList(){
        this.setState({
            moblieListFlag:false
        })
    }

    getActive(title){
        if(title === 'index'){
            return 'active'
        }
    }

    render(){
        return(
            <div className="osscHeader">
               <div className="osscHeaderContent content1200">
                    <div className="osscHeaderLogo"></div>
                    <div className="ossHeaderMobileIcon" onClick={()=>this.getHeaderList()}></div>
                    <div className="osscHeaderList">
                        {
                            this.state.listLinks.map((item,index)=>{
                            return (
                                <NavLink key={index} to={'/'+item.title} >
                                    <div  
                                            
                                            className={["osscListItem",this.state.pageflag===item.title?'left0':''].join(" ")}>
                                        
                                                    <span> {item.name}</span>
                                        
                                        
                                    </div>
                                </NavLink>  
                            )
                                
                            })
                        }
                    </div>
                    <div className={["osscHeaderMobileList " ,this.state.moblieListFlag?"displayblock":""].join(" ")}>
                        <div className="osscClose" onClick={()=>this.closeHeaderList()}></div>
                        {
                            this.state.listLinks.map((item,index)=>{
                            return (
                                //<NavLink key={index} to={'/'+item.title}>
                                <div key={index}
                                onClick={()=>this.getLink(item.title)}
                                        className={["osscListItem",this.state.pageflag===item.title?'left0':''].join(" ")}>
                                       
                                                <span> {item.name}</span>
                                       
                                    
                                </div>
                                //</NavLink>  
                            )
                                
                            })
                        }
                    </div>
               </div>
            </div>
        )
    }
}