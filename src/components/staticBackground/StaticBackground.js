import React from 'react';

function StaticBackground() {
    return (
        <div className="background-video">
            <video autoPlay loop muted>
                <source src="/videos/basic.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
}

export default StaticBackground;
