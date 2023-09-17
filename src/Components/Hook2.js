import { useState, useEffect } from "react";
import axios from "axios";
export const Usehook = (url) => {
  const [data, setdata] = useState([]);
  const [err, seterr] = useState(null);
  const [loading, setloading] = useState(null);

  useEffect(() => {
    setloading(true);
    axios
      .get(url)
      .then((res) => {
        setloading(false);
        setdata(res.data.data);
        seterr(false);
      })
      .catch((err) => {
        setloading(false);
        seterr("أستغفرك ربى وأتوب إليك");
      });
  }, [url]);

  return [data, err, loading];
};
