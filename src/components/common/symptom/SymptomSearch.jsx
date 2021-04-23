import React, { useState } from 'react';
import { Input, Button, Icon } from 'semantic-ui-react';
import '../symptom/SymptomSearch.css';
import '../../../App.css';
import {Link, NavLink} from 'react-router-dom';

function SymptomSearch(props) {
  // console.log(props.location.symptomProps.symptomData);
  const [count, setCount] = useState(0);
  let search;

  function handleInputChange(e) {
    setCount(e.target.value);
  }
    return (
        <>
            <div className='container'>
              <div className='body'>
                <h1>Symptom Search</h1>
                <p>Type your symptoms</p>
                <div className='searchbar'>
                  <div style={{ display: 'flex', width: '100%' }}>
                    <Input fluid style={{ width: '100%'}} size='medium'
                           placeholder='Search...'
                           onChange={handleInputChange}
                           className='margins'
                    />
                  </div>

                  <Button className='margins' basic color='blue' as={NavLink} activeClassName="active" exact to={{pathname: "/SymptomList", symptomProps: {symptomData: count }}} key='kanbanAdd'>Search</Button>
                </div>

                <div className='sub-container'>
                  <p>Or use the Symptom List</p>
                </div>
                <div className={'hero-btns'}>
                  <Link to='/SymptomList' className='btn-mobile'>
                    <Button basic icon labelPosition='left' color='blue' as={NavLink} activeClassName="active" exact to={{pathname: "/SymptomList", symptomProps: {symptomData: count }}} key='SymptomList'>
                      <Icon name='list' />
                      Symptom List</Button>
                  </Link>
                </div>
              </div>

            </div>
        </>
    )
}

export default SymptomSearch;