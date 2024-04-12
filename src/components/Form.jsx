import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import bgImg from '../assets/images/illustration-sign-up-desktop.svg'
import ListComponent from './ListComponent/ListComponent';
import successImg from "../assets/images/icon-success.svg"
import Button from './Button/Button';

export default function Form() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const navigate = useNavigate();
    
    const onSubmit = data => {
        console.log(data);
        navigate('/success', { state: { email: data.email } }); 
    };
    

    return (
        <div className='flex items-center justify-center h-screen'>
            <div className='bg-white md:w-[60em] md:h-[40em] w-full h-full md:rounded-3xl shadow-2xl'>
                <div className="flex md:flex-row md:grid-cols-2 flex-col-reverse grid-cols-1 md:p-6 justify-between w-full h-full">
                    <div className='my-20 mx-6'>
                       <h1 className="md:text-6xl text-4xl font-bold font-roboto text-dark-slate-gray">Stay updated!</h1>
                       <p className='mt-4 mr-12 font-roboto text-[16px] text-dark-slate-gray'>Join 60,000+ product managers receiving monthly updates on:</p>  
                       <ul className="newsletter-list mt-8 text-dark-slate-gray mb-10">
                          <ListComponent text = "Product discovery and building what matters" img = {successImg}/>
                          <ListComponent text = "Measuring to ensure updates are a success" img = {successImg}/>
                          <ListComponent text = "And much more!" img = {successImg}/>
                        </ul>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="flex w-full md:w-[25em] justify-between mb-30">
                                <label className='font-bold font-roboto text-sm text-dark-slate-gray mb-2'>Email address</label>
                                {errors.email && <p className='font-bold font-roboto text-sm text-red-400 mb-2'>{errors.email.message}</p>}
                            </div>
                     
                            <input 
                                type="email"
                                className='peer border-2 border-slate-300 w-full md:w-[25em] h-12 rounded-md pl-4 mb-4
                                focus:border-black hover:border-black'
                                placeholder='email@company.com'
                                {...register('email', {
                                    required: 'Email required',
                                    pattern: {
                                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                        message: 'Invalid email format'
                                    }
                                })}
                            
                            />
                            <Button text = 'Subscribe to monthly newsletter'/>
    
                        </form>
                    </div>
                    <img src={bgImg} className="object-cover h-[16em] md:w-full md:h-full rounded-b-3xl md:rounded-3xl"/>
                       
                    
                </div>
            </div>
        </div>
    );
    
}

