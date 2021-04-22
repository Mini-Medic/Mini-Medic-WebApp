import React from 'react'
import IllnessCard from "./IllnessCard";
function Illness(){
    const title = "Flu";
    const content = "Symptoms: Fever, feeling feverish or having chills, sore throat, cough, congestion, aches, and tiredness/fatigue.\n" +
        "Flu symptoms are abrupt and are more intense than similar illnesses such as the common cold.\n"

    return (
        <div className={'illness-page'}>
            <div className={'illness-page_title'}>
                <label>Here are illness that match your symptoms:</label>
            </div>
            <div className={'illness-page_table'}>
                <IllnessCard title={title} content={content}/>
                <IllnessCard title={title} content={content}/>
                <IllnessCard title={title} content={content}/>
            </div>
        </div>
    );
}

export default Illness;