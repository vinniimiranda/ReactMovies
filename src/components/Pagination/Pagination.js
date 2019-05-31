import React from "react";
import { Button, Grid, Icon, Card } from "@material-ui/core/";
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
const theme = createMuiTheme({
  palette: {
    primary: { main:'#7c4dff' }, // Purple and green play nicely together.
    secondary: { main: '#11cb5f' }, // This is just green.A700 as hex.
  },
});
const Pagination = props => {
  
  let [pages, setPages] = React.useState([1, 2, 3, 4, 5, 6]);
  const next = () => {  
    if (pages[pages.length - 1] === props.currentPage) {
      let newPages = pages.map(page => page + 1);
      setPages((pages = newPages));
    }
    props.goTo(props.currentPage + 1);
  };
  const back = () => {
    if (pages[0] === props.currentPage) {
      let newPages = pages.map(page => page - 1);
      setPages((pages = newPages));
    }
    props.goTo(props.currentPage - 1);
  };

  return (
    <ThemeProvider theme={theme}>
    <Grid item xs={12}>
      <Card style={{ borderRadius: "1rem" }}>
        <Grid container style={{ margin: 10 }}>
          <Grid item xs={1} sm={2} md={2} />
          <Grid item xs={2} sm={1} md={1}>
            <Button
              
              onClick={() => back()}
              color="primary"
              variant="outlined"
              disabled={props.currentPage <= 1}
            >
              <Icon>keyboard_arrow_left </Icon>
            </Button>
          </Grid>
          {pages.map((page, i) => {
            return (
              <Grid item xs={2} sm={1} md={1}>
                <Button
                  
                  onClick={() => props.goTo(page)}
                  color="primary"
                  variant={
                    page === props.currentPage ? "contained" : "outlined"
                  }
                >
                  {page}
                </Button>
              </Grid>
            );
          })}
          <Grid item xs={1}>
            <Button color="primary"  onClick={() => next()} variant="outlined">
              <Icon>keyboard_arrow_right</Icon>
            </Button>
          </Grid>
          <Grid item xs={2} />
        </Grid>
      </Card>
    </Grid>
    </ThemeProvider>
  );
};

export default Pagination;
