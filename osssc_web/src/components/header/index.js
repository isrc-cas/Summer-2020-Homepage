import React from 'react';
import './index.less';
import {listLinks} from './listLink.js';
import {NavLink} from 'react-router-dom';
export default class Header extends React.Component{
    constructor(props){
        super(props);
        this.state={
            listLinks,
           
            
        }
      
    }

    goLink(title){

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
                                    className="osscListItem">
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