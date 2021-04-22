import React from 'react';

function IllnessCard({title, content}){
    return(
    <div className={'illnessCard'}>
        <div className={'illnessCard-title'}>
            <h1>{title}</h1>
        </div>
        <div className={'illnessCard-content'}>
            <p>{content}</p>
        </div>
    </div>
    )
}

export default IllnessCard;