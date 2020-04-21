import React from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import App from './App';
import Wrapper from './wrapper.js';
import Index from './pages/index/index.js';
import Howitworks from './pages/howitworks/index.js';
export default class IRouter extends React.Component{

    render(){
        return(
            <Router>
                <App>
                    
                    <Route path="/" render={()=>
                        <Wrapper>
                            <Switch>
                                     <Route path="/index" component={Index}/>
                                     <Route path="/howitworks" component={Howitworks}/>
                                     <Route path="/" component={Index}/>
                            </Switch>
                        </Wrapper>
                    }/>
                </App>
            </Router>
        );
    }
}