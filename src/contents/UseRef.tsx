import { useEffect, useRef, useState } from "react";
import Button from "../components/Button";
import videoSrc from "../assets/video.mp4";

const UseRef = () => {
    const videoRef = useRef<HTMLVideoElement>(null);

    const [playing, setPlaying] = useState(false);

    const back = (seconds: number) => {
        if (!videoRef.current) return;

        videoRef.current.currentTime -= seconds;
    };

    const forward = (seconds: number) => {
        if (!videoRef.current) return;

        videoRef.current.currentTime += seconds;
    };

    const pip = () => {
        if (document.pictureInPictureElement) {
            document.exitPictureInPicture();
        } else if (document.pictureInPictureEnabled) {
            videoRef.current?.requestPictureInPicture();
        }
    };

    const handleMuted = () => {
        if (!videoRef.current) return;

        videoRef.current.muted = !videoRef.current.muted;
    };

    const handlePlaybackRate = (rate: number) => {
        if (!videoRef.current) return;

        videoRef.current.playbackRate = rate;
    };

    return (
        <>
            <h2>useRef</h2>
            <div
                style={{
                    display: "flex",
                    gap: ".5rem",
                }}
            >
                {playing ? (
                    <Button onClick={() => videoRef.current?.pause()}>Pause</Button>
                ) : (
                    <Button onClick={() => videoRef.current?.play()}>Play</Button>
                )}
                <Button onClick={() => back(2)}>Back 2 seconds</Button>
                <Button onClick={() => forward(2)}>Forward 2 seconds</Button>
                <Button onClick={() => handlePlaybackRate(1)}>1x</Button>
                <Button onClick={() => handlePlaybackRate(2)}>2x</Button>
                <Button onClick={() => pip()}>PiP</Button>
                <Button onClick={() => handleMuted()}>M</Button>
            </div>
            <video
                ref={videoRef}
                src={videoSrc}
                onPlay={() => setPlaying(true)}
                onPause={() => setPlaying(false)}
            />
        </>
    );
};

export default UseRef;
