import HeaderLayout from '@/components/HeaderLayout';
import WeatherForecast from '@/components/WeatherForecast';
import { Typography } from '@mui/material';
import _ from 'lodash';



const Weather: React.FC = () => {

    return (
        <main className=''>
            <HeaderLayout />
            <section className='container md:px-6 px-8 mx-auto relative '>
                <WeatherForecast />
            </section>
        </main>
    )
};

export default Weather;