import icon from '/public/images/weather-icon.png'
export interface props {
  
};

const HeaderLayout: React.FC<props> = ({
    
}) => {

    return (
        <main className='bg-primary'>
        <section className='container md:px-6 sm:px-8 px-0 mx-auto relative '>
          <div className="flex flex-col items-center justify-between">
            <div className="w-full items-center justify-between flex " >
              <img src={icon.src} width={100} height={100} />
              <div className="items-end justify-center ">
                test
              </div>
            </div>

          </div>
        </section>
       

       
      </main>
    );
};

export default HeaderLayout;