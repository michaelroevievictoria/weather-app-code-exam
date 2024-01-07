'use client'
import { Typography, TextField, Button, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, Paper } from '@mui/material';
import React, { useState, useEffect } from 'react';
import icon from '/public/images/weather-icon.png'
import SearchIcon from '@mui/icons-material/Search';
import _ from 'lodash';
import moment from 'moment';
import { useSession } from 'next-auth/react';
import { toast } from 'react-toastify';
export interface props {

};

interface Column {
    id: any;
    label: string;
    minWidth?: number;
    align?: 'center';
    // format?: (value: number) => string;
}

const columns: readonly Column[] = [
    { id: 'date', label: 'Date', minWidth: 170 },
    { id: 'temp', label: 'Temp(F)', minWidth: 100 },
    {
        id: 'description',
        label: 'Description',
        minWidth: 170,
        // align: 'center',
        // format: (value: number) => value.toLocaleString('en-US'),
    },
    {
        id: 'main',
        label: 'Main',
        minWidth: 170,
        // align: 'right',
        // format: (value: number) => value.toLocaleString('en-US'),
    },
    {
        id: 'pressure',
        label: 'Pressure',
        minWidth: 170,
        // align: 'right',
        // format: (value: number) => value.toFixed(2),
    },
    {
        id: 'humidity',
        label: 'Humidity',
        minWidth: 170,
        // align: 'right',
        // format: (value: number) => value.toFixed(2),
    },

];


