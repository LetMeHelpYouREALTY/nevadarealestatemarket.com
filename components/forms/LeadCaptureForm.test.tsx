/**
 * Test: LeadCaptureForm → Calendly scheduling
 */

import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { LeadCaptureForm } from './LeadCaptureForm'

describe('LeadCaptureForm', () => {
  it('renders Calendly scheduling section', () => {
    render(<LeadCaptureForm />)
    expect(
      screen.getByRole('heading', { name: /Schedule a Private Conversation/i }),
    ).toBeInTheDocument()
    expect(
      screen.getByLabelText(/Schedule an appointment with Dr. Jan Duffy/i),
    ).toBeInTheDocument()
  })

  it('shows form-type specific copy for home valuation', () => {
    render(<LeadCaptureForm formType="home-valuation" />)
    expect(
      screen.getByRole('heading', { name: /Schedule Your Free Valuation/i }),
    ).toBeInTheDocument()
  })

  it('allows custom title override', () => {
    render(<LeadCaptureForm title="Book a Call" description="Pick any time." />)
    expect(screen.getByRole('heading', { name: 'Book a Call' })).toBeInTheDocument()
    expect(screen.getByText('Pick any time.')).toBeInTheDocument()
  })
})
