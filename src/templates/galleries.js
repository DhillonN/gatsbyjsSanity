import React, { useState } from "react"
import { graphql } from "gatsby"
import { buildImageObj } from "../lib/helpers"
import { imageUrlFor } from "../lib/image-url"
import { makeStyles } from "@material-ui/styles"
import Masonry from "react-masonry-component"
import Layout from "../components/pagelayout"
import { Typography } from "@material-ui/core"
import Parallax from '../components/Parallax/Parallax'
const useStyles = makeStyles({
  grid: {
    padding: "5px",
    width: "100%",
    "@media (min-width: 576px)": {
      width: "100%",
    },
    "@media (min-width: 768px)": {
      width: "50%",
    },
    "@media (min-width: 992px)": {
      width: "33%",
    },
    "@media (min-width: 1200px)": {
      width: "25%",
    },

    "& img": {
      width: "100% ",
      height: "auto",
      objectFit: "cover",
      backgroundClip: "padding-box",
    },
  },
  masonry: {
    height: "100%",
  },
})
export default function PortraitGallery({ data }) {
  const classes = useStyles()
  const bgImage=`url(${imageUrlFor(buildImageObj(data.sanityGallery._rawImages[0])).width(1980).url()})`
  return (
    <Layout>
      <Parallax image={bgImage}>
      <Typography variant="h1">{data.sanityGallery.title}</Typography
      ></Parallax>
      <Masonry>
        {data.sanityGallery._rawImages.map(image => (
          <div className={classes.grid}>
            <img
              src={imageUrlFor(buildImageObj(image))
                .width(500)
                .url()}
            />
          </div>
        ))}
      </Masonry>
    </Layout>
  )
}

export const query = graphql`
query($id:String!){
    sanityGallery(id: {eq: $id}) {
      id
      title
      description
      _rawImages(resolveReferences: {maxDepth: 10})
    }
  }
`
