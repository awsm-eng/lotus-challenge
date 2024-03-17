import React, { useEffect, useState } from 'react';
import { Container, PatientTimeline } from '@medplum/react';
import { Patient } from '@medplum/fhirtypes';
import { Center, Flex, Loader, NavLink, Title } from '@mantine/core';
import AppContainer from '../../components/AppContainer';
import { MockClient } from '@medplum/mock';
import Link from 'next/link';

interface Props {}

const PATIENT_ID: string = '123';

const IndexPage: React.FC<Props> = () => {
  const medplum = new MockClient();

  // isLoading State
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [patientData, setPatientData] = useState<Patient | null>(null);

  useEffect(() => {
    const fetchPatientData = async () => {
      setIsLoading(true);
      // Simulate fetching data from Medplum Mock Client
      await medplum
        .readResource('Patient', PATIENT_ID)
        .then((res) => {
          // Set a 500ms timer before setting patient data to simulate loading
          setTimeout(() => {
            setPatientData(res);
          }, 1500);
          return res;
        })
        .catch(console.error)
        .finally(() => setIsLoading(false));
    };

    fetchPatientData();
  }, []);

  return (
    <AppContainer>
      <Container mt="xl">
        <Center>
          <Title>Patient Timeline</Title>
        </Center>
        <Flex gap={32} align={'center'} justify={'flex-start'}>
          <NavLink
            href="/"
            component={Link}
            label="Back to Home Page"
            w={200}
            variant="light"
            active
          />
          <NavLink
            href="/patient"
            component={Link}
            label="Patient Summary"
            w={200}
            variant="light"
            active
          />
        </Flex>
        <Flex
          mih={'50vh'}
          gap="md"
          justify="center"
          align="center"
          direction="column"
          wrap="wrap"
          mt={32}
        >
          {!isLoading && patientData ? <PatientTimeline patient={patientData} /> : <Loader />}
        </Flex>
      </Container>
    </AppContainer>
  );
};

export default IndexPage;
