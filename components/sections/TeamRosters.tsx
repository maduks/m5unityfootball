'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

interface Player {
    _id: string;
    playerName: string;
    position: string;
    jerseyNumber?: number;
    passport?: string;
}

interface Team {
    _id: string;
    teamName: string;
    village: string;
    players: Player[];
}

export default function TeamSquads() {
    const [teams, setTeams] = useState<Team[]>([])
    const [loading, setLoading] = useState(true)
    const [selectedPassport, setSelectedPassport] = useState<string | null>(null)

    useEffect(() => {
        const fetchTeams = async () => {
            try {
                const response = await fetch('https://api.skyshorelubs.com/teams/getTeams')
                const data = await response.json()
                if (data?.teams) {
                    setTeams(data.teams)
                }
            } catch (error) {
                console.error('Failed to fetch teams:', error)
            } finally {
                setLoading(false)
            }
        }
        fetchTeams()
    }, [])

    if (loading) {
        return (
            <div className="team-squads section-padding">
                <div className="container">
                    <div className="loading-spinner" style={{ textAlign: 'center', padding: '50px' }}>
                        <div className="spinner"></div>
                        <p>Loading squads...</p>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="team-squads section-padding">
            <div className="container">
                <div className="row section-row">
                    <div className="col-lg-12">
                        <div className="section-title section-title-center">
                            <div className="section-bg-title wow fadeInUp">
                                <span>Squads</span>
                            </div>
                            <h3 className="wow fadeInUp" data-wow-delay="0.2s">Team Rosters</h3>
                            <h2 className="text-anime-style-2" data-cursor="-opaque">
                                Meet the Warriors of Each Village
                            </h2>
                        </div>
                    </div>
                </div>

                <div className="row">
                    {teams.map((team, index) => (
                        <div key={team._id} className="col-lg-6 col-xl-4 mb-5">
                            <div className="squad-card wow fadeInUp" data-wow-delay={`${index * 0.1}s`}>
                                <div className="squad-header">
                                    <div className="team-info">
                                        <h2>{team.teamName}</h2>
                                        <p>{team.village}</p>
                                    </div>
                                    <div className="team-badge">
                                        <i className="fas fa-shield-alt"></i>
                                    </div>
                                </div>

                                <div className="squad-body">
                                    <div className="table-responsive">
                                        <table className="squad-table">
                                            <thead>
                                                <tr>
                                                    <th style={{ width: '40px' }}>#</th>
                                                    <th style={{ width: '40px' }}>Img</th>
                                                    <th>Player</th>
                                                    <th style={{ textAlign: 'right' }}>Pos</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {team.players && team.players.length > 0 ? (
                                                    team.players.map((player, pIndex) => (
                                                        <tr key={player._id || pIndex}>
                                                            <td className="jersey-num">{pIndex + 1}</td>
                                                            <td className="player-passport-cell">
                                                                <div
                                                                    className="player-thumb"
                                                                    onClick={() => player.passport && setSelectedPassport(player.passport)}
                                                                >
                                                                    {player.passport ? (
                                                                        <img src={player.passport} alt={player.playerName} />
                                                                    ) : (
                                                                        <i className="fas fa-user-circle"></i>
                                                                    )}
                                                                </div>
                                                            </td>
                                                            <td className="player-name">
                                                                {player.playerName}
                                                            </td>
                                                            <td className="player-position" style={{ textAlign: 'right' }}>
                                                                <span className="pos-badge">{player.position}</span>
                                                            </td>
                                                        </tr>
                                                    ))
                                                ) : (
                                                    <tr>
                                                        <td colSpan={4} className="text-center py-4">No players registered</td>
                                                    </tr>
                                                )}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Passport Modal */}
            {selectedPassport && (
                <div className="passport-overlay" onClick={() => setSelectedPassport(null)}>
                    <div className="passport-modal" onClick={(e) => e.stopPropagation()}>
                        <button className="close-passport" onClick={() => setSelectedPassport(null)}>
                            <i className="fas fa-times"></i>
                        </button>
                        <div className="passport-img-container">
                            <img src={selectedPassport} alt="Player Passport Large" />
                        </div>
                    </div>
                </div>
            )}

            <style jsx>{`
        .team-squads {
          background-image: url('/images/pattern-bg.png');
          background-attachment: fixed;
          background-color: #fcfcfc;
          position: relative;
        }
        .section-padding {
            padding: 100px 0;
        }
        .squad-card {
          background: #fff;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 15px 35px rgba(0,0,0,0.08);
          border: 1px solid #f0f0f0;
          height: 100%;
          transition: transform 0.3s ease;
        }
        .squad-card:hover {
          transform: translateY(-10px);
        }
        .squad-header {
          background: linear-gradient(135deg, #031521 0%, #0a2332 100%);
          padding: 25px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: #fff;
          border-bottom: 3px solid #C42221;
        }
        .squad-header h2 {
          color: #fff;
          font-size: 26px;
          margin: 0;
          letter-spacing: 0.5px;
          line-height: 1.2;
        }
        .squad-header p {
          color: #C42221;
          margin: 4px 0 0 0;
          font-size: 13px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 2px;
        }
        .team-badge {
          font-size: 32px;
          color: #fff;
          opacity: 0.2;
        }
        .squad-body {
          padding: 15px;
          max-height: 400px;
          overflow-y: auto;
        }
        /* Custom Scrollbar for squad list */
        .squad-body::-webkit-scrollbar {
          width: 5px;
        }
        .squad-body::-webkit-scrollbar-track {
          background: #f1f1f1;
        }
        .squad-body::-webkit-scrollbar-thumb {
          background: #C42221;
          border-radius: 10px;
        }
        .squad-table {
          width: 100%;
          border-collapse: collapse;
        }
        .squad-table th {
          background: #fff;
          padding: 12px 10px;
          text-align: left;
          font-family: 'Bebas Neue', sans-serif;
          font-size: 16px;
          color: #999;
          border-bottom: 1px solid #eee;
          text-transform: uppercase;
          position: sticky;
          top: 0;
          z-index: 1;
        }
        .squad-table td {
          padding: 12px 10px;
          border-bottom: 1px solid #f8f8f8;
          vertical-align: middle;
        }
        .jersey-num {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 18px;
          color: #031521;
          opacity: 0.5;
        }
        .player-name {
          font-size: 15px;
          font-weight: 600;
          color: #333;
        }
        .pos-badge {
          display: inline-block;
          padding: 2px 8px;
          background: #f8f9fa;
          border-radius: 3px;
          font-size: 10px;
          font-weight: 800;
          color: #C42221;
          border: 1px solid #eee;
        }
        .squad-table tr:hover {
          background-color: #fdfdfd;
        }
        .squad-table tr:hover .jersey-num {
          opacity: 1;
          color: #C42221;
        }

        .player-passport-cell {
          padding: 8px 5px !important;
        }
        .player-thumb {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          overflow: hidden;
          background-color: #f0f0f0;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          border: 1px solid #eee;
          transition: transform 0.2s ease;
        }
        .player-thumb:hover {
          transform: scale(1.1);
          border-color: #C42221;
        }
        .player-thumb img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .player-thumb i {
          color: #ccc;
          font-size: 20px;
        }

        /* Passport Modal Styles */
        .passport-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0,0,0,0.85);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          backdrop-filter: blur(5px);
          animation: fadeIn 0.3s ease;
        }
        .passport-modal {
          position: relative;
          background: #fff;
          padding: 15px;
          border-radius: 15px;
          box-shadow: 0 25px 50px rgba(0,0,0,0.5);
          max-width: 90%;
          max-height: 90vh;
          animation: scaleUp 0.3s ease;
        }
        .passport-img-container {
          overflow: hidden;
          border-radius: 8px;
        }
        .passport-img-container img {
          display: block;
          max-width: 100%;
          max-height: 80vh;
          object-fit: contain;
        }
        .close-passport {
          position: absolute;
          top: -15px;
          right: -15px;
          width: 35px;
          height: 35px;
          background: #C42221;
          border: none;
          color: #fff;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          box-shadow: 0 5px 15px rgba(196, 34, 33, 0.4);
          z-index: 1;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleUp {
          from { transform: scale(0.9); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
      `}</style>
        </div>
    )
}

