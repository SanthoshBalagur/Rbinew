import React, { Component } from 'react';
import Display from './Display'
import $ from 'jquery'
import 'semantic-ui-css/semantic.min.css'
import {Message,Dropdown,Form,Table,Button} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

class Products extends Component {
	state = {
    data:[],
    display:false,
    date:"",
    orderNum: 0,
    editable: false
  }
  handleChange1 = (e, { value }) => {this.setState({ value1:value},console.log(this.state.value1 ))}
  handleChange2 = (e, { value }) => {this.setState({ value2:value},console.log(this.state.value2 ))}
  handleChange3 = (e, { value }) => {this.setState({ value3:value},console.log(this.state.value3 ))}
  handleChange4 = (e, { value }) => {this.setState({ value4:value},console.log(this.state.value4 ))}
  handleChange5 = (e) => {this.setState({ value5:e.target.value},console.log(this.state.value5 ))}
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
      success: function(){
        
      }
    })
  }
  edit = (e) => {
    let val = $(e.target).parent().prev().prev().text()
    console.log(val)
    // $.get('/editOrder',{data:val},(res)=>{
    //   console.log(res)
    //   this.editableValue = res
    // })
    $.get('/editOrder',{data:val},(res)=>{
      console.log(res)
      this.editableValue = res
      this.setState({
            editable: true,
            value1:res[0].ProductCombo,
            value2:res[0].Savories,
            value3:res[0].Cookies,
            value4:res[0].DryFruit,
            value5:res[0].Quantity,
          })
    }).bind(this)
    // $.ajax({
    //   type: "GET",
    //   url: '/editOrder',
    //   data: {
    //     data: val
    //   },
    //   success: function(res){
    //     console.log(res)
    //   this.editableValue = res
    //   this.setState({
    //     editable: true,
    //     value1:res[0].ProductCombo,
    //     value2:res[0].Savories,
    //     value3:res[0].Cookies,
    //     value4:res[0].DryFruit,
    //     value5:res[0].Quantity,
    //   })
    //   }.bind(this)
    // })
    
  }
  refresh = () => {
    $.get('/_createOrder',(res)=>{
      this.setState({data : res})
    })
  }

  remove = (e) => {
    let val = $(e.target).parent().prev().prev().text()
    console.log(val)
    $.ajax({
      url: '/_createOrder',
      type: 'DELETE',
      data: {OrderNo:val},
      success:function(){
        
      }
  });
  this.refresh()
  
  }
  updateInventory = (e) => {
    let ProductName = $(e.target).parent().prev().prev().prev().prev().text()
    // console.log(ProductName)
    let Quantity = $(e.target).parent().prev().prev().prev().text()
    let OrderNo = $(e.target).parent().prev().prev().text()
    $.ajax({
      url: '/updateInventory',
      type: 'PUT',
      data: {ProductName,Quantity},
      success: function(){

      }
    });
    $.ajax({
      url: '/updateInventory',
      type: 'POST',
      data: {OrderNo},
      success: function(){

      }
    })
    $.ajax({
      url: '/updateInventory',
      type: 'DELETE',
      data: {OrderNo},
      success: function(){

      }
    });
    $.get('/_createOrder',(res)=>{
      this.setState({data : res})
    })
  }
	componentWillMount(){
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
    return (
      <div style={{margin: 2+'em',marginBottom: 100 + 'px'}}>
        <div>
        <Display IF={this.state.display}>
                  <Message success style={{marginTop:2+'em',marginBottom:2+'em'}}>Order is updated successfully</Message>
                </Display>
                <Display IF={this.state.editable}>
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
                    <Table.Cell><Form.Input onChange={this.handleChange5} value={value5} type='number' placeholder='Quantity' /></Table.Cell>
                    <Table.Cell><Dropdown onChange={this.handleChange2} value={value2} placeholder='Select Products' search selection options={products} /></Table.Cell>
                    <Table.Cell><Dropdown onChange={this.handleChange3} value={value3} placeholder='Select Products' search selection options={products} /></Table.Cell>
                    <Table.Cell><Dropdown onChange={this.handleChange4} value={value4} placeholder='Select Products' search selection options={products} /></Table.Cell>
                  </Table.Row>
                  </Table.Body>
                  </Table>
                  <button onClick={this.postData} className='ui button small primary'>Update Order</button>
                  </Display>
        </div> 
        <Form>
        <Form.Group inline>
          <Form.Field inline>
            <Button onClick={this.export}> Export</Button>
          </Form.Field>
          </Form.Group>
        </Form>
        <Display IF={!this.props.display}>
          <Table>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Product Combo</Table.HeaderCell>
                <Table.HeaderCell>Quantity</Table.HeaderCell>
                <Table.HeaderCell>Order No</Table.HeaderCell>
                <Table.HeaderCell>Date</Table.HeaderCell>
                <Table.HeaderCell>Update Order</Table.HeaderCell>
                <Table.HeaderCell></Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {this.state.data.length !==0 ? this.state.data.map((d,i)=>(
                <Table.Row key={i}>
                  <Table.Cell>{d.ProductCombo}</Table.Cell>
                  <Table.Cell>{d.Quantity}</Table.Cell>
                  <Table.Cell>{d.OrderNo}</Table.Cell>
                  <Table.Cell>{d.Date}</Table.Cell>
                  <Table.Cell>
                  <Button onClick={this.edit}>Edit</Button>
                  <Button onClick={this.remove}>Remove</Button>
                  <Button onClick={this.updateInventory}>Mark Received</Button>
									</Table.Cell>
								</Table.Row>
              )) : <Table.Cell>No Record Found</Table.Cell>}
            </Table.Body>
          </Table>
        </Display>
      </div>
    );
  }
}


export default Products;