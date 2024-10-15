import { Button, Snackbar, SnackbarCloseReason } from '@mui/material';
import React, { useEffect, useState } from 'react';

interface BankCardProps {
    bankName: string;
    bankLogo: string;
    accountNumber: string;
    accountHolder: string;
}
// FONT MONSTERAT Inconsolata


const BankCard: React.FC<BankCardProps> = ({ bankName, bankLogo, accountNumber, accountHolder }) => {
    const [copySuccess, setCopySuccess] = useState('');

    useEffect(() => {
        console.log(copySuccess)
        console.log(copySuccess.length)
    }, [copySuccess])

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(accountNumber);
            setCopySuccess('No. Rekening berhasil disalin!'); // Feedback message
            setTimeout(() => setCopySuccess(''), 2000);
        } catch (err) {
            console.error('Failed to copy: ', err);
            setCopySuccess('Gagal menyalin No. Rekening.'); // Error message
        }
    };

    const handleClose = (
        event: React.SyntheticEvent | Event,
        reason?: SnackbarCloseReason,
    ) => {
        if (reason === 'clickaway') {
            return;
        }

        setCopySuccess('');
    };
    return (
        <>
            <div style={{
                borderRadius: '15px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                padding: '20px',
                backgroundColor: '#f8f8f8',
                margin: '10px',
                width: '300px',
                height: '180px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                backgroundImage: `url('https://plus.unsplash.com/premium_photo-1675650901498-6c273d67b31c?q=80&w=1998&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
                backgroundSize: 'cover',
                position: 'relative'
            }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <img src={bankLogo} alt={bankName} style={{ width: '80px', height: '30px' }} />
                    <div>
                        <img src="https://cdn.iconscout.com/icon/premium/png-512-thumb/card-chip-6280445-5238265.png?f=webp&w=512" alt="chip" style={{ width: '40px', height: '50px' }} />
                    </div>
                </div>
                <div style={{ fontSize: '20px', fontWeight: 'bold' }}>{accountNumber}</div>
                <div style={{ fontSize: '16px', color: '#555' }}>{accountHolder}</div>
                <Button
                    style={{
                        backgroundColor: '#333',
                        color: '#fff',
                        padding: '10px',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        width: '100%',
                        textTransform: 'none'
                    }}
                    onClick={copyToClipboard}
                >
                    Salin No. Rekening
                </Button>
            </div>
            <Snackbar
            key={'snackbar'}
                open={copySuccess.length > 0}
                autoHideDuration={6000}
                onClose={handleClose}
                message= {copySuccess}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }} // Centered at the bottom
                // className='m-12 fixed'
            />
        </>
    );
}
export default BankCard;
