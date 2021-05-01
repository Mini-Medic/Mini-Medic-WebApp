import React, { } from 'react';
import '../doctorpref/DoctorPreferences.css';
import '../../../App.css';
import { Button } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

function DoctorPreferences() {
  return (
        <div className='container'>
          <div className='body'>
            <h1 style={{ margin: '10px' }}>Doctor Preferences</h1>
            <p style={{ margin: '10px' }}>Please check the corresponding boxes of the doctor you would like to search for.</p>
            <div className='container-list'>
            <div className='doctorPref-container'>
              <p>Gender</p>

                <div className='doctorRadio'>
                  <input type="radio" value="Male" name="gender" /> Male
                  <input type="radio" value="Female" name="gender" /> Female
                  <input type="radio" value="Other" name="gender" /> Other
                </div>

            </div>

            <div className='doctorPref-container'>
              <p>Experience</p>

              <div className='doctorRadio'>
                <select>
                  <option value="0-10 Years">0-10 Years</option>
                  <option value="10-20 Years">10-20 Years</option>
                  <option value="20+ Years">20+ Years</option>
                </select>
              </div>

            </div>

            <div className='doctorPref-container'>
              <p>Location</p>

              <div className='doctorRadio'>
                <select>
                  <option value="Honolulu">Honolulu</option>
                  <option value="Pearl City">Pearl City</option>
                  <option value="Waianae">Waianae</option>
                  <option value="Kahala">Kahala</option>
                  <option value="Mililani">Mililani</option>
                </select>
              </div>
            </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row'}}>
              <div className='submit' >
                <Button basic color='blue' className='submit-button' size='large' as={NavLink} activeClassName="active" exact to="/doctor" key='doctor'>Submit (Male/ 0-10 years exp)</Button>
              </div>
              <div className='submit' >
                <Button basic color='blue' className='submit-button' size='large' as={NavLink} activeClassName="active" exact to="/doctor2" key='doctor'>Submit (Female/ 10-20 years exp)</Button>
              </div>
              <div className='submit' >
                <Button basic color='blue' className='submit-button' size='large' as={NavLink} activeClassName="active" exact to="/doctor3" key='doctor3'>Submit (Other/ 20+ years exp)</Button>
              </div>
            </div>

          </div>
        </div>
  )
}

export default DoctorPreferences;