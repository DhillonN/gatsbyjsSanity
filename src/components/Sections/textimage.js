import React from "react"
import { Section } from "../Layout"
import { Typography, Grid } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"
import { buildImageObj } from "../../lib/helpers"
import { imageUrlFor } from "../../lib/image-url"
import BlockContent from "@sanity/block-content-to-react"
import classNames from "classnames"
import { Cta } from "../Layout"
import Parallax from "../Parallax/Parallax"
const _=require('lodash')
const serializers = {
  types: {
    code: props => (
      <pre data-language={props.node.language}>
        <code>{props.node.code}</code>
      </pre>
    ),
    span: props => (
      <>
        <Typography variant="h1">{props.children}</Typography>
      </>
    ),
  },
  marks: {
    color: props => <span style={{ color: props.mark.hex }}>{props.children}</span>,
    span: props => (
      <>
        <Typography variant="h1">{props.children}</Typography>
      </>
    ),
  },
}
const useStyles = makeStyles(theme => ({
  gridContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(2,1fr)",
    gridTemplateAreas: `"text image"`,
  },
  gridContainerFlip: {
    display: "grid",
    gridTemplateColumns: "repeat(2,1fr)",
    gridTemplateAreas: `"image text"`,
  },
  textGrid: {
    gridArea: "text",
    display: "grid",
    gridTemplateColumns: "1fr",
    gridTemplateRows: "max-content max-content auto",
    gridTemplateAreas: '"header" "content" "button"',
  },
  itemImage: {
    gridArea: "image",
    justifySelf: "stretch",
    alignSelf: "stretch",
    overflow: "hidden",
    "& img": {
      gridArea: "photo",
      width: "100%",
      objectFit: "cover",
    },
  },
  itemText: {
    gridArea: "content",
    fontSize: "1.25rem",
    lineBreak: "auto",
    lineHeight: "155%",
    fontWeight: "300",
    padding: "5%",
    textAlign: "justify",
    "@media(min-width:1024px)": {
      textAlign: "justify",
      fontSize: "1.5rem",
      fontWeight: "normal",
      color: "#6b6868",
    },
  },
  itemHeader: {
    gridArea: "header",
  },
  itemButton: {
    gridArea: "content",
    alignSelf: "end",
    justifySelf: "center",
  },
  paragraph: {
    fontSize: "1.25rem",
    lineBreak: "auto",
    lineHeight: "155%",
    fontWeight: "300",
    paddingTop: "10px",
    textAlign: "justify",
    "@media(min-width:1024px)": {
      textAlign: "justify",
      fontSize: "1.5rem",
      fontWeight: "normal",
      color: "#6b6868",
    },
  },
  padding: {
    padding: "5% 0",
    position: "relative",
    backgroundColor: theme.palette.background.default,
  },
  parallaxContainer:{
    zIndex:"99"
  }
}))
export default function ImageText({ data }) {
  console.log(data)

  const image = imageUrlFor(buildImageObj(data.image)).url()
  const bgImage=`url(${image})`
  const classes = useStyles()
  return (
    <div className={classes.padding}>
      {!(_.includes(data.imagePosition,"para"))?
      <div
        className={
          data.imagePosition == "left"
            ? classes.gridContainer
            : classes.gridContainerFlip
        }
      >
        <div className={classes.itemImage}>
          <img src={image} alt={data.image.alt}></img>
        </div>
        <div className={classes.textGrid}>
          <div className={classes.itemHeader}>
            <Typography variant="h2">{data.heading}</Typography>
            <Typography variant="h4" align="center">
              {data.label}
            </Typography>
          </div>
          <BlockContent
            className={classes.itemText}
            blocks={data.text}
            serializers={serializers}
          />
          <div className={classes.itemButton}>
            <Cta title={data.cta.title} link={data.cta.route.slug.current} />
          </div>
        </div>
      </div>:

      <Parallax image={bgImage}>
        <BlockContent blocks={data.text}/>
      </Parallax>

      }
    </div>
  )
}
