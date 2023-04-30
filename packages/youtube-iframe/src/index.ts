// https://developers.google.com/youtube/iframe_api_reference?hl=fr#Loading_a_Video_Player
export type PlayerOptions = {
    height: `${number}`;
    width: `${number}`;
    videoId: string;
    // https://developers.google.com/youtube/player_parameters.html?playerVersion=HTML5&hl=fr
    playerVars: any;
    events: {
        onReady: (event: any) => void;
        onStateChange: (event: any) => void;
    }
};

export type PlayerState = {
    PLAYING: boolean;
};

export type YT = {
    Player: (elementId: string, options: PlayerOptions) => void;
    PlayerState: PlayerState;
};

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

export const YouTubeIFrameAPI = (): Promise<YT> => {
    return new Promise<YT>((resolve) => {
        const localWindow: WindowWithYT = window as any;
        if (state.loaded) {
            resolve(localWindow.YT);
        }
        if (state.loading) {
            state.callback.push(resolve);
        }
        if (!state.loaded && !state.loading) {
            state.loading = true;

            localWindow.onYouTubeIframeAPIReady = () => {
                state.loaded = true;
                state.loading = false;
                while (state.callback.length > 0) {
                    const callback = state.callback.pop();
                    if (callback !== undefined) {
                        callback(localWindow.YT);
                    }
                }
            };

            const script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = 'https://www.youtube.com/iframe_api';
            document.body.appendChild(script);
        }
    });
};
