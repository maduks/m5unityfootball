'use client';

import { useState, useEffect } from 'react';
import { Team, updateTeam } from '@/lib/mockData';

interface TeamModalProps {
    team: Team | null;
    isOpen: boolean;
    onClose: () => void;
    onSave: (updatedTeam: Team) => void;
}

const TeamModal = ({ team, isOpen, onClose, onSave }: TeamModalProps) => {
    const [formData, setFormData] = useState<Team | null>(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (team) {
            setFormData({ ...team });
        }
    }, [team]);

    if (!isOpen || !formData) return null;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        try {
            const updated = await updateTeam(formData);
            onSave(updated);
            onClose();
        } catch (error) {
            console.error('Failed to update team', error);
            alert('Failed to update team');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="admin-modal">
            <div className="admin-modal-content">
                <div className="admin-modal-header">
                    <h3>Edit Team</h3>
                    <button onClick={onClose} className="close-btn">
                        <i className="fas fa-times"></i>
                    </button>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="admin-modal-body">
                        <div className="admin-form-group">
                            <label>Team Name</label>
                            <input
                                type="text"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                required
                            />
                        </div>

                        <div className="admin-form-group">
                            <label>Coach</label>
                            <input
                                type="text"
                                value={formData.coach}
                                onChange={(e) => setFormData({ ...formData, coach: e.target.value })}
                                required
                            />
                        </div>

                        <div className="admin-form-group">
                            <label>Village</label>
                            <input
                                type="text"
                                value={formData.village}
                                onChange={(e) => setFormData({ ...formData, village: e.target.value })}
                                required
                            />
                        </div>

                        <div className="admin-form-group">
                            <label>Founded Year</label>
                            <input
                                type="number"
                                value={formData.foundedYear}
                                onChange={(e) => setFormData({ ...formData, foundedYear: parseInt(e.target.value) })}
                                required
                            />
                        </div>
                    </div>

                    <div className="admin-modal-footer">
                        <button
                            type="button"
                            onClick={onClose}
                            className="btn-admin btn-admin-secondary"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            disabled={loading}
                            className="btn-admin btn-admin-primary"
                        >
                            {loading ? 'Saving...' : 'Save Changes'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default TeamModal;
