import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import { convertToRaw, EditorState, ContentState } from 'draft-js';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Autocomplete from '@mui/material/Autocomplete';
import Nav from '@/components/navBackOffice/NavBackOffice';
import Alert from '@mui/material/Alert';
import Style from '../../BackOffice.module.css';
import ProtectedRoute from '@/components/ProtectedRoute/ProtectedRoute';

const UpdatePost = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    contenu: '',
    image: '',
    status: '',
    date: null,
  });
  const router = useRouter();
  const { id } = router.query;
  const [showEditor, setShowEditor] = useState(false);
  const [editorState, setEditorState] = useState(() => EditorState.createEmpty());
  const [erreur, setErreur] = useState('');

  const fetchJobUpdate = async () => {
    try {
      const response = await fetch(`/api/jobs/${id}`);
      if (response.ok) {
        const data = await response.json();
        setFormData(data);
        const contenuFromHtml = htmlToDraft(data.contenu);
        const { contentBlocks, entityMap } = contenuFromHtml;
        setEditorState(EditorState.createWithContent(ContentState.createFromBlockArray(contentBlocks, entityMap)));
      } else {
        setErreur('Failed to fetch Jobs');
      }
    } catch (error) {
      setErreur('Error fetching Jobs:');
    }
  };
  useEffect(() => {
    if (router.isReady) {
    fetchJobUpdate();
    setShowEditor(true);
  }
  }, []);

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e: any, value: any) => {
    setFormData({ ...formData, image: value });
  };
  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    const token = Cookies.get('token');
    e.preventDefault();
    try {
      const response = await fetch(`/api/jobs?id=${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        router.push(
          {
          pathname: '/backoffice/jobs',
        },
        );
      } else {
        setErreur('Une erreur s\'est produite lors de la création du post');
      }
    } catch (error) {
      setErreur('Une erreur s\'est produite lors de la requête vers l\'API', error);
    }
  };
  return (
    <ProtectedRoute>
    <div>
      <Nav />
      <form onSubmit={handleSubmit} className={Style.form}>
        <Typography variant="h4">Update  Job</Typography>
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
              editorState={editorState}
              wrapperClassName="demo-wrapper"
              editorClassName="demo-editor"
              onEditorStateChange={newState => {
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
            selected={formData.date ? new Date(formData.date) : null}
            onChange={(date: any) => setFormData({ ...formData, date })}
            dateFormat="dd/MM/yyyy"
          />
        </div>
        <div>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={Style.buttonUpdateFrom}
          >
            Update Job
          </Button>
          <Button
            type="button"
            variant="contained"
            color="error"
            onClick={() => {
              router.push(
                {
                pathname: '/backoffice/jobs',
              },
              );
            }}
            className={Style.buttonUpdateFrom}
          >
            return list Jobs
          </Button>
        </div>
      </form>
      <div>
        { erreur ? <Alert severity="error">{erreur}</Alert> : null }
      </div>
    </div>
    </ProtectedRoute>
  );
};

export default UpdatePost;
