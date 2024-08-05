import "./SwapiPerson.css";
import { useFetch } from "../../hooks/useFetch";

export interface SwapiPersonProps {
  id: number;
}

interface IPerson {
  name: string;
}

export const SwapiPerson = ({ id }: SwapiPersonProps) => {
  const { data, status } = useFetch<IPerson>(
    `https://swapi.py4e.com/api/species/${id}`
  );

  let Person;
  switch (status) {
    case "pending":
      Person = () => <div>{"Loading..."}</div>;
      break;
    case "error":
      Person = () => <div>{"Error... : ("}</div>;
      break;
    case "loaded": {
      const person = data as IPerson;
      Person = () => <div>{person.name}</div>;
    }
  }
  return (
    <div className="swapiPerson">
      <Person />
    </div>
  );
};
