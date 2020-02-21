import React from "react"
import { Button } from "@material-ui/core"
import { useSpring, animated, config } from "react-spring"

export default function Cta({ title, link, elevation, variant }) {
 const [{x},set]=useSpring(()=>({
     config:config.wobbly,
     x:1
 }
 ))
  return ( <animated.div
        style={{
          transform: x.interpolate(v => `scale(${v})`),
        }}
      >
    <Button
      elevation={elevation ? elevation : 5}
      size="large"
      variant={variant ? variant : "contained"}
      color="primary"
      href={link}
      onMouseEnter={()=>set({x:1.5})}
      onMouseLeave={()=>set({x:1})}
    >

        {title}</Button>
      </animated.div>

  )
}
