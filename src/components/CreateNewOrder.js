import React, { Component } from 'react';

class createNewOrder extends Component {

  render() {
    return (
    	<div>
    		<table className='ui single line table'>
              	<thead>
              		<tr>
              			<th>Product</th>
              			<th>Quantity</th>
              			<th>Sub Product X</th>
              			<th>Sub Product Y</th>
              			<th>Sub Product Z</th>
              		</tr>
              	</thead>
              	<tbody>
              		<tr>
              			<td><select className="ui dropdown">
              				<option>option 1</option>
              				<option>option 2</option>
              				<option>option 3</option>
              				<option>option 4</option>
              			</select></td>
              			<td className="ui form" style={{width:10+'%'}}><input type="number" className="field" placeholder='quantity'/></td>
              			<td>
    					<select className="ui dropdown">
              				<option>option 1</option>
              				<option>option 2</option>
              				<option>option 3</option>
              				<option>option 4</option>
              			</select>
              			</td>
              			<td>
              				<select className="ui dropdown">
              				<option>option 1</option>
              				<option>option 2</option>
              				<option>option 3</option>
              				<option>option 4</option>
              			</select>
              			</td>
              			<td>
              				<select className="ui dropdown">
              				<option>option 1</option>
              				<option>option 2</option>
              				<option>option 3</option>
              				<option>option 4</option>
              			</select>
              			</td>
              		</tr>
              	</tbody>
              </table>
    	</div>
    );
  }
}


export default createNewOrder;