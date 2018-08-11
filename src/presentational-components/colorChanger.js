import React from 'react';
import { List, Button } from 'semantic-ui-react';




class ColorChanger extends React.Component{

  handleColorChange = (e) => {
    var newColor = e.target.value;
    var itemId = e.target.id;

    var newDetails = {...this.props.item.details, color: newColor};
    var newItem = {...this.props.item, details: newDetails};

    this.props.onColorChange(newItem, itemId);
  }

  render(){
    return(
      <List horizontal>
        {this.props.item.details.potentialColors.map((color, k) => {
          return(
            <List.Item key={k} style={{marginLeft: '0'}}>
                <Button
                  onClick={this.handleColorChange}
                  id={this.props.id}
                  value={color}
                  color={color}
                  size='mini'
                  style={ (color === this.props.item.details.color) ?
                    {borderRadius: '0', borderWidth: '2px', borderStyle: 'solid', borderColor: 'grey'}
                    : {borderRadius: '0'}}
                />
            </List.Item>
          )
        })}
      </List>
    )
  }
}

export default ColorChanger;
