import React, { Component, PropTypes } from 'react';
import $ from 'jquery'
// import './style.css';

class Dashboard extends Component {
  state = {data:[],data2:[]}
  componentDidMount() {
    $.get('/_createInternalDispatch',(res)=>{
      this.setState({data2 : res})
      console.log(this.state.data2)
    })
    $.get('/inventory',(res)=>{
      this.setState({data:res})
    })
    
  }
  render() {
    return (
          <div className="ui vertical stripe segment" style={{marginBottom: 100 + 'px'}}>
              <div className="ui middle aligned stackable grid container">
                  <div className="row">
                      <div className="sixteen wide column">
                          <h1 className="ui header">RBI Dashboard</h1>
                          <p>
                            The Inventory Management System for RBI <br/>
                            Create orders and keep an eye on sales and stock levels.
                          </p>
                      </div>
                  </div>
                  <div className="ui divider"></div>
                  <div className="row">
                      <div className="eight wide column">
							<p>Pending Internal Dispatches</p> <br/>
							<div>
               <table className='ui single line table'>
              	<thead>
              		<tr>
              			<th>Product Name</th>
              			<th>Quantity</th>
              			<th>Date of Dispatch</th>
              		</tr>
              	</thead>
              	<tbody>
              		{this.state.data2.length !== 0 ? this.state.data2.map((d,i)=>(
                    <tr key={i}>
              			  <td>{d.ProductCombo}</td>
              			  <td>{d.Quantity}</td>
                      <td>{d.Date}</td>
              		  </tr>
                  )) : <td>No Record Found</td>}
              	</tbody>
              </table>
          </div>							
                      </div>
					  <div className="eight wide column">
							<p>Current Inventory</p> <br/>
							<div>
               <table className='ui single line table'>
              	<thead>
              		<tr>
              			<th>Product Name</th>
              			<th>Quantity</th>
              		</tr>
              	</thead>
              	<tbody>
              		{this.state.data.length !== 0 ? this.state.data.map((d,i)=>(
                    <tr key={i}>
              			  <td>{d.ProductName}</td>
              			  <td>{d.Quantity}</td>
              		  </tr>
                  )) : <td>No Record Found</td>}
              	</tbody>
              </table>
          </div>							
                      </div>
          </div>
		  </div>
		  </div>

          
          
    );
  }
}


export default Dashboard;
