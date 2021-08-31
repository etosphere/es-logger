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
  withStyles, List, ListItem, ListItemIcon, Grid, ListSubheader
} from "@material-ui/core";
import {Check} from "@material-ui/icons";
import ColorPicker from "./ColorPicker";

const styles = (theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 240
  },
  chips: {
    display: "flex",
    flexWrap: "wrap"
  },
  chip: {
    marginTop: 2,
    marginRight: 2,
    marginBottom: 2,
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
    this.handleColorChange = this.handleColorChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleKpChange(event) {
    let tempRoleTable = this.state.roleTable;
    let newKpList = event.target.value;
    Object.keys(tempRoleTable.table).forEach((roleID) => {
      tempRoleTable.setType(roleID, 'pc');
    })
    newKpList.forEach((role) => {
      tempRoleTable.setType(role, 'kp');
    });
    this.state.dicerList.forEach((role) => {
      tempRoleTable.setType(role, 'dicer');
    });
    this.setState({
      kpList: newKpList,
      roleTable: tempRoleTable
    });
  }

  handleDicerChange(event) {
    let tempRoleTable = this.state.roleTable;
    let newDicerList = event.target.value;
    Object.keys(tempRoleTable.table).forEach((roleID) => {
      tempRoleTable.setType(roleID, 'pc');
    })
    this.state.kpList.forEach((role) => {
      tempRoleTable.setType(role, 'kp');
    });
    newDicerList.forEach((role) => {
      tempRoleTable.setType(role, 'dicer');
    });
    this.setState({
      dicerList: newDicerList,
      roleTable: tempRoleTable
    });
  }

  handleRoleNameChange(roleID, newRoleName) {
    let tempRoleTable = this.state.roleTable;
    tempRoleTable.setName(roleID, newRoleName);
    this.setState({roleTable: tempRoleTable});
  }

  handleColorChange(roleID, newRoleColor) {
    let tempRoleTable = this.state.roleTable;
    tempRoleTable.setColor(roleID, newRoleColor);
    this.setState({roleTable: tempRoleTable});
  }

  handleClick() {
    this.props.onSubmit(this.state.roleTable);
  }

  render() {
    const classes = this.props.classes;

    const kpTable = Object.keys(this.state.roleTable.table)
      .filter((roleID) => this.state.roleTable.getType(roleID) === 'kp');
    const dicerTable = Object.keys(this.state.roleTable.table)
      .filter((roleID) => this.state.roleTable.getType(roleID) === 'dicer');
    const pcTable = Object.keys(this.state.roleTable.table)
      .filter((roleID) => this.state.roleTable.getType(roleID) === 'pc');

    const generateListItem = (roleID) => (
      <ListItem key={roleID} dense disableGutters={true} style={{justifyContent: 'center'}}>
        <TextField
          id={"text-field-role" + roleID}
          color="secondary"
          size="small"
          key={'text-' + roleID}
          InputProps={{
            style: {color: this.state.roleTable.getColor(roleID)}
          }}
          value={this.state.roleTable.getName(roleID)}
          onChange={(event) => {
            this.handleRoleNameChange(roleID, event.target.value);
          }}
        />
        <ListItemIcon key={'icon-' + roleID} style={{minWidth: 0}}>
          <ColorPicker id={roleID}
                       color={this.state.roleTable.getColor(roleID)}
                       onChangeComplete={(color) => {
                         this.handleColorChange(roleID, color.hex)
                       }}/>
        </ListItemIcon>
      </ListItem>);

    return ([
      <Grid container key='kp-and-dicer-configurator-grid'>
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
      <Grid container key='name-and-color-configurator-grid'>
        <Grid item xs align='center'>
          <List dense>
            {kpTable.length !== 0 && <ListSubheader key="kp" disableSticky>KP</ListSubheader>}
            {kpTable.map((roleID) => generateListItem(roleID))}
            {dicerTable.length !== 0 && <ListSubheader key="dicer" disableSticky>Dicer</ListSubheader>}
            {dicerTable.map((roleID) => generateListItem(roleID))}
            {pcTable.length !== 0 && <ListSubheader key="pc" disableSticky>PC</ListSubheader>}
            {pcTable.map((roleID) => generateListItem(roleID))}
          </List>
        </Grid>
      </Grid>,
      <Grid container key='apply-button-grid' style={{marginBottom: '1em'}}>
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
    ]);
  }
}

export default withStyles(styles, {withTheme: true})(RoleConfigurator);