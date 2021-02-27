// Code DigitalClicker Component Here
import React from 'react'

export default class DigitalClicker extends React.Component {
    state = {timesClicked: 0}

    updateState = () => {
        this.setState(prevState => {
            return {timesClicked: prevState.timesClicked + 1}
        })
    }

    render() {
        return(
            <button label={this.state.timesClicked} onClick={this.updateState}>{this.state.timesClicked}</button>
        )
    }
}