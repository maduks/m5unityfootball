'use client';

import { useEffect, useState } from 'react';
import { Player, Team, getPlayers, getTeams } from '@/lib/mockData';

export default function PlayersPage() {
    const [players, setPlayers] = useState<Player[]>([]);
    const [teams, setTeams] = useState<Team[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedTeamId, setSelectedTeamId] = useState<string>('all');

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const [playersData, teamsData] = await Promise.all([getPlayers(), getTeams()]);
            setPlayers(playersData);
            setTeams(teamsData);
            setLoading(false);
        };
        fetchData();
    }, []);

    const getTeamName = (teamId: string) => {
        return teams.find((t) => t.id === teamId)?.name || 'Unknown Team';
    };

    const filteredPlayers = players.filter((player) => {
        const matchesSearch = player.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            player.position.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesTeam = selectedTeamId === 'all' || player.teamId === selectedTeamId;
        return matchesSearch && matchesTeam;
    });

    return (
        <div>
            <div className="admin-card">
                <div className="admin-card-header">
                    <div>
                        <h2>Players</h2>
                        <p style={{ margin: 0, fontSize: '14px', color: 'var(--text-color)' }}>
                            View all registered players
                        </p>
                    </div>
                    <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
                        <div style={{ position: 'relative', minWidth: '200px' }}>
                            <i className="fas fa-filter" style={{ position: 'absolute', left: '15px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-color)' }}></i>
                            <select
                                value={selectedTeamId}
                                onChange={(e) => setSelectedTeamId(e.target.value)}
                                style={{
                                    width: '100%',
                                    padding: '10px 15px 10px 40px',
                                    border: '1px solid #ddd',
                                    borderRadius: '8px',
                                    fontSize: '14px'
                                }}
                            >
                                <option value="all">All Teams</option>
                                {teams.map((team) => (
                                    <option key={team.id} value={team.id}>
                                        {team.name}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="admin-search">
                            <i className="fas fa-search"></i>
                            <input
                                type="text"
                                placeholder="Search players..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                    </div>
                </div>

                {loading ? (
                    <div className="loading-spinner">
                        <div className="spinner"></div>
                        <p>Loading players...</p>
                    </div>
                ) : (
                    <table className="admin-table">
                        <thead>
                            <tr>
                                <th>Player Name</th>
                                <th>Position</th>
                                <th>Jersey No.</th>
                                <th>Team</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredPlayers.length > 0 ? (
                                filteredPlayers.map((player) => (
                                    <tr key={player.id}>
                                        <td><strong>{player.name}</strong></td>
                                        <td>
                                            <span style={{
                                                padding: '4px 12px',
                                                backgroundColor: '#f0f0f0',
                                                borderRadius: '4px',
                                                fontSize: '13px',
                                                fontWeight: '600'
                                            }}>
                                                {player.position}
                                            </span>
                                        </td>
                                        <td style={{ fontFamily: 'monospace', fontWeight: '600' }}>
                                            #{player.jerseyNumber}
                                        </td>
                                        <td>{getTeamName(player.teamId)}</td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={4} className="empty-state">
                                        No players found matching your criteria.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
}
