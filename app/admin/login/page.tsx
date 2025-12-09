'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminLogin() {
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        // Simple password check - in production, this would be an API call
        // Default password: "admin123" - you can change this
        const ADMIN_PASSWORD = process.env.NEXT_PUBLIC_ADMIN_PASSWORD || 'admin123';

        if (password === ADMIN_PASSWORD) {
            // Set auth token in localStorage
            localStorage.setItem('admin_authenticated', 'true');
            localStorage.setItem('admin_auth_time', Date.now().toString());
            router.push('/admin');
        } else {
            setError('Invalid password. Please try again.');
            setLoading(false);
        }
    };

    return (
        <div style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(135deg, #031521 0%, #0a2332 100%)',
            padding: '20px'
        }}>
            <div style={{
                width: '100%',
                maxWidth: '400px',
                backgroundColor: '#ffffff',
                borderRadius: '16px',
                boxShadow: '0 10px 40px rgba(0,0,0,0.3)',
                padding: '40px'
            }}>
                <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                    <div style={{
                        width: '80px',
                        height: '80px',
                        margin: '0 auto 20px',
                        backgroundColor: 'rgba(196, 34, 33, 0.1)',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <i className="fas fa-shield-alt" style={{ fontSize: '36px', color: 'var(--accent-color)' }}></i>
                    </div>
                    <h1 style={{
                        fontFamily: 'var(--accent-font)',
                        fontSize: '32px',
                        color: 'var(--primary-color)',
                        margin: '0 0 10px 0'
                    }}>
                        Admin Login
                    </h1>
                    <p style={{ color: 'var(--text-color)', fontSize: '14px', margin: 0 }}>
                        M5 Unity Football Cup
                    </p>
                </div>

                <form onSubmit={handleSubmit}>
                    <div style={{ marginBottom: '20px' }}>
                        <label style={{
                            display: 'block',
                            fontSize: '14px',
                            fontWeight: '600',
                            color: 'var(--primary-color)',
                            marginBottom: '8px'
                        }}>
                            Password
                        </label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter admin password"
                            required
                            style={{
                                width: '100%',
                                padding: '12px 15px',
                                border: '1px solid #ddd',
                                borderRadius: '8px',
                                fontSize: '15px',
                                transition: 'border-color 0.3s ease',
                                outline: 'none'
                            }}
                            onFocus={(e) => e.target.style.borderColor = 'var(--accent-color)'}
                            onBlur={(e) => e.target.style.borderColor = '#ddd'}
                        />
                    </div>

                    {error && (
                        <div style={{
                            padding: '12px',
                            backgroundColor: '#fee',
                            border: '1px solid #fcc',
                            borderRadius: '8px',
                            color: '#c33',
                            fontSize: '14px',
                            marginBottom: '20px'
                        }}>
                            <i className="fas fa-exclamation-circle" style={{ marginRight: '8px' }}></i>
                            {error}
                        </div>
                    )}

                    <button
                        type="submit"
                        disabled={loading}
                        className="btn-admin btn-admin-primary"
                        style={{
                            width: '100%',
                            padding: '14px',
                            opacity: loading ? 0.6 : 1,
                            cursor: loading ? 'not-allowed' : 'pointer'
                        }}
                    >
                        {loading ? 'Logging in...' : 'Login'}
                    </button>
                </form>

                <div style={{
                    marginTop: '30px',
                    paddingTop: '20px',
                    borderTop: '1px solid #f0f0f0',
                    textAlign: 'center'
                }}>
                    <a
                        href="/"
                        style={{
                            color: 'var(--text-color)',
                            fontSize: '14px',
                            textDecoration: 'none',
                            transition: 'color 0.3s ease'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-color)'}
                        onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-color)'}
                    >
                        <i className="fas fa-arrow-left" style={{ marginRight: '8px' }}></i>
                        Back to Website
                    </a>
                </div>
            </div>
        </div>
    );
}
