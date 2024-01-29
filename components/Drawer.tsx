import { Divider, Text } from "@mantine/core"
import Link from "next/link"
import { useHover } from '@mantine/hooks'

export default function Drawer(): JSX.Element {
  const { hovered, ref } = useHover()

  return (
    <div style={{backgroundColor: "#0e2347", height: "100vh"}}>
      <div ref={ref} style={{backgroundColor: hovered ? "#2B4775" :"#0e2347"}}>
        <Link href="/" style={{color: "white", textDecoration: "none"}}>
          <Text size={25} weight={400} style={{paddingLeft: 20, paddingTop: 20}}>
            <svg className="h-20 w-20 text-white"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M3 21v-13l9-4l9 4v13" />  <path d="M13 13h4v8h-10v-6h6" />  <path d="M13 21v-9a1 1 0 0 0 -1 -1h-2a1 1 0 0 0 -1 1v3" /></svg>          
            Home
          </Text>
          <Divider my="lg" />
        </Link>
      </div>
    </div>
  )
}
