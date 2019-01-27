import React from 'react';
import promaster from '../../images/img1.jpg';
import './index.css';

const HomePage = () => {
    return (
        <div id="home">
            <img src={promaster} />
            <h1>Welcome to Promaster's Gallery</h1>
            <p>
                Look in the mirror and speak to yourself. Realize that you are who you see. This can help in small ways to know how others see you. However, the real way to find out how others perceive you is to ask those you trust to tell you. Ask them about how they see your decision-making, your presentation of self to the world, your dress sense, your strength in the face of adversity, and so forth. Listen without judgment and learn about the image you're projecting to others. Then consider what you'd like to keep and what you'd like to change about that perception.
            </p>
        </div>
        );
        };

export default HomePage;
