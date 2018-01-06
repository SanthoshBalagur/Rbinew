import React, { Component } from 'react';
import Display from './Display'
import {Form,Input,Table,Dropdown,Message} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

class CreateNewDispatch extends Component {
	constructor(){
		super()
		this.D = new Date()
		this.state = {
			display: false
		}
	}
	onClick(){
		this.setState({display:true})
	}
  render() {
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
            <div style={{marginBottom: 1 + 'em'}}>
				<Display IF={this.state.display}>
					<Message>Dispatch is updated Successfully</Message>
                </Display>
                <Table>
                  <Table.Header>
                    <Table.Row>
                      <Table.HeaderCell>Product Name</Table.HeaderCell>
                      <Table.HeaderCell>Quantity</Table.HeaderCell>
                      <Table.HeaderCell>Savories</Table.HeaderCell>
                      <Table.HeaderCell>Cookies</Table.HeaderCell>
                      <Table.HeaderCell>Dry Fruits</Table.HeaderCell>
                      <Table.HeaderCell>Dispatch Date</Table.HeaderCell>
                    </Table.Row>
                  </Table.Header>
                <Table.Body>
                  <Table.Row>
                    <Table.Cell><Dropdown placeholder='Select ProductCombo' search selection options={productCombo} /></Table.Cell>
                    <Table.Cell><Form.Input placeholder='Quantity' /></Table.Cell>
                    <Table.Cell><Dropdown placeholder='Select Products' search selection options={products} /></Table.Cell>
                    <Table.Cell><Dropdown placeholder='Select Products' search selection options={products} /></Table.Cell>
                    <Table.Cell><Dropdown placeholder='Select Products' search selection options={products} /></Table.Cell>
                    <Table.Cell><Input type='date' className='ui calender small'/></Table.Cell>
                  </Table.Row>
                  </Table.Body>
                  </Table>
                  <button onClick={this.onClick.bind(this)} className='ui button small primary'><i className="add circle icon"></i>Save Dispatch</button>
            </div>
    );
  }
}

export default CreateNewDispatch;
