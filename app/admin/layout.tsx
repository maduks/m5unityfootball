import AdminSidebar from '@/components/admin/AdminSidebar';
import AuthGuard from '@/components/admin/AuthGuard';

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <AuthGuard>
            <div className="admin-wrapper">
                <AdminSidebar />
                <div className="admin-content">
                    {children}
                </div>
            </div>
        </AuthGuard>
    );
}
