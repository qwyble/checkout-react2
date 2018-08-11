import React from 'react';
import {Grid, Header, Icon} from 'semantic-ui-react';




class TotalRow extends React.Component{
  render(){
    return(
      <Grid.Row>
        <Grid.Column width={8}>
          <Header size='small' style={{marginBottom: '0px'}}>
            ESTIMATED TOTAL
          </Header>
          <div style={{fontSize: '10px', lineHeight: '12px', color: 'grey'}}>
            Tax will be applied during checkout.
          </div>
        </Grid.Column>
        <Grid.Column width={8}>
          <div style={{float: 'right'}}>
            <sup><Icon size='small' name='dollar sign' /></sup>
            <Header as='h3' style={{display:'inline'}}>{this.props.total.toFixed(2)}</Header>
          </div>
        </Grid.Column>
      </Grid.Row>
    )
  }
}


export default TotalRow;
