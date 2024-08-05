import React, { useEffect, useState, useRef } from 'react';
import classNames from "classnames/bind";
import styles from "./AudioPlayer.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faVolumeUp, faVolumeMute } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AudioPlayer() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState('00:00');
    const [duration, setDuration] = useState('00:00');
    const [volume, setVolume] = useState(1);
    const [isMuted, setIsMuted] = useState(false);
    const [progress, setProgress] = useState(0);
    const audioRef = useRef(null);

    useEffect(() => {
        const audio = audioRef.current;

        const updateTime = () => {
            if (!isFinite(audio.duration)) return;
            const minutes = Math.floor(audio.currentTime / 60);
            const seconds = Math.floor(audio.currentTime % 60);
            setCurrentTime(`${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`);
            setProgress((audio.currentTime / audio.duration) * 100);
        };

        const setAudioDuration = () => {
            if (isFinite(audio.duration)) {
                const minutes = Math.floor(audio.duration / 60);
                const seconds = Math.floor(audio.duration % 60);
                setDuration(`${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`);
            }
        };

        audio.addEventListener('timeupdate', updateTime);
        audio.addEventListener('loadedmetadata', setAudioDuration);

        return () => {
            audio.removeEventListener('timeupdate', updateTime);
            audio.removeEventListener('loadedmetadata', setAudioDuration);
        };
    }, []);

    const handlePlayPause = () => {
        const audio = audioRef.current;
        if (isPlaying) {
            audio.pause();
        } else {
            audio.play();
        }
        setIsPlaying(!isPlaying);
    };

    const handleVolumeChange = (e) => {
        const volume = e.target.value;
        setVolume(volume);
        audioRef.current.volume = volume;
        setIsMuted(volume === '0');
    };

    const toggleMute = () => {
        const audio = audioRef.current;
        setIsMuted(!isMuted);
        audio.muted = !isMuted;
    };

    const handleProgressChange = (e) => {
        const audio = audioRef.current;
        const newTime = (e.target.value / 100) * audio.duration;
        if (isFinite(newTime)) {
            audio.currentTime = newTime;
            setProgress(e.target.value);
        }
    };

    return (
        <div className={cx('wrapper')}>
            <audio ref={audioRef} src="/path-to-your-audio-file.mp3"></audio>
            <div className={cx('audio-controls')}>
                <FontAwesomeIcon
                    icon={isPlaying ? faPause : faPlay}
                    className={cx('play-btn')}
                    onClick={handlePlayPause}
                />
                <span className={cx("mejs-currenttime")}>{currentTime}</span>
                <input
                    type="range"
                    min="0"
                    max="100"
                    step="1"
                    value={progress}
                    onChange={handleProgressChange}
                    className={cx('progress-bar')}
                />
                <span className={cx("mejs-currenttime")}>{currentTime}</span>
            </div>
            <div className={cx('volume-controls')}>
                <FontAwesomeIcon
                    icon={isMuted ? faVolumeMute : faVolumeUp}
                    className={cx('volume-btn')}
                    onClick={toggleMute}
                />
                <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    value={isMuted ? '0' : volume}
                    onChange={handleVolumeChange}
                    className={cx('volume-slider')}
                />
            </div>
        </div>
    );
}

export default AudioPlayer;
