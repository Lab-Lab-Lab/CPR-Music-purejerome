import { useEffect, useRef } from 'react';
import styles from '../styles/aboutPageCarousel.module.css';

function List({ children }) {
  return <li className={styles.listContent}>{children}</li>;
}

function FullListContainer({ collabList, id }) {
  const container = useRef(null);

  function del() {
    if (container) {
      container.current.classList.remove(styles.visible);
    }
  }
  const htmlCollabs = collabList.map((person, ID) => {
    const retHTML = (
      <List key={ID}>
        {person.link ? (
          <a target="_blank" rel="noopener noreferrer" href={person.link}>
            {person.name}
          </a>
        ) : (
          person.name
        )}
        {' (' + person.profession + ')'}
      </List>
    );
    return retHTML;
  });
  return (
    <div className={styles.fullListContain} id={id} ref={container}>
      <div className={styles.innerFullList}>
        <button className={styles.exitButton} onClick={del}>
          &#10006;
        </button>
        <ul>{htmlCollabs}</ul>
      </div>
    </div>
  );
}

function AboutPageCarousel({ collabList, fullListID }) {
  const collabRef = useRef(null);
  useEffect(() => {
    const collabs = collabRef.current.querySelectorAll('div');

    let count = 0;
    function changeFocus() {
      collabs[count].classList.remove(styles.collabShow);
      if (count === collabs.length - 1) {
        count = 0;
      } else {
        count++;
      }
      collabs[count].classList.add(styles.collabShow);
    }

    collabs[0].classList.add(styles.collabShow);

    const interval = setInterval(changeFocus, 7000); // Repeat every 7 seconds
  }, []);

  const htmlCollabs = collabList.map((person, ID) => {
    const retHTML = (
      <div key={ID} className={styles.collabHide}>
        <p>
          <span>
            {person.link ? (
              <a target="_blank" rel="noopener noreferrer" href={person.link}>
                {person.name}
              </a>
            ) : (
              person.name
            )}
            {' (' + person.profession + ')'}
          </span>
        </p>
      </div>
    );
    return retHTML;
  });

  function realOpen() {
    document.getElementById(fullListID).classList.add(styles.visible);
  }

  function open(event) {
    event.preventDefault();
    realOpen();
  }

  let fullListName = 'Investigator';
  if (fullListID === 'collabs') {
    fullListName = 'Collaborator';
  }

  return (
    <>
      <FullListContainer collabList={collabList} id={fullListID} />
      <div className={styles.collabOuterContain}>
        <div className={styles.collabContain} ref={collabRef}>
          {htmlCollabs}
        </div>
        <a href="#" onClick={open}>
          {'Full ' + fullListName + ' List'}
        </a>
      </div>
    </>
  );
}

export default AboutPageCarousel;
