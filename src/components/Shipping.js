import React, { Component } from 'react';
import {Message,Dropdown,Form,Table,Button} from 'semantic-ui-react'
import $ from 'jquery'

class Shipping extends Component {
  state = {data: []}
  updateInventory = (e) => {
    let ProductName = $(e.target).parent().prev().prev().prev().prev().text()
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
  componentDidMount=()=>{
    $.get('/_createOrder',(res)=>{
      this.setState({data : res})
    })
  }
  render() {
    return (
          <div style={{margin: 2+'em'}}>
              <Table>
                  <Table.Header>
                    <Table.Row>
                      <Table.HeaderCell>Product Combo</Table.HeaderCell>
                      <Table.HeaderCell>Quantity</Table.HeaderCell>
                      <Table.HeaderCell>Order No</Table.HeaderCell>
                      <Table.HeaderCell>Date</Table.HeaderCell>
                      <Table.HeaderCell>Update Order</Table.HeaderCell>
                    </Table.Row>
                  </Table.Header>
                  <Table.Body>
                  {this.state.data.map((d,i)=>(
											<Table.Row key={i}>
											<Table.Cell>{d.ProductCombo}</Table.Cell>
                      <Table.Cell>{d.Quantity}</Table.Cell>
                      <Table.Cell>{d.OrderNo}</Table.Cell>
                      <Table.Cell>{d.Date}</Table.Cell>
											<Table.Cell>
                        {/* <EditProducts/> */}
												<Button onClick={this.updateInventory}>Mark Received</Button>
											</Table.Cell>
										</Table.Row>
										))}
                  </Table.Body>
                  </Table>
          </div>
    );
  }
}


export default Shipping;