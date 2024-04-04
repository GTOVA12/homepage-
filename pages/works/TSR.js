import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
// import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="TransP">
    <Container>
      <Title>
        TSR <Badge>2022</Badge>
      </Title>
      <P>
      Artificial intelligence model that recognizes traffic signs.
      </P>
      <P>
      It was an internship project where I developed a traffic sign recognition model using two methods, which I then converted into JSON format for integration into Node-Red. For more details, please refer to the following 
        {' '}
        <Link href="https://github.com/GTOVA12/Traffic-Sign-detection" target="_blank">
        link
            </Link>.
      </P>

      <List ml={4} my={4}>
        
        <ListItem>
          <Meta>Plateform</Meta>
          <span>
            Google Colab
          </span>
        </ListItem>
        
        <ListItem>
          <Meta>Stack</Meta>
          <span>
             Python 
          </span>
        </ListItem>
        <ListItem>
          <Meta>Module</Meta>
          <span>
          sklearn, tensorflow, keras, OpenCV, YoloV5 
          </span>
        </ListItem>

      </List>



      <WorkImage src="/images/works/1.png" alt="Margelo" />
      <WorkImage src="/images/works/2.png" alt="Margelo" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
