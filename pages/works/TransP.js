import {
  Container,
  Badge,
  
  List,
  ListItem
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
// import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="TransP">
    <Container>
      <Title>
        TransP <Badge>2024</Badge>
      </Title>
      <P>
      Designing a transportation system based on a specification document.
      </P>
      <P>
      The task involved analyzing the system by responding to the offer, defining requirements, creating a functional and logical architecture, then developing a Proof of Concept (POC), all while concurrently performing verification and validation (V&V) as well as integration, verification, and validation (IV&V).
      </P>

      <List ml={4} my={4}>
        
        <ListItem>
          <Meta>Software used</Meta>
          <span>
            Genesys / Objectiver / Word / Excel 
          </span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>
             Python 
          </span>
        </ListItem>

      </List>



      <WorkImage src="/images/works/TSR1.png" alt="Margelo" />
      <WorkImage src="/images/works/TSR2.png" alt="Margelo" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
