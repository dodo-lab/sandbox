import axios from 'axios';
import React, {useRef} from 'react';
import styles from '../styles/Home.module.css';

const Cancellation: React.FC = () => {
  const controller = useRef<AbortController | undefined>(undefined);

  const request = () => {
    controller.current = new AbortController();

    axios
      .get('http://10.10.10.10', {signal: controller.current.signal})
      .then(response => {
        console.log(response);
      })
      .catch(e => {
        if (axios.isCancel(e)) {
          alert('Cancel done');
        }
      })
      .finally(() => {
        console.log('finally');
      });
  };

  const cancel = () => {
    controller.current?.abort();
  };

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <button onClick={request}>Request</button>
        <button onClick={cancel}>Cancel</button>
      </main>
    </div>
  );
};

export default Cancellation;
