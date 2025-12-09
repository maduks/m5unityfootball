'use client';

import { usePathname } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Preloader from '@/components/Preloader';
import ClientScripts from '@/components/ClientScripts';

export default function ConditionalLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const isAdminRoute = pathname?.startsWith('/admin');

    if (isAdminRoute) {
        // Admin routes: no header, footer, preloader, or scripts
        return <>{children}</>;
    }

    // Regular routes: full layout
    return (
        <>
            <Preloader />
            <Header />
            <main>{children}</main>
            <Footer />
            <ClientScripts />
        </>
    );
}
