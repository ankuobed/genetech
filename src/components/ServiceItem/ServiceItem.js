import React from 'react'

import './ServiceItem.css'
import { capitalise } from '../../utils/utils'

const ServiceItem = ({ title, Icon, subtitles, isComingSoon }) => {
    return (
        <div className='service' style={{padding: isComingSoon&& '0 0 10px 0'}}>
            {isComingSoon&& <div className='service__soon'>
                <div className='service__soonCon'>
                    <p className='service__soonContent'>Coming<br />soon</p>
                </div>
                </div>}
            <p className='service__title'>{capitalise(title)} </p>
            <div className='service__icon'>
                <Icon style={{fontSize: 70}}/>
            </div>
            <div className='service__list'>
                {subtitles.map(subtitle => <p>{subtitle}</p>)}
            </div>        
        </div>
    )
}

export default ServiceItem
