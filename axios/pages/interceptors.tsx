import axios, { AxiosRequestConfig } from "axios";
import React, { useState } from "react";
import styles from "../styles/Home.module.css";

type Request = {
  zipcode: string;
};

type Address = {
  zipcode: string;
  prefcode: string;
  address1: string;
  address2: string;
  address3: string;
  kana1: string;
  kana2: string;
  kana3: string;
};

type Response = {
  results: Address[];
};

const config: AxiosRequestConfig = {
  baseURL: "https://zipcloud.ibsnet.co.jp/api/search",
};

const normalAxios = axios.create(config);
const interceptAxios = axios.create(config);

const Interceptors: React.FC = () => {
  const [normalResponse, setNormalResponse] = useState<Address[]>([]);

  const normalRequest = async () => {
    const res = await normalAxios.get<Response>("", { params: { zipcode: "7830060" } });
    setNormalResponse(res.data.results);
  };

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <button onClick={normalRequest}>Normal</button>
        {normalResponse.map((v) => (
          <p key={v.zipcode}>
            {v.address1}
            {v.address2}
            {v.address3}
          </p>
        ))}
      </main>
    </div>
  );
};

export default Interceptors;
