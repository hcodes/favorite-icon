import { FaviconStatus } from '../../packages/favorite-icon-status/dist/index.esm';
import './common';

const preview = new FaviconStatus({
    size: 64,
    links: [
        document.querySelector('#preview')
    ]
});
const favicon = new FaviconStatus();

function updateFavicons(status: string) {
    preview.set(status);
    favicon.set(status);
}

updateFavicons('ok');

const ok = document.querySelector<HTMLInputElement>('#ok');
const error = document.querySelector<HTMLInputElement>('#error');
const warning = document.querySelector<HTMLInputElement>('#warning');

ok.onclick = () => {
    updateFavicons('ok');
};

error.onclick = () => {
    updateFavicons('error');
};

warning.onclick = () => {
    updateFavicons('warning');
};
