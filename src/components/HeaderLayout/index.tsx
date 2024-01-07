'use client'
import { Button } from '@mui/material';
import icon from '/public/images/weather-icon.png'
import { useRouter } from 'next/navigation';
import { signIn, signOut, useSession } from 'next-auth/react';
export interface props {

};

const HeaderLayout: React.FC<props> = ({

}) => {
  const router = useRouter();
  const { data: session } = useSession();
  // const isLoggedIn = true; // Example variable indicating user authentication status
  return (
    <main className='bg-primary'>
      <section className='container md:px-6 sm:px-8 px-0 mx-auto relative bg-[#06283D]'>
        <div className="flex flex-col items-center justify-between">
          <div className="w-full items-center justify-between flex " >
            <img src={icon.src} width={100} height={100} />
            <div className="items-end justify-center ">
              {session && (

                <Button
                  onClick={() => signOut()
                    // router.push('/')
                  }
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