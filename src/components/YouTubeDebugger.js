// Code YouTubeDebugger Component Here
import React from 'react'

export default class YouTubeDebugger extends React.Component {
    state = {
        errors: [],
        user: null,
        settings: {
          bitrate: 8,
          video: {
            resolution: '1080p'
          }
        }
      } 

      updateBitrate = () => {
          this.setState({
              settings: {
                  ...this.state.settings,
                  bitrate: 12
              }
          })
      }

      updateRes = () => {
          this.setState({
              settings: { 
                  ...this.state.settings,
                    video: {
                        ...this.state.settings.video,
                        resolution: '720p'
                    }}
          })
      }

    render() {
        return (
            <div>
            <button className="bitrate" onClick={this.updateBitrate}>BitRate</button>
            <button className='resolution' onClick={this.updateRes}>Res</button>
            </div>
        )
    }
}