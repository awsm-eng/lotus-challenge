import { useEffect, useState } from 'react'
import { Button, Card, Grid, Text, Title } from '@mantine/core'
import { Container } from '@medplum/react'
import { MockClient } from '@medplum/mock'
import { Patient } from '@medplum/fhirtypes'
import { useRouter } from 'next/navigation'


export default function IndexPage(): JSX.Element {
  const router = useRouter()
  const client = new MockClient()
  const [patient, setPatient] = useState<Patient | null>(null)
   const patientPhoto = patient?.photo != null && patient?.photo.length > 0
    ? patient.photo[0].url 
    : ""
  const patientName = patient?.name != null && patient?.name.length > 0
    ? `${patient.name[0].given} ${patient.name[0].family}`
    : "" 


  // Note: Would probably save this into some state management 
  // a call getting all patients.
  useEffect(() => {
    async function fetchPatient() {
      setPatient(await client.readResource('Patient', '123'))
    }
    fetchPatient()
  }, [])

  return (
    <>
    <Container size={1300}>
      <Title mt={50} ml={20}>Welcome to Lotus AI</Title>

      {
        patient != null 
        ? <Grid>
          <Grid.Col span={10}>
            <Card shadow="sm" padding="lg" radius="md" withBorder mt={25}>
              <Grid>
                <Grid.Col span={2}>
                  <img src={patientPhoto} alt="Patient" style={{borderRadius: 100, width: "100%", border: "solid 1px"}}/>
                </Grid.Col>
                <Grid.Col span={10}>
                  <Text>
                    {patientName}
                  </Text>
                  <Text>
                    {patient.birthDate ? `Birthdate: ${patient.birthDate}` : "N/A"}
                  </Text>
                </Grid.Col>
                <Button color="blue" fullWidth mt="md" radius="md" onClick={() => {router.push('/patient')}}>
                  Check Patinet Summary
                </Button>
              </Grid>
            </Card>
          </Grid.Col>
        </Grid>
        : <Text>No users found</Text>
      }
    </Container>
    </>
  )
}
