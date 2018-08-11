import React from 'react';
import {Header, Input, Form, Button, Grid} from 'semantic-ui-react';



class PromotionEntry extends React.Component{
  state = {
    promotionCode: 'AJ10',
    promoErr: false
  }

  handleChange = (e) => {
    var promotionCode = e.target.value;
    var promoErr = this.validate(promotionCode);

    if(promotionCode.length <= 4){
      this.setState({promotionCode, promoErr});
    }else{
      return
    }
  }

  validate = (promoCode) => {
    if(promoCode === 'AJ10'){
      return false;
    }else{
      return true;
    }
  }

  applyPromoCode = () => {
    this.props.applyPromoCode(this.state.promotionCode)
  }


  render(){
    return(
      <Grid.Row>
        <Grid.Column width={8}>
          <Header sub style={{color: 'grey'}}>
            ENTER PROMOTION CODE OR GIFT CARD
          </Header>
        </Grid.Column>
        <Grid.Column floated='right' width={8}>
          <div style={{float: 'right'}}>
            <Form>
              <Input
                size='mini'
                style={{width: '60px'}}
                value={this.state.promotionCode}
                onChange={this.handleChange}
              />
              <Button
                type='submit'
                size='mini'
                style={{marginLeft: '5px'}}
                disabled={this.state.promoErr}
                onClick={this.applyPromoCode}>
                APPLY
              </Button>
            </Form>
          </div>
        </Grid.Column>
      </Grid.Row>
    )
  }
}

export default PromotionEntry;
