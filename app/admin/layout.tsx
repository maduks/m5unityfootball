import AdminSidebar from '@/components/admin/AdminSidebar';

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="admin-wrapper">
            <AdminSidebar />
            <div className="admin-content">
                {children}
            </div>
        </div>
    );
}
