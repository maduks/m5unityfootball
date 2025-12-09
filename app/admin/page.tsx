'use client';

import { useEffect, useState } from 'react';
import StatsCard from '@/components/admin/StatsCard';
import { getPlayers, getTeams, Team } from '@/lib/mockData';

export default function AdminDashboard() {
    const [stats, setStats] = useState({
        teams: 0,
        players: 0,
    });
    const [recentTeams, setRecentTeams] = useState<Team[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const [teamsData, playersData] = await Promise.all([getTeams(), getPlayers()]);
            setStats({
                teams: teamsData.length,
                players: playersData.length,
            });
            // Get the 3 most recent teams (in a real app, these would be sorted by creation date)
            setRecentTeams(teamsData.slice(0, 3));
        };
        fetchData();
    }, []);

    return (
        <div>
            <div className="admin-header">
                <h1>Dashboard Overview</h1>
                <p>Welcome to the M5 Unity Football Cup Admin Panel.</p>
            </div>

            <div className="stats-grid">
                <StatsCard
                    title="Total Teams"
                    value={stats.teams}
                    icon="fa-shield-alt"
                    colorClass="blue"
                />
                <StatsCard
                    title="Total Players"
                    value={stats.players}
                    icon="fa-users"
                    colorClass="green"
                />
            </div>

            {/* Recent Activity Section */}
            <div className="admin-card" style={{ marginTop: '30px' }}>
                <div className="admin-card-header">
                    <h2>Recent Teams</h2>
                </div>
                <div style={{ padding: '20px 30px' }}>
                    {recentTeams.length > 0 ? (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                            {recentTeams.map((team) => (
                                <div
                                    key={team.id}
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                        padding: '15px',
                                        backgroundColor: '#f8f9fa',
                                        borderRadius: '8px',
                                        transition: 'background-color 0.2s ease',
                                    }}
                                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#e9ecef'}
                                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#f8f9fa'}
                                >
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                                        <div
                                            style={{
                                                width: '50px',
                                                height: '50px',
                                                borderRadius: '8px',
                                                backgroundColor: 'rgba(0, 123, 255, 0.1)',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                            }}
                                        >
                                            <i className="fas fa-shield-alt" style={{ fontSize: '20px', color: '#007bff' }}></i>
                                        </div>
                                        <div>
                                            <h4 style={{ margin: 0, fontSize: '16px', fontWeight: '600', color: 'var(--primary-color)' }}>
                                                {team.name}
                                            </h4>
                                            <p style={{ margin: '3px 0 0 0', fontSize: '14px', color: 'var(--text-color)' }}>
                                                {team.village} • Coach: {team.coach}
                                            </p>
                                        </div>
                                    </div>
                                    <div style={{ textAlign: 'right' }}>
                                        <span style={{ fontSize: '13px', color: 'var(--text-color)', fontWeight: '500' }}>
                                            Founded {team.foundedYear}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p style={{ textAlign: 'center', color: 'var(--text-color)', padding: '20px 0' }}>
                            No teams registered yet.
                        </p>
                    )}
                </div>
            </div>

            {/* Quick Actions */}
            <div style={{ marginTop: '30px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
                <a
                    href="/admin/teams"
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '15px',
                        padding: '20px',
                        backgroundColor: '#ffffff',
                        borderRadius: '12px',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                        textDecoration: 'none',
                        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-3px)';
                        e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.12)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.08)';
                    }}
                >
                    <div style={{ fontSize: '24px', color: 'var(--accent-color)' }}>
                        <i className="fas fa-shield-alt"></i>
                    </div>
                    <div>
                        <h4 style={{ margin: 0, fontSize: '15px', color: 'var(--primary-color)', fontWeight: '600' }}>
                            Manage Teams
                        </h4>
                        <p style={{ margin: '3px 0 0 0', fontSize: '13px', color: 'var(--text-color)' }}>
                            View and edit
                        </p>
                    </div>
                </a>

                <a
                    href="/admin/players"
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '15px',
                        padding: '20px',
                        backgroundColor: '#ffffff',
                        borderRadius: '12px',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                        textDecoration: 'none',
                        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-3px)';
                        e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.12)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.08)';
                    }}
                >
                    <div style={{ fontSize: '24px', color: 'var(--accent-color)' }}>
                        <i className="fas fa-users"></i>
                    </div>
                    <div>
                        <h4 style={{ margin: 0, fontSize: '15px', color: 'var(--primary-color)', fontWeight: '600' }}>
                            View Players
                        </h4>
                        <p style={{ margin: '3px 0 0 0', fontSize: '13px', color: 'var(--text-color)' }}>
                            Filter by team
                        </p>
                    </div>
                </a>
            </div>
        </div>
    );
}
