import React from 'react'
import IllnessCard from "./IllnessCard";
import { Icon, Button } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import './illness.scss'
function Illness(props){
    const title1 = "Gout";
    const symptoms1 = "Extreme joint pain, fever, hot and or red joints, swollen joints.\n"
    const description1 = "Gout is a type of arthritis caused by too much uric acid in the body. Gout typically affects the big toe, but can also affect heels, ankles, knees, fingers, wrists, and elbows. If not treated, gout can cause kidney stones and skin lumps.\n";
  const title2 = "Lyme Disease";
  const symptoms2 = "Rash, fever, chills, muscle pain, body ache, stiff neck, exhaustion, headache, swollen and painful joints, facial weakness, behavior changes, itchiness, irregular heart rhythm, and meningitis.\n";
  const description2 = "Description: \n Lyme disease is a bacterial infection spread through tick bites. Lyme disease may cause a rash and flu-like symptoms.\n"
  const title3 = "Fifth Disease";
  const symptoms3 = "Low-grade fever, headache, stuffy or runny nose, rash, itching, joint swelling or pain.\n";
  const description3 = "Fifth disease is a contagious viral infection that causes a mild rash on the face, trunk, and limbs. Adults who get it may have joint pain or swelling along with rash. Fifth disease usually clears up on its own, but people with chronic anemia or compromised immune systems may need medical treatment.\n";
  const title4 = "Fifth Disease";
  const symptoms4 = "Joint pain, swelling, fever, fatigue, swollen glands, weight loss, morning stiffness, and red hands.\n";
  const description4 = "Rheumatoid arthritis is an autoimmune disease that causes your own body to attack your joints, which causes pain, swelling, and joint damage. It also can cause fever, fatigue, swollen glands, weight loss, morning stiffness, and red hands. There is no cure, but medications can stop joint damage and symptoms and put the disease into remission.\n";

    return (
        <div className={'illness-page'}>
            <div className={'illness-page_title'}>
                <label>Here are illness that match your symptoms:</label>

            </div>
            <div className={'illness-page_body'}>
            <div className={'illness-page_body-table'}>
                <IllnessCard title={title1} symptoms={symptoms1} description={description1} match={"High Match"}/>
                <IllnessCard title={title2} symptoms={symptoms2} description={description2} match={"High Match"}/>
                <IllnessCard title={title3} symptoms={symptoms3} description={description3} match={"Medium Match"}/>
                <IllnessCard title={title4} symptoms={symptoms4} description={description4} match={"Medium Match"}/>

                <div className='buttons' style={{ margin: '15px' }}>
                <Button basic color='blue'  icon labelPosition='left' as={NavLink} activeClassName="active" exact to="/SymptomSearch" key='SymptomSearch'>
                  <Icon name='angle left' />
                  Back
                </Button>
              </div>
            </div>
                {/*<div className={'illness-page_body-footer'}>
                    <button>More matches <i className="fas fa-arrow-right" /></button>
                </div>*/}
            </div>
        </div>
    );
}

export default Illness;