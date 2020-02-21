import React from "react"
import { useSpring, animated, config } from "react-spring"

export default function Logo() {
  const spring = useSpring({
    config: config.slow,
    x: 500,
    from: { x: 0 },
    delay:500
  })
  const path = [
    "m33,21.3l17.1,29.6l-48.8,0l-1.3,2.3l54.1,0l-19.7,-34.2l-1.4,2.3z",
    "m30.7,0l-27.1,46.8l39.6,0l-1.4,-2.3l-34.1,0l24.4,-42.2l-1.4,-2.3z",
    "m14.7,40.5l2.6,0l17.1,-29.5l24.3,42.2l2.8,0l-27.2,-46.9l-19.6,34.2z",
  ]
  return (
    <svg
      width="60.99999999999999"
      height="55"
      xmlns="http://www.w3.org/2000/svg"
    >

        <path d={path[0]} fill="none" stroke="#d69e5a" stroke-width="3" />
        <animated.path d={path[0]} strokeDashoffset={spring.x} fill="none" strokeDasharray="500"  stroke="white"  stroke-width="3"/>
        <path d={path[1]} fill="none" stroke="#d69e5a" stroke-width="3" />
        <animated.path d={path[1]} strokeDashoffset={spring.x} fill="none" strokeDasharray="500"  stroke="white"  stroke-width="3"/>
        <path d={path[2]} fill="none" stroke="#d69e5a" stroke-width="3" />
        <animated.path d={path[2]} strokeDashoffset={spring.x} fill="none" strokeDasharray="500"  stroke="white"  stroke-width="3"/>
    </svg>
  )
}
