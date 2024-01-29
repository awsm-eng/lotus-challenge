import { AppProps } from 'next/app'
import Head from 'next/head'
import { MedplumProvider } from '@medplum/react'
import { MockClient } from '@medplum/mock'
import { Grid, ScrollArea } from '@mantine/core'
import Drawer from '../components/Drawer'

const medplum = new MockClient()

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`body { margin: 0px }`}</style>
      <Head>
        <title>Lotus Challenge</title>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <MedplumProvider medplum={medplum}>
        <Grid>
          <Grid.Col span={2}>
            <Drawer/>
          </Grid.Col>
          <Grid.Col span={10}>
            <ScrollArea h={"100vh"}>
              <Component {...pageProps} />
            </ScrollArea>
          </Grid.Col>
        </Grid>
          
      </MedplumProvider>
    </>
  )
}

export default MyApp