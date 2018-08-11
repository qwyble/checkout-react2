import React from 'react';
import {Grid, Button } from 'semantic-ui-react';



class CheckoutButtons extends React.Component{
  render(){
    return(
        <Grid.Row>
          <Grid.Column width={16}>
            <div style={{float: 'right'}}>
              <a href=""> continue shopping </a>
              <Button color='blue' style={{marginLeft: '10px'}}> Checkout </Button>
            </div>
          </Grid.Column>
        </Grid.Row>
    )
  }
}

export default CheckoutButtons;
