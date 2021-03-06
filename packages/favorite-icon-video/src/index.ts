import { Favicon } from '../../favorite-icon/src/index';
import { FaviconVideoOptions } from './types';

export class FaviconVideo {
    private options: FaviconVideoOptions;
    private canvas: HTMLCanvasElement;
    private context: CanvasRenderingContext2D;
    private timer: number;

    constructor(options: FaviconVideoOptions) {
        const size = options.size ?? Favicon.size;
        const video = options.video;
        this.options = {
            links: options.links,
            size,
            video,
        };

        this.canvas = document.createElement('canvas');
        this.canvas.width = size;
        this.canvas.height = size;

        this.context = this.canvas.getContext('2d');

        video.addEventListener('play', this.onplay, false);
        video.addEventListener('pause', this.onpause, false);
        video.addEventListener('ended', this.onpause, false);
        video.addEventListener('abort', this.onpause, false);
    }

    private onplay = () => {
        this.play();
    }

    private onpause = () => {
        this.pause();
    }

    public play(): void {
        this.options.video.muted = true;
        this.options.video.play();
        this.timer = window.setInterval(() => this.draw(), this.options.timeout || 25);
    }

    public pause(): void {
        this.options.video.pause();
        this.reset();
        window.clearInterval(this.timer);
    }

    public reset(): void {
        Favicon.reset();
    }

    public destroy(): void {
        this.pause();

        const video = this.options.video;
        video.removeEventListener('play', this.onplay, false);
        video.removeEventListener('pause', this.onpause, false);
        video.removeEventListener('ended', this.onpause, false);
        video.removeEventListener('abort', this.onpause, false);

        delete this.canvas;
        delete this.context;
        delete this.options;
    }

    private draw(): void {
        const video = this.options.video;
        if (video.paused || video.ended) {
            this.pause();
            return;
        }

        try {
            const size = this.options.size;
            this.context.clearRect(0, 0, size, size);
            this.context.drawImage(video, 0, 0, size, size);
        } catch (e) {
            console.error(e);
        }

        Favicon.set(this.canvas, this.options.links);
    }
}
