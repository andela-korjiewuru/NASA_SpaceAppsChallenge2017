import React from 'react';
import ReactDOM from 'react-dom';

export default class Input extends React.Component{
     render(){
         return(
              <div>
              <h6 className="note center-align" style={ {paddingTop: 20} }>Please give us information about the fire.</h6>
              <form className="col s12" method="POST" action="http://firefightapp.herokuapp.com/api/v1/reports">
                <div className="row">
                  <div className="input-field col s12">
                    <div className="input-field col s12">
                      <input id="phone" name="phone_number" type="text" className="validate" />
                      <label htmlFor="phone">Phone number</label>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <div className="input-field col s12">
                      <input id="location" name="fire_location" type="text" className="validate" />
                      <label htmlFor="location">What is the location of the fire?</label>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <div className="input-field col s12">
                      <input id="cause" name="fire_origin" type="text" className="validate" />
                      <label htmlFor="cause">What might have caused the fire?</label>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <div className="input-field col s12">
                      <input id="location" name="fire_object" type="text" className="validate" />
                      <label htmlFor="location">What is on fire? - Farm? House?</label>
                    </div>
                  </div>
                </div>
                
                <div className="row first">
                  <div className="input-field col s12">
                    <p>How wild is the fire? (Magnitude)</p>
                    <span>
                      <input name="fire_magnitude" type="radio" id="wild1" value="Small - Fairly Wild" />
                      <label htmlFor="wild1">Small - Fairly Wild</label>
                    </span>
                    <span>
                      <input name="fire_magnitude" type="radio" id="wild2" value="Medium - Pretty Wild" />
                      <label htmlFor="wild2">Medium - Pretty Wild</label>
                    </span>
                    <span>
                      <input className="with-gap" name="fire_magnitude" type="radio" id="wild3" value="Large - Really Wild" />
                      <label htmlFor="wild3">Large - Really Wild</label>
                    </span>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <div className="input-field col s12">
                      <input id="trapped" name="trapped_people" type="text" className="validate" />
                      <label htmlFor="trapped">Are there people trapped? If Yes, how many</label>
                    </div>
                  </div>
                </div>
                <div className="row center-align">
                  <div className="input-field col s12">
                    <button className="btn-large waves-effect waves-light black-bg" type="submit" name="action">Save Incident!</button>
                  </div>
                </div>
              </form>
            </div>
         );
     }
}
