import { useState } from "react";

import GuestDetails from "./components/GuestDetails/GuestDetails";
import GuestList from "./components/GuestList/GuestList";

export default function App() {
  const [guestId, setGuestId] = useState(null);
  return (
    <main>
      {guestId ? (
        <GuestDetails guestId={guestId} setGuestId={setGuestId} />
      ) : (
        <GuestList setGuestId={setGuestId} />
      )}
    </main>
  );
}
