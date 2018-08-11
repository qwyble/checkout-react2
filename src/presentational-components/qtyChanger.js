import React from 'react';
import {Input} from 'semantic-ui-react';



class QtyChanger extends React.Component{

  handleQtyChange = (e) => {
    var qty = e.target.value;
    var itemId = this.props.id;

    qty = parseInt(qty, 10);
    if(isNaN(qty)){
      qty = 0;
    }

    qty = Math.round(qty);
    if(qty < 0){
      qty = 0
    }

    var newItem = {...this.props.item};
    newItem.qty = qty;

    this.props.onQtyChange(newItem, itemId);

  }

  render(){
    return(
      <Input
        type='number'
        value={this.props.item.qty}
        onChange={this.handleQtyChange}
        size='mini'
        style={{width: '60px'}}
      />
    )
  }
}

export default QtyChanger;
