import * as React from 'react';
import { useState, useRef, useCallback } from 'react';

const RespondCheck = () => {
  const [state, setState] = useState('waiting');
  const [message, setMessage] = useState('클릭 후 시작');
  const [result, setResult] = useState<number[]>([]);
  // <T | null>을 하나의 타입으로 생각하는게 좋다
  const timeout = useRef<number | null>(null);
  const startTime = useRef(0);
  const endTime = useRef(0);

  const onClickScreen = useCallback(() => {
    if (state === 'waiting') {
      // node.js의 setTimeout과 브라우저의 setTimeout을 구분하기 위함.
      timeout.current = window.setTimeout(() => {
        setState('now');
        setMessage('지금 클릭');
        startTime.current = new Date().getTime();
      }, Math.floor(Math.random() * 1000) + 2000);
      setState('ready');
      setMessage('화면이 바뀌면 클릭!');
    } else if (state === 'ready') {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
      setState('waiting');
      setMessage('아직 화면이 바뀌지 않았습니다! 다시 진행해주세요!');
    } else if (state === 'now') {
      endTime.current = new Date().getTime();
      setState('waiting');
      setMessage('클릭해서 시작하기');
      setResult((prevResult) => {
        return [...prevResult, endTime.current - startTime.current];
      });
    }
  }, [state]);

  const onReset = useCallback(() => {
    setResult([]);
  }, []);

  const renderAverage = () => {
    return result.length === 0 ? null :
      <>
        <div>평균 시간: {result.reduce((a, c) => a + c) / result.length}ms</div>
        <button onClick={onReset}>리셋</button>
      </>
  }
  return (
    <>
      <div id="screen" className={state} onClick={onClickScreen}>
      {message}
      </div>
      {renderAverage()}
    </>
  )
};

export default RespondCheck;