import React from 'react'

import {makeStyles,useTheme} from '@material-ui/core/styles'
import {Paper} from '@material-ui/core'


export default function Section(props){
    const theme=useTheme()
    const useStyles=makeStyles({
        section:{
            minHeight:'100vh',
            width:'100%',
            marginTop:'2.5em',
            marginBottom:'2.5em',
            padding:'5px',
            position:'relative',
            backgroundColor:theme.palette.background.default
        }
    })
    const classes=useStyles();


return <Paper elevation={1} component='section' className={classes.section}>{props.children}</Paper>
}