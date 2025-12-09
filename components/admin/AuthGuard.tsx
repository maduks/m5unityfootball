'use client';

import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';

export default function AuthGuard({ children }: { children: React.ReactNode }) {
    const router = useRouter();
    const pathname = usePathname();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Don't check auth on login page
        if (pathname === '/admin/login') {
            setIsLoading(false);
            return;
        }

        // Check if user is authenticated
        const authToken = localStorage.getItem('admin_authenticated');
        const authTime = localStorage.getItem('admin_auth_time');

        if (authToken === 'true' && authTime) {
            // Check if session is still valid (24 hours)
            const sessionAge = Date.now() - parseInt(authTime);
            const maxAge = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

            if (sessionAge < maxAge) {
                setIsAuthenticated(true);
                setIsLoading(false);
            } else {
                // Session expired
                localStorage.removeItem('admin_authenticated');
                localStorage.removeItem('admin_auth_time');
                router.push('/admin/login');
            }
        } else {
            // Not authenticated
            router.push('/admin/login');
        }
    }, [pathname, router]);

    // Show loading state while checking auth
    if (isLoading) {
        return (
            <div style={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#f5f5f5'
            }}>
                <div style={{ textAlign: 'center' }}>
                    <div className="spinner" style={{
                        width: '50px',
                        height: '50px',
                        margin: '0 auto 20px',
                        border: '4px solid #f0f0f0',
                        borderTopColor: 'var(--accent-color)',
                        borderRadius: '50%',
                        animation: 'spin 1s linear infinite'
                    }}></div>
                    <p style={{ color: 'var(--text-color)' }}>Verifying access...</p>
                </div>
            </div>
        );
    }

    // If on login page or authenticated, render children
    if (pathname === '/admin/login' || isAuthenticated) {
        return <>{children}</>;
    }

    // Otherwise, don't render anything (redirecting)
    return null;
}
