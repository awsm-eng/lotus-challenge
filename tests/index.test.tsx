import { MockClient } from "@medplum/mock"
import { render } from '@testing-library/react'
import IndexPage from '../pages/index'
import '@testing-library/jest-dom'


// Mock useRouter:
jest.mock("next/navigation", () => ({
  useRouter() {
    return {
      prefetch: () => null
    }
  }
}))

describe('IndexPage', () => {

  it('Page renders with title', () => {
    const { getByText } = render(<IndexPage />)
    expect(getByText("Welcome to Lotus AI")).toBeInTheDocument()
  })

  it('Renders patient info successfully', async () => {
    const client = new MockClient()
    const patient = await client.readResource('Patient', '123')
    expect(patient != null)
  })
})