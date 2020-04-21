import React from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import App from './App';
import Wrapper from './wrapper.js';
import Index from './pages/index/index.js';
import Howitworks from './pages/howitworks/index.js';
import Contactus from './pages/contactus/index.js';
import {linkDataMap} from './components/header/listLink.js'
export default class IRouter extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            linkDataMap,
        }
    }



    render(){
        return(
            <Router>
                <App>
                    
                    <Route path="/" render={()=>
                        <Wrapper>
                            <Switch>
                                     <Route path="/index" component={Index} />
                                     <Route path="/howitworks" component={Howitworks} />
                                     <Route path="/contactus" component={Contactus} />
                                     <Route path="/" component={Index} />
                            </Switch>
                        </Wrapper>
                    }/>
                </App>
            </Router>
        );
    }
}