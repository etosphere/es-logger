import React from "react";
import {
  Input,
  InputLabel,
  MenuItem,
  FormControl,
  ListItemText,
  Select,
  Checkbox,
  Chip,
  TextField,
  Button,
  IconButton,
  withStyles, List, ListItem, ListItemIcon, Grid
} from "@material-ui/core";
import {Check, Palette} from "@material-ui/icons";

const styles = (theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 360
  },
  chips: {
    display: "flex",
    flexWrap: "wrap"
  },
  chip: {
    marginLeft: 2,
    marginRight: 2,
    maxWidth: 100,
    overflow: 'hidden',
    label: {
      overflow: 'hidden',
    }
  },
  noLabel: {
    marginTop: theme.spacing(3)
  }
});

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  }
};

class RoleConfigurator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      kpList: [],
      dicerList: [],
      roleTable: this.props.roleTable,
    }

    this.handleKpChange = this.handleKpChange.bind(this);
    this.handleDicerChange = this.handleDicerChange.bind(this);
    this.handleRoleNameChange = this.handleRoleNameChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleKpChange(event) {
    let tempRoleTable = this.state.roleTable;
    this.state.kpList.forEach((role) => {
      tempRoleTable.setType(role, 'kp');
    });
    this.setState({
      kpList: event.target.value,
      roleTable: tempRoleTable
    });
  }

  handleDicerChange(event) {
    let tempRoleTable = this.state.roleTable;
    this.state.dicerList.forEach((role) => {
      tempRoleTable.setType(role, 'dicer');
    });
    this.setState({
      dicerList: event.target.value,
      roleTable: tempRoleTable
    });
  }

  handleRoleNameChange(roleID, newRoleName) {
    let tempRoleTable = this.state.roleTable;
    tempRoleTable.setName(roleID, newRoleName);
    this.setState({roleTable: tempRoleTable});
  }

  handleClick() {
    this.props.onSubmit(this.state.roleTable);
  }

  render() {
    const classes = this.props.classes;

    return ([
      <Grid container alignItems='center' justify='center'>
        <Grid item xs align='right'>
          <FormControl className={classes.formControl}>
            <InputLabel id="kp-selection-checkbox-label">Select KP</InputLabel>
            <Select
              labelId="kp-selection-checkbox-label"
              id="kp-selection-checkbox"
              multiple
              value={this.state.kpList}
              onChange={this.handleKpChange}
              input={<Input/>}
              renderValue={(selected) => (
                <div className={classes.chips}>
                  {selected.map((value) => (
                    <Chip key={value}
                          label={this.state.roleTable.getName(value)}
                          className={classes.chip}
                          size="small"/>
                  ))}
                </div>
              )}
              MenuProps={MenuProps}
            >
              {Object.keys(this.state.roleTable.table).map((roleID) => {
                if (!this.state.dicerList.includes(roleID)) {
                  return (
                    <MenuItem key={roleID} value={roleID}>
                      <Checkbox checked={this.state.kpList.includes(roleID)}/>
                      <ListItemText primary={this.state.roleTable.getName(roleID)}/>
                    </MenuItem>
                  )
                } else {
                  return null;
                }
              })}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs align='left'>
          <FormControl className={classes.formControl}>
            <InputLabel id="dicer-selection-checkbox-label">Select dicer</InputLabel>
            <Select
              labelId="dicer-selection-checkbox-label"
              id="dicer-selection-checkbox"
              multiple
              value={this.state.dicerList}
              onChange={this.handleDicerChange}
              input={<Input/>}
              renderValue={(selected) => (
                <div className={classes.chips}>
                  {selected.map((value) => (
                    <Chip key={value}
                          label={this.state.roleTable.getName(value)}
                          className={classes.chip}
                          size="small"/>
                  ))}
                </div>
              )}
              MenuProps={MenuProps}
            >
              {Object.keys(this.state.roleTable.table).map((roleID) => {
                if (!this.state.kpList.includes(roleID)) {
                  return (
                    <MenuItem key={roleID} value={roleID}>
                      <Checkbox checked={this.state.dicerList.includes(roleID)}/>
                      <ListItemText primary={this.state.roleTable.getName(roleID)}/>
                    </MenuItem>
                  );
                } else {
                  return null;
                }
              })}
            </Select>
          </FormControl>
        </Grid>
      </Grid>,
      <Grid container alignItems='center' justifyContent='center'>
        <Grid item xs={8} align='center'>
          <List>
            {Object.keys(this.state.roleTable.table).map((roleID) => {
              return (
                <ListItem key={roleID} dense disableGutters={true} style={{justifyContent: 'center'}}>
                  <TextField
                    id={"text-field-role" + roleID}
                    color="secondary"
                    size="small"
                    key={roleID}
                    value={this.state.roleTable.getName(roleID)}
                    onChange={(event) => {
                      this.handleRoleNameChange(roleID, event.target.value);
                    }}
                  />
                  <ListItemIcon style={{minWidth: 0}}>
                    <IconButton
                      style={{color: '#1f1e33'}}
                      aria-label="change color"
                      component="span">
                      <Palette/>
                    </IconButton>
                  </ListItemIcon>
                </ListItem>);
            })}
          </List>
        </Grid>
        <Grid container alignItems='center' justifyContent='center'>
          <Grid item xs align='center'>
            <Button
              variant="contained"
              color="secondary"
              endIcon={<Check/>}
              onClick={this.handleClick}>
              Apply
            </Button>
          </Grid>
        </Grid>
      </Grid>
    ]);
  }
}

export default withStyles(styles, {withTheme: true})(RoleConfigurator);