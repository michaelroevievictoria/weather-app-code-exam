// Import necessary dependencies
import { Button } from '@mui/material';
import icon from '/public/images/weather-icon.png'
import { useRouter } from 'next/router';
import { signOut, useSession } from 'next-auth/react';

// Define the props interface
export interface Props { }

// HeaderLayout component
const HeaderLayout: React.FC<Props> = () => {
  const router = useRouter();
  const { data: session } = useSession();
  
  // Function to handle user sign out
  const handleSignOut = async () => {
    await signOut(); // Sign out the user

    window.location.href = '/'; // Redirect to home page
  };

  return (
    <main className='bg-primary'>
      <section className='container md:px-6 px-8 mx-auto relative bg-[#06283D]'>
        <div className="flex flex-col items-center justify-between">
          <div className="w-full items-center justify-between flex">
            <img src={icon.src} width={100} height={100} alt="Weather icon" />
            <div className="items-end justify-center">
              {/* Render logout button if the user is logged in */}
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
