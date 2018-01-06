import React,{Component} from 'react'
import 'semantic-ui-css/semantic.min.css'
import {Table,Dropdown,Form,Modal,Button,Icon} from 'semantic-ui-react'

export default class EditProducts extends Component{
  render(){
    const productCombo = [
      {key: 'mc', value: 'Meeting Combo', text: 'Meeting Combo'},
      {key: 'ht', value: 'High Tea', text: 'High Tea'},
      {key: 'rg', value: 'Retirement Gift', text: 'Retirement Gift'}
    ]
    const products = [
      {key: 's', value: 'Savories', text: 'Savories'},
      {key: 'c', value: 'Cookies', text: 'Cookies'},
      {key: 'd', value: 'Dry Fruits', text: 'Dry Fruits'}
    ]
    return (
      <Modal size='large' trigger={<Button>Edit</Button>}>
      <Modal.Content>
      <Table size='tiny' compact>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Product Combo</Table.HeaderCell>
            <Table.HeaderCell>Quantity</Table.HeaderCell>
            <Table.HeaderCell>Savories</Table.HeaderCell>
            <Table.HeaderCell>Cookies</Table.HeaderCell>
            <Table.HeaderCell>Dry Fruits</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Cell><Dropdown  placeholder='Select ProductCombo' search selection options={productCombo} /></Table.Cell>
          <Table.Cell><Form.Input type='number' placeholder='Quantity' /></Table.Cell>
          <Table.Cell><Dropdown placeholder='Select Products' search selection options={products} /></Table.Cell>
          <Table.Cell><Dropdown placeholder='Select Products' search selection options={products} /></Table.Cell>
          <Table.Cell><Dropdown placeholder='Select Products' search selection options={products} /></Table.Cell>
        </Table.Row>
        </Table.Body>
      </Table>
      </Modal.Content>
      <Modal.Actions>
      <Button color='red' inverted>
        <Icon name='remove' /> Close
      </Button>
      <Button color='green' inverted>
        <Icon name='checkmark' /> Save
      </Button>
    </Modal.Actions>
      </Modal>
    )
  }
}