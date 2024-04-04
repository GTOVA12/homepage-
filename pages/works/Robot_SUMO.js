import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
// import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Robot_ SUMO">
    <Container>
      <Title>
      Robot SUMO <Badge>2024</Badge>
      </Title>
      <P>
      Ultimate Robot Battle.
      </P>
      <P>
      The project involved programming a robot to engage in battles with other robots within an arena, aiming for it to be as fast, precise, and intelligent as possible. For more details, please refer to the following 
        {' '}
        <Link href="https://github.com/GTOVA12/Projet-SUMO" target="_blank">
        link
            </Link>.
      </P>

      <List ml={4} my={4}>
        
        <ListItem>
          <Meta>Software used</Meta>
          <span>
            MPLAB X 
          </span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>
             C 
          </span>
        </ListItem>

      </List>



    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
