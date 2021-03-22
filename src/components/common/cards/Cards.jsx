import React from 'react'
import CardItem from "./CardItem";
import './Cards.css';
import img1 from "../../../resource/img-2.jpg"
import img2 from "../../../resource/img-3.jpg"
function Cards() {
    return (
        <div className={'cards'} id={'cardgroups'}>
            <h1>COVID-19: What you need to know</h1>
            <div className={'cards_container'}>
                <div className={'cards-wrapper'}>
                    <ul className={'cards_items'}>
                        <CardItem src={img1}
                                  text={'Explore more details inside'}
                                  label={'COVID-19 updates'}
                                  path={'/services'}
                        />
                        <CardItem src={img2}
                                  text={'Explore more details inside'}
                                  label={'Adventure'}
                                  path={'/services'}
                        />
                    </ul>
                    <ul className={'cards_items'}>
                        <CardItem src={img1}
                                  text={'Explore more details inside'}
                                  label={'COVID-19 updates'}
                                  path={'/services'}
                        />
                        <CardItem src={img2}
                                  text={'Explore more details inside'}
                                  label={'COVID-19 updates'}
                                  path={'/services'}
                        />
                        <CardItem src={img1}
                                  text={'Explore more details inside'}
                                  label={'COVID-19 updates'}
                                  path={'/services'}
                        />
                        <CardItem src={img2}
                                  text={'Explore more details inside'}
                                  label={'COVID-19 updates'}
                                  path={'/services'}
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards;