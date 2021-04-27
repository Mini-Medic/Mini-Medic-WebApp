import React from 'react';
import { Link } from 'react-router-dom';
import './IllnessInfo.scss'
function IllnessInfo(props){

    return(props.toggle) ? (
        <div className={'illnessInfo-popup'}>
            <div className={'illnessInfo-popup-inner'}>
            <div className={'illnessInfo-title'}>
                <h1>{props.title}</h1>
            </div>
            <div className={'illnessInfo-content'}>
              <h3>Symptoms:</h3>
                <p>{props.symptoms}</p>
            </div>
            <div className={'illnessInfo-content'}>
              <h3>Description:</h3>
                <p>{props.description}</p>
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