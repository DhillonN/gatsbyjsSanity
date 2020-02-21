const parallaxStyle = {
  parallax: {
    height: "100vh",
    overflow: "hidden",
    position: "relative",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    backgroundRepeat:"no-repeat",
    margin: "0",
    paddingTop: "10vh",
    border: "0",
    display: "flex",
    flexFlow:"column",
    justifyContent:"space-between",
    alignItems:"center",

  },
  filter: {
    "&:before": {
      background: "rgba(0, 0, 0, 0.5)"
    },
    "&:after,&:before": {
      position: "absolute",
      zIndex: "1",
      width: "100%",
      height: "100%",
      display: "block",
      left: "0",
      top: "0",
      content: "''"
    }
  },
  small: {
    height: "380px"
  },
  spacer:{
height:"1px",
padding:"1px"
  }
};

export default parallaxStyle;
