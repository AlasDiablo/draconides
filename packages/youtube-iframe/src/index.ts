import type { YT } from './types';

type WindowWithYT = {
    YT: YT;
    onYouTubeIframeAPIReady: () => void;
} & typeof Window;

type State = {
    loading: boolean;
    loaded: boolean;
    callback: ((value: any) => void)[]
}

const state: State = {
    loading: false,
    loaded: false,
    callback: [],
};

/**
 * Get a typed YouTube api object.
 * This function will add YouTube iframe api into the dom if not present
 * @returns - Return a Promise of YT
 * @version 1.0.0
 * @since 1.0.0
 */
export const YouTubeIFrameAPI = (): Promise<YT> => {
    return new Promise<YT>((resolve) => {
        if (state.loaded) {
            resolve((window as any as WindowWithYT).YT);
        }
        if (state.loading) {
            state.callback.push(resolve);
        }
        if (!state.loaded && !state.loading) {
            state.loading = true;
            state.callback.push(resolve);

            (window as any as WindowWithYT).onYouTubeIframeAPIReady = () => {
                state.loaded = true;
                state.loading = false;
                while (state.callback.length > 0) {
                    const callback = state.callback.pop();
                    if (callback !== undefined) {
                        callback((window as any as WindowWithYT).YT);
                    }
                }
            };
            if (typeof ((window as any as WindowWithYT).YT) === 'undefined' || typeof (((window as any as WindowWithYT).YT).Player) === 'undefined') {
                const script = document.createElement('script');
                script.type = 'text/javascript';
                script.src = 'https://www.youtube.com/iframe_api';
                document.head.appendChild(script);
            } else {
                (window as any as WindowWithYT).onYouTubeIframeAPIReady();
            }
        }
    });
};
