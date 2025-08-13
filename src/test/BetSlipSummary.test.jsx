import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import BetSlipSummary from '../components/betting/BetSlipSummary'

describe('BetSlipSummary', () => {
  it('calculates total potential gains correctly', () => {
    const mockBets = [
      { stake: 10, odds: 2.5 }, // £10 * 2.5 = £25
      { stake: 5, odds: 3.0 },  // £5 * 3.0 = £15
      { stake: 2, odds: 1.8 }   // £2 * 1.8 = £3.6
    ]
    // Total: £25 + £15 + £3.6 = £43.60

    const { getByText } = render(<BetSlipSummary selectedBets={mockBets} />)
    
    expect(getByText('£43.60')).toBeInTheDocument()
  })

  it('shows £0.00 for empty bet slip', () => {
    const { getByText } = render(<BetSlipSummary selectedBets={[]} />)
    
    expect(getByText('£0.00')).toBeInTheDocument()
  })
})