const WeatherForecast: React.FC<props> = ({

}) => {


    const [viewportWidth, setViewportWidth] = useState<number>(window.innerWidth);

    const [searchText, setSearchText] = useState<string>('');
    const [isShowTable, setIshowTable] = useState<boolean>(false)

    const [weatherData, setWeatherData] = useState<any>(null);

    const { data: session } = useSession();
    useEffect(() => {
        if (_.isEmpty(session)) { // auth checker
            window.location.href = '/';
        }

        const handleResize = () => setViewportWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);


    }, []);

    const notify = () => {
        toast.error('No data found');
    };
    const fetchWeatherData = async () => {
        const API_KEY = '63e44ba0c29de2206284aea9ebb476ec'; // Replace with your OpenWeatherMap API key
        const cityName = searchText; // Replace with the city you want to get the forecast for
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`;

        try {
            const response = await fetch(apiUrl);
            if (response.ok) {
                const data = await response.json();
                console.log('data', data)
                setWeatherData([data]);
                setIshowTable(true)
            } else {
                notify()
                setIshowTable(false)
                throw new Error('Failed to fetch data');
            }
        } catch (error) {
            notify()
            setIshowTable(false)
            console.error('Error fetching data:', error);
        }
    };

    // console.log('weatherData', weatherData)

    const rows: any = [{
        date: '09/01/2020',
        temp: '75',
        description: 'asdasd',
        main: 'clear',
        pressure: 10123123,
        humidity: 123
    }]

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(event.target.value);
    };
    const handleSearch = () => {
        // Logic for handling the search based on 'searchText'
        console.log('Searching for:', searchText);
    };
    return (
        <section className='bg-primary h-full pt-32'>
            {isShowTable ?
                <div className='flex flex-col items-center justify-center h-full text-center'>
                    <Paper elevation={0} variant="outlined" square className='md:w-5/6 w-full'>
                        <TableContainer >

                            <Table stickyHeader aria-label="sticky table"
                                sx={{
                                    "& .MuiTableRow-root:hover": {
                                        backgroundColor: "#736F6F"
                                    }
                                }}>
                                {/* Top Table */}
                                {viewportWidth >= 768 ?
                                    <TableHead className='md:block hidden'>
                                        <TableRow sx={{ backgroundColor: '#f2f2f2' }} className=''>
                                            {columns.map((column) => {
                                                if (column.id == `date`) {
                                                    return (
                                                        <TableCell
                                                            key={column.id}
                                                            align={column.align}
                                                            className={`text-[1rem] !font-bold`}
                                                            style={{ minWidth: column.minWidth, color: '#736F6F' }}
                                                        >
                                                            {column.label}
                                                        </TableCell>
                                                    )
                                                } else {
                                                    return (
                                                        <TableCell
                                                            key={column.id}
                                                            align={column.align}
                                                            className={`text-[1rem] !font-bold `}
                                                            style={{ minWidth: column.minWidth, color: '#736F6F' }}
                                                        >

                                                        </TableCell>
                                                    )
                                                }
                                            })}
                                        </TableRow>
                                    </TableHead> :
                                    null
                                }
                                {/* second table row */}
                                <TableHead>
                                    <TableRow>
                                        {columns.map((column) => {
                                            if (column.id == `date`) {
                                                return (
                                                    <TableCell
                                                        key={column.id}
                                                        align={column.align}
                                                        className={`text-[1rem] !font-bold `}
                                                        style={{ minWidth: column.minWidth, color: '#736F6F' }}
                                                    >
                                                        (mm/dd/yyyy)
                                                    </TableCell>
                                                )
                                            } else if (column.id == `temp`) {
                                                return (
                                                    <TableCell
                                                        key={column.id}
                                                        align={column.align}
                                                        className={`text-[1rem] !font-bold `}
                                                        style={{ minWidth: column.minWidth, color: '#736F6F' }}
                                                    >
                                                        {column.label}
                                                    </TableCell>
                                                )
                                            } else {
                                                if (viewportWidth >= 768) {
                                                    return (
                                                        <TableCell
                                                            key={column.id}
                                                            align={column.align}
                                                            className={`text-[1rem] !font-bold `}
                                                            style={{ minWidth: column.minWidth, color: '#736F6F' }}
                                                        >
                                                            {column.label}
                                                        </TableCell>
                                                    )
                                                }


                                            }


                                        })}
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {
                                        weatherData.map((row: any, index: any) => {
                                            return (
                                                <TableRow key={index} hover role="checkbox" tabIndex={-1} className='cursor-pointer'>
                                                    {columns.map((column) => {
                                                        const value = row;
                                                        return (
                                                            <TableCell key={index} align={column.align}
                                                                className='text-[1rem] bg-lightText font-bold'
                                                               
                                                            >
                                                                {column?.id === 'date' ?
                                                                    <>
                                                                        <Typography className='text-[1rem] font-bold' noWrap>{moment(new Date()).format('MM/DD/YYYY')}</Typography>
                                                                        {/* {value} */}
                                                                    </> :
                                                                    column?.id === 'temp' ?
                                                                        <>
                                                                            <Typography className='text-[1rem] font-bold' noWrap>{_.get(value, 'main.temp', 0)}</Typography>
                                                                            {/* {value} */}
                                                                        </> :

                                                                        column?.id === 'description' && viewportWidth >= 768 ?
                                                                            <>
                                                                                <Typography className='text-[1rem] font-bold' noWrap>{_.get(value, 'weather[0].description', 'test')}</Typography>
                                                                                {/* {value} */}
                                                                            </> :
                                                                            column?.id === 'main' && viewportWidth >= 768 ?
                                                                                <>
                                                                                    <Typography className='text-[1rem] font-bold' noWrap>{_.get(value, 'weather[0].main', '')}</Typography>
                                                                                    {/* {value} */}
                                                                                </> :
                                                                                column?.id === 'pressure' && viewportWidth >= 768 ?
                                                                                    <>
                                                                                        <Typography className='text-[1rem] font-bold' noWrap>{_.get(value, 'main.pressure', '')}</Typography>
                                                                                        {/* {value} */}
                                                                                    </> :
                                                                                    column?.id === 'humidity' && viewportWidth >= 768 ?
                                                                                        <>
                                                                                            <Typography className='text-[1rem] font-bold' noWrap>{_.get(value, 'main.humidity', '')}</Typography>
                                                                                            {/* {value} */}
                                                                                        </> : null
                                                                }
                                                            </TableCell>
                                                        );
                                                    })}


                                                </TableRow>
                                            );
                                        })}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Paper>
                    <div className='mt-8 w-full flex-1 flex	justify-end'>
                        <Button variant="contained" className='!bg-[#007bff] !text-[#ffff]' onClick={() => setIshowTable(false)}>Back</Button>
                    </div>
                </div>

                :
                <div className='flex flex-col items-center justify-center h-full text-center md:px-6 px-8 mx-auto'>
                    <div className='flex flex-col items-center'>
                        <Typography className='text-[#ffff] text-left mt-4 '>
                            {_.get(session, 'user.name', '')}
                        </Typography>
                        <Typography className='text-[#ffff] text-left mt-4 '>
                            {_.get(session, 'user.email', '')}
                        </Typography>
                        <div className='mt-24 w-full flex-1 text-left px-8'>
                            <TextField
                                // label="Search"
                                hiddenLabel
                                sx={{ background: '#ffff', borderRadius: 50, minWidth: 400, }}

                                placeholder={`City`}
                                variant="filled"
                                value={searchText}
                                onChange={handleSearchChange}
                                InputProps={{
                                    startAdornment: (
                                        <IconButton onClick={handleSearch}>
                                            <SearchIcon />
                                        </IconButton>
                                    ),
                                }}
                            />

                        </div>
                        <div className='mt-8 w-full flex-1'>
                            <Button variant="contained"
                                disabled={_.isEmpty(searchText)}
                                style={{
                                    color: _.isEmpty(searchText) ? `#C6C6C6` : undefined, backgroundColor: _.isEmpty(searchText) ? `#EBEBE4` : undefined,
                                    cursor: _.isEmpty(searchText) ? 'not-allowed' : 'pointer'


                                }}
                                onClick={() => {
                                    fetchWeatherData()

                                    // setIshowTable(true)
                                }}>Display Weather</Button>
                        </div>
                    </div>
                </div>
            }
        </section>
    );
};

export default WeatherForecast;