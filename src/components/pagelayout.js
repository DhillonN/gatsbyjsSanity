import React from "react"
import {useMenuData} from '../lib/menudata'
import { Footer, Section } from "./Layout"
import Menu from "./Layout/header"

import {
  MuiThemeProvider,
  createMuiTheme,
  Paper,
  CssBaseline,
  responsiveFontSizes,
  makeStyles,
} from "@material-ui/core"
import { orange } from "@material-ui/core/colors"

const headerStyle = {
  fontFamily: ["Roboto"],
  fontWeight: 700,
  textAlign: "center",
  margin: "0rem",
}
const useStyles = makeStyles(theme => ({
  paper: {
    paddingTop: "0",
  },
  bodytext: {
    textAlign: "left",
    paddingLeft: "10%",
    paddingRight: "10%",
  },
}))
export default function PageLayout (props,{ data }) {
  const classes = useStyles()
  const menuData=useMenuData()

  const theme = createMuiTheme({
    palette: {
      type: "light",
      primary: {
        main: "#d69e5a",
        light: "#d69e5a",
        white: "#fafafa"
      },
      secondary: {
        main: "#fafafa"
      },
      background: {
        paper: "#fafafa",
      },
    },
    typography: {
      fontFamily: ["Lato"],
      h1: headerStyle,
      h2: headerStyle,
    },
  })

  return (
    <MuiThemeProvider theme={responsiveFontSizes(theme)}>
      <CssBaseline />
      <Menu items={menuData}/>
      <Paper className={classes.paper} elevation={3}>
        <Section>
      {props.children}</Section>
      </Paper>
      <Footer />
    </MuiThemeProvider>
  )
}
