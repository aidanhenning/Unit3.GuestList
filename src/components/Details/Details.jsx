import "./Details.css";

export default function Details({ data, guestId, setGuestId }) {
  return (
    <article>
      <h2>{selectedGuest.name}</h2>
      <address>
        {selectedGuest.email}
        <br />
        {selectedGuest.phone}
      </address>
      <p>{selectedGuest.job}</p>
      <p>{selectedGuest.bio}</p>
      <button onClick={() => setGuestId(null)}>Back</button>
    </article>
  );
}
