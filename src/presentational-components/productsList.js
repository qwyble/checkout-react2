import React from 'react';
import ProductItem from '../container-components/productItem.js';
import {Table} from 'semantic-ui-react';



class ProductsList extends React.Component{
  render(){
    return(
      <Table.Body>
        {this.props.products.items.map((item, k) => {
          return(
              <ProductItem
                onItemChange={this.props.onItemChange}
                onProductRemove={this.props.onProductRemove}
                item={item}
                id={k}
                key={k}
              />
          );
        })}
    </Table.Body>
    )
  }
}
export default ProductsList;
