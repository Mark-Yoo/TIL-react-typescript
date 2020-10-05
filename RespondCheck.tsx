import * as React from 'react';
import { useState, useRef, useCallback } from 'react';

const RespondCheck = () => {
  const [state, setState] = useState('waiting');
  const [message, setMessage] = useState('클릭 후 시작');
  const [result, setResult] = useState<number[]>([]);
  const timeout = useRef<number>(null);
  const startTime = useRef(0);
  const endTime = useRef(0);
};

export default RespondCheck;