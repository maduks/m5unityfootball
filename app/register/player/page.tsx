'use client'

import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import PageHeader from '@/components/PageHeader'

const villages = ['Ameta', 'Alechara', 'Ezioha', 'Inyi', 'Imeama', 'Ohaire']
const positions = ['Goalkeeper', 'Defender', 'Midfielder', 'Forward', 'Winger']

interface Bank {
  name: string
  uuid: string
  interInstitutionCode: string
  sortCode: string
  directDebitEnabled: boolean
}

export default function PlayerRegistrationPage() {
  const router = useRouter()
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
    passport: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isUploading, setIsUploading] = useState(false)
  const [banks, setBanks] = useState<Bank[]>([])
  const [selectedBank, setSelectedBank] = useState<string>('')
  const [accountNumber, setAccountNumber] = useState<string>('')
  const [isVerifying, setIsVerifying] = useState(false)
  const [validationError, setValidationError] = useState<string>('')
  const [isNameVerified, setIsNameVerified] = useState(false)

  // Drag and drop state
  const [dragActive, setDragActive] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

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

  const [teams, setTeams] = useState<{ _id: string; teamName: string }[]>([])

  // Fetch banks and teams on component mount
  useEffect(() => {
    const fetchBanks = async () => {
      try {
        const response = await fetch('https://api.pickwave.com.ng/api/collection/get-banks', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
        })
        const data = await response.json()
        if (data?.data?.banks) {
          setBanks(data.data.banks)
        }
      } catch (error) {
        console.error('Failed to fetch banks:', error)
        setValidationError('Failed to load banks. Please refresh the page.')
      }
    }

    const fetchTeams = async () => {
      try {
        const response = await fetch('https://api.skyshorelubs.com/teams/getTeams')
        const data = await response.json()
        if (data?.teams) {
          setTeams(data.teams)
        }
      } catch (error) {
        console.error('Failed to fetch teams:', error)
      }
    }

    fetchBanks()
    fetchTeams()
  }, [])

  // Validate account when account number is entered
  useEffect(() => {
    if (selectedBank && accountNumber && accountNumber.length >= 10) {
      const validateAccount = async () => {
        setIsVerifying(true)
        setValidationError('')
        try {
          const selectedBankData = banks.find(bank => bank.uuid === selectedBank)
          if (!selectedBankData) {
            setValidationError('Invalid bank selected')
            setIsVerifying(false)
            return
          }

          const response = await fetch('https://api.pickwave.com.ng/api/collection/validate-account', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              accountNumber,
              amount: 1, // Minimal amount for validation
              bankUID: selectedBankData.uuid,
            }),
          })

          const data = await response.json()

          if (data?.data?.responseCode === 0 && data?.data?.destinationAccountHolderNameAtBank) {
            setFormData(prev => ({ ...prev, playerName: data.data.destinationAccountHolderNameAtBank }))
            setIsNameVerified(true)
            setValidationError('')
          } else {
            setValidationError(data?.data?.message || 'Account validation failed. Please check your account number.')
            setIsNameVerified(false)
            setFormData(prev => ({ ...prev, playerName: '' }))
          }
        } catch (error) {
          console.error('Account validation failed:', error)
          setValidationError('Failed to validate account. Please try again.')
          setIsNameVerified(false)
          setFormData(prev => ({ ...prev, playerName: '' }))
        } finally {
          setIsVerifying(false)
        }
      }

      // Debounce validation
      const timeoutId = setTimeout(validateAccount, 1000)
      return () => clearTimeout(timeoutId)
    } else if (accountNumber.length > 0 && accountNumber.length < 10) {
      setValidationError('Account number must be at least 10 digits')
      setIsNameVerified(false)
      setFormData(prev => ({ ...prev, playerName: '' }))
    } else if (!accountNumber) {
      // Reset when account number is cleared
      setValidationError('')
      setIsNameVerified(false)
      setFormData(prev => ({ ...prev, playerName: '' }))
    } else {
      setValidationError('')
    }
  }, [accountNumber, selectedBank, banks])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    if (type === 'checkbox') {
      setFormData({ ...formData, [name]: (e.target as HTMLInputElement).checked })
    } else {
      setFormData({ ...formData, [name]: value })
    }
  }

  const uploadFile = async (file: File) => {
    setIsUploading(true)
    const uploadData = new FormData()
    uploadData.append('file', file)
    uploadData.append('fileName', file.name)
    uploadData.append('folder', '/players')

    try {
      // Replace 'YOUR_PRIVATE_API_KEY' with your actual private key
      const response = await fetch('https://upload.imagekit.io/api/v1/files/upload', {
        method: 'POST',
        headers: {
          'Authorization': 'Basic ' + btoa('private_vyWrxontNcFcJ8CcnbgZWwxorS4=' + ':')
        },
        body: uploadData
      })

      const data = await response.json()
      if (data.url) {
        setFormData(prev => ({ ...prev, passport: data.url }))
      } else {
        throw new Error('Upload failed')
      }
    } catch (error) {
      console.error('Upload failed:', error)
      alert('Photo upload failed. Please try again.')
    } finally {
      setIsUploading(false)
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) uploadFile(file)
  }

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      uploadFile(e.dataTransfer.files[0])
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

    // Check if name is verified
    if (!isNameVerified || !formData.playerName) {
      alert('Please verify your bank account to populate your name before submitting.')
      return
    }

    if (!formData.passport) {
      alert('Please upload a passport photograph.')
      return
    }

    setIsSubmitting(true)
    console.log(formData)

    try {
      const res = await fetch('https://api.skyshorelubs.com/players/registrations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (!res.ok) {
        const errorText = await res.text()
        throw new Error(errorText || 'Registration failed')
      }

      const data = await res.json()
      alert(data?.message || 'Player registered successfully')
      router.push('/success')
    } catch (error:any) {
      console.error('Player registration failed:', error.message)
      alert('Registration failed. Please try again. '+error.message)
    } finally {
      setIsSubmitting(false)
    }
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
                  Fill and submit this form to participate in the competition. You must provide your bank account details
                  for verification of your identity.
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

                      <div className="form-group col-md-12 mb-4">
                        <label style={{ color: 'var(--white-color)', marginBottom: '10px', display: 'block' }}>
                          Passport Photograph *
                        </label>
                        <div
                          onDragEnter={handleDrag}
                          onDragLeave={handleDrag}
                          onDragOver={handleDrag}
                          onDrop={handleDrop}
                          onClick={() => inputRef.current?.click()}
                          style={{
                            border: `2px dashed ${dragActive ? 'var(--accent-color)' : 'rgba(255,255,255,0.3)'}`,
                            borderRadius: '10px',
                            padding: '30px',
                            textAlign: 'center',
                            cursor: 'pointer',
                            backgroundColor: dragActive ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.2)',
                            transition: 'all 0.3s ease',
                            position: 'relative'
                          }}
                        >
                          <input
                            ref={inputRef}
                            type="file"
                            accept="image/*"
                            onChange={handleFileChange}
                            style={{ display: 'none' }}
                          />

                          {formData.passport ? (
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                              <div style={{
                                width: '100px',
                                height: '100px',
                                borderRadius: '50%',
                                overflow: 'hidden',
                                marginBottom: '15px',
                                border: '3px solid var(--accent-color)'
                              }}>
                                <img src={formData.passport} alt="Passport Preview" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                              </div>
                              <p style={{ color: '#2fc73b', margin: 0 }}>✓ Photo uploaded</p>
                              <small style={{ color: 'rgba(255,255,255,0.6)' }}>Click or drag to replace</small>
                            </div>
                          ) : (
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                              <i className="fas fa-cloud-upload-alt" style={{ fontSize: '40px', color: 'rgba(255,255,255,0.5)', marginBottom: '15px' }}></i>
                              <p style={{ color: 'var(--white-color)', margin: '0 0 5px 0' }}>Drag & Drop your passport here</p>
                              <small style={{ color: 'rgba(255,255,255,0.5)' }}>or click to browse</small>
                            </div>
                          )}

                          {isUploading && (
                            <div style={{
                              position: 'absolute',
                              top: 0,
                              left: 0,
                              right: 0,
                              bottom: 0,
                              background: 'rgba(0,0,0,0.7)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              borderRadius: '10px'
                            }}>
                              <div className="spinner-border text-light" role="status">
                                <span className="sr-only">Loading...</span>
                              </div>
                            </div>
                          )}
                        </div>
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
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="form-control"
                          placeholder="Email Address (Optional)"
                        />
                      </div>


                      <span style={{ paddingBottom: '2px', color: 'wheat', fontSize: '12px', marginTop: '5px', display: 'block' }}>
                        Your Date Of Birth </span>
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
                          {teams.map((team: any) => (
                            (team.paid &&
                              <option key={team._id} value={team._id} style={{ color: '#000' }}>
                                {team.teamName}
                              </option>)
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
                        <select
                          name="bank"
                          value={selectedBank}
                          onChange={(e) => {
                            setSelectedBank(e.target.value)
                            setAccountNumber('')
                            setValidationError('')
                            setIsNameVerified(false)
                            setFormData(prev => ({ ...prev, playerName: '' }))
                          }}
                          className="form-control"
                          required
                          style={{ color: selectedBank ? 'var(--white-color)' : 'rgba(255,255,255,0.5)' }}
                        >
                          <option value="" style={{ color: '#000' }}>Select Bank *</option>
                          {banks.map((bank) => (
                            <option key={bank.uuid} value={bank.uuid} style={{ color: '#000' }}>
                              {bank.name}
                            </option>
                          ))}
                        </select>
                      </div>

                      {selectedBank && (
                        <div className="form-group col-md-6 mb-4">
                          <input
                            type="text"
                            name="accountNumber"
                            value={accountNumber}
                            onChange={(e) => {
                              const value = e.target.value.replace(/\D/g, '') // Only allow digits
                              setAccountNumber(value)
                            }}
                            className="form-control"
                            placeholder="Account Number *"
                            required
                            maxLength={20}
                            style={{
                              borderColor: validationError ? 'red' : undefined
                            }}
                          />
                          {isVerifying && (
                            <small style={{ color: 'var(--accent-color)', fontSize: '12px', marginTop: '5px', display: 'block' }}>
                              Verifying account...
                            </small>
                          )}
                          {validationError && !isVerifying && (
                            <small style={{ color: 'red', fontSize: '12px', marginTop: '5px', display: 'block' }}>
                              {validationError}
                            </small>
                          )}
                        </div>
                      )}

                      <div className="form-group col-md-6 mb-4">
                        <input
                          type="text"
                          name="playerName"
                          value={formData.playerName}
                          onChange={handleChange}
                          className="form-control"
                          placeholder="Player's Name *"
                          required
                          disabled={isNameVerified || !isNameVerified}
                          style={{
                            opacity: isNameVerified ? 0.7 : 1,
                            cursor: isNameVerified ? 'not-allowed' : 'text',
                            backgroundColor: isNameVerified ? 'rgba(255,255,255,0.1)' : 'transparent'
                          }}
                        />
                        {isNameVerified && (
                          <small style={{ color: '#2fc73b', fontSize: '12px', marginTop: '5px', display: 'block' }}>
                            ✓ Name verified from bank account
                          </small>
                        )}
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
                          type="nin"
                          name="nin"
                          value={formData.nin}
                          onChange={handleChange}
                          className="form-control"
                          placeholder="Enter NIN"
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
                        <select
                          name="fatherVillage"
                          value={formData.fatherVillage}
                          onChange={handleChange}
                          className="form-control"
                          required
                          style={{ color: formData.fatherVillage ? 'var(--white-color)' : 'rgba(255,255,255,0.5)' }}
                        >
                          <option value="" style={{ color: '#000' }}>Select Father&apos;s Village/Clan *</option>
                          {villages.map((village) => (
                            <option key={village} value={village} style={{ color: '#000' }}>
                              {village}
                            </option>
                          ))}
                        </select>
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
                        <select
                          name="motherVillage"
                          value={formData.motherVillage}
                          onChange={handleChange}
                          className="form-control"
                          required
                          style={{ color: formData.motherVillage ? 'var(--white-color)' : 'rgba(255,255,255,0.5)' }}
                        >
                          <option value="" style={{ color: '#000' }}>Select Mother&apos;s Village/Clan *</option>
                          {villages.map((village) => (
                            <option key={village} value={village} style={{ color: '#000' }}>
                              {village}
                            </option>
                          ))}
                        </select>
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
                                  : 'Submit Registration'}
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
