import React from "react";
import { Select } from "antd";
import { ISelects } from "./selects.typings";

const { Option } = Select;

const Selects = ({ placeholder, options }: ISelects): JSX.Element => (
  <Select
    showSearch
    style={{ width: 500 }}
    placeholder={placeholder}
    optionFilterProp="children"
    filterOption={(input, option) =>
      (option!.children as unknown as string).includes(input)
    }
    filterSort={(optionA, optionB) =>
      (optionA!.children as unknown as string)
        .toLowerCase()
        .localeCompare((optionB!.children as unknown as string).toLowerCase())
    }
  >
    <Option value="1">{options}</Option>
    <Option value="2">{options}</Option>
    <Option value="3">{options}</Option>
    <Option value="4">{options}</Option>
    <Option value="5">{options}</Option>
    <Option value="6">{options}</Option>
  </Select>
);

export default Selects;
