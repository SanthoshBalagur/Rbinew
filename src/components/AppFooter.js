import React from 'react';

const AppFooter = () => (
  <div
    className="ui inverted vertical footer segment appFooter"
    style={{
 position: 'fixed', bottom: 0, left: 0, right: 0,
 }}
  >
    <div className="ui container">
      <div className="ui stackable inverted divided equal height stackable grid">
        <div className="three wide column">
          <div className="ui inverted a list">
            <a className="item" activeClassName="active" to="/dashboard">
                                  Dashboard
            </a>
            <a href="#" className="item">Settings</a>
            <a href="#" className="item">Log out</a>
          </div>
        </div>
        <div className="seven wide column">
          <p>
                              2017-18 &copy; SnackExperts<br />
            <span>This is a demo application made for RBI</span>
          </p>
        </div>
      </div>
    </div>
  </div>
);


export default AppFooter;
