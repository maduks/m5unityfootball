'use client';

import { useEffect, useState } from 'react';
import { Player } from '@/lib/mockData';
export default function PlayersPage() {
    const [players, setPlayers] = useState<Player[]>([]);
    const [teams, setTeams] = useState<Team[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedTeamId, setSelectedTeamId] = useState<string>('all');

    useEffect(() => {
        const fetchPlayers = async () => {
      try {
        setLoading(true)
        const response = await fetch('https://api.skyshorelubs.com/players/getPlayers')
        const data = await response.json()
        if (data?.players) {
            setLoading(false)
          setPlayers(data.players.slice(0, 2))

        }
      } catch (error) {
        console.error('Failed to fetch players:', error)
      }
    }
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
        fetchPlayers();
        fetchTeams()
    }, []);


     
  const getTeam=(teamId:string)=>{
    const team = teams.filter((team) => team._id === teamId)
    return team[0]?.teamName
  }
    

    const filteredPlayers = players.filter((player) => {
        const matchesSearch = player.playerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
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
                                <th>Village</th>
                                 <th>Phone Number</th>
                                 <th>fatherVillage</th>
                                 <th>motherVillage</th>
                                <th>Team</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredPlayers.length > 0 ? (
                                filteredPlayers.map((player) => (
                                    <tr key={player.id}>
                                        <td><strong>{player.playerName}</strong></td>
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
                                            {player.village}
                                        </td>
                                         <td style={{ fontFamily: 'monospace', fontWeight: '600' }}>
                                            {player.phoneNumber}
                                        </td>
                                        <td style={{ fontFamily: 'monospace', fontWeight: '600' }}>
                                            {player.fatherVillage}
                                        </td>
                                        <td style={{ fontFamily: 'monospace', fontWeight: '600' }}>
                                            {player.motherVillage}
                                        </td>
                                        
                                         <td style={{ fontFamily: 'monospace', fontWeight: '600' }}>
                                            {getTeam(player.team)}
                                        </td>
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
