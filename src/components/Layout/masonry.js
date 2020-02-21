import React, { useEffect, useRef, useState } from 'react'

import {makeStyles} from '@material-ui/styles'
import { propTypes } from '@sanity/block-content-to-react'

const fillCols = (children, cols) => {
  children.forEach((child, i) => cols[i % cols.length].push(child))
}

export default function Masonry({ children, gap, minWidth = 500, ...rest }) {

    function useEventListener(eventName, handler, element = window){
        // Create a ref that stores handler
        const savedHandler = useRef();

        // Update ref.current value if handler changes.
        // This allows our effect below to always get latest handler ...
        // ... without us needing to pass it in effect deps array ...
        // ... and potentially cause effect to re-run every render.
        useEffect(() => {
          savedHandler.current = handler;
        }, [handler]);

        useEffect(
          () => {
            // Make sure element supports addEventListener
            // On
            const isSupported = element && element.addEventListener;
            if (!isSupported) return;

            // Create event listener that calls handler function stored in ref
            const eventListener = event => savedHandler.current(event);

            // Add event listener
            element.addEventListener(eventName, eventListener);

            // Remove event listener on cleanup
            return () => {
              element.removeEventListener(eventName, eventListener);
            };
          },
          [eventName, element] // Re-run if eventName or element changes
        );
      };



    const useStyles=makeStyles({
        masonryDiv:{
            display:'grid',
            gridAutoFlow:'column',
            gridGap:gap||'1em',
        },
        col:{
            display:'grid',
            gridGap:gap||'1em',
            gridAutoRows:'max-content'
        }
    })
    const classes=useStyles();
  const ref = useRef()
  const [numCols, setNumCols] = useState(3)
  const cols = [...Array(numCols)].map(() => [])
  fillCols(children, cols)

  const resizeHandler = () =>
    setNumCols(Math.ceil(ref.current.offsetWidth / minWidth))
  useEffect(resizeHandler, [])
  useEventListener(`resize`, resizeHandler)


  return (
    <div ref={ref} className={classes.masonryDiv} {...rest}>
      {[...Array(numCols)].map((_, index) => (
        <div className={classes.col} key={index} gap={gap}>
          {cols[index]}
        </div>
      ))}
    </div>
  )
}