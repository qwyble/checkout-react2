import React from 'react';
import {Header} from 'semantic-ui-react';



class AssistanceText extends React.Component{
  render(){
    return(
      <div style={{color: 'grey', textAlign: 'left', lineHeight: '15px'}}>
        <Header sub>
          Need help or have questions?
        </Header>
        <br/>
        <div>
          Call customer service at 1-800-555-5555.
        </div>
        <br/>
        <div>
          <a href=""> Chat with one of our stylists </a>
        </div>
        <br/>
        <div>
          <a href=""> See return or exchange policy </a>
        </div>
      </div>
    )
  }
}

export default AssistanceText;
