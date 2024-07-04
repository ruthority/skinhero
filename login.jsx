
import React, { useState } from 'react';
import { Container, Paper } from '@mantine/core';

export default function Page() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your login logic here
    };

    return (
        <div style={{ background: '#A530DC' }}>
            <Container size="sm">
                <Paper shadow="xs" padding="lg" style={{ background: 'yellow' }}>
                    <h1>Login</h1>
                    <form onSubmit={handleSubmit}>
                        <label>
                            Email:
                            <input type="email" value={email} onChange={handleEmailChange} />
                        </label>
                        <br />
                        <label>
                            Password:
                            <input type="password" value={password} onChange={handlePasswordChange} />
                        </label>
                        <br />
                        <button type="submit">Login</button>
                    </form>
                </Paper>
            </Container>
        </div>
    );
}