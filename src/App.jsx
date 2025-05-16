import { useEffect } from "react";
import { useState } from "react";
import Home from "./components/Home/Home";
import Details from "./components/Details/Details";

export default function App() {
  const [data, setData] = useState([]);
  const [guestId, setGuestId] = useState(null);

  useEffect(() => {
    // 1. fetch the user data
    // 1a. parse the data and find the part we want to store
    // 2. set the users state variable to that data
    fetch(
      "https://fsa-crud-2aa9294fe819.herokuapp.com/api/2504-FTB-ET-WEB-FT/guests"
    )
      .then((res) => res.json())
      .then((json) => {
        setData(json.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <main>
      {guestId ? (
        <Details setGuestId={setGuestId} />
      ) : (
        <Home data={data} setGuestId={setGuestId} />
      )}
    </main>
  );
}
