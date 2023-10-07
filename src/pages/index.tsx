import React from 'react';
import Head from 'next/head';
import WindowWrapper from '@/components/WindowWrapper/WindowWrapper';
import HomePage from '@/components/HomePage/HomePage';

export default function Home() {
    return (
        <div>
            <Head>
                <title>Quarrel.fyi | Home</title>
            </Head>
           
            <WindowWrapper cls='noise'>
                <HomePage />
            </WindowWrapper>
            
        </div>
    );
}
