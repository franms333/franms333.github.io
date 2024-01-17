import { useFormik } from 'formik';
import { ContactFormSchema } from '../../schemas/ContactFormValidation';
import emailjs from '@emailjs/browser';
import { useState } from 'react';


const ContactForm = () => {
    const [emailSent, setEmailSent] = useState();

    async function onSubmit(values:{name:string, email:string, message:string}, actions:any){
        var templateParams = {
            name: values.name,
            email: values.email,
            message: values.message
        }       

        const response = await emailjs.send('service_b4grcbh', 'template_8l897js', templateParams, 'kAMP3KL9wfVXgBtVl');
        console.log('RESPONSE!', response.status, response.text);
        if(response.status === 200){
            setEmailSent(true);
            
        } else {
            setEmailSent(false);
        }

        actions.resetForm();

        setTimeout(()=>{
            setEmailSent(null);
        }, 2000);        
    }

    const {values, handleBlur, handleChange, handleSubmit, errors, isSubmitting} = useFormik({
        initialValues:{
            name:'',
            email:'',
            message:''
        },
        validationSchema: ContactFormSchema,
        onSubmit
    })    
    
    return ( 
        <div id="contactMe" className="flex flex-col mt-20 lg:w-1/3 md:w-2/3">
            <h3 className="text-5xl font-bold md:ml-0">Leave a message!</h3>
            <form className="flex flex-col gap-10 mt-10 xs:px-4 md:px-0" onSubmit={handleSubmit}>
                <div>
                    <input 
                    className="w-full border-b border-b-black p-2 placeholder:text-black focus:outline-none" 
                    type="text" 
                    placeholder="Name"
                    id='name'
                    value={values.name}
                    onBlur={handleBlur}
                    onChange={handleChange}/>
                    {errors.name && <p className='text-xs text-red-400 pl-2'>{errors.name}</p>}
                </div>

                <div>
                    <input 
                    className="w-full border-b border-b-black p-2 placeholder:text-black focus:outline-none" 
                    type="email" 
                    placeholder="Email"
                    id='email'
                    value={values.email}
                    onBlur={handleBlur}
                    onChange={handleChange}/>
                    {errors.email && <p className='text-xs text-red-400 pl-2'>{errors.email}</p>}
                </div>

                <div>
                    <textarea 
                    className="w-full border-b border-b-black p-2 placeholder:text-black focus:outline-none" 
                    name="message" 
                    id="message" 
                    placeholder="Message"
                    value={values.message}
                    onBlur={handleBlur}
                    onChange={handleChange} />
                    {errors.message && <p className='text-xs text-red-400 pl-2'>{errors.message}</p>}
                </div>

                <button 
                type='submit' 
                disabled={isSubmitting}
                className={`w-28 self-center bg-slate-900 rounded-full py-1 text-white font-semibold transition-colors duration-200 ease-in-out
                        ${isSubmitting ? 'cursor-not-allowed' : 'cursor-pointer'}
                        hover:bg-slate-700`}>
                    Submit
                </button>
            </form>
            <div className={`toast toast-end mb-10 transition-opacity duration-200 ease-in-out ${emailSent ? 'opacity-100' : 'opacity-0'}`}>
                <div className="alert alert-success bg-white border-2 border-green-400">
                    <span>Email sent successfully.</span>
                </div>
            </div>
            <div className={`toast toast-end mb-10 transition-opacity duration-200 ease-in-out ${emailSent === false ? 'opacity-100' : 'opacity-0'}`}>
                <div className="alert alert-error bg-white border-2 border-red-400">
                    <span>There was a problem, please try again.</span>
                </div>
            </div>
        </div>
    );
}
 
export default ContactForm;