import Container from '@/components/Container'
import React from 'react'
import googleImage from "@/assets/Google-Image.png";
import Image from 'next/image';
import { auth, signIn } from '@/auth';
import { redirect } from 'next/navigation';

const SignInPage = async () => {
  const session = await auth();

  if(session?.user) {
    redirect("/")
  }
  return (
    <Container className='py-20 flex flex-col justify-center items-center'>
      <form 
        action={async() => {
          'use server';
          await signIn('google',{redirectTo: "/" });
        }} 
        className='flex items-center gap-1 border border-blue-500 font-semibold bg-blue-50 px-4 py-1.5 rounded-md hover:bg-blue-800 hover:text-white hoverEffect'
      >
        <Image src={googleImage} alt='google-image' className='w-8'/>
        <button>Signin with google</button>
      </form>
    </Container>
  )
}

export default SignInPage
