import React from 'react';
import {Divider, Grid} from 'semantic-ui-react';
import ProductsContainer from './productsContainer';
import CheckoutContainer from './checkoutContainer';
import AssistanceText from '../presentational-components/assistanceText.js';
import { data } from '../data/data.js'


class CartContainer extends React.Component{

  state = data;


  handleItemChange = (newItem, itemId) => {
    var newItems = [...this.state.items];
    newItems[itemId] = newItem;

    this.setState({items: newItems});
  }


  handleProductRemove = (e) => {
    var itemId = e.target.id;

    var newItems = [...this.state.items].filter((item, i) => i !== parseInt(itemId, 10));

    this.setState({ items: newItems });
  }



  render(){
    var total = 0;
    var shipping = this.state.items.length * 2;

    this.state.items.forEach((item, index) => {
      total += item.price * item.qty;
    })

    return(
      <div>
        <ProductsContainer
          products={this.state}
          onItemChange={this.handleItemChange}
          onProductRemove={this.handleProductRemove}
        />
        <Divider style={{borderTop: '6px solid rgba(34,36,38,.07)'}}/>
        <Grid>
          <Grid.Row>
            <Grid.Column width={4}>
              <AssistanceText />
            </Grid.Column>
            <Grid.Column width={2} />
            <Grid.Column width={10}>
              <CheckoutContainer
                subTotal={total}
                shipping={shipping}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}

export default CartContainer;
