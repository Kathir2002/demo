import YouTube from 'react-native-youtube';

<YouTube
    videoId="VIDEO_ID" // The YouTube video ID
    play={true} // control playback of video with true/false value
    fullscreen={true} // control whether the video should play in fullscreen mode
    loop={true} // control whether the video should loop
    apiKey="YOUR_API_KEY" // your YouTube API key
    onReady={e => console.log('onReady', e)}
    onChangeState={e => console.log('onChangeState', e)}
    onChangeQuality={e => console.log('onChangeQuality', e)}
    onError={e => console.log('onError', e)}
    onProgress={e => console.log('onProgress', e)}
/>;
