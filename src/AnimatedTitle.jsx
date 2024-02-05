import React, { memo } from 'react';
import { useSpring, animated } from 'react-spring';

const AnimatedTitle = memo(({ text }) => {

      // React spring animation for the title bar text
      const spring = useSpring({
        from: { transform: 'translateX(-115%)' }, // start from the left
        to: { transform: 'translateX(110%)' }, // go to the right
        reset: true,
        loop: true,
        config: { duration: 10000 },
      });

  return (
    <animated.div style={spring} className="title-text">
      {text}
    </animated.div>
  );
});

export default AnimatedTitle;
