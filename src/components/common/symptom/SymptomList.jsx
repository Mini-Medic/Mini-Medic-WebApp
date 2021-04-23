import React, {useState} from 'react';
import {NavButton} from '../navbar/Button';
import '../symptom/SymptomList.css';
import '../../../App.css';
import { Link, NavLink } from 'react-router-dom';
import {Link as Link2} from 'react-scroll';
import Video from '../../../resource/background.mp4';
import { Checkbox, Button } from 'semantic-ui-react';


function SymptomList(props) {
    // console.log(props.location.symptomProps.symptomData);

  const [symptoms, setSymptoms] = useState({
      "Abdominal Pain": false,
      "Chest Pain": false,
      "Cough": false,
      "Constipation": false,
      "Dizzyness": false,
      "Diarhea": false,
      "Fever": false,
      "Headache": false,
      "Joint Pain": false,
      "Joint Swelling": false,
      "Joint Inflammation": false,
      "Muscle Cramps": false,
      "Nausea": false,
      "Numbness": false,
      "Rash": false,
      "Sore Throat": false,
  });

    const changedState = symptoms;
    const checked = (event) => {
      changedState[[event[0]]] = !event[1];
      setSymptoms(changedState);
    }

  return (
      <>
        <div className='container'>
          <div className='body'>
            <h1>Symptom List</h1>
            <p>Check off your symptoms</p>
            <div className='symptoms-container'>
              {Object.entries(symptoms).map(item => (
                  <Checkbox className='symptomCheckbox'
                            key={item[0]}
                            name={item[0]}
                            label={item[0]}
                            onChange={() => checked(item)}
                  />
              ))}

            </div>
            <div className='submit' >
              <Button basic color='blue' className='submit-button' size='small' as={NavLink} activeClassName="active" exact to={{pathname: "/SymptomSearch", symptomProps: {symptomData: symptoms }}} key='SymptomList'>Submit</Button>
            </div>

          </div>
        </div>
      </>
  )
}

export default SymptomList;