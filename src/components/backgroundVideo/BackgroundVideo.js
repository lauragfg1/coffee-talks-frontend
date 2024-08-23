import React, { useState, useEffect } from 'react';
import './BackgroundVideo.css';

function BackgroundVideo({ topicId }) {
    const [videoUrl, setVideoUrl] = useState('');

    useEffect(() => {
        if (!topicId) return;

        const fetchVideoUrl = async () => {
            try {
                const response = await fetch(`http://localhost:8080/topic/getVideoUrlByTopic/${topicId}`);
                if (response.ok) {
                    const url = await response.text();
                    setVideoUrl(url);
                }
            } catch (error) {
                console.error('Fetch error:', error);
            }
        };

        fetchVideoUrl();
    }, [topicId]);

    return (
        <div className="background-video">
            {videoUrl ? (
                <video autoPlay loop muted>
                    <source src={videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            ) : (
                <p>Loading video...</p>
            )}
        </div>
    );
}

export default BackgroundVideo;
