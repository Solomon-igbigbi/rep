import React from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { IPhoneInput } from "./input.typings";

const PhoneInputElement = ({ value, handleChange, size }: IPhoneInput) => {
  const height = "2.5rem";

  const inputSize = {
    md: { height, width: "15.125rem" },
    lg: { height, width: "31.2rem" },
    sm: { height, width: "12.125rem" },
  };

  return (
    <PhoneInput
      inputStyle={size ? inputSize[size] : { width: "100%" }}
      country={"za"}
      value={value}
      onChange={handleChange}
    />
  );
};

export default PhoneInputElement;
