import axios from 'axios';

interface EmailData {
  email: string;
  subject: string;
  message: string;
}

const sendEmail = async (data: EmailData) => axios({
  method: 'post',
  url: '/api/sendContact',
  data,
});

export default sendEmail;
