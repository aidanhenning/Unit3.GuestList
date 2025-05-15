import "./Home.css";

export default function Home({ data }) {
  return (
    <div className="home">
      <section className="guest-list-container">
        <h2>Name</h2>
        <ul>
          {data.map((guest) => (
            <li key={guest.id} className="guest-list-item">
              <p>{guest.name}</p>
            </li>
          ))}
        </ul>
      </section>
      <section className="guest-list-container">
        <h2>Email</h2>
        <ul>
          {data.map((guest) => (
            <li key={guest.id} className="guest-list-item">
              <p>{guest.email}</p>
            </li>
          ))}
        </ul>
      </section>
      <section className="guest-list-container">
        <h2>Phone</h2>
        <ul>
          {data.map((guest) => (
            <li key={guest.id} className="guest-list-item">
              <p>{guest.phone}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
