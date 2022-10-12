import React from 'react';
import '../assets/ContactForm.scss';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import Paper from '@mui/material/Paper';

class ContactInformation extends React.Component {


    render() {
        return (

            
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            <ListItem>
            <ListItemAvatar>
                <Avatar sx={{bgcolor: "primary.main"}}>
                <CallOutlinedIcon sx={{color:'#fff'}} color='primary'/>
                </Avatar>
            </ListItemAvatar>
                <ListItemText primary="01 42 63 77 27"/>
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar sx={{bgcolor: "primary.main"}}>
                <MailOutlinedIcon sx={{color:'#fff'}} color='primary'/>
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="contact@oostaoo.com" />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar sx={{bgcolor: "primary.main"}}>
                  <LocationOnOutlinedIcon sx={{color:'#fff'}} color='primary'/>
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="3 Rue Geoffroy-Marie, 75009 Paris"/>
            </ListItem>
          </List>    

    )}
}

export default ContactInformation;