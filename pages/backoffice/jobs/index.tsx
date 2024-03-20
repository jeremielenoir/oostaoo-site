import Nav from '@/components/navBackOffice/NavBackOffice';
import { Container, Fab } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import PostAddIcon from '@mui/icons-material/PostAdd';
import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import router from 'next/router';
import ConfirmationDialog from '@/components/ConfirmationDialog/ComfirmationDialog';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DownloadIcon from '@mui/icons-material/Download';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Alert from '@mui/material/Alert';
import Style from '../BackOffice.module.css';
import ProtectedRoute from '@/components/ProtectedRoute/ProtectedRoute';

interface Files {
  _id: string;
  title: string;
  contenu: string;
  date: Date;
}

interface Jobs {
  _id: string;
  title: string;
  description: string;
  contenu: string;
  image: string;
  status: string;
  date: Date;
  files: Array<Files>;
}

const indexAllJobs = () => {
  const [expanded, setExpanded] = useState<string | boolean>(false);
  const [jobs, setJobs] = useState<Jobs[]>([]);
  const [jobID, setJobId] = useState('');
  const [openDialog, setOpenDialog] = useState(false);
  const [erreur, setErreur] = useState('');

  const handleDownloadFile = async (file : Files) => {
    const token = Cookies.get('token');
    try {
      const response = await fetch(`/api/download?id=${file._id}`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      if (response.ok) {
        const blob = await response.blob();
        const fileURL = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = fileURL;
        link.setAttribute('download', file.title);
        document.body.appendChild(link);
        link.click();
        window.URL.revokeObjectURL(fileURL);
      }
    }catch(error) {
    }
  };

  const handleConfirmDelete = async () => {
    const token = Cookies.get('token');
    try {
      const response = await fetch(`/api/jobs?id=${jobID}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      if (response.ok) {
        router.reload();
      } else {
        setErreur('Une erreur s\'est produite lors de la création du post');
      }
    } catch (error) {
      setErreur('Une erreur s\'est produite lors de la requête vers l\'API');
    }
    setOpenDialog(false);
  };
  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/jobs');
        if (response.ok) {
          const data = await response.json();
          setJobs(data);
        } else {
          setErreur('Failed to fetch Job');
        }
      } catch (error) {
        setErreur('Error fetching Job');
      }
    };
    fetchData();
  }, []);
  return (
    <ProtectedRoute>
    <div>
      <div>
        <Nav />
      </div>
      <div>
        <h1 className={Style.titleTableJobs}>Liste des Offres d'Emploi</h1>
        <Fab color="primary" aria-label="add" onClick={() => {
          router.push(
            {
              pathname: '/backoffice/jobs/create',
            },
          );
        }} className={Style.addButtonTableJobs}>
          <PostAddIcon />
        </Fab>
        <Fab
          color="secondary"
          aria-label="edit"
          onClick={() => {
            router.push({
              pathname: '/backoffice/jobs/update/[id]',
              query: { id: jobID },
            });
          }}
          className={Style.editButtonTableJobs}>
          <EditIcon />
        </Fab>
        <Fab color="error" aria-label="delete" onClick={() => { setOpenDialog(true); }} className={Style.delButtonTableJobs}>
          <DeleteIcon />
        </Fab>
      </div>
      <Container fixed className={Style.listeJobs}>
        {jobs.map((job: Jobs, index) => (
          <Accordion expanded={expanded === 'panel1-' + index} onChange={handleChange('panel1-' + index)} onClick={() => { setJobId(job._id); }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography sx={{ width: '33%', flexShrink: 0 }}>
                {job.title}
              </Typography>
              <Typography sx={{ color: 'text.secondary' }}>{job.description.substring(0, 250)}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <List
                sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                  <ListSubheader component="div" id="nested-list-subheader">
                    Liste des CV :
                  </ListSubheader>
                }
              >
                {job.files.map((fichier: Files) => (
                  <ListItemButton
                    onClick={() => handleDownloadFile(fichier)}>
                    <ListItemText primary={fichier.title} />
                    <ListItemIcon>
                      <DownloadIcon />
                    </ListItemIcon>
                  </ListItemButton>
                ))}
              </List>
            </AccordionDetails>
          </Accordion>
        ))}
      </Container>
      <div>
        <ConfirmationDialog
          open={openDialog}
          onCancel={() => setOpenDialog(false)}
          onConfirm={handleConfirmDelete}
          jobdata={jobs}
        />
      </div>
      {erreur ? <Alert severity="error">{erreur}</Alert> : null}
    </div>
    </ProtectedRoute>
  );
};
export default indexAllJobs;
