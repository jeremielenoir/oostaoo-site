import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import draftToHtml from 'draftjs-to-html';
import { convertToRaw } from 'draft-js';
import Nav from '@/components/navBackOffice/NavBackOffice';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Autocomplete from '@mui/material/Autocomplete';
import Style from '../../BackOffice.module.css';

const CreateJobs = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    contenu: '',
    image: '',
    status: '',
    date: new Date(),
  });

  const [showEditor, setShowEditor] = useState(false);
  useEffect(() => {
    setShowEditor(true);
  }, []);

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e: any, value: any) => {
    setFormData({ ...formData, image: value });
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/jobs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        router.push({
          pathname: '/backoffice/jobs',
        });
      } else {
        alert('Une erreur s\'est produite lors de la création du post');
      }
    } catch (error) {
      alert('Une erreur s\'est produite lors de la requête vers l\'API');
    }
  };
  return (
    <div>
      <Nav />
      <form onSubmit={handleSubmit} className={Style.form}>
        <Typography variant="h4" className={Style.button}>Créer un nouveau Job</Typography>
        <TextField
          id="title"
          name="title"
          label="Title"
          variant="outlined"
          value={formData.title}
          onChange={handleChange}
        />
        <TextField
          id="description"
          name="description"
          label="Description"
          variant="outlined"
          value={formData.description}
          onChange={handleChange}
        />
        <div className={Style.editeur}>
          <label htmlFor="contenu">Contenu:</label>
          {showEditor && (
            <Editor
              ariaLabel="Editor"
              wrapperClassName="demo-wrapper"
              editorClassName="demo-editor"
              onEditorStateChange={(newState) => {
                setFormData({ ...formData, contenu: draftToHtml(convertToRaw(newState.getCurrentContent())) });
              }}
            />
          )}
        </div>
        <Autocomplete
          id="image"
          options={[
            'angular',
            'android',
            'nodejs',
            'php',
            'python',
            'react',
            'vuejs',
            'zend',
            'symfony',
            'ios',
            'swift',
          ]}
          value={formData.image}
          onInputChange={handleImageChange}
          renderInput={(params) => <TextField {...params} label="Image" variant="outlined" />}
        />
        <TextField
          id="status"
          name="status"
          label="Status"
          variant="outlined"
          value={formData.status}
          onChange={handleChange}
        />
        <div>
          <label htmlFor="date">Date:</label>
          <DatePicker
            id="date"
            name="date"
            selected={formData.date}
            onChange={(date: any) => setFormData({ ...formData, date })}
            dateFormat="dd/MM/yyyy"
          />
        </div>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className={Style.button}
        >
          Créer le Job
        </Button>
      </form>
    </div>
  );
};

export default CreateJobs;
