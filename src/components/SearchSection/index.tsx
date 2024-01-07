'use client'
import { Typography, TextField, Button, IconButton, InputAdornment } from '@mui/material';
import React, { useState } from 'react';
import icon from '/public/images/weather-icon.png'
import SearchIcon from '@mui/icons-material/Search';
export interface props {

};

const SearchSection: React.FC<props> = ({

}) => {

    const [searchText, setSearchText] = useState('');

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(event.target.value);
    };
    const handleSearch = () => {
        // Logic for handling the search based on 'searchText'
        console.log('Searching for:', searchText);
    };
    return (
        <section className='bg-primary h-full pt-32'>
            <div className='flex flex-col items-center justify-center h-full text-center'>
                <div className='flex flex-col items-center'>
                    <Typography className='text-[#ffff] text-left mt-4 '>
                        John Smith
                    </Typography>
                    <Typography className='text-[#ffff] text-left mt-4 '>
                        https://github.com/test
                    </Typography>
                    <div className='mt-24 w-full flex-1 text-left '>
                        <TextField
                            // label="Search"
                            hiddenLabel
                            sx={{ background: '#ffff', borderRadius: 50, minWidth: 500 }}

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
                        <Button variant="contained" onClick={() => console.log('test')}>Display Weather</Button>
                    </div>
                </div>
            </div>
            {/* <div className='flex flex-col items-center justify-center h-full text-center'>
                <div className='flex flex-col items-center'>
                    <Typography className='text-[#ffff] text-left mt-4 '>
                        John Smith
                    </Typography>
                    <Typography className='text-[#ffff] text-left mt-4 '>
                        https://github.com/test
                    </Typography>
                    <div className='mt-24 w-full flex-1 text-left '>
                        <TextField
                            // label="Search"
                            hiddenLabel
                            sx={{ background: '#ffff', borderRadius: 50, minWidth: 500 }}

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
                        <Button variant="contained" onClick={() => console.log('test')}>Display Weather</Button>
                    </div>
                </div>
            </div> */}
        </section>
    );
};

export default SearchSection;