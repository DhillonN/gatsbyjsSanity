import React from "react"
import { Link } from "gatsby"
import {useSpring, animated,interpolate, config} from 'react-spring'
import {SvgInline} from '../../lib/helpers'
import { makeStyles } from "@material-ui/core/styles"
import Logo from './logo'
import {
  AppBar,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Hidden,
  Typography,
} from "@material-ui/core"
import MenuIcon from "@material-ui/icons/Menu"
const useStyles = makeStyles(theme => ({
  list: {
    fontSize: "14px",
    margin: 0,
    paddingLeft: "0",
    listStyle: "none",
    paddingTop: "0",
    paddingBottom: "0",
    color: "inherit",
  },
  fullList: {
    width: "auto",
  },
  listItem: {
    float: "left",
    color: "inherit",
    position: "relative",
    display: "block",
    width: "auto",
    margin: "0",
    padding: "0",
    overflow: "hidden",
    "&:hover": {
      "& span": {
        transform: "translate(0,0)",
      },
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      "&:after": {
        width: "calc(100% - 30px)",
        content: '""',
        display: "block",
        height: "1px",
        marginLeft: "15px",
        backgroundColor: "#e5e5e5",
      },
    },
  },
  listItemText: {
    padding: "0 !important",
  },
  navLink: {
    color: "#343434",
    position: "relative",
    padding: "0.9375rem",
    fontWeight: "400",
    fontSize: "12px",
    textTransform: "uppercase",
    borderRadius: "3px",
    lineHeight: "20px",
    textDecoration: "none",
    margin: "0px",
    display: "inline-flex",
    "&::before,&::after": {
      boxSizing: "inherit",
      content: "",
      position: "absolute",
      width: "100%",
      height: "100%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "calc(100% - 30px)",
      marginLeft: "15px",
      marginBottom: "8px",
      marginTop: "8px",
      textAlign: "left",
      "& > span:first-child": {
        justifyContent: "flex-start",
      },
    },
  },
  navLinkActive: {
    color: "inherit",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
  },
  underline: {
    border: "2px solid",
    borderColor: theme.palette.primary.main,
    width: "95%",
    display: "none",
    transform: "translate(-100%,0)",
    position: "absolute",
    top: 35,

    "@media (min-width: 992px)": {
      display: "block",
    },
  },
  menuGrid: {
    display: "grid",
    gridTemplateColumns: "5vw 1fr 20vw",
    gridTemplateAreas: `"logo brand menu"`,
  },
  logo: {
    gridArea: "logo",
    alignSelf: "center",
    justifySelf: "start",
  },
  brand: {
    gridArea: "brand",
    alignSelf: "center",
    justifySelf: "center",
    textAlign:'center',
    gridColumn:"1/4",
    zIndex:"9"
  },
  menu: {
    gridArea: "menu",
    alignSelf: "center",
    justifySelf: "end",
    zIndex:"10"
  },
  title:{
    fontSize:'1.05rem',
    padding:"0 5%",
    '@media (min-width: 768px)':{
      fontSize:'2rem',
      padding:0
    },
    '@media (min-width: 1100px)':{
      fontSize:'2.5rem',
      padding:0
    }
  }
}))
export default function Menu({ items }) {
  const classes = useStyles()
  const spring = useSpring({config:config.stiff, x:0, from: {x:100}})
  const [state, setState] = React.useState({
    left: false,
    right: false,
  })
  const toggleDrawer = (side, open) => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return
    }
    setState({ ...state, [side]: open })
  }
  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        {items.mainNavigation.map(item => (
          <ListItem button key={item.page.title}>
            <ListItemText primary={item.page.title} />
          </ListItem>
        ))}
      </List>
    </div>
  )
  const fullList = side => (

    <List className={classes.menu}>
      {items.mainNavigation.map(item => (
        <ListItem className={classes.listItem} key={item.page.title}><animated.div style={{transform: spring.x.interpolate(x=>`translateY(${x}%)`) }}>
          <Link to={item.slug.current} className={classes.navLink}>
            {item.page.title}
          </Link></animated.div>
          <span className={classes.underline}></span>
        </ListItem>
      ))}
    </List>
  )

  return (
    <>
      <AppBar color="secondary">
        <Toolbar className={classes.menuGrid}>
          <div className={classes.logo}>
            <Logo/>
          </div>
          <div className={classes.brand}>
            <Typography variant="h2" className={classes.title}>{items.title}</Typography>
          </div>
          <Hidden mdUp>
            <MenuIcon
              className={classes.menu}
              onClick={toggleDrawer("right", true)}
            />
          </Hidden>
          <Hidden smDown>{fullList()}</Hidden>
        </Toolbar>
        <Drawer
          anchor="right"
          open={state.left}
          onClose={toggleDrawer("right", false)}
        >
          {sideList("right")}
        </Drawer>
      </AppBar>
    </>
  )
}
