import React from 'react';
import { Link } from 'react-router-dom';
import './IllnessInfo.scss'
function IllnessInfo(props){

    return(props.toggle) ? (
        <div className={'illnessInfo-popup'}>
            <div className={'illnessInfo-popup-inner'}>
            <div className={'illnessInfo-title'}>
                <h1 style={{ fontSize: '32px' }}>{props.title}</h1>
            </div>
            <div className={'illnessInfo-content'}>
              <h3 style={{ fontSize: '24px' }}>Symptoms:</h3>
                <p style={{ fontSize: '18px' }}>{props.symptoms}</p>
            </div>
            <div className={'illnessInfo-content'}>
              <h3 style={{ fontSize: '24px' }}>Description:</h3>
                <p style={{ fontSize: '18x' }}>{props.description}</p>
            </div>
            <div className={'illnessInfo-footer'}>
                <button className={'cancel'} onClick={props.hidecomponent}>Cancel</button>
                <Link to={'/SelectedIllness'}>
                  <button className={'select'} path={'/SelectedIllness'}>Select</button>
                </Link>
            </div>
            </div>
        </div>
    ) : "" ;
}

export default IllnessInfo;