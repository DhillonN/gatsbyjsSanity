import React from "react"
import { graphql } from "gatsby"
import HeroSection from '../components/Sections/hero'
import Projects from '../components/Sections/projects'
import ImageText from '../components/Sections/textimage'
import {Section} from '../components/Layout'
import {Typography} from '@material-ui/core'
import Layout from '../components/pagelayout'

const Index = data => {

  function LayContent(sections) {
      console.log(sections)
      switch(sections._type){
       case 'hero':{
          return <HeroSection data={sections}/>
        }
        case 'imageSection':{
          return <ImageText data={sections}/>
        }
        case 'projects':{
          return <Projects data={sections}></Projects>
        }

      }

  }

  return (


      <Layout>
        {data.data.sanityPage._rawContent.map(sections=>(
         <div>{LayContent(sections)}</div>
        ))}
      </Layout>
  )
}
export default Index
export const query = graphql`
  query($id:String!){
    sanityPage(id: { eq: $id }) {
      description
      title
      _rawContent(resolveReferences: { maxDepth: 10 })
    }
  }
`
