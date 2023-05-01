import { YouTubeIFrameAPI } from '../../src';

const load = document.getElementById('load') as HTMLButtonElement;
load.onclick = () => {
    YouTubeIFrameAPI().then((YT) => {
        new YT.Player('video', {
            host: 'https://www.youtube-nocookie.com',
            width: 1280,
            height: 720,
            videoId: 'dQw4w9WgXcQ',
            playerVars: {
                origin: 'http://localhost:5173/',
                autoplay: 1,
            },
        });
    });
};

