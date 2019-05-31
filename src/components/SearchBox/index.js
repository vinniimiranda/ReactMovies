import React from "react";
import {
  Card,
  CardActionArea,
  TextField,
  Grid,
  Select,
  InputLabel,
  MenuItem,
  FormControl,
  Input
} from "@material-ui/core";
export default props => {
  const [values, setValues] = React.useState([{ id: 1, type: "movie" }]);

  return (
    <div>
      <Grid container spacing={1} style={{ marginBottom: 15, marginTop: 15 }}>
        <Grid item  xs={12} sm={12} md={6}>
          <Card>
            <CardActionArea>
              <FormControl
                fullWidth
                style={{ margin: 15, width: "95%", textAlign: "left" }}
              >
                <InputLabel htmlFor="age-helper">Tipo</InputLabel>
                <Select
                  value={props.typeContent}
                  onChange={event => props.selectType(event.target.value)}
                  input={<Input name="age" id="age-helper" />}
                >
                  <MenuItem value="movie">Filmes</MenuItem>
                  <MenuItem value="tv">Séries</MenuItem>
                </Select>
              </FormControl>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item  xs={12} sm={12} md={6}>
          <Card>
            <CardActionArea>
              <TextField
                style={{ margin: 15, width: "95%" }}
                id="filled-name"
                label="Digite a pesquisa.."
                margin="normal"
                onKeyUp={event => props.setSearch(event.target.value)}
              />
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};
