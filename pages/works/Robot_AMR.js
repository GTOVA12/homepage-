import {
    Container,
    Badge,
    Link,
    List,
    ListItem,
    AspectRatio
  } from '@chakra-ui/react'
  import Layout from '../../components/layouts/article'
  // import { ExternalLinkIcon } from '@chakra-ui/icons'
  import { Title, WorkImage, Meta } from '../../components/work'
  import P from '../../components/paragraph'
  
  const Work = () => (
    <Layout title="TransP">
      <Container>
        <Title>
          Robot AMR <Badge>2023</Badge>
        </Title>
        <P>
        Autonomous Mobile Robot
        </P>
        <P>
        It was a collaborative effort involving a team of five individuals over the course of four months. The project commenced with a comprehensive market analysis, followed by a thorough value analysis and functional study. Subsequently, simulations were conducted on Gazebo, culminating in the development of a prototype. All algorithms previously simulated were subsequently implemented on both a Raspberry Pi and an Arduino board. For more details, please refer to the following 
        {' '}
        <Link href="https://github.com/GTOVA12/my_bot" target="_blank">
        link
            </Link>.
        </P>
  
        <List ml={4} my={4}>
          
          <ListItem>
            <Meta>Plateform</Meta>
            <span>
              ROS2 (Foxy), Gazebo(simulation)
            </span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>
                     Python , C++ 
            </span>
          </ListItem>
          <ListItem>
            <Meta>Algorithm</Meta>
            <span>
                NAV2Stack , SLAM 2D , MCL
            </span>
          </ListItem>

  
        </List>
  
  
  
        <WorkImage src="/images/works/RD1.jpeg" alt="Margelo" />
        <WorkImage src="/images/works/RD2.jpg" alt="Margelo" />
        <AspectRatio maxW="1200px" ratio={1} my={4}>
        <iframe
          src="https://www.facebook.com/reel/266278142834807"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </AspectRatio>
        
      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'