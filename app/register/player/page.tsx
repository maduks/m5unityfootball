'use client'

import { useState } from 'react'
import PageHeader from '@/components/PageHeader'

const villages = ['Amata', 'Alachara', 'Ezioha', 'Inyi', 'Imama', 'Ohaire United FC']
const positions = ['Goalkeeper', 'Defender', 'Midfielder', 'Forward', 'Winger']

export default function PlayerRegistrationPage() {
  const [formData, setFormData] = useState({
    playerName: '',
    village: '',
    dateOfBirth: '',
    team: '',
    position: '',
    nin: '',
    phoneNumber: '',
    email: '',
    fatherName: '',
    fatherVillage: '',
    motherName: '',
    motherVillage: '',
    teamCoach: '',
    agreeToTerms: false,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    if (type === 'checkbox') {
      setFormData({ ...formData, [name]: (e.target as HTMLInputElement).checked })
    } else {
      setFormData({ ...formData, [name]: value })
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Registration form submitted! Please note: This form must be submitted at least two weeks before the competition commences.')
  }

  return (
    <>
      <PageHeader title="Player" subtitle="Registration" />
      <div className="page-contact-us">
        <div className="container">
          <div className="row section-row">
            <div className="col-lg-12">
              <div className="section-title section-title-center">
                <div className="section-bg-title wow fadeInUp">
                  <span>Registration</span>
                </div>
                <h3 className="wow fadeInUp" data-wow-delay="0.2s">
                  Player Eligibility & Registration Form
                </h3>
                <h2 className="text-anime-style-2" data-cursor="-opaque">
                  Join M5 Unity Football Cup Competition <span>2025 Edition</span>
                </h2>
                <p className="wow fadeInUp" data-wow-delay="0.4s">
                  Fill and submit this form to the Central Organizing Committee through the Media and Publicity Committee 
                  on or before two weeks to the commencement of the competition. You must provide your NIN for digital 
                  verification of your identity.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <div style={{ 
                display: 'block', 
                width: '100%', 
                marginTop: '50px',
                borderRadius: '20px',
                overflow: 'hidden'
              }}>
                <div className="contact-form dark-section" style={{ 
                  width: '100%', 
                  margin: '0',
                  maxWidth: '100%'
                }}>
                  <div className="section-title">
                    <h2 className="text-anime-style-2" data-cursor="-opaque">
                      Player Registration <span>Form</span>
                    </h2>
                  </div>
                  <form onSubmit={handleSubmit} className="wow fadeInUp" data-wow-delay="0.2s">
                    <div className="row">
                      <div className="col-lg-12">
                        <h4 style={{ 
                          color: 'var(--white-color)', 
                          marginBottom: '25px', 
                          paddingBottom: '15px',
                          borderBottom: '2px solid rgba(255,255,255,0.1)',
                          fontSize: '22px',
                          fontFamily: 'var(--font-bebas-neue)'
                        }}>
                          Personal Details
                        </h4>
                      </div>

                      <div className="form-group col-md-6 mb-4">
                        <input
                          type="text"
                          name="playerName"
                          value={formData.playerName}
                          onChange={handleChange}
                          className="form-control"
                          placeholder="Player's Name *"
                          required
                        />
                      </div>

                      <div className="form-group col-md-6 mb-4">
                        <select
                          name="village"
                          value={formData.village}
                          onChange={handleChange}
                          className="form-control"
                          required
                          style={{ color: formData.village ? 'var(--white-color)' : 'rgba(255,255,255,0.5)' }}
                        >
                          <option value="" style={{ color: '#000' }}>Select Village *</option>
                          {villages.map((village) => (
                            <option key={village} value={village} style={{ color: '#000' }}>
                              {village}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="form-group col-md-6 mb-4">
                        <input
                          type="date"
                          name="dateOfBirth"
                          value={formData.dateOfBirth}
                          onChange={handleChange}
                          className="form-control"
                          required
                          style={{ color: formData.dateOfBirth ? 'var(--white-color)' : 'rgba(255,255,255,0.5)' }}
                        />
                      </div>

                      <div className="form-group col-md-6 mb-4">
                        <select
                          name="team"
                          value={formData.team}
                          onChange={handleChange}
                          className="form-control"
                          required
                          style={{ color: formData.team ? 'var(--white-color)' : 'rgba(255,255,255,0.5)' }}
                        >
                          <option value="" style={{ color: '#000' }}>Select Team *</option>
                          {villages.map((village) => (
                            <option key={village} value={village} style={{ color: '#000' }}>
                              {village}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="form-group col-md-6 mb-4">
                        <select
                          name="position"
                          value={formData.position}
                          onChange={handleChange}
                          className="form-control"
                          required
                          style={{ color: formData.position ? 'var(--white-color)' : 'rgba(255,255,255,0.5)' }}
                        >
                          <option value="" style={{ color: '#000' }}>Select Position *</option>
                          {positions.map((pos) => (
                            <option key={pos} value={pos} style={{ color: '#000' }}>
                              {pos}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="form-group col-md-6 mb-4">
                        <input
                          type="text"
                          name="nin"
                          value={formData.nin}
                          onChange={handleChange}
                          className="form-control"
                          placeholder="NIN (National Identification Number) *"
                          required
                        />
                      </div>

                      <div className="form-group col-md-6 mb-4">
                        <input
                          type="tel"
                          name="phoneNumber"
                          value={formData.phoneNumber}
                          onChange={handleChange}
                          className="form-control"
                          placeholder="Phone Number *"
                          required
                        />
                      </div>

                      <div className="form-group col-md-6 mb-4">
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="form-control"
                          placeholder="Email Address (Optional)"
                        />
                      </div>

                      <div className="col-lg-12" style={{ marginTop: '20px' }}>
                        <h4 style={{ 
                          color: 'var(--white-color)', 
                          marginBottom: '25px', 
                          paddingBottom: '15px',
                          borderBottom: '2px solid rgba(255,255,255,0.1)',
                          fontSize: '22px',
                          fontFamily: 'var(--font-bebas-neue)'
                        }}>
                          Family Details
                        </h4>
                      </div>

                      <div className="form-group col-md-6 mb-4">
                        <input
                          type="text"
                          name="fatherName"
                          value={formData.fatherName}
                          onChange={handleChange}
                          className="form-control"
                          placeholder="Father's Name *"
                          required
                        />
                      </div>

                      <div className="form-group col-md-6 mb-4">
                        <input
                          type="text"
                          name="fatherVillage"
                          value={formData.fatherVillage}
                          onChange={handleChange}
                          className="form-control"
                          placeholder="Father's Village/Clan *"
                          required
                        />
                      </div>

                      <div className="form-group col-md-6 mb-4">
                        <input
                          type="text"
                          name="motherName"
                          value={formData.motherName}
                          onChange={handleChange}
                          className="form-control"
                          placeholder="Mother's Name *"
                          required
                        />
                      </div>

                      <div className="form-group col-md-6 mb-4">
                        <input
                          type="text"
                          name="motherVillage"
                          value={formData.motherVillage}
                          onChange={handleChange}
                          className="form-control"
                          placeholder="Mother's Village/Clan *"
                          required
                        />
                      </div>

                      <div className="form-group col-md-12 mb-4">
                        <input
                          type="text"
                          name="teamCoach"
                          value={formData.teamCoach}
                          onChange={handleChange}
                          className="form-control"
                          placeholder="Team Coach Name *"
                          required
                        />
                      </div>

                      <div className="col-lg-12 mb-4">
                        <div style={{
                          background: 'rgba(255,255,255,0.1)',
                          padding: '25px',
                          borderRadius: '10px',
                          marginBottom: '20px',
                          border: '1px solid rgba(255,255,255,0.2)',
                          backdropFilter: 'blur(10px)'
                        }}>
                          <h5 style={{ 
                            marginBottom: '15px', 
                            color: 'var(--accent-color)',
                            fontSize: '18px',
                            fontFamily: 'var(--font-bebas-neue)'
                          }}>
                            Eligibility & Penalty Rules
                          </h5>
                          <ul style={{ 
                            marginLeft: '20px', 
                            lineHeight: '2',
                            color: 'rgba(255,255,255,0.9)',
                            fontSize: '14px'
                          }}>
                            <li>A player is only permitted to play in a team of either his mother or father&apos;s village of origin</li>
                            <li>Must not fight or assault the match officials or tournament organizers</li>
                            <li>Use of hard drugs, alcohol, firearms, or any dangerous weapon is strictly prohibited</li>
                            <li>Violation of any regulations shall attract automatic disqualification</li>
                            <li>The player shall be banned from participating in all M5 competitions for 2 years if found in violation</li>
                          </ul>
                        </div>
                      </div>

                      <div className="form-group col-md-12 mb-4">
                        <label style={{ 
                          display: 'flex', 
                          alignItems: 'center',
                          color: 'var(--white-color)',
                          cursor: 'pointer',
                          fontSize: '14px'
                        }}>
                          <input
                            type="checkbox"
                            name="agreeToTerms"
                            checked={formData.agreeToTerms}
                            onChange={handleChange}
                            required
                            style={{ 
                              marginRight: '10px',
                              width: '18px',
                              height: '18px',
                              cursor: 'pointer'
                            }}
                          />
                          <span>I agree to the eligibility rules and understand the penalties for violation *</span>
                        </label>
                      </div>

                      <div className="col-lg-12">
                        <div className="contact-form-btn">
                          <button type="submit" className="btn-default btn-highlighted">
                            <span>Submit Registration</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
