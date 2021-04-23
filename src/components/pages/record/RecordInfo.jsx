import React from 'react';
import './RecordInfo.css'

function RecordInfo(props){

    return(props.toggle) ? (
        <div className={'popup'}>
            <div className={'content-holder'}>
            <div className={'record-title'}>
                <h1>Record</h1>
            </div>
            <div className={'content'}>
                <h2>Selected Illness: {props.title}</h2>
                <h2>Selected Doctor: {props.doctor}</h2>
                <h1 className={'center'}>{props.title}'s Information</h1>
                <h3>{props.content}</h3>
            </div>
            <div className={'info-footer'}>
              <button className={'cancel'}>Remove Illness From Record</button>
              <button className={'select'}>Look For A Different Doctor</button>
              <button className={'cancel'} onClick={props.hidecomponent}>Return To Records</button>
            </div>
            </div>
        </div>
    ) : "" ;
}

export default RecordInfo;