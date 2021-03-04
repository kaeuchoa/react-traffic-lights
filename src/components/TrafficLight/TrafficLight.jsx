import React from 'react';
import styles from './TrafficLight.module.css';

const TrafficLight = (props) => {
    const classNames = [styles.TrafficLight];
    let lightColorClass = '';
    switch (props.color) {
        case 'red':
            lightColorClass = styles.Red;
            break;
        case 'yellow':
            lightColorClass = styles.Yellow;
            break;
        case 'green':
            lightColorClass = styles.Green;
            break;
    }
    classNames.push(lightColorClass);
    if (props.isOn) {
        classNames.push(styles.Active);
    }
    return (
        <div className={classNames.join(' ')} >
        </div>
    )
}


export default TrafficLight;