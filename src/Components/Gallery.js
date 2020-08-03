import React, {Component} from 'react';
import YouTube from 'react-youtube';

class Gallery extends React.Component {
    render() {
        const opts = {
            height: '390',
            width: '640',
            playerVars: {
                // https://developers.google.com/youtube/player_parameters
                autoplay: 1,
            },
        };

        return(
            <div>
            <h1>video</h1>
            <YouTube videoId="9iHpKa2BNpU" opts={opts} onReady={this._onReady} />
            </div>
                );
    }

    _onReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    }
}
export default Gallery