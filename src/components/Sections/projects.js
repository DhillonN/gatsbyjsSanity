import React from 'react'
import { Typography,Grid } from '@material-ui/core'
import {Section,AthCard} from '../Layout'
import { buildImageObj } from "../../lib/helpers"
import { imageUrlFor } from "../../lib/image-url"
import {makeStyles} from '@material-ui/styles'

const useStyles=makeStyles({
    header:{
        padding:'10px',
        marginBottom:'1%'
    }

})

const Projects=({data})=>{
const classes=useStyles();
    return(
        <Section>
        <Typography className={classes.header} variant="h2">{data.heading}</Typography>
        <Grid container justify='center' spacing={3}>
        {data.cards.map(card=>(
          <Grid item>  <AthCard card={card} /> </Grid>


        ))}
</Grid>
        </Section>
    )
}
export default Projects