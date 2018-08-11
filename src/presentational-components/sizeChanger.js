import React from 'react';
import {Dropdown} from 'semantic-ui-react';




class SizeChanger extends React.Component{

  handleChange = (e, {value, id}) => {
    var newItem = {...this.props.item, size: value};
    this.props.onSizeChange(newItem, id);
  }

  render(){
    var sizeOptions = [
      {
        'text': 'XS',
        value: 'XS',
      },
      {
        text: 'S',
        value: 'S',
      },
      {
        text: 'M',
        value: 'M',
      },
      {
        text: 'L',
        value: 'L',
      },
      {
        text: 'XL',
        value: 'XL',
      }
    ];

    return(
      <div style={{width: '100px', display: 'inline-block'}}>
        <Dropdown
          size="mini"
          fluid
          selection
          options={sizeOptions}
          value={this.props.item.size}
          onChange={this.handleChange}
          id={this.props.id}
        />
      </div>
    )
  }
}


export default SizeChanger;
