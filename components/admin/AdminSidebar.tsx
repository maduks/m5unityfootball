'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

const AdminSidebar = () => {
    const pathname = usePathname();
    const router = useRouter();

    const navItems = [
        { name: 'Dashboard', href: '/admin', icon: 'fa-tachometer-alt' },
        { name: 'Teams', href: '/admin/teams', icon: 'fa-shield-alt' },
        { name: 'Players', href: '/admin/players', icon: 'fa-users' },
    ];

    const handleLogout = () => {
        localStorage.removeItem('admin_authenticated');
        localStorage.removeItem('admin_auth_time');
        router.push('/admin/login');
    };

    return (
        <aside className="admin-sidebar">
            <div style={{ marginBottom: '0px' }} className="admin-sidebar-header">
                <h2>Admin Panel</h2>
            </div>
            <nav className="admin-nav">
                {navItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`admin-nav-item ${isActive ? 'active' : ''}`}
                        >
                            <i className={`fas ${item.icon}`}></i>
                            <span>{item.name}</span>
                        </Link>
                    );
                })}
            </nav>
            <div className="admin-sidebar-footer">
                <button
                    onClick={handleLogout}
                    style={{
                        background: 'none',
                        border: 'none',
                        color: 'rgba(255,255,255,0.5)',
                        fontSize: '14px',
                        cursor: 'pointer',
                        padding: 0,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        transition: 'color 0.3s ease'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#ffffff'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}
                >
                    <i className="fas fa-sign-out-alt"></i>
                    Logout
                </button>
            </div>
        </aside>
    );
};

export default AdminSidebar;
