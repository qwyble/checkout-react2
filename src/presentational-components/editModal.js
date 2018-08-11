import React from 'react';
import {Modal, Button, Icon, Grid, Container, Image, Divider, Header} from 'semantic-ui-react';
import ColorChanger from './colorChanger.js';
import SizeChanger from './sizeChanger.js';
import QtyChanger from './qtyChanger.js';




class EditModal extends React.Component{

  state={
    displayModal: false
  }

  handleOpenModal = () => {this.setState({ displayModal: true })}
  handleCloseModal = () => {this.setState({ displayModal: false })}



  render(){
    return(
      <Modal
        size="tiny"
        open={this.state.displayModal}
        trigger={
          <Button
            basic compact
            size='mini'
            onClick={this.handleOpenModal}
            style={{boxShadow: '0 0 0 0', padding: '0 0 0 0'}}>
              EDIT
          </Button>
        }>
        <Button floated="right" basic style={{boxShadow: '0 0 0 0'}} onClick={this.handleCloseModal}> X </Button>
        <Modal.Content image>

            <Container>
              <Grid>
                <Grid.Row>
                  <Grid.Column textAlign="center" width={8}>
                    <Divider style={{borderTop: '4px solid rgba(34,36,38,.15)'}}/>
                    {this.props.item.details.name}
                    <Header>
                      <Icon name="dollar sign" size='mini' style={{fontSize: '.6em'}} />{this.props.item.price.toFixed(2)}
                    </Header>
                    <br />
                    {this.props.item.details.style}
                    <div>
                      <ColorChanger
                        item={this.props.item}
                        id={this.props.id}
                         onColorChange={this.props.onItemChange}
                       />
                    </div>
                    <div>
                      Color: {this.props.item.details.color}
                    </div>
                    <br />
                    <div style={{display: 'inline-block', marginRight: '10px'}}>
                      <SizeChanger
                        onSizeChange={this.props.onItemChange}
                        item={this.props.item}
                        id={this.props.id}
                      />
                    </div>
                    <div style={{display: 'inline-block'}}>
                      <QtyChanger
                        item={this.props.item}
                        onQtyChange={this.props.onItemChange}
                        id={this.props.id}
                      />
                    </div>
                    <br /><br />
                      <div style={{width: '130px', margin: 'auto'}}>
                        <Button
                          fluid color='blue'
                          style={{borderRadius: '0rem'}}
                          onClick={this.handleCloseModal}>

                          DONE

                        </Button>
                      </div>
                    <div style={{fontSize: '11px'}}>
                      <a href=""> Check product details </a>
                    </div>
                  </Grid.Column>
                  <Grid.Column width={8}>
                    <Image src={this.props.item.details.image} size="large"/>
                  </Grid.Column>
                </Grid.Row>
              </Grid>

            </Container>

        </Modal.Content>
      </Modal>
    )
  }
}



export default EditModal;
