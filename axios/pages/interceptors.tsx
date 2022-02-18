import axios, {AxiosRequestConfig} from 'axios';
import {Address, AddressInfo} from 'components/Address';
import React, {useState} from 'react';
import styles from '../styles/Home.module.css';

type Response = {
  results: AddressInfo[];
};

const config: AxiosRequestConfig = {
  baseURL: 'https://zipcloud.ibsnet.co.jp/api/search',
};

const normalAxios = axios.create(config);
const requestInterceptAxios = axios.create(config);
const responseInterceptAxios = axios.create(config);

// リクエストのインターセプト
requestInterceptAxios.interceptors.request.use(config => {
  return {...config, params: {zipcode: '7830061'}};
});

// レスポンスのインターセプト
responseInterceptAxios.interceptors.response.use(response => {
  response.data.results[0].address1 = '新潟県';
  return response;
});

const Interceptors: React.FC = () => {
  const [normalResponse, setNormalResponse] = useState<AddressInfo | undefined>(undefined);
  const [requestInterceptResponse, setRequestInterceptResponse] = useState<AddressInfo | undefined>(undefined);
  const [responseInterceptResponse, setResponseInterceptResponse] = useState<AddressInfo | undefined>(undefined);

  const normal = async () => {
    const res = await normalAxios.get<Response>('', {params: {zipcode: '7830060'}});
    setNormalResponse(res.data.results[0]);
  };

  const requestIntercept = async () => {
    const res = await requestInterceptAxios.get<Response>('', {params: {zipcode: '7830060'}});
    setRequestInterceptResponse(res.data.results[0]);
  };

  const responseIntercept = async () => {
    const res = await responseInterceptAxios.get<Response>('', {params: {zipcode: '7830060'}});
    setResponseInterceptResponse(res.data.results[0]);
  };

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <button onClick={normal}>Normal</button>
        <Address addressInfo={normalResponse} />
        <button onClick={requestIntercept}>Request Intercept</button>
        <Address addressInfo={requestInterceptResponse} />
        <button onClick={responseIntercept}>Response Intercept</button>
        <Address addressInfo={responseInterceptResponse} />
      </main>
    </div>
  );
};

export default Interceptors;
