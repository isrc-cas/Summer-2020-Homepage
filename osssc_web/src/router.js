import React from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import App from './App';
import Wrapper from './wrapper.js';
import Index from './pages/index/index.js';
export default class IRouter extends React.Component{

    render(){
        return(
            <Router>
                <App>
                    
                    <Route path="/" render={()=>
                        <Wrapper>
                            <Switch>
                                     <Route path="/index" component={Index}/>
                            </Switch>
                        </Wrapper>
                    }/>
                </App>
            </Router>
        );
    }
}