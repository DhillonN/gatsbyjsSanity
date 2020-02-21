import React from "react"
import Parallax from "../Parallax/Parallax"
import { buildImageObj } from "../../lib/helpers"
import { imageUrlFor } from "../../lib/image-url"
import { makeStyles, Typography, Grid } from "@material-ui/core"
import BlockContent from "@sanity/block-content-to-react"
import { Cta } from "../Layout"
const useStyles = makeStyles({
  grid: {
    height:'100%'
  },
  heroGrid: {
    width: "100%",
    background: 'rgb(214,158,90)',
    background: "linear-gradient(90deg, rgba(214,158,90,0.28) 0%, rgba(214,158,90,1) 50%, rgba(214,158,90,0.28) 100%)",
    textAlign: "center",
    "& p": {
      fontWeight: "bold",
      fontSize: "2.5rem",
    },
  },
})
export default function Hero({ data }) {
  const bgImage =
    "url(" +
    imageUrlFor(buildImageObj(data.backgroundImage))
      .width(1200)
      .url() +
    ")"
  const classes = useStyles()
  return (
    <Parallax image={bgImage}>
      <Grid
        container
        justify="center"
        alignItems="center"
        direction="column"
        alignContent='center'
        wrap="nowrap"
        spacing={5}
        className={classes.grid}
      >
        <Grid item className={classes.heroGrid}>
          <Typography variant="h1" color="textPrimary">
            {data.heading}
          </Typography>
          <BlockContent blocks={data.tagline} />
        </Grid>
        <Grid item>
          <Grid elevation={6} container direction="row" wrap="nowrap" spacing={5}>
            {data.ctas?data.ctas.map(cta => (
              <Grid item>
                {cta.route ? (
                  <Cta link={cta.route.slug.current} title={cta.title} />
                ) : (
                  <Cta link={cta.link} title={cta.title} />
                )}
              </Grid>
            )):''}
          </Grid>
        </Grid>
      </Grid>
    </Parallax>
  )
}
