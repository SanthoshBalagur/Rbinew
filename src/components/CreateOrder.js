import React, { Component } from 'react';
import {Message,Dropdown,Form,Table,Button} from 'semantic-ui-react'
import $ from 'jquery'
import Display from './Display';
import {Link} from 'react-router-dom'

class CreateOrder extends Component {
  state = {display : false,orderNum: 0,showOptions:false}
  handleChange1 = (e, { value }) => {this.setState({ value1:value})}
  handleChange2 = (e, { value }) => {this.setState({ value2:value})}
  handleChange3 = (e, { value }) => {this.setState({ value3:value})}
  handleChange4 = (e, { value }) => {this.setState({ value4:value})}
  handleChange5 = (e) => {this.setState({ value5:e.target.value})}
  postData = () => {
    let d = new Date()
    let uniqueId = d.getTime()
    let no = uniqueId
    let date = d.getDate()+ '-' + (d.getMonth()+1)+ '-' + d.getFullYear()
    this.setState({display : true,orderNum: no})
    $.ajax({
      type: "POST",
      url: '/_createOrder',
      data: {
        ProductCombo: this.state.value1,
        Savories: this.state.value2,
        Cookies:this.state.value3,
        DryFruit:this.state.value4,
        Quantity:this.state.value5,
        OrderNo:no,
        Date:date
      },
      success:function(){
        console.log(this)
        // $.get('/_createOrder',(res)=>{
        //   this.setState({data : res})
        // })
      }
    })
    $.get('/_createOrder',(res)=>{
      this.setState({data : res})
    })
    
  }
  componentDidMount = () => {
    $.get('/_createOrder',(res)=>{
      this.setState({data : res})
    })
  }
  render() {
    const { value1,value2,value3,value4,value5 } = this.state
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
    return(
    <div style={{margin: 2+'em',marginBottom: 100 + 'px'}}>
        <Display IF={this.state.display}>
          <Message success style={{marginTop:2+'em',marginBottom:2+'em'}}>Order is created successfully with order no => {this.state.orderNum}</Message>
        </Display>
        
      <Table>
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
          <Table.Cell><Dropdown onChange={this.handleChange1} value={value1} placeholder='Select ProductCombo' search selection options={productCombo} /></Table.Cell>
          <Table.Cell><Form.Input onChange={this.handleChange5} type='number' placeholder='Quantity' /></Table.Cell>
          <Table.Cell><Dropdown onChange={this.handleChange2} value={value2} placeholder='Select Products' search selection options={products} /></Table.Cell>
          <Table.Cell><Dropdown onChange={this.handleChange3} value={value3} placeholder='Select Products' search selection options={products} /></Table.Cell>
          <Table.Cell><Dropdown onChange={this.handleChange4} value={value4} placeholder='Select Products' search selection options={products} /></Table.Cell>
        </Table.Row>
        </Table.Body>
        </Table>
        <button id='post' onClick={this.postData} className='ui button small primary'><i className="add circle icon"></i>Add Order</button>
        <Link to='/products'><Button>Pending Orders</Button></Link>
        <Link to='/receivedOrder'><Button color='red'>Received Orders</Button></Link>
    </div>
    )
  }
}


export default CreateOrder;