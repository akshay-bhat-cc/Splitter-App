import { useEffect, useState } from "react";
import "./SwapiPerson.css";

export interface SwapiPersonProps {
  id: number;
}

interface Person {
  name: string;
}

const fetchPerson = async (id: number) => {
  const response = await fetch(`https://swapi.py4e.com/api/species/${id}`);
  const json = await response.json();
  return json;
};

export const SwapiPerson = ({ id }: SwapiPersonProps) => {
  const [personInfo, setPersonInfo] = useState<Person>({ name: "" });

  useEffect(() => {
    const fetchPersonInternal = async () => {
      const person = await fetchPerson(id);
      setPersonInfo(person);
    };
    fetchPersonInternal();
  }, [id]);

  return <div className="swapiPerson">{personInfo.name}</div>;
};
