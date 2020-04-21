import React from 'react';
import './index.less';
import {listLinks} from './listLink.js';
import {NavLink} from 'react-router-dom';
export default class Header extends React.Component{
    constructor(props){
        super(props);
        this.state={
            listLinks,
            pageflag:'index',
            
        }

       
      
    }

    componentDidMount(){
        let urlnow = window.location.hash.split("/")[1]
        this.setState({
            pageflag:urlnow?'index':urlnow.split("#")[1]
        })
        console.log(this.state.pageflag)

        // window.addEventListener('hashchange',function(e){
        //     let urlnow = window.location.hash.split("/")[1]
        //     let flagpage = 'index'
        //     if(urlnow){
        //         flagpage = urlnow.split("#")[1]
        //     }
        //     // if(e.newURL.split("#")[1] === '/'){
        //     // setTimeout(" window.history.replaceState('','','/')",100)
        //     // }
        // })


      

    }

    render(){
        return(
            <div className="osscHeader">
               <div className="osscHeaderContent content1200">
                    <div className="osscHeaderLogo"></div>
                    <div className="osscHeaderList">
                        {
                            this.state.listLinks.map((item,index)=>{
                            return (
                                <div 
                                        key={index}
                                        className={["osscListItem",this.state.pageflag===item.title?'left0':''].join(" ")}>
                                        <NavLink to={'/'+item.title}>
                                                <span> {item.name}</span>
                                        </NavLink>  
                                    
                                </div>
                            )
                                
                            })
                        }
                    </div>
               </div>
            </div>
        )
    }
}