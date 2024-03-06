import Nav from '@/components/navBackOffice/NavBackOffice';
import { Container, Fab } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import PostAddIcon from '@mui/icons-material/PostAdd';
import { useState, useEffect } from 'react';
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

  const handleConfirmDelete = async () => {
    try {
      const response = await fetch(`/api/jobs?id=${jobID}`, {
        method: 'DELETE',
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
          setErreur('Failed to fetch posts');
        }
      } catch (error) {
        setErreur('Error fetching posts:');
      }
    };
    fetchData();
  }, []);
  return (
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
                    onClick={() => {
                      router.push(
                        {
                          pathname: '/api/download',
                          query: { id: fichier._id },
                        }
                      );
                    }
                    }>
                    <ListItemText primary={fichier.title} />
                    <ListItemIcon>
                      <DownloadIcon />
                    </ListItemIcon>
                  </ListItemButton>
                ))};
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
  );
};
export default indexAllJobs;
