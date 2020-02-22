import React from "react"
import Parallax from "../Parallax/Parallax"
import { buildImageObj } from "../../lib/helpers"
import { imageUrlFor } from "../../lib/image-url"
import { makeStyles, Typography, Grid } from "@material-ui/core"
import BlockContent from "@sanity/block-content-to-react"
import { Cta } from "../Layout"
const useStyles = makeStyles({
  grid: {
    height: "100%",
    display:"grid",
    gridTemplateRows: "50% 1fr 1fr",
    gridTemplateAreas:`"heading""tagline""buttons"`,
    justifySelf:"center",
    alignSelf:"center"
  },
  gridHeader:{
    gridArea:"heading",
    alignSelf:"center",
    justifySelf:"center",
  },

  gridTagline: {
    gridArea:"tagline",
    width: "100%",
    background: "rgb(214,158,90)",
    background:
      "linear-gradient(90deg, rgba(214,158,90,0.28) 0%, rgba(214,158,90,1) 50%, rgba(214,158,90,0.28) 100%)",
    textAlign: "center",
    "& p": {
      fontWeight: "bold",
      fontSize: "2.5rem",
    },
  },
  gridButtons:{
    gridArea:"buttons"
  }
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
      <div className={classes.grid}>
        <Typography className={classes.gridHeader} variant="h1" color="textPrimary">
          {data.heading}
        </Typography>

        <BlockContent className={classes.gridTagline} blocks={data.tagline} />

        <div>
          {data.ctas
            ? data.ctas.map(cta => (
                <div>
                  {cta.route ? (
                    <Cta link={cta.route.slug.current} title={cta.title} />
                  ) : (
                    <Cta link={cta.link} title={cta.title} />
                  )}
                </div>
              ))
            : ""}
        </div>
      </div>
    </Parallax>
  )
}
