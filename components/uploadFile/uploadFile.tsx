import { Button, TextField } from '@mui/material';
import { useRouter } from 'next/router';
//import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

export default function UploadPage({ idjobs }) {
  const router = useRouter();
  // const { executeRecaptcha } = useGoogleReCaptcha();
  const handleSubmit = async (e) => {
    e.preventDefault();
    /* if (!executeRecaptcha) {
      console.log('Execute recaptcha not yet available');
      return;
    }

    const token = await executeRecaptcha('submit');
    // Vous pouvez maintenant envoyer ce token avec les données de votre formulaire à votre API
    */
    const formData = new FormData();
    formData.append('file', e.target.file.files[0]);
    formData.append('information_contact', e.target.information_contact.value);
    // formData.append('token', token);

    const response = await fetch(`/api/upload?id=${idjobs}`, {
      method: 'POST',
      body: formData,
    });
    if (response.ok) {
      await response.json();
      alert('votre demande a bien été tramis Merci!');
      router.reload();
    } else {
      console.error('Failed to fetch posts');
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div style={{ display: 'inline-grid' }}>
        <TextField
          id="information_contact"
          name="information_contact"
          label="Information de contact"
          multiline
          rows={4}
          margin="normal"
        />
        <Button
          variant="contained"
          component="label"
        >
          <CloudUploadIcon sx={{ marginRight: 1 }} />
          Upload File
          <input type="file" name="file" accept="application/pdf" style={{ display: 'none' }} />
        </Button>
        <Button type="submit">J&apos;envoie mon CV !</Button>
      </div>
    </form>
  );
}
