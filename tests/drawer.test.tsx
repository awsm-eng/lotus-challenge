import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import Drawer from '../components/Drawer'

 
describe('Drawer', () => {

  it('Component renders with Home Link', () => {
    const { getByText } = render(<Drawer />)
    expect(getByText("Home")).toBeInTheDocument()
  })

  it('Home Link functions correctly', () => {
    const { getByRole } = render(<Drawer />)
    expect(getByRole('link', {name: 'Home'})).toHaveAttribute('href', '/')
  })
})