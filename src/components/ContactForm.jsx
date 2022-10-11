import React from 'react';
import '../assets/ContactForm.scss';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

class ContactForm extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            name: '',
            email: '',
            text:''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        let name = event.target.name;
        let val = event.target.value;
        this.setState({[name]: val});
    }


    handleSubmit(event){
        alert('Votre message a été envoyé');
        event.preventDefault();
    }

    
    render(){
    return(

        <div className='form_container'>
            <form onSubmit={this.handleSubmit}>
                <div className='input_container'>
                    <input className='input' required type="text" name='name' value={this.state.value} onChange={this.handleChange} placeholder='Nom'/>
                    <input className='input' required type="email" name='email' value={this.state.value} onChange={this.handleChange} placeholder='E-mail'/>
                </div>
                <textarea required name="text" id="" cols="90" rows="10" value={this.state.value} onChange={this.handleChange} placeholder='Ecrivez votre message ici'/>
                <br/>
                <Button variant="contained" endIcon={<SendIcon />}>Envoyer</Button>

            </form>
        </div>
    )

    }
}

export default ContactForm;