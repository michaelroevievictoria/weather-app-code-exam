import HeaderLayout from '@/components/HeaderLayout';
import SearchSection from '@/components/SearchSection';
import { Typography } from '@mui/material';
import _ from 'lodash';


const Weather: React.FC = () => {


    return (
        <main>
            <HeaderLayout />

            <SearchSection />
        </main>
    )
};

export default Weather;