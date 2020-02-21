import React, { useEffect, useRef } from "react";
import { animated, useSpring } from "react-spring";

// You can use this `calc` method to increase the impact
// of the effect by playing around with the values and units.
const calc = o => `translate3d(0px,${o * 0.1}px,0px)`;

const Parallax = props => {
  const ref = useRef();
  const [{ offset }, set] = useSpring(() => ({ offset: 0 }));

  const handleScroll = () => {
    const posY = ref.current.getBoundingClientRect().top;
    const offset = window.pageYOffset - posY;
    set({ offset });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <div
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        perspective: "50px",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundImage: props.image
      }}
      ref={ref}
    >
      <animated.div
        style={{
          position: "absolute",
          width: "100vw",
          height: "100%",
          transform: offset.interpolate(calc)
        }}
      >
        {props.children}
      </animated.div>
    </div>
  );
};

export default Parallax;
