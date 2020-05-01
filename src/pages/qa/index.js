import React from 'react'
import './index.less';
import './mobile.less';
import qadata from './qa.js'

export default class QuestionAndAnswer extends React.Component{

    constructor(props){
        super(props)
        this.state={
            qadata
        }
    }
    getQAItem(a){
        var divItemContainer = []
        var getConlist=function(itema){
            
            if(itema.conlist){
                var conlistdiv = [];
                itema.conlist.map((itemal,indexl)=>{
                    conlistdiv.push(<div className="QAAnswerOneConListItem" key={'a'+indexl}>
                        <span>
                            
                            <p dangerouslySetInnerHTML={{ __html: itemal }}  />
                        </span>
                    </div>)
                    return 0
                })
                return conlistdiv

            }
        }
        a.map((itema,indexa)=>{
            divItemContainer.push(
            <div className="QuestionAndAnswerAnswerOne" key={indexa}>
                <div className="QAAnswerOneCon">
                    
                    <p dangerouslySetInnerHTML={{ __html: itema.con }}  />
                   
                </div>
                <div className="QAAnswerOneConList">{getConlist(itema)}</div>
            </div>
            )
           
            return 0;
        })
        return divItemContainer
    }

    getQaContent(){
        var divContainer = []
        this.state.qadata.map((item,index)=>{
            divContainer.push(
                <div className={["QuestionAndAnswerItem","QAitem"+index].join(" ")} key={index}>
                    <div className="QuestionAndAnswerQuesionTitle"><span>{item.q}</span></div>
                    <div className="QuestionAndAnswerAnswerContent">
                        {this.getQAItem(item.a)}
                    </div>
                </div>
            )
            return 0;
        })
        return divContainer
    }

    render(){
        return(
            <div className="QuestionAndAnswer"> 
              <div className="QuestionAndAnswerWrapper">
                <div className="QuestionAndAnswerTitle">
                    <div className="content1200">热点问题 Q&A</div>
                </div>
                <div className="QuestionAndAnswerContent  content1200">
                    {this.getQaContent()}
                </div>
              </div>
            </div>
        )
    }

}