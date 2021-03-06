import { FaviconVideo } from '../../packages/favorite-icon-video/dist/index.esm';
import './common';

const video = document.querySelector('video');

const favVideo = new FaviconVideo({ video });

const previewVideo = new FaviconVideo({
    links: [
        document.querySelector('#preview')
    ],
    size: 64,
    video,
});

favVideo.play();
