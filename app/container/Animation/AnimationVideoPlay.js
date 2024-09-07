import React, { useRef } from 'react';
import { View, StyleSheet } from 'react-native';
import Video, { VideoRef } from 'react-native-video';

const App = () => {
    const videoRef = useRef(null);

    // Correct the video source to use uri for remote videos
    const background = { uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' };

    const onBuffer = (buffer) => {
        console.log('Buffering...', buffer);
    };

    const onError = (error) => {
        console.log('Error occurred:', error);
    };

    return (
        <View style={{ flex: 1 }}>
            <Video
                source={background}
                ref={videoRef}
                onBuffer={onBuffer} // Callback when video is buffering
                onError={onError}   // Callback when video cannot be loaded
                // muted
                style={styles.backgroundVideo}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    backgroundVideo: {
        width: '90%',
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 50,
    },
});

export default App;

// {uri:'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'}
// ref={(ref)=>{
//     this.player=ref
// }}
// onBuffer={this.onBuffer}
// onError={this.videoError}
// muted