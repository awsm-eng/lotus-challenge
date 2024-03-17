import '@testing-library/jest-dom';
import { HomerSimpson, MockClient } from '@medplum/mock';
import { MedplumProvider, PatientSummary, PatientSummaryProps } from '@medplum/react';
import { act, render, screen, waitFor } from '@testing-library/react';
import { Suspense } from 'react';
import IndexPage from '../../pages/patient';

const medplum = new MockClient();

describe('Patient Summary', () => {
  const setup = (props: PatientSummaryProps): Promise<void> => {
    return act(async () => {
      render(
        <MedplumProvider medplum={medplum}>
          <PatientSummary {...props} />
        </MedplumProvider>
      );
    });
  };

  test('should render Patient Summary', async () => {
    const wrapper = render(
      <MedplumProvider medplum={medplum}>
        <Suspense fallback={<div>Loading...</div>}>
          <PatientSummary patient={HomerSimpson} />
        </Suspense>
      </MedplumProvider>
    );

    expect(await wrapper.findByText('Homer Simpson')).toBeInTheDocument();
  });

  test('should render Link to home page', async () => {
    const wrapper = render(
      <IndexPage id='patient-summary' />
    );

    expect(wrapper.getByRole('link', { name: 'Back to Home Page' })).toBeInTheDocument();
  });
  
  test('should render Link to Patient Timeline', async () => {
    const wrapper = render(
      <IndexPage id='patient-summary' />
    );

    expect(wrapper.getByRole('link', { name: 'Patient Timeline' })).toBeInTheDocument();
  });

  test('should correctly displays homer information', async () => {
    await setup({ patient: HomerSimpson });

    expect(screen.getByText('Allergies')).toBeInTheDocument();
    expect(screen.getByText('Problem List')).toBeInTheDocument();
    expect(screen.getByText('Medications')).toBeInTheDocument();
    expect(screen.getByText('Smoking Status')).toBeInTheDocument();
    expect(screen.getByText('Vitals')).toBeInTheDocument();
  });

  test('should correctly displays homer information', async () => {
    await setup({ patient: HomerSimpson });

    expect(screen.getByText('Homer Simpson')).toBeInTheDocument();
    expect(screen.getByText('1956-05-12 (067Y)')).toBeInTheDocument();
  });
});
