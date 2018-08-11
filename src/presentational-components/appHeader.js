import React from 'react';
import {Header} from 'semantic-ui-react';

class AppHeader extends React.Component{
  render(){
    return(
      <div style={{textAlign: 'left', color: 'grey'}}>
        <Header textAlign='left'>
          YOUR SHOPPING CART
        </Header>
          If the cart is completely empty then we shall again add back the products for you.
      </div>
    )
  }
}


export default AppHeader;
