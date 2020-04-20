import React from 'react';
// 同级找不到，会从npm包里找react
import Header from './components/header';
// import Footer from './components/footer';

export default class Wrapper extends React.Component{

    render(){
        return (
           <div className="container">
               <div className="wrapper">
                    <Header/>
                   <div className="content">
                        {this.props.children}    
                   </div>
                  {/* <Footer/> */}
               </div>
           </div> 
        )
    }
}