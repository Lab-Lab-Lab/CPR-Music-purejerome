'use client';

import { Button, Card, Col, Row } from 'react-bootstrap';
import Layout from '../components/layout';
import AboutPageCarousel from '../components/aboutPageCarousel';

function About() {
  return (
    <Layout>
      <h1 className="mt-3">About MusicCPR</h1>
      {/* <Row> */}
      <Card style={{ width: '18rem' }} className="float-end ml-4">
        <Card.Img
          variant="top"
          src="https://res.cloudinary.com/scalefunder/image/upload/c_crop,h_2938,w_5184,x_0,y_68/c_scale,h_170,w_300/f_auto,fl_lossy,q_auto/v1/James_Madison_University/q4uzdgpi5evlfvrcj3qz"
        />
        <Card.Body>
          <Card.Title>Support us</Card.Title>
          <Card.Text>
            If you would be interested in supporting our project, click below.
          </Card.Text>
          <a
            className="btn btn-success"
            target="_blank"
            rel="noopener noreferrer"
            href="https://dukesfunder.jmu.edu/project/30270"
          >
            Learn more
          </a>
        </Card.Body>
      </Card>
      <p>
        MusicCPR is a free web-based platform to promote standards-based
        instrumental music education. MusicCPR aligns with four artistic
        processes found in{' '}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://nafme.org/my-classroom/standards/"
        >
          National Standards for Music Education
        </a>
        : create, perform, respond, and connect and their manifestations in
        state standards for instrumental music education (e.g., New York's{' '}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://www.nysed.gov/curriculum-instruction/arts-standards-implementation-resources"
        >
          Arts Learning Standards
        </a>
        , Virginia's{' '}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://doe.virginia.gov/testing/sol/standards_docs/fine_arts/2020/2020fasol-music.pdf"
        >
          Music Standards of Learning
        </a>
        ).
      </p>
      {/* <Col> */}

      <p>
        We provide teachers with research-based and standards-aligned tools for
        facilitating and assessing individual students' music learning. These
        tools connect with established repertoire on state music education
        association lists, as well as newly commissioned repertoire that
        highlights underrepresented musics and composers.
      </p>
      <p>
        MusicCPR is housed at James Madison University, in a collaboration
        between the{' '}
        <a target="_blank" rel="noopener noreferrer" href="https://jmu.edu/cs">
          Department of Computer Science
        </a>{' '}
        and the{' '}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.jmu.edu/arts/ocp/index.shtml"
        >
          Office of Creative Propulsion
        </a>{' '}
        with collaborators at{' '}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://rochester.edu/"
        >
          University of Rochester
        </a>
        's{' '}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.esm.rochester.edu/"
        >
          Eastman School of Music
        </a>{' '}
        and in{' '}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.udel.edu/"
        >
          University of Delaware
        </a>
        's{' '}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.music.udel.edu/"
        >
          School of Music
        </a>
        . MusicCPR's development has been supported by these institutions, as
        well as{' '}
        <a target="_blank" rel="noopener noreferrer" href="https://4-va.org/">
          4-VA Collaborative
        </a>{' '}
        and{' '}
        <a target="_blank" rel="noopener noreferrer" href="https://nafme.org/">
          National Association for Music Education
        </a>
        .
      </p>
      <p>
        If you're interested in trying MusicCPR, or have a question for the
        team, don't hesitate to drop us a line at{' '}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="mailto:feedback@musiccpr.org"
        >
          feedback@musiccpr.org
        </a>
      </p>
      {/* <h2>Investigators</h2>
      <AboutPageCarousel collabList={investCollabs} fullListID="invest" />
      <h2>Collaborators</h2>
      <AboutPageCarousel collabList={collabs} fullListID="collabs" /> */} 
    </Layout>
  );
}

export default About;
