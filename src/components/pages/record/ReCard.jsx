import React from 'react';
import {Link} from 'react-router-dom'
import './ReCard.css'
import RecordInfo from "./RecordInfo";
import {useState} from 'react';

function ReCard({title, content, doctor}){
    const [triggle, setTriggle] = useState(false);
    const hidecomponent = () => {
        setTriggle(false)
    }
    return (
        <div>
    <li className={'recordCard'}>
        <Link className={'card-link'}  onClick={()=>setTriggle(true)}>
            <div className={'info'}>
                 <div className={'card-title'}>
                    <h1>{title}</h1>
                </div>
                <div className={'card-content'}>
                    <p>Review {title}'s Record</p>
                </div>
            </div>
        </Link>

        <div className={'status'}>
            <h2>Last Updated: 2 days ago</h2>
        </div>
    </li>
    <RecordInfo hidecomponent={hidecomponent} toggle={triggle} title={title} content={content} doctor={doctor}/>

        </div>
    )
}

export default ReCard;