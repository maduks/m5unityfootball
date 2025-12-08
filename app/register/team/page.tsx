'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import PageHeader from '@/components/PageHeader'

const villages = ['Ameta', 'Alechara', 'Ezioha', 'Inyi', 'Imeama']
export default function TeamRegistrationPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    teamName: '',
    village: '',
   
    coachName: '',
    coachPhone: '',
    coachSignature: '',
    teamManagerName: '',
    teamManagerPhone: '',
    teamManagerSignature: '',
    agreeToTerms: false,
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  
  // Countdown timer state
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  const [isRegistrationClosed, setIsRegistrationClosed] = useState(false)
  
  // Set registration deadline (change this to your actual deadline)
  const registrationDeadline = new Date('2025-12-23T23:59:59').getTime()
  
  // Countdown timer effect
  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime()
      const difference = registrationDeadline - now

      if (difference <= 0) {
        setIsRegistrationClosed(true)
        return { days: 0, hours: 0, minutes: 0, seconds: 0 }
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      }
    }

    setTimeLeft(calculateTimeLeft())

    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft()
      setTimeLeft(newTimeLeft)
      if (newTimeLeft.days === 0 && newTimeLeft.hours === 0 && newTimeLeft.minutes === 0 && newTimeLeft.seconds === 0) {
        setIsRegistrationClosed(true)
        clearInterval(timer)
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [registrationDeadline])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    if (type === 'checkbox') {
      setFormData({ ...formData, [name]: (e.target as HTMLInputElement).checked })
    } else {
      setFormData({ ...formData, [name]: value })
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (isSubmitting) return
    
    // Check if registration is closed
    if (isRegistrationClosed) {
      alert('Registration has closed. The deadline has passed.')
      return
    }
    
    setIsSubmitting(true)

    try {
      const res = await fetch('https://api.skyshorelubs.com/teams/registration', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (!res.ok) {
        const errorText = await res.text()
        throw new Error(errorText || 'Registration failed')
      }

      const data = await res.json()
      alert(data?.message || 'Team registered successfully')
      router.push('/success')
    } catch (error) {
      console.error('Team registration failed:', error)
      alert('Team registration failed. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
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
                
                {/* Countdown Timer */}
                <div className="wow fadeInUp" data-wow-delay="0.6s" style={{
                  marginTop: '40px',
                  padding: '30px 20px',
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 100%)',
                  borderRadius: '20px',
                  border: '3px solid rgba(255,255,255,0.3)',
                  backdropFilter: 'blur(10px)',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.3)'
                }}>
                  <h4 style={{
                    color: 'var(--white-grey)',
                    marginBottom: '25px',
                    fontSize: '24px',
                    fontWeight: 'bold',
                    fontFamily: 'var(--font-bebas-neue)',
                    textAlign: 'center',
                    letterSpacing: '2px',
                    textTransform: 'uppercase',
                    // textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
                  }}>
                    Registration Closes In:
                  </h4>
                  {isRegistrationClosed ? (
                    <div style={{
                      textAlign: 'center',
                      color: '#ff4444',
                      fontSize: '32px',
                      fontWeight: 'bold',
                      fontFamily: 'var(--font-bebas-neue)',
                      letterSpacing: '2px',
                      textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
                    }}>
                      Registration Closed
                    </div>
                  ) : (
                    <div style={{
                      display: 'flex',
                      justifyContent: 'center',
                      gap: '1px',
                      flexWrap: 'nowrap',
                      alignItems: 'center',
                      overflowX: 'auto',
                      padding: '0 10px'
                    }}>
                      <div style={{
                        textAlign: 'center',
                        background: 'linear-gradient(135deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.15) 100%)',
                        padding: '5px 12px',
                        borderRadius: '12px',
                        minWidth: '70px',
                        flex: '1 1 0',
                        border: '2px solid rgba(255,255,255,0.4)',
                        // boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
                        transition: 'transform 0.3s ease'
                      }}>
                        <div style={{
                          fontSize: '38px',
                          fontWeight: '800',
                          color: 'var(--accent-color)',
                          fontFamily: 'var(--font-bebas-neue)',
                          lineHeight: '1',
                          textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                          letterSpacing: '1px'
                        }}>{String(timeLeft.days).padStart(2, '0')}</div>
                        <div style={{ 
                          fontSize: '13px', 
                          color: '#e84d01', 
                          marginTop: '8px',
                          fontWeight: 'bold',
                          fontFamily: 'var(--font-bebas-neue)',
                          letterSpacing: '0.5px',
                          textTransform: 'uppercase'
                        }}>Days</div>
                      </div>
                      <div style={{
                        textAlign: 'center',
                        background: 'linear-gradient(135deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.15) 100%)',
                        padding: '5px 12px',
                        borderRadius: '12px',
                        minWidth: '70px',
                        flex: '1 1 0',
                        border: '2px solid rgba(255,255,255,0.4)',
                        // boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
                        transition: 'transform 0.3s ease'
                      }}>
                        <div style={{
                          fontSize: '38px',
                          fontWeight: '800',
                          color: 'var(--accent-color)',
                          fontFamily: 'var(--font-bebas-neue)',
                          lineHeight: '1',
                          textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
                          letterSpacing: '1px'
                        }}>{String(timeLeft.hours).padStart(2, '0')}</div>
                        <div style={{ 
                          fontSize: '13px', 
                          color: '#e84d01', 
                          marginTop: '8px',
                          fontWeight: 'bold',
                          fontFamily: 'var(--font-bebas-neue)',
                          letterSpacing: '0.5px',
                          textTransform: 'uppercase'
                        }}>Hours</div>
                      </div>
                      <div style={{
                        textAlign: 'center',
                        background: 'linear-gradient(135deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.15) 100%)',
                        padding: '5px 12px',
                        borderRadius: '12px',
                        minWidth: '70px',
                        flex: '1 1 0',
                        border: '2px solid rgba(255,255,255,0.4)',
                        // boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
                        transition: 'transform 0.3s ease'
                      }}>
                        <div style={{
                          fontSize: '38px',
                          fontWeight: '800',
                          color: 'var(--accent-color)',
                          fontFamily: 'var(--font-bebas-neue)',
                          lineHeight: '1',
                          textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
                          letterSpacing: '1px'
                        }}>{String(timeLeft.minutes).padStart(2, '0')}</div>
                        <div style={{ 
                          fontSize: '13px', 
                          color: '#e84d01', 
                          marginTop: '8px',
                          fontWeight: 'bold',
                          fontFamily: 'var(--font-bebas-neue)',
                          letterSpacing: '0.5px',
                          textTransform: 'uppercase'
                        }}>Minutes</div>
                      </div>
                      <div style={{
                        textAlign: 'center',
                        background: 'linear-gradient(135deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.15) 100%)',
                        padding: '5px 12px',
                        borderRadius: '12px',
                        minWidth: '70px',
                        flex: '1 1 0',
                        border: '2px solid rgba(255,255,255,0.4)',
                        // boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
                        transition: 'transform 0.3s ease'
                      }}>
                        <div style={{
                          fontSize: '38px',
                          fontWeight: '800',
                          color: 'var(--accent-color)',
                          fontFamily: 'var(--font-bebas-neue)',
                          lineHeight: '1',
                          textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
                          letterSpacing: '1px'
                        }}>{String(timeLeft.seconds).padStart(2, '0')}</div>
                        <div style={{ 
                          fontSize: '13px', 
                          color: '#e84d01', 
                          marginTop: '8px',
                          fontWeight: 'bold',
                          fontFamily: 'var(--font-bebas-neue)',
                          letterSpacing: '0.5px',
                          textTransform: 'uppercase'
                        }}>Seconds</div>
                      </div>
                    </div>
                  )}
                </div>
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
                        <input
                          type="text"
                          name="teamName"
                          value={formData.teamName}
                          onChange={handleChange}
                          className="form-control"
                          placeholder="Enter Team Name *"
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

                          {/* <div className="form-group col-md-6 mb-4">
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
                          </div> */}

                          {/* <div className="form-group col-md-12 mb-4">
                            <input
                              type="text"
                              name="villageChairmanSignature"
                              value={formData.villageChairmanSignature}
                              onChange={handleChange}
                              className="form-control"
                              placeholder="Village Chairman Signature (Type full name) *"
                              required
                            />
                          </div> */}
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
                          <button 
                            type="submit" 
                            className="btn-default btn-highlighted"
                            disabled={isRegistrationClosed || isSubmitting}
                            style={{
                              opacity: isRegistrationClosed ? 0.5 : 1,
                              cursor: isRegistrationClosed ? 'not-allowed' : 'pointer'
                            }}
                          >
                            <span>
                              {isRegistrationClosed
                                ? 'Registration Closed'
                                : isSubmitting
                                  ? 'Submitting...'
                                  : 'Submit Team Registration'}
                            </span>
                          </button>
                        </div>
                        {isRegistrationClosed && (
                          <p style={{
                            textAlign: 'center',
                            color: '#ff4444',
                            marginTop: '15px',
                            fontSize: '14px'
                          }}>
                            Registration deadline has passed. Please contact the organizing committee for assistance.
                          </p>
                        )}
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
