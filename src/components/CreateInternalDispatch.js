import React, { Component } from 'react';
import Display from './Display'
import {Form,Input,Table,Dropdown,Button} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import $ from 'jquery'

class CreateNewDispatch extends Component {
	constructor(){
		super()
		this.D = new Date()
		this.state = {
			display: false
		}
  }
  handleChange1 = (e, { value }) => {this.setState({ value1:value})}
  handleChange2 = (e, { value }) => {this.setState({ value2:value})}
  handleChange3 = (e, { value }) => {this.setState({ value3:value})}
  handleChange4 = (e, { value }) => {this.setState({ value4:value})}
  handleChange5 = (e) => {this.setState({ value5:e.target.value})}
  handleChange6 = (e,{ value }) => {this.setState({ value6:value})}
  postData = () => {
    let d = new Date()
    let uniqueId = d.getTime()
    let no = uniqueId
    let date = d.getDate()+ '-' + (d.getMonth()+1)+ '-' + d.getFullYear()
    this.setState({display : true,orderNum: no})
    $.ajax({
      type: "POST",
      url: '/_createInternalDispatch',
      data: {
        ProductCombo: this.state.value1,
        Savories: this.state.value2,
        Cookies:this.state.value3,
        DryFruit:this.state.value4,
        Quantity:this.state.value5,
        OrderNo:no,
        Date:this.state.value6
      },
      success:function(){
        console.log(this)
        // $.get('/_createOrder',(res)=>{
        //   this.setState({data : res})
        // })
      }
    })
    $.get('/_createInternalDispatch',(res)=>{
      this.setState({data : res})
    })
    
  }
	onClick(){
		
	}
  render() {
    const { value1,value2,value3,value4,value5,value6 } = this.state
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
            <div style={{margin: 2+'em',marginBottom: 100 + 'px'}}>
				<Display IF={this.state.display}>
					<p>Dispatch is created Successfully with order no: <strong style={{color:'red'}}>{this.state.orderNum}</strong></p>
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
                    <Table.Cell><Dropdown onChange={this.handleChange1} placeholder='Select ProductCombo' search selection options={productCombo} /></Table.Cell>
                    <Table.Cell><Form.Input onChange={this.handleChange5} type='number' placeholder='Quantity' /></Table.Cell>
                    <Table.Cell><Dropdown onChange={this.handleChange2} placeholder='Select Products' search selection options={products} /></Table.Cell>
                    <Table.Cell><Dropdown onChange={this.handleChange3} placeholder='Select Products' search selection options={products} /></Table.Cell>
                    <Table.Cell><Dropdown onChange={this.handleChange4} placeholder='Select Products' search selection options={products} /></Table.Cell>
                    <Table.Cell><Input onChange={this.handleChange6} type='date' className='ui calender small'/></Table.Cell>
                  </Table.Row>
                  </Table.Body>
                  </Table>
                  <button onClick={this.postData} className='ui button small primary'><i className="add circle icon"></i>Create Dispatch</button>
                <Link to='internal'><Button>Go to Internal Dispatch</Button></Link>
            </div>
    );
  }
}

export default CreateNewDispatch;
