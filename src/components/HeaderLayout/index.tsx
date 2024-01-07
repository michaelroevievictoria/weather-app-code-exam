'use client'
import { Button } from '@mui/material';
import icon from '/public/images/weather-icon.png'
import { useRouter } from 'next/navigation';
import { signIn, signOut, useSession } from 'next-auth/react';
import { useEffect } from 'react';
export interface props {

};

const HeaderLayout: React.FC<props> = ({

}) => {
  const router = useRouter();
  const { data: session } = useSession();
  
  

  const handleSignOut = async () => {
    await signOut(); // Sign out the user
    
    // Delay the redirection for 1 second (1000 milliseconds)
    window.location.href = '/';
    // router.push('/'); // Redirect to the home page or any other page
  };

  // const isLoggedIn = true; // Example variable indicating user authentication status
  return (
    <main className='bg-primary'>
      <section className='container md:px-6 px-8 mx-auto relative bg-[#06283D]'>
        <div className="flex flex-col items-center justify-between">
          <div className="w-full items-center justify-between flex " >
            <img src={icon.src} width={100} height={100} />
            <div className="items-end justify-center ">
              {session && (

                <Button
                  onClick={handleSignOut}
                  variant="outlined"
                  className="px-4 py-2"
                >
                  Logout
                </Button>
              )}
            </div>
          </div>

        </div>
      </section>



    </main>
  );
};

export default HeaderLayout;