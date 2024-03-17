'use client';

import { useEffect, useState } from 'react';
import { MockClient } from '@medplum/mock';
import { Patient } from '@medplum/fhirtypes';
import { Container, PatientSummary } from '@medplum/react';
import { Center, Flex, Loader, NavLink, Title } from '@mantine/core';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import AppContainer from '../../components/AppContainer';

const PATIENT_ID: string = '123';

interface Props {
  id: string;
}

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
          <Title>Patient Summary</Title>
        </Center>
        <Flex gap={32} align={'center'} justify={'space-between'}>
          <NavLink
            href="/"
            component={Link}
            label="Back to Home Page"
            w={200}
            variant="light"
            active
          />
          <NavLink
            href="/timeline"
            component={Link}
            label="Patient Timeline"
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
          {!isLoading && patientData ? (
            <PatientSummary
              patient={patientData}
              w={350}
              withBorder
              padding="md"
              radius="sm"
              mx="md"
              shadow="xs"
            />
          ) : (
            <Loader />
          )}
        </Flex>
      </Container>
    </AppContainer>
  );
};

export default IndexPage;
