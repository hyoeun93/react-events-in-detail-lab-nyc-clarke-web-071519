// Code DelayedButton Component Here
import React from 'react';

class DelayedButton extends React.Component {
    eventHandler = event => {
        event.persist();
        setTimeout(() => {
            this.props.onDelayedClick(event);
        }, this.props.delay);
    };
    render() {
        return (
            <button onClick={this.eventHandler}>Delayed</button>
        )
    }
}

export default DelayedButton;