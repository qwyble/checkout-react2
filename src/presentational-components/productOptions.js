import React from 'react';
import {List, Button } from 'semantic-ui-react';
import EditModal from './editModal.js';





class ProductOptions extends React.Component{
  render(){
    return(
      <div>
        <List size='tiny' divided horizontal>
          <List.Item>
            <EditModal
              item={this.props.item}
              id={this.props.id}
              onItemChange={this.props.onItemChange}
            />
          </List.Item>
          <List.Item>
            <Button
              basic compact
              size='mini'
              style={{boxShadow: '0 0 0 0', padding: '0 0 0 0'}}
              id={this.props.id}
              onClick={this.props.onProductRemove}>
              X REMOVE
            </Button>
          </List.Item>
          <List.Item>
            <Button basic compact size='mini' style={{boxShadow: '0 0 0 0', padding: '0 0 0 0'}}>
              SAVE FOR LATER
            </Button>
          </List.Item>
        </List>
      </div>
    )
  }
}

export default ProductOptions;
