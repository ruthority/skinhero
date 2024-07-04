
import React from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Paper, Typography } from '@mantine/core';

export default function Page() {
    return (
        <Container size="sm">
            <Paper padding="lg" shadow="xs" radius="md">
                <Typography variant="h1" align="center" style={{ marginBottom: '1rem' }}></Typography>
                Welcome to the Skin Health Diagnosis Web App!

                <Typography variant="body1" align="center">
                    Here you can diagnose your skin health and get personalized recommendations.
                </Typography>
                <Outlet />
            </Paper>
        </Container >
    );
}