'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const AdminSidebar = () => {
    const pathname = usePathname();

    const navItems = [
        { name: 'Dashboard', href: '/admin', icon: 'fa-tachometer-alt' },
        { name: 'Teams', href: '/admin/teams', icon: 'fa-shield-alt' },
        { name: 'Players', href: '/admin/players', icon: 'fa-users' },
    ];

    return (
        <aside className="admin-sidebar">
            <div style={{marginBottom: '0px'}} className="admin-sidebar-header">
                {/* <h2>Admin Panel</h2> */}
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
                <Link href="/">&larr; Back to Website</Link>
            </div>
        </aside>
    );
};

export default AdminSidebar;
