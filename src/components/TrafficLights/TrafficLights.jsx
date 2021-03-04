import React, { Component } from 'react';
import TrafficLight from '../TrafficLight/TrafficLight';
import styles from './TrafficLights.module.css';

class TrafficLights extends Component {

    state = {
        timerId: null,
        lightOn: -1,
        working: false,
        lightTiming: {
            0: 5,
            1: 2,
            2: 10
        }
    }

    lightsTimer = () => {
        if (!this.state.working) {
            let lightOn = this.state.lightOn;
            const timer = () => {
                if (lightOn < 2) {
                    lightOn++;
                } else {
                    lightOn = 0;
                }
                const id = setTimeout(timer, this.state.lightTiming[lightOn] * 1000);
                this.setState({ timerId: id, lightOn: lightOn });
            }
            timer();
        }
    }

    start = () => {
        console.log('Starting TrafficLights');
        this.setState({ working: true });
        this.lightsTimer();
    }

    stop = () => {
        console.log('Stopping TrafficLights');
        this.setState({ lightOn: -1, working: false });
        clearTimeout(this.state.timerId);
    }

    update = (e, lightOn) => {
        let copy = {...this.state.lightTiming};
        copy[lightOn] = e.target.value;
        this.setState({lightTiming: copy});
    }

    render() {
        return (
            <div className={styles.TrafficLightsContainer}>
                <div className={styles.ConfigForm}>
                    <h2>Set the time for the lights in seconds</h2>
                    <div>
                        <label className={styles.Inputs}>
                            Red:
                        </label>
                        <input disabled={this.state.working} type="text" value={this.state.lightTiming[0]} onChange={(event) => this.update(event, 0)}/>
                    </div>
                    <div>
                        <label className={styles.Inputs}>
                            Yellow:
                        </label>
                        <input disabled={this.state.working} type="text" value={this.state.lightTiming[1]} onChange={(event) => this.update(event, 1)}/>
                    </div>
                    <div>
                        <label className={styles.Inputs}>
                            Green:
                        </label>
                        <input disabled={this.state.working} type="text" value={this.state.lightTiming[2]} onChange={(event) => this.update(event, 2)}/>
                    </div>
                    <div>
                        <button onClick={this.stop} disabled={!this.state.working}>Stop</button>
                        <button onClick={this.start} disabled={this.state.working}>Start</button>
                    </div>
                </div>
                <div className={styles.TrafficLights}>
                    <TrafficLight isOn={this.state.lightOn === 0} color={"red"} />
                    <TrafficLight isOn={this.state.lightOn === 1} color={"yellow"} />
                    <TrafficLight isOn={this.state.lightOn === 2} color={"green"} />
                </div>
                <div className={styles.TrafficLightsBar}></div>
            </div>
        );
    }
}

export default TrafficLights;