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
                    <div class="osscHeaderList">
                        {
                            this.state.listLinks.map((item)=>{
                            return (
                                <div 
                                    
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