import * as React from 'react';
import { useState, useRef, useCallback } from 'react';

const RespondCheck = () => {
  const [state, setState] = useState('waiting');
  const [message, setMessage] = useState('클릭 후 시작');
  const [result, setResult] = useState<number[]>([]);
  const timeout = useRef<number>(null);
  const startTime = useRef(0);
  const endTime = useRef(0);

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