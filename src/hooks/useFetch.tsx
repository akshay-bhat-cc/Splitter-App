import { useState, useEffect } from "react";

// const delay = (delay: number) =>
//   new Promise((resolve) => setTimeout(resolve, delay));

async function fetchURL(url: string) {
  const response = await fetch(url);
  if (response.status !== 200) {
    throw new Error("Something went wrong, please try again");
  }
  const jsonObj = await response.json();
  return jsonObj;
}

type Status = "pending" | "loaded" | "error";

export interface ResponseStatus<T> {
  status: Status;
  data: null | T | string;
}

export function useFetch<T>(url: string) {
  const [responseStatus, setResponseStatus] = useState<ResponseStatus<T>>({
    status: "pending",
    data: null,
  });

  useEffect(() => {
    async function fetchPersonInternal() {
      try {
        const data = await fetchURL(url);
        setResponseStatus({ status: "loaded", data: data });
      } catch (err) {
        console.log("Error!");
        setResponseStatus({
          status: "error",
          data: "Some error occured, please try again",
        });
      }
    }
    setResponseStatus({ status: "pending", data: null });
    fetchPersonInternal();
  }, [url]);

  return { ...responseStatus };
}
