'use client';

import { useState, useEffect } from 'react';

interface Player {
    _id: string;
    playerName: string;
    position: string;
    phoneNumber:string;
    fatherName?: string;
    fatherVillage?: string;
    motherName?: string;
    motherVillage?: string;
}

interface TeamPlayersModalProps {
    teamName: string;
    players: Player[];
    isOpen: boolean;
    onClose: () => void;
}

const TeamPlayersModal = ({ teamName, players, isOpen, onClose }: TeamPlayersModalProps) => {
    if (!isOpen) return null;

    return (
        <div className="admin-modal">
            <div className="admin-modal-content" style={{ maxWidth: '800px' }}>
                <div className="admin-modal-header">
                    <h3>Players - {teamName}</h3>
                    <button onClick={onClose} className="close-btn">
                        <i className="fas fa-times"></i>
                    </button>
                </div>

                <div className="admin-modal-body">
                    {players && players.length > 0 ? (
                        <table className="admin-table">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Position</th>
                                    {/* <th>Phone Number</th> */}
                                    <th>Father's Village</th>
                                    <th>Mother's Village</th>
                                </tr>
                            </thead>
                            <tbody>
                                {players.map((player) => (
                                    <tr key={player._id}>
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
                                        {/* <td>{player.phoneNumber || '-'}</td> */}
                                        <td>{player.fatherVillage || '-'}</td>
                                        <td>{player.motherVillage || '-'}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) : (
                        <div className="empty-state">
                            <p>No players found for this team.</p>
                        </div>
                    )}
                </div>

                <div className="admin-modal-footer">
                    <button
                        type="button"
                        onClick={onClose}
                        className="btn-admin btn-admin-secondary"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TeamPlayersModal;
