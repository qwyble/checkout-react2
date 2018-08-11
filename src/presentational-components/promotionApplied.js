import React from 'react';
import {Grid, Icon, Header} from 'semantic-ui-react';



class PromotionApplied extends React.Component{
  render(){
    return(

          <Grid.Row>
            {this.props.promotionApplied ?
                <Grid.Column width={16}>
                  <Header sub style={{display: 'inline'}}>
                    PROMOTION CODE {this.props.promotionCode} APPLIED
                  </Header>
                  <div style={{float: 'right', display: 'inline'}}>
                      <sup><Icon size='small' name='dollar sign' /></sup><Header as='h4' style={{display: 'inline'}}>{this.props.promotionAmount.toFixed(2)}</Header>
                  </div>
                </Grid.Column>
            : <div></div>
            }
          </Grid.Row>
    )
  }
}


export default PromotionApplied;
