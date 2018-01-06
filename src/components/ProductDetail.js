import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Display from './Display'

class ProductDetail extends Component {
    constructor() {
        super()
        this.state = {
            display: false
        }
        this.D = new Date()
        this.Savories = [
            'Savories', 'Ragi crunchies', 'Ragi twisters', 'Channa Mix', 'Roasted Green Peas',
            'Bittergaurd', 'Bittergaurd', 'Spicy Bengal gram', 'Sweet Bengal gram',
            'Urad Dhal Ladoo', 'Ragi Ladoo', 'Wheat Ladoo', 'Semolina Ladoo', 'Ragi crispies',
            'Barnyard crispies', 'Foxtail millet twists', 'Red Rice crispies'
        ]
        this.Cookies = [
            'Cookies', 'Ragi cookies', 'Barnyard cookies', 'Pearl millet cookies', 'Kodo Millet Cookies',
            'Multi Grain Cookies', 'Barnyard Salt Cookies', 'Kodo Mint Salt Cookies', 'Fruit Cookies',
            'Coconut Cookies', 'Masala Cookies'
        ]
        this.DryFruits = [
            'Dry Fruits', 'Dry Fruits Mix', 'Papaya & Berry Mix', 'Triberry Medley', 'Kiwi Amla Bonanza',
            'Apricot Berry Punch', 'Pineapple Flooda', 'Tropical Twist', 'Triseed Mix', 'Spicy Seed Mix',
            'Sweet Seed Mix', 'Strawberry comix', 'Cranberry mix', 'Fiber rich', 'Blueberry mix', 'Tangy Blend',
            'Chewy Concoction', 'Strawberry comix', 'Brain Tracker', 'Old Fashioned Nut Mix', 'Figgy chips & nuts',
            'Almond & Cinnamon Flapjack', 'Natural Trail Mix'
        ]
    }
    onClick() {
        this.setState({
            display: true
        })
    }
    render() {
        return (
            <div>
                <Display IF={this.state.display}>
                    <p style={{margin:6+'em',marginTop:2+'em',marginBottom:2+'em'}}>Order is created with order no: <strong style={{color:'red'}}>#{this.D.getDate().toString()}{this.D.getMonth().toString()}{this.D.getYear().toString() + '_001'}</strong></p>
                </Display>

                <div className="ui grid container">
                    <div className="row">
                        <div className="fourteen wide column">
                            <div className="ui segments">
                                <div className="ui secondary segment">Product overview</div>
                                <div className="ui segment">
                                    <h3 className="ui sub header">
                                        Name
                              </h3>
                                </div>
                                <div className="ui horizontal segments">
                                    <div className="ui segment">
                                        <h3 className="ui sub header">
                                            Type
                                        </h3>
                                        <Link className='ui blue basic label' to='#'>
                                            <i className="icon tag"></i>
                                            Meeting Combo
                                        </Link>
                                    </div>
                                    <div className="ui segment">
                                        <h3 className="ui sub header">
                                            QUANTITY                                  
                                        </h3>
                                        <div className="ui">
                                            <div className="ui form tiny">
                                                <div className="inline field">
                                                    <input type="text" placeholder="Quantity" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="ui segment">
                                    <h3 className="ui sub header">
                                        Description
                              </h3>
                                    <p className="ui text padded">Amazing meeting combo from snack experts</p>
                                </div>
                            </div>
                            <div className="ui segments">
                                <div className="ui secondary segment">Product status</div>

                                <div className="ui horizontal segments">
                                    <div className="ui segment">
                                        <h3 className="ui sub header">
                                            Savories
                                  </h3>

                                    </div>
                                    <div className="ui segment">
                                        <h3 className="ui sub header">
                                            Cookies
                                  </h3>

                                    </div>
                                    <div className="ui segment">
                                        <h3 className="ui sub header">
                                            Dry Fruit
                                  </h3>

                                    </div>
                                </div>

                                <div className="ui horizontal segments">
                                    <div className="ui segment">
                                        <h3 className="ui sub header">
                                            <select className='ui selection dropdown'>
                                                {this.Savories.map((res, i) => <option key={i}>{res}</option>)}
                                            </select>

                                        </h3>

                                    </div>
                                    <div className="ui segment">
                                        <h3 className="ui sub header">
                                            <select className='ui selection dropdown'>
                                                {this.Cookies.map((res, i) => <option key={i}>{res}</option>)}
                                            </select>
                                        </h3>

                                    </div>
                                    <div className="ui segment">
                                        <h3 className="ui sub header">
                                            <select className='ui selection dropdown'>
                                                {this.DryFruits.map((res, i) => <option key={i}>{res}</option>)}
                                            </select>
                                        </h3>

                                    </div>
                                </div>

                            </div>
                            <button onClick={this.onClick.bind(this)} type="button" className='small ui button primary'><i className='add circle icon'></i>Create Order</button>
                        </div>

                    </div>
                    <div className="row">
                        <div className="sixteen wide column">
                            <div className="ui segments ProductCustomersList">
                                <div className="ui segment clearing secondary">
                                    Last orders of this product
                          </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};


export default ProductDetail;
