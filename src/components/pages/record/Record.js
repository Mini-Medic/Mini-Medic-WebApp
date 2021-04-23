import React from 'react'
import ReCard from "./ReCard";
import './record.css'

function Record(){
    const illness = "Flu";
  const desc = "Symptoms: Fever, feeling feverish or having chills, sore throat, cough, congestion, aches, and tiredness/fatigue.\n" +
      "Flu symptoms are abrupt and are more intense than similar illnesses such as the common cold.\n"
    const doc = "Healer";

    return (
        <div className={'record-page'}>
            <div className={'record-title'}>
                <label>Your Illness Record</label>
            </div>
            <div className={'record-body'}>
            <div className={'record-table'}>
                <ReCard title={illness} content={desc} doctor={doc}/>
            </div>
            </div>
        </div>
    );
}

export default Record;