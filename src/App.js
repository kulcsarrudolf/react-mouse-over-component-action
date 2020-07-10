import React, { Fragment } from "react";
import { useCallback, useState, useRef } from "react";
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";

import Typography from "@material-ui/core/Typography";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  paper: {
    marginTop: 10,
    padding: 20,
  },
  nav: {
    margin: 20,
    padding: 20,
    "& > *": {
      margin: 10,
    },
  },
  content: {
    marginTop: 160,
  },
});

export default function App() {
  const classes = useStyles();

  const [carListSectionRef, isCarListSectionHovered] = useHover();
  const [howToUseSectionRef, isHowToUseSectionHovered] = useHover();
  const [aboutSectionRef, isAboutHovered] = useHover();

  return (
    <Fragment>
      <AppBar position="fixed">
        <Paper className={classes.nav}>
          <Button
            variant="contained"
            color={isCarListSectionHovered ? "secondary" : "primary"}
            href="#contained-buttons"
          >
            Car List
          </Button>

          <Button
            variant="contained"
            color={isHowToUseSectionHovered ? "secondary" : "primary"}
            href="#contained-buttons"
          >
            How to use
          </Button>

          <Button
            variant="contained"
            color={isAboutHovered ? "secondary" : "primary"}
            href="#contained-buttons"
          >
            About
          </Button>
        </Paper>
      </AppBar>

      <div className={classes.content}>
        <div ref={carListSectionRef}>
          <CarList />
        </div>
        <div ref={howToUseSectionRef}>
          <HowToUse />
        </div>
        <div ref={aboutSectionRef}>
          <About />
        </div>
      </div>
    </Fragment>
  );
}

const CarList = () => {
  const classes = useStyles();

  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData("Eclair", 262, 16.0, 24, 6.0),
    createData("Cupcake", 305, 3.7, 67, 4.3),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
  ];

  return (
    <Fragment>
      <Paper className={classes.paper}>
        <Typography variant="h4" gutterBottom>
          Car List
        </Typography>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Dessert (100g serving)</TableCell>
                <TableCell align="right">Calories</TableCell>
                <TableCell align="right">Fat&nbsp;(g)</TableCell>
                <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                <TableCell align="right">Protein&nbsp;(g)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.calories}</TableCell>
                  <TableCell align="right">{row.fat}</TableCell>
                  <TableCell align="right">{row.carbs}</TableCell>
                  <TableCell align="right">{row.protein}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Fragment>
  );
};

const HowToUse = () => {
  const classes = useStyles();

  return (
    <Fragment>
      <Paper className={classes.paper}>
        <Typography variant="h4" gutterBottom>
          How to use?
        </Typography>
        <Typography variant="subtitle1">
          &bull; subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Quos blanditiis tenetur
        </Typography>
        <Typography variant="subtitle1">
          &bull; Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
          blanditiis tenetur
        </Typography>
        <Typography variant="subtitle1">
          &bull; subtitle1. Lorem ipsum do, consectetur adipisicing elit. Quos
          blanditiis tenetur
        </Typography>
        <Typography variant="subtitle1">
          &bull; subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Quos blanditiis tenetur
        </Typography>
        <Typography variant="subtitle1">
          &bull; subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Quos blanditiis tenetur
        </Typography>
        <Typography variant="subtitle1">
          &bull; subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Quos blanditiis tenetur
        </Typography>
      </Paper>
    </Fragment>
  );
};

