import * as yup from 'yup';

export const ContactFormSchema = yup.object().shape({
    name: yup.string().required('Please enter your name'),
    email: yup.string().email('Please enter a valid email').required('Please enter an email'),
    message: yup.string().min(5).required('Please leave a message')
  });