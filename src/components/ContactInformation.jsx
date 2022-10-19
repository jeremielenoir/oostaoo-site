import React from 'react';
import '../assets/ContactForm.scss';
import '../assets/Nav.scss';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
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
                        <Avatar sx={{ bgcolor: "primary.main" }}>
                            <CallOutlinedIcon sx={{ color: '#fff' }} color='primary' />
                        </Avatar>
                    </ListItemAvatar>
                    <div className='link'>
                        <Link href="tel:+330142637727" color="inherit" target="_blank" underline="hover">
                            {'01 42 63 77 27'}
                        </Link>
                    </div>
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar sx={{ bgcolor: "primary.main" }}>
                            <MailOutlinedIcon sx={{ color: '#fff' }} color='primary' />
                        </Avatar>
                    </ListItemAvatar>
                    <div className='link'>
                        <Link href="mailto:contact@oostoo.com" color="inherit" target="_blank" underline="hover">
                            {'contact@oostaoo.com'}
                        </Link>
                    </div>
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar sx={{ bgcolor: "primary.main" }}>
                            <LocationOnOutlinedIcon sx={{ color: '#fff' }} color='primary' />
                        </Avatar>
                    </ListItemAvatar>
                    <div className='link'>
                        <Link href="https://www.google.com/maps/place/OOSTAOO+CONSULTING/@48.8733599,2.3433706,15z/data=!4m5!3m4!1s0x0:0x9609e46b78e3a337!8m2!3d48.8733333!4d2.3433717" target="_blank" color="inherit" underline="hover">
                            {'3 Rue Geoffroy-Marie, 75009 Paris'}
                        </Link>
                    </div>

                </ListItem>
            </List>

        )
    }
}

export default ContactInformation;