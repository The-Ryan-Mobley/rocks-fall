import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import { styled } from '@material-ui/core/styles';
import CharacterSheet from "../characterSheet";
import SpellSheet from "../spellSheet";
import SaveCharacterButton from "../saveCharacterButton";



function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <Typography
        component="div"
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        <Box p={3}>{children}</Box>
      </Typography>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  
  const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
    },
  }));

  const StyledAppBar = styled(AppBar)({
    width:"100%",
    backgroundColor: "#2D2C24"
  });
  
  export default function SheetModal() {
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return (
      <Grid container>
        <StyledAppBar position="static">
          <Tabs value={value} onChange={handleChange} aria-label="simple tabs example" className="noScroll">
            <Tab label="Stats" {...a11yProps(0)} />
            <Tab label="Spells" {...a11yProps(1)} />
          </Tabs>
          <Grid item xs={1}>
            <SaveCharacterButton/>
          </Grid>
        </StyledAppBar>
        <TabPanel value={value} index={0}>
          <CharacterSheet/>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <SpellSheet/>
        </TabPanel>
      </Grid>

    );
  }