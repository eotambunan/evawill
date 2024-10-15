'use client'

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import { useParams, usePathname, useRouter } from 'next/navigation';

export default function MyNavbar() {
    const pathName = usePathname()
    const router = useRouter()
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <div className='flex w-full'>
                        <Typography variant="subtitle2" component="div" className={`basis-1/6 ${pathName === '/' && 'text-red-500'}`}>
                            <Link href={'/'}>Home</Link>
                        </Typography>
                        <Typography variant="subtitle2" component="div" className={`basis-1/6 ${pathName === '/dashboard' && 'text-red-500'}`}>
                            <Link href={'/dashboard'}>Dashboard</Link>
                        </Typography>
                        <Typography variant="subtitle2" component="div" className={`basis-1/6 ${pathName === '/product' && 'text-red-500'}`}>
                            <Link href={'/product'}>Product</Link>
                        </Typography>


                    </div>
                    <Button color="inherit" onClick={() => router.push('/login')}>Login</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
