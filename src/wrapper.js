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
// 同级找不到，会从npm包里找react
import Header from './components/header';
import Footer from './components/footer';
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
                  <Footer/>
               </div>
           </div> 
        )
    }
}