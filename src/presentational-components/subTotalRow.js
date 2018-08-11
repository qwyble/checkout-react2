import React from 'react';
import {Grid, Header, Icon} from 'semantic-ui-react';



class SubTotalRow extends React.Component{
  render(){
    return(
      <Grid.Row>
        <Grid.Column width={8}>
          <Header sub>
            SUB TOTAL
          </Header>
        </Grid.Column>
        <Grid.Column width={8}>
          <div style={{float: 'right'}}>
            <sup><Icon size='small' name='dollar sign' /></sup>
            <Header as='h4' style={{display:'inline'}}>{this.props.subTotal.toFixed(2)}</Header>
          </div>
        </Grid.Column>
      </Grid.Row>
    )
  }
}

export default SubTotalRow;
