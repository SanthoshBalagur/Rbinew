import React, { Component } from 'react';
import {Message,Dropdown,Form,Table,Button,TextArea} from 'semantic-ui-react'
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
    
    const Savories = [
      {key:'e', value:'Ragi crunchies', text:'Ragi Crunchies'},
      {key:'f', value:'channa mix',text:'Channa Mix'},
      {key:'g',value:'Roasted Green Peas',text:'Roasted Green Peas'} , 
      {key:'b', value:'Bittergaurd', text:'Bittergaurd'}, 
      { key:'s',value:'Spicy Bengal gram', text:'Spicy Bengal gram'},
      {key:'s', value:'sweet Bengal gram', text: 'sweet Bengal gram'},
      {key:'d', value:'Urad Dhal Ladoo',   text: 'Urad Dhal Ladoo'},
      {key:'d', value:'Ragi Ladoo',   text: 'Ragi Ladoo'} ,     
      {key:'d', value:'Wheat Ladoo',   text: 'Wheat Ladoo'},
      {key:'d', value:'Semolina Ladoo', text: 'Semolina Ladoo'},
      {key:'d', value:'Ragi crispies', text: 'Ragi crispies'},
      {key:'d', value:'Barnyard crispies', text: 'Barnyard crispies'},
      {key:'d', value:'Foxtail millet twists', text: 'Foxtail millet twists'},
      {key:'R',value:'Red Rice crispies',text:'Red Rice Crispies'}
    ]
    const Cookies =[
      {key:'r',value:'Ragi cookies',text:'Ragi cookies'},
       {key:'BC',value:'Barnyard cookies',text:'Barnyard Cookies' },
       {key:'P', value: "Pearl Millet Cookies", text: 'Pearl Millet Cookies'},
       {key:'k', value:"kodo Millet Cookies", text:'kodo millet cookies'},
       {key: 'f', value:'Fruit cookies',text:'Fruit Cookies'},
       {key:'C', value :'Coconut Cookies', text:'Coconut Cookies'},
       {key:'MC', value:'Masala Cookies', text:'Masala Cookies'}
    ]
    const DryFruit =[
      {key :'Dr', value:'Dry Fruits Mix',text:'Dry Fruits Mix'},
      {key :'Dr', value:'Papaya & Berry Mix',text:'Papaya & Berry Mix'},
      {key :'Tr', value:'Triberry Medley',text:'Triberry Medley'},
      {key:'ki',value:'Kiwi Amla Bonanza',text:'Kiwi Amla Bonanza'},
      {key:'Ap',value:'Apricot Berry Punch',text:'Apricot Berry Punch'},
      {key:'Pa',value:'Pineapple floada',text:'Pineapple Floda'},
      {key:'a',value:'Strawberry comix',text:'Strawberry comix'},
      {key:'c',value:'Cranberry mix',text:'Cranberry mix'},
      {key:'d',value:'Fiber rich',text:'Fiber rich'},
      {key:'bl',value:'Blueberry mix',text:'Blueberry mix'},]
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
          <Table.Cell><Dropdown onChange={this.handleChange2} value={value2} placeholder='Select Products' search selection options={Savories} /></Table.Cell>
          <Table.Cell><Dropdown onChange={this.handleChange3} value={value3} placeholder='Select Products' search selection options={Cookies} /></Table.Cell>
          <Table.Cell><Dropdown onChange={this.handleChange4} value={value4} placeholder='Select Products' search selection options={DryFruit} /></Table.Cell>
        </Table.Row>
        <Table.Row><Form><Form.Field control={TextArea} placeholder='Notes' /></Form></Table.Row>
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