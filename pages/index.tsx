import Link from 'next/link';
import { MainLayout } from '../components/layouts/MainLayout';
import { DarkLayout } from '../components/layouts/DarkLayout';
import { ReactNode } from 'react';

export default function HomePage() {
    return (
        <>
            <h1>Home Page</h1>

            <h1 className='title'>
                {/* Ir a <a href="/about">About</a> */}
                Ir a <Link href='/about'>About</Link>
            </h1>

            <p className={'description'}>
                Get started by editing{' '}
                <code className={'code'}>pages/index.js</code>
            </p>
        </>
    );
}

HomePage.getLayout = function getLayout(page: ReactNode) {
    return (
        <MainLayout>
            <DarkLayout>{page}</DarkLayout>
        </MainLayout>
    );
};
