import React, { Component } from 'react';
import Display from './Display'
import {Form,Input,Table,Dropdown,Button,Message} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import $ from 'jquery'
import validator from 'validator';

const required = (value) => {
  if (!value.toString().trim().length) {
    // We can return string or jsx as the 'error' prop for the validated Component
    return 'require';
  }
};

class CreateOrder extends Component {
	constructor(){
		super() 
		this.state = {
			display: false,
			text: 'Create New',
			icon: 'add circle icon',
			edit: false,
			editText: 'Edit',
      editIcon: 'edit icon',
      data:[]
		}
  }
  edit = (e) => {
    let val = $(e.target).parent().prev().prev().text()
    $.get('/_createInternalDispatch',{},(res)=>{
      console.log($('.ProductName')[0])
      $('.ProductName')[0].text(res[0].ProductCombo) 
      $('.Quantity')[0].text(res[0].Quantity) 
      $('.Savories')[0].text(res[0].Savories) 
      $('.Cookies')[0].text(res[0].Cookies) 
      $('.DryFruits')[0].text(res[0].DryFruits) 
      $('.DispatchDate')[0].text(res[0].Date) 
    })
  }
  remove = (e) => {
    let val = $(e.target).parent().prev().prev().text()
    console.log(val)
    $.ajax({
      url: '/_createInternalDispatch',
      type: 'DELETE',
      data: {OrderNo:val},
      success:function(){
        
      }
  });
  this.refresh()
  }
  update = (e) => {
    let ProductName = $(e.target).parent().prev().prev().prev().prev().text()
    let Quantity = $(e.target).parent().prev().prev().prev().text()
    let OrderNo = $(e.target).parent().prev().prev().text()
    $.ajax({
      url: '/updateInternalDispatch',
      type: 'PUT',
      data: {ProductName,Quantity},
      success: function(){

      }
    });
    $.ajax({
      url: '/updateInternalDispatch',
      type: 'POST',
      data: {OrderNo},
      success: function(){

      }
    })
    $.ajax({
      url: '/updateInternalDispatch',
      type: 'DELETE',
      data: {OrderNo},
      success: function(){

      }
    });
    $.get('/_createInternalDispatch',(res)=>{
      this.setState({data : res})
    })
  }
  refresh=()=>{
    $.get('/_createInternalDispatch',(res)=>{
      this.setState({data : res})
    })
    }
	onClick(){
		(this.state.display) ? this.setState({display:false,text:'Create New',icon: 'add circle icon'}) : this.setState({display:true,text:'Close',icon: 'remove circle icon'})
	}
	// edit(){
	// 	(this.state.edit) ? this.setState({edit:false,editText: 'Edit',editIcon: 'edit icon'}) : this.setState({edit:true,editText: 'Save',editIcon: 'file text icon'})
  // }
  update = (e) => {
    // $.ajax({
    //   url: '/updateInternalDispatch',
    //   type: 'UPDATE',
    //   data: {OrderNo},
    //   success: function(){

    //   }
    // });
    let ProductName = $(e.target).parent().prev().prev().prev().prev().text()
    let Quantity = $(e.target).parent().prev().prev().prev().text()
    let OrderNo = $(e.target).parent().prev().prev().text()
    $.ajax({
      url: '/updateInternalDispatch',
      type: 'PUT',
      data: {ProductName,Quantity},
      success: function(){

      }
    });
    $.ajax({
      url: '/updateInternalDispatch',
      type: 'POST',
      data: {OrderNo},
      success: function(){

      }
    })
    $.ajax({
      url: '/updateInternalDispatch',
      type: 'DELETE',
      data: {OrderNo},
      success: function(){

      }
    });
    $.get('/_createOrder',(res)=>{
      this.setState({data : res})
    })
  }
  componentDidMount(){
    this.refresh()
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
          <div style={{margin: 2+'em',marginBottom: 100 + 'px'}}>
              <div>
				<Display IF={this.state.display}>
					<Message>Dispatch is updated Successfully</Message>
                </Display>
                <Display IF={false}>
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
                    <Table.Cell><Dropdown placeholder='Select ProductCombo' search selection options={productCombo} name='ProductCombo' validations={[required]}/></Table.Cell>
                    <Table.Cell><Form.Input placeholder='Quantity' /></Table.Cell>
                    <Table.Cell><Dropdown placeholder='Select Products' search selection options={products} /></Table.Cell>
                    <Table.Cell><Dropdown placeholder='Select Products' search selection options={products} /></Table.Cell>
                    <Table.Cell><Dropdown placeholder='Select Products' search selection options={products} /></Table.Cell>
                    <Table.Cell><Input type='date' className='ui calender small'/></Table.Cell>
                  </Table.Row>
                  </Table.Body>
                  </Table>
                  <button onClick={this.onClick.bind(this)} className='ui button small primary'><i className="add circle icon"></i>Save Dispatch</button>
              </Display>
            </div>
              <table className='ui single line table'>
              	<thead>
              		<tr>
              			<th>Product Name</th>
              			<th>Quantity</th>
              			<th>Order No</th>
              			<th>Date of Dispatch</th>
              			<th>Update Order</th>
              		</tr>
              	</thead>
              	<tbody>
                {this.state.data.map((d,i)=>(
											<Table.Row key={i}>
											<Table.Cell>{d.ProductCombo}</Table.Cell>
                      <Table.Cell>{d.Quantity}</Table.Cell>
                      <Table.Cell>{d.OrderNo}</Table.Cell>
                      <Table.Cell>{d.Date}</Table.Cell>
											<Table.Cell>
                        {/* <EditProducts/> */}
                        <Button onClick={this.edit}>Edit</Button>
												<Button onClick={this.remove}>Remove</Button>
                        <Button onClick={this.update}>Mark Dispached</Button>
											</Table.Cell>
										</Table.Row>
										))}
              	</tbody>
              </table>
          </div>
    );
  }
}


export default CreateOrder;