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

function Section({ children, style }) {
  return <div className={styles.container} style={style}>{children}</div>
}

function GridContainer({ children, style }) {
  return <div className={styles.gridContainer} style={style}>{children}</div>
}

function CPRCContainer({ children, style }) {
  return <div className={styles.cprcContainer} style={style}>{children}</div>
}

function Index() {
  return (
    <Layout>
      <Section>
        <GridContainer>
          <CPRCContainer><h2>Create</h2></CPRCContainer>
          <CPRCContainer><h2>Perform</h2></CPRCContainer>
          <CPRCContainer><h2>Respond</h2></CPRCContainer>
          <CPRCContainer><h2>Connect</h2></CPRCContainer>
        </GridContainer>
      </Section>
      <Section></Section>
    </Layout>
  );
}

export default Index;
