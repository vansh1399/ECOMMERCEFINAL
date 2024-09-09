import React, { useRef, useState, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, Image, Text, Dimensions } from 'react-native';
import Video from 'react-native-video';
import Orientation from 'react-native-orientation-locker';
import Slider from '@react-native-community/slider';

const App = () => {
    const [clicked, setClicked] = useState(false);
    const [progress, setProgress] = useState(null);
    const [paused, setPaused] = useState(false);
    const [muted,setMuted]=useState(false);
    const [fullScreen, setFullScreen] = useState(false);
    const ref = useRef();

    // Function to format time for the video slider
    const format = (seconds) => {
        let mins = parseInt(seconds / 60).toString().padStart(2, '0');
        let secs = (Math.trunc(seconds) % 60).toString().padStart(2, '0');
        return `${mins}:${secs}`;
    };

    // Handle full-screen toggle
    const handleFullScreen = () => {
        if (fullScreen) {
            Orientation.lockToPortrait();
        } else {
            Orientation.lockToLandscape();
        }
        setFullScreen(!fullScreen);
    };

    const handleMuteRing = () => {
        // if (muted) {
        //     Orientation.addLockListener();
        // } else {
        //     Orientation.addOrientationListener();
        // }
        setMuted(!muted);
    };

    useEffect(() => {
        return () => {
            Orientation.lockToPortrait();
        };
        
    }, []);

    return (
        <View style={{ flex: 1 }}>
            <TouchableOpacity onPress={() => setClicked(true)}
                style={{
                    width: '100%',
                    height: fullScreen ? Dimensions.get('window').height : 200, // Full screen height if in full-screen mode
                }}>
                <Video
                    source={{ uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' }}
                    ref={ref}
                    onProgress={(x) => {
                        setProgress(x);
                    }}
                    muted={muted}
                    paused={paused} 
                    resizeMode="contain" 
                    style={{
                        width: '100%',
                        height: fullScreen ? Dimensions.get('window').height : 200, // Full screen mode for video
                    }}
                    onError={(error) => console.log('Error:', error)}
                    onBuffer={() => console.log('Buffering...')}
                />

                {clicked &&
                    <TouchableOpacity style={styles.overlay}>
                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity onPress={() => {
                                ref.current.seek(parseInt(progress.currentTime) - 10)
                            }}>
                                <Image source={require('../../assets/image/backward.png')}
                                    style={styles.img}
                                />
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => setPaused(!paused)}>
                                <Image source={paused ? require('../../assets/image/play-button.png') : require('../../assets/image/pause.png')}
                                    style={styles.img1}
                                />
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => {
                                ref.current.seek(parseInt(progress.currentTime) + 10)
                            }}>
                                <Image source={require('../../assets/image/forward.png')}
                                    style={styles.img2}
                                />
                            </TouchableOpacity>
                        </View>

                        <View style={styles.sliderContainer}>
                            <Text style={{ color: 'white' }}>{format(progress?.currentTime)}</Text>
                            <Slider
                                style={{ width: '80%', height: 40 }}
                                minimumValue={0}
                                maximumValue={progress?.seekableDuration}
                                minimumTrackTintColor="#FFFFFF"
                                maximumTrackTintColor="#fff"
                                onValueChange={(x) => {
                                    ref.current.seek(x);
                                }}
                            />
                            <Text style={{ color: 'white' }}>{format(progress?.seekableDuration)}</Text>
                        </View>

                        <View style={styles.fullscreenButton}>
                            <TouchableOpacity onPress={handleFullScreen}>
                                <Image source={fullScreen ? require('../../assets/image/minimize.png') : require('../../assets/image/full-size.png')} style={styles.img3} />
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => handleMuteRing()}>
                                <Image source={muted ? require('../../assets/image/mute.png') : require('../../assets/image/medium-volume.png')} style={styles.img3} />
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>}
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    overlay: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        backgroundColor: 'rgba(0,0,0,.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    img: {
        width: 30,
        height: 30,
        tintColor: 'white',
    },
    img1: {
        width: 30,
        height: 30,
        tintColor: 'white',
        marginLeft: 50,
    },
    img2: {
        width: 30,
        height: 30,
        tintColor: 'white',
        marginLeft: 50,
    },
    img3: {
        width: 20,
        height: 20,
        tintColor: 'white',
    },
    sliderContainer: {
        width: '100%',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        position: 'absolute',
        bottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
    },
    fullscreenButton: {
        width: '85%',
        flexDirection: 'row',
        position: 'absolute',
        justifyContent: 'space-between',
        top: 10,
        left: 20,
    },
});

export default App;
