import React from 'react';
import '../selectedIllness/SelectedIllness.css';
import '../../../App.css';
import { Icon, Button } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
function SymptomList(props) {
    //console.log(props.location.aboutProps.searchData);
  return (
      <>
        <div className='container'>
          <div className='body'>
            <h1>Selected Illness</h1>
            <div className='columns'>
              <div className='group'>
                <p>Save to Illness Record</p>
                <Button basic color='blue'  className='simple-button'>Save</Button>
              </div>
              <div className='group'>
                <p>Search for a doctor</p>
                <Button basic color='blue' className='simple-button' as={NavLink} activeClassName="active" exact to="/DoctorPreferences" key='DoctorPreferences'>Doctor Finder</Button>
              </div>
            </div>
            <div className='columns2'>
              <div className='buttons'>
                <Button basic color='blue'  icon labelPosition='left' as={NavLink} activeClassName="active" exact to="/illness" key='illness'>
                  <Icon name='angle left' />
                  Back
                </Button>
              </div>
              <div className='buttons'>
                <Button basic color='blue'  icon labelPosition='right' as={NavLink} activeClassName="active" exact to="/" key='home'>
                  <Icon name='home' />
                  Home
                </Button>
              </div>
            </div>

          </div>
        </div>

      </>
  )
}

export default SymptomList;