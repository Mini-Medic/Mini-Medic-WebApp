import React from 'react';
import './IllnessCard.scss'
import {Link} from 'react-router-dom'
import IllnessInfo from "./IllnessInfo";
import {useState} from 'react';
function IllnessCard({title, symptoms, description, match}){
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
                    <h1>{title}</h1>
                </div>
                <div className={'illnessCard-content'}>
                    <p>Click to learn more about {title} symptoms and treatments</p>
                </div>
            </div>
        </Link>

        <div className={'illnessCard-status'}>
            <h2>{match}</h2>
        </div>
    </li>
    <IllnessInfo hidecomponent={hidecomponent} toggle={triggle} title={title} symptoms={symptoms} description={description}/>
        </div>
    )
}

export default IllnessCard;