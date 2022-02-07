import React from 'react';
import '../css/App.css';

const MenuItem = (props) => {

    return (
        <div className='Menu'>
            <div className='MenuItem'>
                <p>{props.name}</p>
            </div>
        </div>
    )

}

export default MenuItem;