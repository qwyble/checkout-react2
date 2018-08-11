import React from 'react';
import {Grid, Header, Icon} from 'semantic-ui-react';




class ShippingRow extends React.Component{
  render(){
    return(
      <Grid.Row>
        <Grid.Column width={8}>
            <Header sub>
              ESTIMATED SHIPPING*
            </Header>
            <div style={{fontSize: '10px', lineHeight: '12px', color: 'grey'}}>
              {this.props.shipping > 0 ?
                <div>Orders over $50 qualify for free shipping.</div>
                : <div>You qualify for free shipping because your order is over $50</div>
              }
            </div>
        </Grid.Column>
        <Grid.Column width={8}>
          <div style={{ float: 'right'}}>
            <sup><Icon size='small' name='dollar sign' /></sup>{this.props.shipping.toFixed(2)}
          </div>
        </Grid.Column>
      </Grid.Row>
    )
  }
}

export default ShippingRow;
