import React from 'react'
import {AppBar, Typography} from '@material-ui/core'

export default class extends React.Component{
render(){
    return(
        <>
        <Typography variant='h6' color='secondary' position="fixed" style={{bottom:0,top:'auto'}}>
            This is where footer Will Go
        </Typography>
        </>
    )
}
}
