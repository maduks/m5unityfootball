'use client';

import { useState, useEffect } from 'react';

interface Player {
    _id: string;
    playerName: string;
    position: string;
    phoneNumber: string;
    passport?: string;
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
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8; // Showing 8 players per page
    const [selectedPassport, setSelectedPassport] = useState<string | null>(null);

    // Reset pagination and state when modal opens or players change
    useEffect(() => {
        setCurrentPage(1);
        setSelectedPassport(null);
    }, [isOpen, players]);

    if (!isOpen) return null;

    // Calculate pagination values
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentPlayers = players.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(players.length / itemsPerPage);

    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className="admin-modal">
            <div className="admin-modal-content" style={{ maxWidth: '800px' }}>
                <div className="admin-modal-header">
                    <h3>Players - {teamName}</h3>
                    <button onClick={onClose} className="close-btn">
                        <i className="fas fa-times"></i>
                    </button>
                </div>

                <div className="admin-modal-body" style={{ position: 'relative' }}>
                    {players && players.length > 0 ? (
                        <>
                            <table className="admin-table">
                                <thead>
                                    <tr>
                                        <th style={{ width: '60px' }}>Img</th>
                                        <th>Name</th>
                                        <th>Position</th>
                                        <th>Father's Village</th>
                                        <th>Mother's Village</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {currentPlayers.map((player) => (
                                        <tr key={player._id}>
                                            <td>
                                                <div
                                                    style={{
                                                        width: '40px',
                                                        height: '40px',
                                                        borderRadius: '50%',
                                                        overflow: 'hidden',
                                                        backgroundColor: '#eee',
                                                        cursor: 'pointer',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center'
                                                    }}
                                                    onClick={() => player.passport && setSelectedPassport(player.passport)}
                                                >
                                                    {player.passport ? (
                                                        <img src={player.passport} alt={player.playerName} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                                    ) : (
                                                        <i className="fas fa-user" style={{ color: '#aaa' }}></i>
                                                    )}
                                                </div>
                                            </td>
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
                                            <td>{player.fatherVillage || '-'}</td>
                                            <td>{player.motherVillage || '-'}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>

                            {totalPages > 1 && (
                                <div className="admin-pagination">
                                    <button
                                        className="pagination-btn"
                                        onClick={() => handlePageChange(currentPage - 1)}
                                        disabled={currentPage === 1}
                                    >
                                        <i className="fas fa-chevron-left"></i> Previous
                                    </button>

                                    <div className="pagination-info">
                                        Page {currentPage} of {totalPages}
                                    </div>

                                    <button
                                        className="pagination-btn"
                                        onClick={() => handlePageChange(currentPage + 1)}
                                        disabled={currentPage === totalPages}
                                    >
                                        Next <i className="fas fa-chevron-right"></i>
                                    </button>
                                </div>
                            )}
                        </>
                    ) : (
                        <div className="empty-state">
                            <p>No players found for this team.</p>
                        </div>
                    )}

                    {/* Passport Overlay inside Modal Body */}
                    {selectedPassport && (
                        <div
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                backgroundColor: 'rgba(0,0,0,0.8)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                zIndex: 10,
                                borderRadius: '12px'
                            }}
                            onClick={() => setSelectedPassport(null)}
                        >
                            <div style={{ position: 'relative', maxWidth: '90%', maxHeight: '90%' }}>
                                <button
                                    onClick={() => setSelectedPassport(null)}
                                    style={{
                                        position: 'absolute',
                                        top: '-10px',
                                        right: '-10px',
                                        background: '#C42221',
                                        border: 'none',
                                        color: '#fff',
                                        borderRadius: '50%',
                                        width: '25px',
                                        height: '25px',
                                        cursor: 'pointer'
                                    }}
                                >
                                    <i className="fas fa-times"></i>
                                </button>
                                <img
                                    src={selectedPassport}
                                    alt="Passport Large"
                                    style={{ maxWidth: '100%', maxHeight: '400px', objectFit: 'contain', borderRadius: '8px' }}
                                />
                            </div>
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
