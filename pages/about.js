'use client';

import { Button, Card, Col, Row } from 'react-bootstrap';
import Layout from '../components/layout';
import AboutPageCarousel from '../components/aboutPageCarousel';
import styles from '../styles/about.module.css';

function AboutHeading({ children }) {
  return <h1 className={styles.aboutHeading}>{children}</h1>;
}

function AboutSections({ children }) {
  return <div className={styles.aboutSection}>{children}</div>;
}

function HyperLink({ children, href, success }) {
  return (
    <a
      className={success ? 'btn btn-success' : styles.links}
      target="_blank"
      rel="noopener noreferrer"
      href={href}
    >
      {children}
    </a>
  );
}

function ParagraphSection({ children, style }) {
  return (
    <div className={styles.paraContainer} style={style}>
      {children}
    </div>
  );
}

function FlexibleImage({ src }) {
  return (
    <figure className={styles.imgContain}>
      <img src={src} style={{ width: '100%', height: 'auto' }} alt="" />
    </figure>
  );
}

function About() {
  return (
    <Layout>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <AboutHeading>About MusicCPR</AboutHeading>
        <AboutSections>
          <ParagraphSection>
            <p>
              <span className={styles.bold}>
                MusicCPR is a free web-based platform to promote standards-based
                instrumental music education.
              </span>{' '}
              MusicCPR aligns with four artistic processes found in{' '}
              <HyperLink href="https://nafme.org/my-classroom/standards/">
                National Standards for Music Education
              </HyperLink>
              : create, perform, respond, and connect and their manifestations
              in state standards for instrumental music education (e.g., New
              York&apos;s{' '}
              <HyperLink href="http://www.nysed.gov/curriculum-instruction/arts-standards-implementation-resources">
                Arts Learning Standards
              </HyperLink>
              , Virginia&apos;s{' '}
              <HyperLink href="https://doe.virginia.gov/testing/sol/standards_docs/fine_arts/2020/2020fasol-music.pdf">
                Music Standards of Learning
              </HyperLink>
              ).
            </p>
          </ParagraphSection>
          <FlexibleImage src="manplayingguitar.jpg" />
        </AboutSections>
        <AboutSections>
          <FlexibleImage src="teachingmusic.jpg" />
          <ParagraphSection>
            <p>
              We provide teachers with research-based and standards-aligned
              tools for facilitating and assessing individual students&apos;
              music learning. These tools connect with established repertoire on
              state music education association lists, as well as newly
              commissioned repertoire that highlights underrepresented musics
              and composers.
            </p>
          </ParagraphSection>
        </AboutSections>
        <AboutSections>
          <ParagraphSection>
            <p>
              MusicCPR is housed at James Madison University, in a collaboration
              between the{' '}
              <HyperLink href="https://jmu.edu/cs">
                Department of Computer Science
              </HyperLink>{' '}
              and the{' '}
              <HyperLink href="https://www.jmu.edu/arts/ocp/index.shtml">
                Office of Creative Propulsion
              </HyperLink>{' '}
              with collaborators at{' '}
              <HyperLink href="https://rochester.edu/">
                University of Rochester
              </HyperLink>
              &apos;s{' '}
              <HyperLink href="https://www.esm.rochester.edu/">
                Eastman School of Music
              </HyperLink>{' '}
              and in{' '}
              <HyperLink href="https://www.udel.edu/">
                University of Delaware
              </HyperLink>
              &apos;s{' '}
              <HyperLink href="https://www.music.udel.edu/">
                School of Music
              </HyperLink>
              . MusicCPR&apos;s development has been supported by these
              institutions, as well as{' '}
              <HyperLink href="https://4-va.org/">4-VA Collaborative</HyperLink>{' '}
              and{' '}
              <HyperLink href="https://nafme.org/">
                National Association for Music Education
              </HyperLink>
              .
            </p>
            <p>
              If you&apos;re interested in trying MusicCPR, or have a question
              for the team, don&apos;t hesitate to drop us a line at{' '}
              <HyperLink href="mailto:feedback@musiccpr.org">
                feedback@musiccpr.org
              </HyperLink>
            </p>
          </ParagraphSection>
          <FlexibleImage src="JMU.jpg" />
        </AboutSections>
        <AboutSections>
          <Card className={styles.outerCard}>
            <Card.Img
              variant="top"
              src="https://res.cloudinary.com/scalefunder/image/upload/c_crop,h_2938,w_5184,x_0,y_68/c_scale,h_170,w_300/f_auto,fl_lossy,q_auto/v1/James_Madison_University/q4uzdgpi5evlfvrcj3qz"
            />
            <Card.Body className={styles.innerCard}>
              <Card.Title>Support Us</Card.Title>
              <Card.Text>
                If you would be interested in supporting our project, click
                below.
              </Card.Text>
              <Button
                variant="primary"
                href="https://dukesfunder.jmu.edu/project/30270"
              >
                Learn More
              </Button>
            </Card.Body>
          </Card>
          <Button
            variant="primary"
            href="https://dukesfunder.jmu.edu/project/30270"
            className={styles.aboutButton}
          >
            People Page
          </Button>
          <Button
            variant="primary"
            href="https://dukesfunder.jmu.edu/project/30270"
            className={styles.aboutButton}
          >
            Research Page
          </Button>
        </AboutSections>
      </div>
    </Layout>
  );
}

// https://res.cloudinary.com/scalefunder/image/upload/c_crop,h_2938,w_5184,x_0,y_68/c_scale,h_170,w_300/f_auto,fl_lossy,q_auto/v1/James_Madison_University/q4uzdgpi5evlfvrcj3qz

export default About;
