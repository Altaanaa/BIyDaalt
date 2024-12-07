function createSnowflakes() {
            // Create a snowflake
            function createSnowflake() {
                const snowflake = document.createElement('div');
                snowflake.classList.add('snowflake');
                
                // Random size
                const size = Math.random() * 4 + 2;
                snowflake.style.width = `${size}px`;
                snowflake.style.height = `${size}px`;
                
                // Random horizontal position
                const startX = Math.random() * window.innerWidth;
                snowflake.style.left = `${startX}px`;
                snowflake.style.top = '-10px';
                
                // Random fall speed and opacity
                const fallDuration = Math.random() * 10 + 5;
                const opacity = Math.random() * 0.7 + 0.3;
                snowflake.style.opacity = opacity;
                
                // Animate the snowflake
                snowflake.animate([
                    { transform: 'translateY(0px) translateX(0px)' },
                    { 
                        transform: `translateY(${window.innerHeight + 10}px) 
                                    translateX(${Math.random() * 200 - 100}px)`
                    }
                ], {
                    duration: fallDuration * 1000,
                    easing: 'linear',
                    fill: 'forwards'
                });
                
                // Add to body and remove when animation ends
                document.body.appendChild(snowflake);
                setTimeout(() => {
                    document.body.removeChild(snowflake);
                }, fallDuration * 1000);
            }
            
            // Create multiple snowflakes
            for (let i = 0; i < 100; i++) {
                setTimeout(createSnowflake, Math.random() * 5000);
            }
        }

        // Start snowfall when page loads
        window.addEventListener('load', createSnowflakes);
        
        // Continuously generate snowflakes
        setInterval(createSnowflakes, 10000);