export type PlaybackQuality =
    | 'highres'
    | 'hd1080'
    | 'hd720'
    | 'large'
    | 'medium'
    | 'small'
    | 'default';

export type PlayerStateValue = -1 | 0 | 1 | 2 | 3 | 5;

export type PlayerState = {
    ENDED: 0;
    PLAYING: 1;
    PAUSED: 2;
    BUFFERING: 3;
    CUED: 5;
};

export type PlaybackRate = 0.25 | 0.5 | 1 | 1.5 | 2;

type loadVideoById =
    | ((videoId: string, startSeconds?: number, endSeconds?: number, suggestedQuality?: PlaybackQuality) => void)
    | ((options: { videoId: string, startSeconds: number, endSeconds?: number, suggestedQuality?: PlaybackQuality }) => void);

type cueVideoByUrl =
    | ((mediaContentUrl: string, startSeconds?: number, endSeconds?: number, suggestedQuality?: string) => void)
    | ((options: { mediaContentUrl: string, startSeconds: number, endSeconds?: number, suggestedQuality?: PlaybackQuality }) => void);

type loadVideoByUrl = cueVideoByUrl;

type placeHolderFunction = (...args : any[]) => void;

type voidFunction = () => void;

// https://developers.google.com/youtube/iframe_api_reference?hl=fr#Functions
export type Player = {
    // https://developers.google.com/youtube/iframe_api_reference?hl=fr#Queueing_Functions
    loadVideoById: loadVideoById;
    cueVideoByUrl: cueVideoByUrl;
    loadVideoByUrl: loadVideoByUrl;
    cuePlaylist: placeHolderFunction;
    loadPlaylist: placeHolderFunction;
    // https://developers.google.com/youtube/iframe_api_reference?hl=fr#Playback_controls
    playVideo: voidFunction;
    pauseVideo: voidFunction;
    stopVideo: voidFunction;
    seekTo: (seconds: number, allowSeekAhead: boolean) => void;
    clearVideo: voidFunction;
    nextVideo: voidFunction;
    previousVideo: voidFunction;
    playVideoAt: (index: number) => void;
    mute: voidFunction;
    unMute: voidFunction;
    isMuted: () => boolean;
    setVolume: (volume: number) => void;
    getVolume: () => number;
    setSize: (width: number, height: number) => any;
    getPlaybackRate: () => PlaybackRate;
    setPlaybackRate: (suggestedRate: number) => void;
    getAvailablePlaybackRates: () => number[];
    setLoop: (loopPlaylists: boolean) => void;
    setShuffle: (shufflePlaylist: boolean) => void;
    // https://developers.google.com/youtube/iframe_api_reference?hl=fr#Playback_status
    getVideoLoadedFraction: () => number;
    getPlayerState: () => PlayerStateValue;
    getCurrentTime: () => number;
    // https://developers.google.com/youtube/iframe_api_reference?hl=fr#Playback_quality
    getPlaybackQuality: () => PlaybackQuality | undefined;
    setPlaybackQuality: (suggestedQuality: PlaybackQuality) => void;
    getAvailableQualityLevels: () => string[];
    // https://developers.google.com/youtube/iframe_api_reference?hl=fr#Retrieving_video_information
    getDuration: () => number;
    getVideoUrl: () => string;
    getVideoEmbedCode: () => string;
    // https://developers.google.com/youtube/iframe_api_reference?hl=fr#Retrieving_playlist_information
    getPlaylist: () => string[];
    getPlaylistIndex: () => number;
    // https://developers.google.com/youtube/iframe_api_reference?hl=fr#Adding_event_listener
    addEventListener: (event: string, listener: string) => void;
    removeEventListener: (event: string, listener: string) => void;
    // https://developers.google.com/youtube/iframe_api_reference?hl=fr#Accessing_and_Modifying_DOM_Nodes
    getIframe: () => HTMLIFrameElement;
    destroy: () => void;
    // https://developers.google.com/youtube/iframe_api_reference?hl=fr#Events

};

export type Event = {
    target: Player;
}

// https://developers.google.com/youtube/iframe_api_reference?hl=fr#Loading_a_Video_Player
export type PlayerOptions = {
    host: 'https://www.youtube.com' | 'https://www.youtube-nocookie.com';
    height: number | `${number}`;
    width: number | `${number}`;
    videoId: string;
    // https://developers.google.com/youtube/player_parameters.html?playerVersion=HTML5&hl=fr
    playerVars?: {
        autoplay?: 0 | 1;
        cc_load_policy?: 1;
        color?: 'red' | 'white';
        controls?: 0 | 1 | 2;
        disablekb?: 0 | 1;
        enablejsapi?: 0 | 1;
        end?: number;
        fs?: 0 | 1;
        hl?: string;
        iv_load_policy?: 1 | 3;
        list?: string;
        listType?: string;
        loop?: 0 | 1;
        modestbranding?: 1;
        origin?: string;
        playlist?: string;
        playsinline?: 0 | 1;
        rel?: 0 | 1;
        showinfo?: 0 | 1;
        start?: number;
    };
    events?: {
        onReady?: (event: Event) => void;
        onStateChange?: (event: Event & { data: PlayerStateValue }) => void;
        onPlaybackQualityChange?: (event: Event & { data: PlaybackQuality }) => void;
        onPlaybackRateChange?: (event: Event & { data: PlaybackRate }) => void;
        onError?: (event: Event & { data: 2 | 5 | 100 | 101 | 150 }) => void;
        onApiChange?: (event: Event & { data: any }) => void;
    };
};

export type YT = {
    Player: new (elementId: string, options: PlayerOptions) => Player;
    PlayerState: PlayerState;
};
