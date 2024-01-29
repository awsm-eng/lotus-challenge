import { MockClient } from "@medplum/mock"
import { Patient } from '@medplum/fhirtypes'
import { MedplumProvider, PatientSummary, PatientTimeline, ResourceTable } from "@medplum/react"
import { render, act, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import PatientPage from '../pages/patient'

const client = new MockClient()

describe('PatientPage', () => {

  async function setupPatientSummary(patient: Patient): Promise<void> {
    await act(async () => {
      render(
        <MedplumProvider medplum={client}>
          <PatientSummary patient={patient} />
        </MedplumProvider>
      )
    })
  }

  it('Component renders with title', () => {
    const { getByText } = render(<PatientPage />)
    expect(getByText("Patient Screen")).toBeInTheDocument()
  })

  it("Patient summary is correctly displayed", async () => {
    const patient = await client.readResource('Patient', '123')
    await act(async () => {
      render(
        <MedplumProvider medplum={client}>
          <PatientSummary patient={patient} />
        </MedplumProvider>
      )
    })
    expect(patient != null)
    expect(screen.getByText("Homer Simpson")).toBeInTheDocument()
  })

  it("Patient timeline is correctly displayed", async () => {
    const patient = await client.readResource('Patient', '123')
    await act(async () => {
      render(
        <MedplumProvider medplum={client}>
          <PatientTimeline patient={patient} />
        </MedplumProvider>
      )
    })
    expect(patient != null)
    // Practicioner info belongs to this patient and should be found here.
    expect(screen.getAllByAltText("Alice Smith")[0]).toBeInTheDocument()
  })

  it("Resource table is correctly displayed", async () => {
    const patient = await client.readResource('Patient', '123')
    await act(async () => {
      render(
        <MedplumProvider medplum={client}>
          <ResourceTable value={patient} />
        </MedplumProvider>
      )
    })
    expect(patient != null)
    // Identifier is located in resource table
    expect(screen.getByText("def: 456")).toBeInTheDocument()
  })



})