const About = () => {
  const classes = useStyles();

  return (
    <Fragment>
      <Paper className={classes.paper}>
        <Typography variant="h4" gutterBottom>
          About
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          laoreet ut leo rhoncus pretium. In dapibus ex ut risus sollicitudin,
          non ornare elit volutpat. Curabitur euismod magna mollis fringilla
          tempor. Praesent augue eros, pellentesque ac ligula et, suscipit
          pharetra mauris. Donec ut rutrum est, nec lacinia libero. Donec rutrum
          viverra odio ut auctor. Pellentesque quis efficitur mi. Nulla vitae
          purus tincidunt, vestibulum ex id, venenatis elit. Duis suscipit in
          libero in consequat.
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Praesent viverra sit amet justo non gravida. Integer vel sodales
          tellus, vitae porta tortor. Phasellus eleifend, nulla congue iaculis
          finibus, nibh odio aliquet arcu, non faucibus ipsum metus sit amet
          diam. Morbi sit amet leo finibus tortor pharetra dictum. Vivamus ante
          velit, accumsan ultrices venenatis et, maximus quis nisl. Nunc
          porttitor, nisi vitae hendrerit efficitur, turpis nibh venenatis
          velit, at consectetur nisi nulla in mi. Nunc ac elit tempor,
          scelerisque elit at, luctus tellus. Sed et fermentum purus. Maecenas
          volutpat nulla leo, nec porta nibh venenatis quis. Cras eleifend elit
          sapien, et tempor magna pharetra sed. Aliquam velit metus, imperdiet
          nec magna quis, sodales semper enim. In iaculis velit a neque
          consectetur lobortis. Mauris interdum ultricies nisl in fringilla.
          Cras ut aliquet tellus.
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          laoreet ut leo rhoncus pretium. In dapibus ex ut risus sollicitudin,
          non ornare elit volutpat. Curabitur euismod magna mollis fringilla
          tempor. Praesent augu vefficitur mi. Nulla vitae purus tincidunt,
          vestibulum ex id, venenatis elit. Duis suscipit in libero in
          consequat.
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          laoreet ut leo rhoncus pretium. In dapibus ex ut risus sollicitudin,
          non ornare elit volutpat. Curabitur euismod magna mollis fringilla
          tempor. Praesent augu vefficitur mi. Nulla vitae purus tincidunt,
          vestibulum ex id, venenatis elit. Duis suscipit in libero in
          consequat.
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Nunc enim mauris, consequat ut suscipit sit amet, pellentesque ac
          ligula. Nunc et fermentum velit, quis sodales odio. Vivamus non
          viverra erat, at fermentum quam. Etiam et quam convallis, consectetur
          nulla non, eleifend dui. Nulla sodales aliquam aliquam. Sed molestie
          ex quis orci vestibulum rhoncus. Cras at ex ullamcorper, tincidunt
          quam vitae, aliquet orci. Ut pulvinar hendrerit ex, et elementum eros
          auctor et. Aenean vulputate vitae dui ac malesuada. Aenean cursus
          magna vitae orci elementum laoreet. Curabitur sagittis eget nisl id
          imperdiet. Pellentesque interdum hendrerit justo. Suspendisse erat
          nibh, finibus ac lacus ut, consequat semper magna. Pellentesque eu
          sagittis dui.
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas. Curabitur a interdum turpis, eget fermentum
          nisl. Interdum et malesuada fames ac ante ipsum primis in faucibus.
          Praesent non dignissim libero. Sed sit amet nibh vitae dolor viverra
          sagittis. Ut lacinia volutpat libero porta facilisis. Nulla facilisi.
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Nunc enim mauris, consequat ut suscipit sit amet, pellentesque ac
          ligula. Nunc et fermentum velit, quis sodales odio. Vivamus non
          viverra erat, at fermentum quam. Etiam et quam convallis, consectetur
          nulla non, eleifend dui. Nulla sodales aliquam aliquam. Sed molestie
          ex quis orci vestibulum rhoncus. Cras at ex ullamcorper, tincidunt
          quam vitae, aliquet orci. Ut pulvinar hendrerit ex, et elementum eros
          auctor et. Aenean vulputate vitae dui ac malesuada. Aenean cursus
          magna vitae orci elementum laoreet. Curabitur sagittis eget nisl id
          imperdiet. Pellentesque interdum hendrerit justo. Suspendisse erat
          nibh, finibus ac lacus ut, consequat semper magna. Pellentesque eu
          sagittis dui.
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Nunc enim mauris, consequat ut suscipit sit amet, pellentesque ac
          ligula. Nunc et fermentum velit, quis sodales odio. Vivamus non
          viverra erat, at fermentum quam. Etiam et quam convallis, consectetur
          nulla non, eleifend dui. Nulla sodales aliquam aliquam. Sed molestie
          ex quis orci vestibulum rhoncus. Cras at ex ullamcorper, tincidunt
          quam vitae, aliquet orci. Ut pulvinar hendrerit ex, et elementum eros
          auctor et. Aenean vulputate vitae dui ac malesuada. Aenean cursus
          magna vitae orci elementum laoreet. Curabitur sagittis eget nisl id
          imperdiet. Pellentesque interdum hendrerit justo. Suspendisse erat
          nibh, finibus ac lacus ut, consequat semper magna. Pellentesque eu
          sagittis dui.
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Nunc enim mauris, consequat ut suscipit sit amet, pellentesque ac
          ligula. Nunc et fermentum velit, quis sodales odio. Vivamus non
          viverra erat, at fermentum quam. Etiam et quam convallis, consectetur
          nulla non, eleifend dui. Nulla sodales aliquam aliquam. Sed molestie
          ex quis orci vestibulum rhoncus. Cras at ex ullamcorper, tincidunt
          quam vitae, aliquet orci. Ut pulvinar hendrerit ex, et elementum eros
          auctor et. Aenean vulputate vitae dui ac malesuada. Aenean cursus
          magna vitae orci elementum laoreet. Curabitur sagittis eget nisl id
          imperdiet. Pellentesque interdum hendrerit justo. Suspendisse erat
          nibh, finibus ac lacus ut, consequat semper magna. Pellentesque eu
          sagittis dui.
        </Typography>
      </Paper>
    </Fragment>
  );
};

function useHover() {
  const [value, setValue] = useState(false);

  const handleMouseOver = useCallback(() => setValue(true), []);
  const handleMouseOut = useCallback(() => setValue(false), []);

  const ref = useRef();

  const callbackRef = useCallback(
    (node) => {
      if (ref.current) {
        ref.current.removeEventListener("mouseover", handleMouseOver);
        ref.current.removeEventListener("mouseout", handleMouseOut);
      }

      ref.current = node;

      if (ref.current) {
        ref.current.addEventListener("mouseover", handleMouseOver);
        ref.current.addEventListener("mouseout", handleMouseOut);
      }
    },
    [handleMouseOver, handleMouseOut]
  );

  return [callbackRef, value];
}
