
import React from 'react';
import { Button, Paper } from '@mantine/core';

export default function Page() {
    const handleSignupWithGmail = () => {
        // Add your logic for signing up with Gmail here
    };

    const handleSignupWithApple = () => {
        // Add your logic for signing up with Apple here
    };

    const handleSignupWithEmail = () => {
        // Add your logic for signing up with email here
    };

    return (
        <div style={{ backgroundColor: '#A530DC' }}>
            <header style={{ backgroundColor: '#FFFF00' }}>Signup</header>
            <Paper>
                <h1>Signup with:</h1>
                <Button variant="outline" color="blue" onClick={handleSignupWithGmail}>
                    Signup with Gmail
                </Button>
                <Button variant="outline" color="black" onClick={handleSignupWithApple}>
                    Signup with Apple
                </Button>
                <Button variant="outline" color="green" onClick={handleSignupWithEmail}>
                    Signup with Email
                </Button>
            </Paper>
        </div>
    );
}