import React from 'react';
import {Table, Image, Grid, List, Icon, Header} from 'semantic-ui-react';
import ProductOptions from '../presentational-components/productOptions.js';
import QtyChanger from '../presentational-components/qtyChanger.js';


class ProductItem extends React.Component{


  render(){
    return(
      <Table.Row>
        <Table.Cell>
          <Grid>
            <Grid.Row>
              <Grid.Column width={4}>
                <Image src={this.props.item.details.image} size='small'/>
              </Grid.Column>
              <Grid.Column width={11} >
                <List>
                  <List.Item>
                    {this.props.item.details.name}
                  </List.Item>
                  <List.Item>
                    style #: {this.props.item.details.style}
                  </List.Item>
                  <List.Item>
                    color: {this.props.item.details.color}
                  </List.Item>
                  <List.Item >
                    <br />
                  </List.Item>
                  <List.Item>
                    <ProductOptions
                      item={this.props.item}
                      id={this.props.id}
                      onItemChange={this.props.onItemChange}
                      onProductRemove={this.props.onProductRemove}
                    />
                  </List.Item>
                </List>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Table.Cell>
        <Table.Cell>{this.props.item.size}</Table.Cell>
        <Table.Cell>
          <QtyChanger
            item={this.props.item}
            onQtyChange={this.props.onItemChange}
            id={this.props.id}
          />
        </Table.Cell>
        <Table.Cell textAlign='right'>
          {this.props.item.prevPrice ?
            <div style={{color: 'grey'}}>
              <s><sup><Icon name='dollar sign' size='small' /></sup>{this.props.item.prevPrice.toFixed(2)}</s>
            </div>
            : <div />


          }
          <sup><Icon name='dollar sign' size='small' /></sup>
          <Header as='h4' style={{display:'inline'}}>{this.props.item.price.toFixed(2)}</Header>
        </Table.Cell>
      </Table.Row>
    )}

  }

export default ProductItem;
