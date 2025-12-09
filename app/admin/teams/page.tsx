'use client';

import { useEffect, useState } from 'react';
import { Team, getTeams } from '@/lib/mockData';
import TeamModal from '@/components/admin/TeamModal';

export default function TeamsPage() {
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedTeam, setSelectedTeam] = useState<Team | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [teams,setTeams] = useState([]);

    useEffect(() => {
        fetchTeams();
    }, []);

    

    const handleEdit = (team: any) => {
        setSelectedTeam(team);
        setIsModalOpen(true);
    };

    const handleSave = (updatedTeam: any) => {
        setTeams((teams:any) => teams.map((t:any) => (t.id === updatedTeam.id ? updatedTeam : t)));
    };

    const filteredTeams = teams.filter((team:any) =>
        team?.teamName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        team?.village?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const fetchTeams = async () => {
      try {
        const response = await fetch('https://api.skyshorelubs.com/teams/getTeams')
        const data = await response.json()
        if (data?.teams) {
          setTeams(data.teams)
          setLoading(false)
        }
      } catch (error) {
        console.error('Failed to fetch teams:', error)
      }
    }

    return (
        <div>
            <div className="admin-card">
                <div className="admin-card-header">
                    <div>
                        <h2>Manage Teams</h2>
                        <p style={{ margin: 0, fontSize: '14px', color: 'var(--text-color)' }}>
                            View and update team details
                        </p>
                    </div>
                    <div className="admin-search">
                        <i className="fas fa-search"></i>
                        <input
                            type="text"
                            placeholder="Search teams..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>

                {loading ? (
                    <div className="loading-spinner">
                        <div className="spinner"></div>
                        <p>Loading teams...</p>
                    </div>
                ) : (
                    <table className="admin-table">
                        <thead>
                            <tr>
                                <th>Team Name</th>
                                <th>Village</th>
                                <th>Coach</th>
                                <th>Total Players</th>
                                <th>Paid</th>
                                <th style={{ textAlign: 'right' }}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredTeams.length > 0 ? (
                                filteredTeams.map((team:any) => (
                                    <tr key={team.id}>
                                        <td><strong>{team.teamName}</strong></td>
                                        <td>{team.village}</td>
                                        <td>{team.coachName}</td>
                                        <td>{team.players.length}</td>
                                        <td>{team.paid ==true? "Yes":"No"}</td>

                                        <td style={{ textAlign: 'right' }}>
                                            <button
                                                onClick={() => handleEdit(team)}
                                                className="btn-icon"
                                                title="Edit Team"
                                            >
                                                <i className="fas fa-edit"></i>
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={5} className="empty-state">
                                        No teams found .
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                )}
            </div>

            <TeamModal
                team={selectedTeam}
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSave={handleSave}
            />
        </div>
    );
}
