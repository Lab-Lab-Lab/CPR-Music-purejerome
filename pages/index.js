'use client';
import { useEffect, useRef, forwardRef } from 'react';
import { useDispatch } from 'react-redux';
import Link from 'next/link';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Layout from '../components/layout';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';
import { FaComment, FaLaughBeam, FaMicrophone, FaMicrophoneAlt } from 'react-icons/fa';
import { FaTools } from 'react-icons/fa';
import { FaRulerCombined } from 'react-icons/fa';
import styles from '../styles/index.module.css';

function Section({ children, style, id }) {
  return <div className={styles.container} style={style} id={id}>{children}</div>
}

function GridContainer({ children, style, id }) {
  return <div className={styles.gridContainer} style={style} id={id}>{children}</div>
}

function CPRCContainer({ children, style, id, scrollID }) {
  function scrollTo() {
    document.getElementById(scrollID).scrollIntoView({
      behavior: 'smooth'
    })
  };
  return <div className={styles.cprcContainer} style={style} id={id} onClick={scrollTo}>{children}</div>
}

const BackToTop = forwardRef(({ style, id }, ref) => {
  function scrollTo() {
    window.scrollTo(0, 0);
  };
  return <button className={styles.backToTopButton} style={style} id={id} ref={ref} onClick={scrollTo}>Back To Top</button>
});

function InfoContainer({ children, style, id }) {
  return <div className={styles.infoContainer} style={style} id={id}>{children}</div>
}

function Desciption({ children, style, id }) {
  return <div className={styles.descContainer} style={style} id={id}>{children}</div>
}

function SectionHeading({ title, style, id, img }) {
  let newStyle = style || {};
  newStyle.backgroundImage = `url(${img})`;
  return (
    <div className={styles.sectionHeading} style={newStyle} id={id}>
      <h2>{title}</h2>
    </div>
  );
}

function Index() {
  let button = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            if (button.current) {
              button.current.classList.remove(styles.buttonView);
            }
          }
          else {
            if (button.current) {
              button.current.classList.add(styles.buttonView);
            }
          }
        });
      },
      {
        threshold: 0.4,
      }
    );

    observer.observe(document.getElementById('top'));
  });
  return (
    <Layout>
      <Section>
        <GridContainer id="top">
          <CPRCContainer scrollID={"create"}><h2>Create</h2></CPRCContainer>
          <CPRCContainer scrollID={"perform"}><h2>Perform</h2></CPRCContainer>
          <CPRCContainer scrollID={"respond"}><h2>Respond</h2></CPRCContainer>
          <CPRCContainer scrollID={"connect"}><h2>Connect</h2></CPRCContainer>
        </GridContainer>
      </Section>
      <Section id="create" style={{ backgroundColor: 'rgb(255, 126, 126)' }}>
        <InfoContainer>
          <SectionHeading title="Create" img="createimg.jpg" style={{ color: 'red' }} />
          <Desciption><p>hi</p></Desciption>
        </InfoContainer>
      </Section>
      <Section id="perform" style={{ backgroundColor: 'rgb(253, 253, 115)' }}>
        <InfoContainer>
          <Desciption><p>hi</p></Desciption>
          <SectionHeading title="Perform" img="performmusic.jpg" style={{ color: 'yellow' }} />
        </InfoContainer>
      </Section>
      <Section id="respond" style={{ backgroundColor: 'rgb(56, 144, 56)' }}>
        <InfoContainer>
          <SectionHeading title="Respond" img="classroom.jpg" style={{ color: 'green' }} />
          <Desciption><p>hi</p></Desciption>
        </InfoContainer>
      </Section>
      <Section id="connect" style={{ backgroundColor: 'rgb(78, 78, 255)' }}>
        <InfoContainer>
          <Desciption><p>hi</p></Desciption>
          <SectionHeading title="Connect" img="teachingmusic.jpg" style={{ color: 'blue' }} />
        </InfoContainer>
      </Section>
      <BackToTop ref={button} />
    </Layout>
  );
}

export default Index;
