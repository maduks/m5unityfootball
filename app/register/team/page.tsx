'use client'

import { useState } from 'react'
import PageHeader from '@/components/PageHeader'

const villages = ['Amata', 'Alachara', 'Ezioha', 'Inyi', 'Imama', 'Ohaire United FC']

export default function TeamRegistrationPage() {
  const [formData, setFormData] = useState({
    teamName: '',
    village: '',
    villageChairmanName: '',
    villageChairmanPhone: '',
    villageChairmanSignature: '',
    coachName: '',
    coachPhone: '',
    coachSignature: '',
    teamManagerName: '',
    teamManagerPhone: '',
    teamManagerSignature: '',
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
    console.log('Team registration submitted:', formData)
    alert('Team registration submitted! Registration fee: ₦10,000 (non-refundable). This will be deducted from prize money if not paid before kick-off date.')
  }

  const isOhaireUnited = formData.teamName === 'Ohaire United FC' || formData.village === 'Ohaire United FC'

  return (
    <>
      <PageHeader title="Team" subtitle="Registration" />
      <div className="page-contact-us">
        <div className="container">
          <div className="row section-row">
            <div className="col-lg-12">
              <div className="section-title section-title-center">
                <div className="section-bg-title wow fadeInUp">
                  <span>Registration</span>
                </div>
                <h3 className="wow fadeInUp" data-wow-delay="0.2s">
                  Team Registration Form
                </h3>
                <h2 className="text-anime-style-2" data-cursor="-opaque">
                  Register Your Team for <span>M5 Unity Football Cup 2025</span>
                </h2>
                <p className="wow fadeInUp" data-wow-delay="0.4s">
                  Every team shall pay a non-refundable registration fee of ₦10,000 to the organizers before 
                  commencement of the competition. In the event of failure to pay before kick-off date, or anytime 
                  during the competition, the organizers shall deduct the ₦10,000 from the team&apos;s prize money.
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
                      Team Registration <span>Form</span>
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
                          Team Information
                        </h4>
                      </div>

                      <div className="form-group col-md-6 mb-4">
                        <select
                          name="teamName"
                          value={formData.teamName}
                          onChange={handleChange}
                          className="form-control"
                          required
                          style={{ color: formData.teamName ? 'var(--white-color)' : 'rgba(255,255,255,0.5)' }}
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

                      {!isOhaireUnited ? (
                        <>
                          <div className="col-lg-12" style={{ marginTop: '20px' }}>
                            <h4 style={{ 
                              color: 'var(--white-color)', 
                              marginBottom: '25px', 
                              paddingBottom: '15px',
                              borderBottom: '2px solid rgba(255,255,255,0.1)',
                              fontSize: '22px',
                              fontFamily: 'var(--font-bebas-neue)'
                            }}>
                              Village Chairman Details
                            </h4>
                          </div>

                          <div className="form-group col-md-6 mb-4">
                            <input
                              type="text"
                              name="villageChairmanName"
                              value={formData.villageChairmanName}
                              onChange={handleChange}
                              className="form-control"
                              placeholder="Village Chairman Name *"
                              required
                            />
                          </div>

                          <div className="form-group col-md-6 mb-4">
                            <input
                              type="tel"
                              name="villageChairmanPhone"
                              value={formData.villageChairmanPhone}
                              onChange={handleChange}
                              className="form-control"
                              placeholder="Village Chairman Phone Number *"
                              required
                            />
                          </div>

                          <div className="form-group col-md-12 mb-4">
                            <input
                              type="text"
                              name="villageChairmanSignature"
                              value={formData.villageChairmanSignature}
                              onChange={handleChange}
                              className="form-control"
                              placeholder="Village Chairman Signature (Type full name) *"
                              required
                            />
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="col-lg-12" style={{ marginTop: '20px' }}>
                            <h4 style={{ 
                              color: 'var(--white-color)', 
                              marginBottom: '25px', 
                              paddingBottom: '15px',
                              borderBottom: '2px solid rgba(255,255,255,0.1)',
                              fontSize: '22px',
                              fontFamily: 'var(--font-bebas-neue)'
                            }}>
                              Team Manager Details
                            </h4>
                          </div>

                          <div className="form-group col-md-6 mb-4">
                            <input
                              type="text"
                              name="teamManagerName"
                              value={formData.teamManagerName}
                              onChange={handleChange}
                              className="form-control"
                              placeholder="Team Manager Name *"
                              required
                            />
                          </div>

                          <div className="form-group col-md-6 mb-4">
                            <input
                              type="tel"
                              name="teamManagerPhone"
                              value={formData.teamManagerPhone}
                              onChange={handleChange}
                              className="form-control"
                              placeholder="Team Manager Phone Number *"
                              required
                            />
                          </div>

                          <div className="form-group col-md-12 mb-4">
                            <input
                              type="text"
                              name="teamManagerSignature"
                              value={formData.teamManagerSignature}
                              onChange={handleChange}
                              className="form-control"
                              placeholder="Team Manager Signature (Type full name) *"
                              required
                            />
                          </div>
                        </>
                      )}

                      <div className="col-lg-12" style={{ marginTop: '20px' }}>
                        <h4 style={{ 
                          color: 'var(--white-color)', 
                          marginBottom: '25px', 
                          paddingBottom: '15px',
                          borderBottom: '2px solid rgba(255,255,255,0.1)',
                          fontSize: '22px',
                          fontFamily: 'var(--font-bebas-neue)'
                        }}>
                          Coach Details
                        </h4>
                      </div>

                      <div className="form-group col-md-6 mb-4">
                        <input
                          type="text"
                          name="coachName"
                          value={formData.coachName}
                          onChange={handleChange}
                          className="form-control"
                          placeholder="Coach Name *"
                          required
                        />
                      </div>

                      <div className="form-group col-md-6 mb-4">
                        <input
                          type="tel"
                          name="coachPhone"
                          value={formData.coachPhone}
                          onChange={handleChange}
                          className="form-control"
                          placeholder="Coach Phone Number *"
                          required
                        />
                      </div>

                      <div className="form-group col-md-12 mb-4">
                        <input
                          type="text"
                          name="coachSignature"
                          value={formData.coachSignature}
                          onChange={handleChange}
                          className="form-control"
                          placeholder="Coach Signature (Type full name) *"
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
                            Important Notes
                          </h5>
                          <ul style={{ 
                            marginLeft: '20px', 
                            lineHeight: '2',
                            color: 'rgba(255,255,255,0.9)',
                            fontSize: '14px'
                          }}>
                            <li>Registration fee: ₦10,000 (non-refundable)</li>
                            <li>Must be paid before commencement of the competition</li>
                            <li>Failure to pay will result in deduction from prize money</li>
                            <li>Every team must include 5 young players (ages 17-18) and feature at least 3 in every match</li>
                            <li>Minimum of 8 outfield players and 1 goalkeeper required per match</li>
                            <li>All player details must be submitted one week before kick-off date</li>
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
                          <span>I agree to all rules and regulations of M5 Unity Football Cup Competition *</span>
                        </label>
                      </div>

                      <div className="col-lg-12">
                        <div className="contact-form-btn">
                          <button type="submit" className="btn-default btn-highlighted">
                            <span>Submit Team Registration</span>
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
