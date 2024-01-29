import { useEffect, useState } from 'react'
import { Loader, Title, Center, Grid, Card } from '@mantine/core'
import { Container, PatientSummary, PatientTimeline, ResourceTable } from '@medplum/react'
import { Patient } from '@medplum/fhirtypes'
import { MockClient } from '@medplum/mock'


export default function PatientPage(): JSX.Element {
  const client = new MockClient()
  const [patient, setPatient] = useState<Patient | null>(null)

  useEffect(() => {
    async function fetchPatient() {
      setPatient(await client.readResource('Patient', '123'))
    }
    fetchPatient()
  }, [])

  return (
    <Container size={1300}>
      <Title mt={50} ml={20}>Patient Screen</Title>

      <Center>
        { patient != null
          ? <Grid>
            <Grid.Col span={3}>
              <PatientSummary patient={patient} w={300} withBorder padding="lg" radius="md" mx="md" my="xl" shadow="xs" background="url(https://images.unsplash.com/photo-1535961652354-923cb08225a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bmF0dXJlJTIwc21hbGx8ZW58MHwwfDB8fHww&auto=format&fit=crop&w=800&q=60)" />
            </Grid.Col>
            <Grid.Col span={1}>
            </Grid.Col>
            <Grid.Col span={7}>
              <Card shadow="sm" padding="lg" radius="md" withBorder mt={25}>
                {/* Note: Some of this information might need to be hidden depending who is accessing it. */}
                <ResourceTable value={{...patient, photo: []}} ignoreMissingValues forceUseInput/>
              </Card>
            </Grid.Col>
            <Grid.Col span={12}>
              <Title mt={10} ml={20} size={25}>Patient Timeline</Title>
              <PatientTimeline patient={patient} />
            </Grid.Col>
          </Grid>
          : <Loader pt={200} size={100} className='flex justify-center items-center'/>
        }
      </Center>
      
    </Container>
  )
}
