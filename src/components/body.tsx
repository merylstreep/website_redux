import React, { useState } from "react";
import { data } from "../assets/data";
import { MenuItem, Select } from "@material-ui/core";
import CardSpace from "./CardSpace";

export interface BodyProps {
  text: string;
}

const Body: React.FunctionComponent<BodyProps> = ({ text, ...props }) => {
  const [val, setVal] = useState("");

  return (
    <>
      <p>
        Here's my CV of whatever :
        <a href="../assets/Harry_Zhang_CV.pdf" download>
          click to download{" "}
        </a>
      </p>
      <Select
        autoWidth
        labelId={"demo-select"}
        value={val}
        variant={"outlined"}
        onChange={e => {
          if (e && e.target) {
            setVal(String(e.target.value));
          }
        }}
      >
        <MenuItem key={""} value={""} style={{ height: "2rem" }}>Select a person ...</MenuItem>
        {data.map(person => (
          <MenuItem key={person.id} value={person.name}>
            {person.name}
          </MenuItem>
        ))}
      </Select>
      <ul>
        List of people
        {(Boolean(val) ? data.filter(person => person.name === val) : data).map(
          person => (
            <li key={person.name}>{person.name}</li>
          )
        )}
      </ul>
      <br />
      <ul>
        Other list
        {data.map(person => (
          <li key={person.name}>{person.name}</li>
        ))}
      </ul>
      <CardSpace filter={val} />
    </>
  );
};

export default Body;
