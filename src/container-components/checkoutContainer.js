import React from 'react';
import { Divider,  Grid } from 'semantic-ui-react';
import PromotionEntry from '../presentational-components/promotionEntry.js';
import SubTotalRow from '../presentational-components/subTotalRow.js';
import PromotionApplied from '../presentational-components/promotionApplied.js';
import ShippingRow from '../presentational-components/shippingRow.js';
import TotalRow from '../presentational-components/totalRow.js';
import CheckoutButtons from '../presentational-components/checkoutButtons.js';
import CheckoutFooter from '../presentational-components/checkoutFooter.js';

class CheckoutContainer extends React.Component{
  state = {
    promotionApplied: true,
    promotionAmount: 5.90,
    promotionCode: 'AJ10',
  }

  handleApplyPromoCode = (promotionCode) => {
    this.setState({promotionCode, promotionApplied: true, promotionAmount: 5.90})
  }



  render(){
    var total = this.props.subTotal - this.state.promotionAmount;
    var shipping = 0;

    if(total <= 50){
      total += this.props.shipping;
      shipping = this.props.shipping;
    }

    return(
      <div style={{textAlign: 'left'}}>
        <Grid>
          <PromotionEntry applyPromoCode={this.handleApplyPromoCode}/>
          <Divider style={{margin: '0'}} />
          <SubTotalRow subTotal={this.props.subTotal} />
          <PromotionApplied
            promotionAmount={this.state.promotionAmount}
            promotionApplied={this.state.promotionApplied}
            promotionCode={this.state.promotionCode}
          />
          <ShippingRow shipping={shipping} />
          <Divider style={{margin: '0'}} />
          <TotalRow total={total} />
          <Divider fitted style={{borderTop: '5px solid rgba(34,36,38,.07)'}}/>
          <CheckoutButtons />
          <CheckoutFooter />
        </Grid>
      </div>
    )
  }
}

export default CheckoutContainer;
