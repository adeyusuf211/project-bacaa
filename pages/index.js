import Layout from '../layout'
import SectionOne from '../components/sectionOne'
import SectionTwo from '../components/sectionTwo'
import SectionThree from '../components/sectionThree'
import SectionFour from '../components/sectionFour'

export default function Home() {
  return (
    <Layout>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
    </Layout>
  )
}
