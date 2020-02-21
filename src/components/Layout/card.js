import React from "react"
import { buildImageObj } from "../../lib/helpers"
import { imageUrlFor } from "../../lib/image-url"
import { Card, CardHeader, CardMedia } from "@material-ui/core"
import {makeStyles} from '@material-ui/styles'
const useStyles=makeStyles({
  card:{
    height:'90vh',
    width:'100%',
    '@media(min-width:1024px)':{
      width:'30vw',
      height:'30vw'
    }
  },
  cardHeader:{
    textAlign:'center'
  }
})
export default function AthCard({card}) {
    console.log(card)
    const classes=useStyles();
    const image =

    imageUrlFor(buildImageObj(card.image))
      .width(1200)
      .url()

  return (
    <Card elevation={5} className={classes.card}>
      <CardHeader className={classes.cardHeader} title={card.heading} />
      <CardMedia
        component="img"
        alt={card.image.alt}
        height="100%"
        image={image}
        title="Contemplative Reptile"
      />
    </Card>
  )
}
