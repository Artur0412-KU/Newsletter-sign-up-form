import React from 'react';
import { useLocation } from 'react-router-dom';
import img from "../assets/images/icon-success.svg";
import Button from './Button/Button';
import { useNavigate } from 'react-router-dom';

export default function SuccessForm() {
  const navigate = useNavigate();
  const location = useLocation();
  const { email } = location.state || {}; 

  const navigateBack = () => {
    navigate('/');
  }

  return (
    <div className='flex items-center justify-center h-screen'>
      <div className="bg-white flex flex-col h-full w-full p-8 md:h-[30em] md:w-[30em] md:pt-12 md:px-12 md:pb-14 md:rounded-3xl justify-between">
        <div>
          <img src={img} alt="Success icon" className='mt-36 md:mt-0 w-20 object-contain' />
          <h2 className="text-4xl md:text-5xl  font-bold font-roboto text-dark-slate-gray mt-8">
            Thanks for subscribing!
          </h2>
          {email && (
            <p className='font-roboto mt-6 text-[16px] text-dark-slate-gray'>
              A confirmation email has been sent to <b>{email}</b>.
              Please open it and click the button inside to confirm your subscription
            </p>
          )}
        </div>
        <div className='flex justify-center'>
          <Button text='Dismiss message' navigate={navigateBack} />
        </div>
      </div>
    </div>
  );
}
