import React from "react";

export type AddressInfo = {
  zipcode: string;
  prefcode: string;
  address1: string;
  address2: string;
  address3: string;
  kana1: string;
  kana2: string;
  kana3: string;
};

type Props = {
  addressInfo?: AddressInfo;
};

export const Address: React.FC<Props> = ({ addressInfo }) => {
  return (
    <>
      {addressInfo && (
        <p>
          {addressInfo.address1}
          {addressInfo.address2}
          {addressInfo.address3}
        </p>
      )}
    </>
  );
};
