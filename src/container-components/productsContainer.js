import React from 'react';
import {Table} from 'semantic-ui-react';
import ProductsList from '../presentational-components/productsList.js';



class ProductsContainer extends React.Component{

  render(){
    return(
      <div>
        <Table basic='very'>
          <Table.Header >
            <Table.Row>
              <Table.HeaderCell width={12}>{this.props.products.items.length} ITEMS</Table.HeaderCell>
              <Table.HeaderCell width={1}>SIZE</Table.HeaderCell>
              <Table.HeaderCell width={1}>QTY</Table.HeaderCell>
              <Table.HeaderCell width={2} textAlign='right'>PRICE</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
            <ProductsList
              products={this.props.products}
              onItemChange={this.props.onItemChange}
              onProductRemove={this.props.onProductRemove}
            />
        </Table>
      </div>
    )
  }
}

export default ProductsContainer;
