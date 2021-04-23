import React from 'react';
import './IllnessCard.scss'
import {Link} from 'react-router-dom'
import IllnessInfo from "./IllnessInfo";
import {useState} from 'react';
function IllnessCard({title, content}){
    const [triggle, setTriggle] = useState(false);
    const hidecomponent = () => {
        setTriggle(false)
    }
    return (
        <div>
    <li className={'illnessCard'}>
        <Link className={'illnessCard-link'}  onClick={()=>setTriggle(true)}>
            <div className={'illnessCard-info'}>
                 <div className={'illnessCard-title'}>
                    <h1>{title} <i className="fas fa-info-circle" /></h1>
                </div>
                <div className={'illnessCard-content'}>
                    <p>Learn about {title} symptoms and treatments</p>
                </div>
            </div>
        </Link>

        <div className={'illnessCard-status'}>
            <h2>High Match</h2>
        </div>
    </li>
    <IllnessInfo hidecomponent={hidecomponent} toggle={triggle} title={title} content={content}/>
        </div>
    )
}

export default IllnessCard;