'use client'
import { Button } from '@mui/material';
import { Typography } from '@mui/material';
import HeaderLayout from '@/components/HeaderLayout';
import { useRouter } from 'next/navigation';
import { signIn, signOut, useSession } from 'next-auth/react';
import { useEffect } from 'react';
const label = { inputProps: { "aria-label": "Switch demo" } };

export default function Login() {
  const router = useRouter();
  const { data: session } = useSession();

  useEffect(() => {
    if (session) {
      router.push('/weather')
    }
  }, [session])


  return (
    <>


      <HeaderLayout />



      <section className='bg-primary h-full pt-32 px-8'>
        <div className='flex flex-col items-center justify-center h-full text-center'>
          <div className='flex flex-col items-center'>
            <Typography className='text-[#ffff] text-left'>
              Welcome to the weather forecast web application. Please login with your <br /> GitHub user to use the application and view the weather in your city
            </Typography>
            <div className='mt-4 w-full flex-1 text-left'>
              {!session ?
                <Button variant="contained" onClick={() => signIn('github')

                  // router.push('/weather')
                }>Login</Button>
                : null}

            </div>
          </div>
        </div>
      </section>


    </>

  )
}
