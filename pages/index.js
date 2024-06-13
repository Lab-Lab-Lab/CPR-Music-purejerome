'use client';
import { useEffect } from 'react';
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
  }
  return <div className={styles.cprcContainer} style={style} id={id} onClick={scrollTo}>{children}</div>
}

function Index() {
  return (
    <Layout>
      <Section>
        <GridContainer>
          <CPRCContainer scrollID={"create"}><h2>Create</h2></CPRCContainer>
          <CPRCContainer scrollID={"perform"}><h2>Perform</h2></CPRCContainer>
          <CPRCContainer scrollID={"respond"}><h2>Respond</h2></CPRCContainer>
          <CPRCContainer scrollID={"connect"}><h2>Connect</h2></CPRCContainer>
        </GridContainer>
      </Section>
      <Section id="create" style={{ backgroundColor: 'red' }}></Section>
      <Section id="perform" style={{ backgroundColor: 'yellow' }}></Section>
      <Section id="respond" style={{ backgroundColor: 'green' }}></Section>
      <Section id="connect" style={{ backgroundColor: 'blue' }}></Section>
    </Layout>
  );
}

export default Index;
