import React from 'react';

function IllnessInfo({title, content}){
    return (
        <div className={'illnessInfo'}>
            <div className={'illnessInfo-title'}>
                <h1>{title}</h1>
            </div>

            <div className={'illnessInfo-content'}>
                <p>{content}</p>
            </div>

            <div className={'illnessInfo-footer'}>

            </div>
        </div>
    )
}

export default IllnessInfo;