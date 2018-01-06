import React,{Component} from 'react'
import $ from 'jquery'
import {Table,Button} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

export default class ReceivedOrder extends Component{
  state = {data:[]}
  componentDidMount(){
    $.get('/receivedOrder',(res)=>{
      this.setState({data:res})
    })
  }
  render(){
    return(
      <div style={{margin: 2+'em',marginBottom: 100 + 'px'}}>
        <Link to='/products'><Button>Pending Orders</Button></Link>
      <Table>
                  <Table.Header>
                    <Table.Row>
                      <Table.HeaderCell>Product Combo</Table.HeaderCell>
                      <Table.HeaderCell>Quantity</Table.HeaderCell>
                      <Table.HeaderCell>Order No</Table.HeaderCell>
                      <Table.HeaderCell>Date</Table.HeaderCell>
                    </Table.Row>
                  </Table.Header>
                  <Table.Body>
                  {this.state.data.map((d,i)=>(
											<Table.Row key={i}>
											<Table.Cell>{d.ProductCombo}</Table.Cell>
                      <Table.Cell>{d.Quantity}</Table.Cell>
                      <Table.Cell>{d.OrderNo}</Table.Cell>
                      <Table.Cell>{d.Date}</Table.Cell>
										</Table.Row>
										))}
                  </Table.Body>
                  </Table>
                  </div>
    )
  }
}