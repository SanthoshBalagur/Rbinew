import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import {Table,Button} from 'semantic-ui-react'
import $ from 'jquery'

export default class ReceivedInternalDispatch extends Component{
  state = {data:[]}
  componentDidMount(){
    $.get('/receivedInternalDispatch',(res)=>{
      this.setState({data : res})
      console.log(this.state.data)
    })
  }
  render(){
    return (
      <div style={{margin: 2+'em',marginBottom: 100 + 'px'}}>
          		<Link to='/internal'><button className='ui button primary'><i className={this.state.icon}></i>Pending Dispatches</button></Link>
              <table className='ui single line table'>
              	<thead>
              		<tr>
              			<th>Product Name</th>
              			<th>Quantity</th>
              			<th>Order No</th>
              			<th>Date of Dispatch</th>
              		</tr>
              	</thead>
              	<tbody>
                {this.state.data.map((d,i)=>(
											<Table.Row key={i}>
											<Table.Cell>{d.ProductCombo}</Table.Cell>
                      <Table.Cell>{d.Quantity}</Table.Cell>
                      <Table.Cell>{d.OrderNo}</Table.Cell>
                      <Table.Cell>{d.Date}</Table.Cell>
										</Table.Row>
										))}
              	</tbody>
              </table>
          </div>
    )
  }
}