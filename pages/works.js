import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbInkdrop from '../public/images/works/robot.jpg'
import thumbWalknote from '../public/images/works/AMR.png'
import thumbFourPainters from '../public/images/works/modell.png'
import thumbMenkiki from '../public/images/works/SUMO.jpg'
// import thumbMargelo from '../public/images/works/margelo_eyecatch.png'
// import thumbModeTokyo from '../public/images/works/modetokyo_eyecatch.png'
import thumbStyly from '../public/images/works/moteur.png'
import thumbPichu2 from '../public/images/works/Dolibar.jpg'
import thumbFreeDBTagger from '../public/images/works/Simultrain.jpg'
import thumbAmembo from '../public/images/works/intern.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Mechatronics Projects
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="TransP" title="TransP" thumbnail={thumbInkdrop}>
              A robot that transports pallets from point A to point B.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="Robot_AMR"
            title="Robot AMR"
            thumbnail={thumbWalknote}
          >
            A fully autonomous AMR robot programmed with ROS2.
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="TSR"
            title="TSR"
            thumbnail={thumbFourPainters}
          >
            An AI model for traffic sign recognition that was implemented in a car using Node-Red.
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="Mission R&D"
            title="Mission R&D"
            thumbnail={thumbStyly}
          >
            
             Ensured interoperability of engine models pulling a load designed across various software platforms.
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem id="Robot_SUMO" thumbnail={thumbMenkiki} title="Robot SUMO">
                
                Programmed a robot for a SUMO competition on MPLAB X alongside other teams.
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      {/* <Section delay={0.2}>
        <Divider my={6} /> */}

        {/* <Heading as="h3" fontSize={20} mb={4}>
          Collaborations
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <WorkGridItem id="margelo" thumbnail={thumbMargelo} title="Margelo">
            A website of the elite app development and contracting agency based
            in Austria
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem
            id="modetokyo"
            thumbnail={thumbModeTokyo}
            title="mode.tokyo"
          >
            The mode magazine for understanding to personally enjoy Japan
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem id="styly" thumbnail={thumbStyly} title="Styly">
            A VR Creative tools for fashion brands
          </WorkGridItem>
        </Section>
      </SimpleGrid> */}

      <Section delay={0.4}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Industrial Projects
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.5}>
          <WorkGridItem id="ERP (Dolibar)" thumbnail={thumbPichu2} title="ERP (Dolibar)">
          Utilize ERP for end-to-end manufacturing project, detect product anomalies.
          </WorkGridItem>
        </Section>
        <Section delay={0.5}>
          <WorkGridItem
            id="Simultrain"
            thumbnail={thumbFreeDBTagger}
            title="Simultrain"
          >
            Strategic Decision-Making and Optimization with Simultrain in Business Supervision.
          </WorkGridItem>
        </Section>
        <Section delay={0.6}>
          <WorkGridItem id="Production Cost Analysis" thumbnail={thumbAmembo} title="Production Cost Analysis">
            Responsible for analyzing the production costs of four products alongside two colleagues.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
