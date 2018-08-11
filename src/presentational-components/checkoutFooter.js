import React from 'react';
import {Grid, Icon} from 'semantic-ui-react';




class CheckoutFooter extends React.Component{
  render(){
    return(
      <Grid.Row>
        <Grid.Column width={16}>
          <div style={{float: 'right', fontSize: '11px', lineHeight: '12px', color: 'grey'}}>
            <Icon name='lock' /> Secure checkout. Shopping is always safe and secure.
          </div>
        </Grid.Column>
      </Grid.Row>
    )
  }
}

export default CheckoutFooter;
