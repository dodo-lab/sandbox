import axios, { AxiosRequestConfig } from "axios";
import { Address, AddressInfo } from "components/Address";
import React, { useState } from "react";
import styles from "../styles/Home.module.css";

type Response = {
  results: AddressInfo[];
};

const config: AxiosRequestConfig = {
  baseURL: "https://zipcloud.ibsnet.co.jp/api/search",
};

const normalAxios = axios.create(config);
const interceptAxios = axios.create(config);

// リクエストのインターセプト
interceptAxios.interceptors.request.use((config) => {
  return { ...config, params: { zipcode: "7830061" } };
});

const Interceptors: React.FC = () => {
  const [normalResponse, setNormalResponse] = useState<AddressInfo | undefined>(undefined);
  const [interceptResponse, setInterceptResponse] = useState<AddressInfo | undefined>(undefined);

  const normalRequest = async () => {
    const res = await normalAxios.get<Response>("", { params: { zipcode: "7830060" } });
    setNormalResponse(res.data.results[0]);
  };

  const interceptRequest = async () => {
    const res = await interceptAxios.get<Response>("", { params: { zipcode: "7830060" } });
    setInterceptResponse(res.data.results[0]);
  };

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <button onClick={normalRequest}>Normal</button>
        <Address addressInfo={normalResponse} />
        <button onClick={interceptRequest}>Intercept</button>
        <Address addressInfo={interceptResponse} />
      </main>
    </div>
  );
};

export default Interceptors;
