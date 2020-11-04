import React from 'react'

import './ServiceItem.css'
import { capitalise } from '../../utils/utils'

const ServiceItem = ({ title, Icon }) => {
    return (
        <div className='service'>
            <p className='service__title'>{capitalise(title)} </p>
            <div className='service__icon'>
                <Icon style={{fontSize: 70}}/>
            </div>
            <div className='service__list'>
                <p>Dolores</p>
                <p>Voluptua sit</p>
                <p>Elitr dolores</p>
                <p>Tempor</p>
            </div>
            
        </div>
    )
}

export default ServiceItem
