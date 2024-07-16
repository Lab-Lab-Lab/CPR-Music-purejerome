'use client';

import { useEffect, useRef, useState } from 'react';
import Layout from '../components/layout';
import AboutPageCarousel from '../components/aboutPageCarousel';
import styles from '../styles/peopleAbout.module.css';

const investCollabs = [
  {
    name: 'Lisa R. Caravan, DMA',
    profession:
      'Assistant Professor, Department of Music Teaching and Learning, Eastman School of Music, University of Rochester',
    link: 'https://www.esm.rochester.edu/directory/caravan-lisa/',
  },
  {
    name: 'Alden H. Snell, II, Ph.D.',
    profession:
      'Associate Professor, Department of Music Teaching and Learning, Eastman School of Music, University of Rochester',
    link: 'https://www.esm.rochester.edu/directory/snell-alden/',
  },
  {
    name: 'Michael C. Stewart, Ph.D.',
    profession:
      'Associate Professor of Computer Science, James Madison University',
    link: 'https://hcientist.com',
  },
  {
    name: 'David A. Stringham, Ph.D.',
    profession:
      'Professor of Music; Executive Director, Office of Creative Propulsion, James Madison University',
    link: 'https://www.jmu.edu/arts/people/stringham-david.shtml',
  },
];

const collabs = [
  {
    name: 'Abdullah Mohammed Ali',
    profession: 'Undergraduate Student, James Madison University',
  },
  {
    name: 'Alex Dumouchelle',
    profession: 'Undergraduate Student, James Madison University',
    link: 'https://portfolium.com/AlexDumo',
  },
  {
    name: 'Jerome Donfack',
    profession:
      'Undergraduate Research and Development Assistant, James Madison University',
    link: 'https://www.linkedin.com/in/jerome-donfack/',
  },
  {
    name: 'Zoey Fox',
    profession: 'Consultant',
  },
  {
    name: 'Jonah Giblin',
    profession: 'Undergraduate Student, James Madison University',
  },
  {
    name: 'Benjamin Guerrero, MM',
    profession:
      'Preparing Future Faculty Fellow, James Madison University; Ph.D. Candidate, University of Rochester',
    link: 'http://benguerrero.com/',
  },
  {
    name: 'Luke Hennessy',
    profession: 'Undergraduate, James Madison University',
  },
  {
    name: 'Matt Wolffe',
    profession: 'Undergraduate, James Madison University',
    link: 'https://mfwolffe.github.io/',
  },
  {
    name: 'Thomas Hassett',
    profession:
      'Undergraduate Student Alumnus, School of Music; Innovation Leader, Center for Inclusive Music Engagement; James Madison University',
  },
  {
    name: 'Chris Hopkins',
    profession: 'Undergraduate Student, James Madison University',
    link: 'https://www.linkedin.com/in/chris-hopkins-382238221/',
  },
  {
    name: 'William Jedrzejczak',
    profession: 'Undergraduate Student, James Madison University',
  },
  {
    name: 'Heidi Lucas, DMA',
    profession:
      'Visiting Assistant Professor of Brass and Music Education, University of Delaware',
  },
  {
    name: 'Brandon McKean',
    profession:
      'Systems Administrator, Department of Computer Science, James Madison University',
  },
  {
    name: 'Pete Morris',
    profession:
      'Systems Administrator, Department of Computer Science, James Madison University',
  },
  {
    name: 'Zamua Nasrawt',
    profession: 'Consulting Musician and Web Developer',
  },
  {
    name: 'Liem Nguyen',
    profession: 'Undergraduate Student, James Madison University',
    link: 'https://github.com/LiemKN/',
  },
  {
    name: 'Meara Patterson',
    profession: 'Undergraduate Student, James Madison University',
  },
  {
    name: 'Phil Riley',
    profession: 'Lecturer in Computer Science, James Madison University',
    link: 'https://www.jmu.edu/cise/people/faculty/riley-philip.shtml',
  },
  {
    name: 'Isaiah Ortiz',
    profession: 'Undergraduate Student, James Madison University',
  },
  {
    name: 'Nathan Self',
    profession: 'Consulting Musician and Web Developer',
  },
  {
    name: 'Paweł W. Woźniak, Ph.D.',
    profession:
      'Associate Professor, Interaction Design and Software Engineering division, Department of Computer Science and Engineering, Chalmers University',
    link: 'http://pawelwozniak.eu/',
  },
  {
    name: 'Lauren Yu',
    profession: 'Web Developer',
    link: 'https://laurenyz.github.io/portfolio/',
  },
];

function CarouselContainer({ children }) {
  return <div className={styles.carouselContainer}>{children}</div>;
}

function PeopleHeadings({ children }) {
  return <h2 className={styles.heading2}>{children}</h2>;
}

function DividerLine() {
  return <div className={styles.divLine} />;
}

function PeopleAbout() {
  const container = useRef(null);
  const [loaded, setLoad] = useState(false);
  function getHeight() {
    const rect = document.querySelector('nav').getBoundingClientRect();
    const { height } = rect;
    const windowHeight = window.innerHeight * 2;
    container.current.style.height = `${windowHeight - height}px`;
  }

  // check if container is loaded
  useEffect(() => {
    const interval = setInterval(() => {
      if (container.current) {
        setLoad(true);
        clearInterval(interval);
      }
    }, 0);
  }, []);

  // sets container height to auto fill to the bottom
  useEffect(() => {
    if (loaded) {
      getHeight();
      window.addEventListener('resize', getHeight);
    }
  }, [loaded]);
  return (
    <Layout>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
        ref={container}
      >
        <CarouselContainer>
          <PeopleHeadings>Investigators</PeopleHeadings>
          <DividerLine />
          <AboutPageCarousel collabList={investCollabs} fullListID="invest" />
        </CarouselContainer>
        <CarouselContainer>
          <PeopleHeadings>Collaborators</PeopleHeadings>
          <DividerLine />
          <AboutPageCarousel collabList={collabs} fullListID="collabs" />
        </CarouselContainer>
      </div>
    </Layout>
  );
}

export default PeopleAbout;
