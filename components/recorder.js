// with thanks to https://medium.com/front-end-weekly/recording-audio-in-mp3-using-reactjs-under-5-minutes-5e960defaf10

import MicRecorder from 'mic-recorder-to-mp3';
import { useEffect, useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import {
  FaMicrophone, FaStop, FaCloudUploadAlt,
  FaSpinner, FaTimesCircle, FaCheck, FaPlay, FaPause,
  FaVolumeOff, FaVolumeMute, FaVolumeDown, FaVolumeUp, FaRegTrashAlt
} from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useRouter } from 'next/router';
import { UploadStatusEnum } from '../types';
import StatusIndicator from './statusIndicator';
import WaveSurfer from 'wavesurfer.js';

function AudioViewer({ src }) {
  const containerW = useRef(null);
  const waveSurf = useRef(null);
  const volume = useRef(null);
  const [playing, setPlay] = useState(<FaPlay />);
  const [volumeIndex, changeVolume] = useState(<FaVolumeUp />);
  useEffect(() => {
    if (containerW.current && !waveSurf.current) {
      waveSurf.current = WaveSurfer.create({
        container: containerW.current,
        waveColor: 'blue',
        progressColor: 'purple',
        barWidth: '3',
        barRadius: '3',
        cursorWidth: '1',
        height: '200',
        barGap: '3',
        dragToSeek: true
        // plugins:[
        //   WaveSurferRegions.create({maxLength: 60}),
        //   WaveSurferTimeLinePlugin.create({container: containerT.current})
        // ]
      });
      if (waveSurf.current) {
        waveSurf.current.load(src);
      }
      if (volume.current && waveSurf.current) {
        waveSurf.current.setVolume(volume.current.value);
        volume.current.addEventListener('input', handleVolumeChange)
      }
    }
  }, []);

  function handleVolumeChange() {
    waveSurf.current.setVolume(volume.current.value);
    if (volume.current.value == 0) {
      changeVolume(<FaVolumeMute />);
    }
    else if (volume.current.value < .25) {
      changeVolume(<FaVolumeOff />);
    }
    else if (volume.current.value < .5) {
      changeVolume(<FaVolumeDown />);
    }
    else if (volume.current.value < .75) {
      changeVolume(<FaVolumeUp />);
    }
  }

  function playPause() {
    if (waveSurf.current.isPlaying()) {
      setPlay(<FaPlay />);
      waveSurf.current.pause();
    }
    else {
      setPlay(<FaPause />);
      waveSurf.current.play();
    }
  };
  if (waveSurf.current) {
    waveSurf.current.on('finish', () => {
      setPlay(<FaPlay />);
    });
  }

  return (
    <div style={{
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <div className="wavesurfercontain" ref={containerW} style={{ width: '100%' }}></div>
      <div>
        <Button onClick={playPause}>{playing}</Button>
        <input ref={volume} type="range" min="0" max="1" step="0.01" defaultValue="1"></input>
        {volumeIndex}
      </div>
    </div>
  );
}

export default function Recorder({ submit, accompaniment }) {
  // const Mp3Recorder = new MicRecorder({ bitRate: 128 }); // 128 is default already
  const [isRecording, setIsRecording] = useState(false);
  const [blobURL, setBlobURL] = useState('');
  const [blobData, setBlobData] = useState();
  const [blobInfo, setBlobInfo] = useState([]);
  const [isBlocked, setIsBlocked] = useState(false);
  const [recorder, setRecorder] = useState(new MicRecorder());
  const dispatch = useDispatch();
  const [min, setMinute] = useState(0);
  const [sec, setSecond] = useState(0);

  const accompanimentRef = useRef(null);

  const router = useRouter();
  const { slug, piece, actCategory, partType } = router.query;

  useEffect(() => {
    setBlobInfo([]);
    setBlobURL('');
    setBlobData();
  }, [partType]);

  const startRecording = (ev) => {
    if (isBlocked) {
      console.error('cannot record, microphone permissions are blocked');
    } else {
      accompanimentRef.current.play();
      recorder
        .start()
        .then(() => {
          setIsRecording(true);
        })
        .catch((err) => console.error('problem starting recording', err));
    }
  };

  const stopRecording = (ev) => {
    accompanimentRef.current.pause();
    accompanimentRef.current.load();

    recorder
      .stop()
      .getMp3()
      .then(([buffer, blob]) => {
        setBlobData(blob);
        const url = URL.createObjectURL(blob);
        setBlobURL(url);
        setBlobInfo([
          ...blobInfo,
          {
            url,
            data: blob,
          },
        ]);
        setIsRecording(false);
      })
      .catch((e) => console.error('error stopping recording', e));
  };

  const submitRecording = (i, submissionId) => {
    const formData = new FormData(); // TODO: make filename reflect assignment
    formData.append(
      'file',
      new File([blobInfo[i].data], 'student-recoding.mp3', {
        mimeType: 'audio/mpeg',
      })
    );
    // dispatch(submit({ audio: formData }));
    submit({ audio: formData, submissionId });
  };

  function deleteTake(index) {
    let newInfo = blobInfo.slice();
    newInfo.splice(index, 1);
    setBlobInfo(newInfo);
  }

  // check for recording permissions
  useEffect(() => {
    if (
      typeof window !== 'undefined' &&
      navigator &&
      navigator.mediaDevices.getUserMedia
    ) {
      navigator.mediaDevices
        .getUserMedia({ audio: { echoCancellation: false, noiseSuppression: false } })
        .then(() => {
          setIsBlocked(false);
        })
        .catch(() => {
          console.log('Permission Denied');
          setIsBlocked(true);
        });
    }
  }, []);

  useEffect(() => {
    let interval = null;
    if (isRecording) {
      interval = setInterval(() => {
        setSecond(sec + 1);
        if (sec === 59) {
          setMinute(min + 1);
          setSecond(0);
        }
        if (min === 99) {
          setMinute(0);
          setSecond(0);
        }
      }, 1000);
    } else if (!isRecording && sec !== 0) {
      setMinute(0);
      setSecond(0);
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isRecording, sec]);

  return (
    <>
      <Row>
        <Col>
          {isRecording ? (
            <Button onClick={stopRecording}>
              <FaStop /> {String(min).padStart(2, '0')}:
              {String(sec).padStart(2, '0')}
            </Button>
          ) : (
            <Button onClick={startRecording}>
              <FaMicrophone />
            </Button>
          )}
        </Col>
      </Row>
      <Row>
        <Col>
          {/* <StatusIndicator statusId={`recording-take-test`} /> */}
          {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
          <audio ref={accompanimentRef}>
            <source src={accompaniment} type="audio/mpeg" />
          </audio>
          {blobInfo.length === 0 ? (
            <span>No takes yet. Click the microphone icon to record.</span>
          ) : (
            <ListGroup as="ol" numbered>
              {blobInfo.map((take, i) => (
                <ListGroupItem
                  key={take.url}
                  as="li"
                  className="d-flex justify-content-between align-items-start"
                  style={{ fontSize: '1.5rem' }}
                >
                  {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
                  {/* <audio
                    style={{ height: '2.25rem' }}
                    src={take.url}
                    controls
                  /> */}
                  <AudioViewer src={take.url} />
                  <div>
                    <Button
                      onClick={() => submitRecording(i, `recording-take-${i}`)}
                    >
                      <FaCloudUploadAlt />
                    </Button>
                    <Button
                      onClick={() => deleteTake(i)}>
                      <FaRegTrashAlt />
                    </Button>
                  </div>
                  <div className="minWidth">
                    <StatusIndicator statusId={`recording-take-${i}`} />
                  </div>
                </ListGroupItem>
              ))}
            </ListGroup>
          )}
          {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
          <audio src={blobURL} />
        </Col>
      </Row>
    </>
  );
}
