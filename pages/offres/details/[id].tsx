import { useEffect, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Nav from '@/components/navoffre/NavOffre';
import UploadFile from '@/components/uploadFile/uploadFile';
import { useRouter } from 'next/router';
import ReactHtmlParser from 'react-html-parser';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

interface Job {
  _id: string;
  title: string;
  description: string;
  contenu: string;
  image: string;
  status: string;
  date: Date;
}

const Details = () => {
  const router = useRouter();
  const { id } = router.query;
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [job, setJob] = useState<Job | null>(null);
  useEffect(() => {
    if (router.isReady) {
      const fetchJobDetails = async () => {
        try {
          if (id) {
            const response = await fetch(`/api/jobs/${id}`);
            if (response.ok) {
              const data = await response.json();
              setJob(data);
            } else {
              console.error('Failed to fetch posts');
            }
          }
        } catch (error) {
          console.error('Error fetching posts:', error);
        }
      };
      fetchJobDetails();
    }
  }, [router.isReady, id]);
  return (
    <>
      <Head>
        <title>{job ? (job.title + ' - Oostaoo Consulting offre jobs') : ('Oostaoo Consulting offre job')}</title>
        <meta name="description" content={job ? ('Oostaoo Consulting offre ' + job.description) : ('Oostaoo Consulting offre jobs')} />
        <meta property="og:image" content={`/assets/technos/${job?.image}.png`} />
        <meta name="twitter:image" content={`/assets/technos/${job?.image}.png`} />
      </Head>
      <Nav />
      <Box sx={{ maxWidth: 1000, minHeight: 500, textAlign: 'left', marginTop: 10, marginLeft: 'auto', marginRight: 'auto' }}>
        <Card variant="outlined" sx={{ border: '1px solid black', borderRadius: 3, boxShadow: '10px 10px 0px black' }}>
          <CardContent>
            <Typography sx={{ mb: 1.5 }} color="text.secondary" variant="h5">
              Status : {job ? (job.status) : (null)}
            </Typography>
            <div style={{ marginLeft: '43%', position: 'inherit', marginBottom: '5%' }}>
              <Image src={`/assets/technos/${job?.image}.png`} height={100} width={150} alt={`${job?.image}.png`}></Image>
            </div>
            <Typography variant="h4" component="div" sx={{ textAlign: 'center' }}>
              D&eacute;tails de l&apos;Offre d&apos;Emploi
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary" variant="h4">
              Poste : {job ? (job.title) : (null)}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary" variant="h5">
              Description du poste :
            </Typography>
            <Typography variant="body2">
              {job ? (job.description) : (null)}
              <br></br>
              <br></br>
              {job ? ReactHtmlParser(job.contenu) : (null)}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" variant="contained" onClick={handleClickOpen} sx={{ marginLeft: 'auto', marginRight: 'auto' }}>J&apos;envoie mon CV !</Button>
          </CardActions>
        </Card>
      </Box>
      <Dialog
        open={open}
        onClose={handleClose}

      >
        <DialogTitle>Joindre le CV au format PDF :</DialogTitle>
        <DialogContent sx={{ textAlign: 'center' }}>
          <UploadFile idjobs={job?._id} />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Details;
