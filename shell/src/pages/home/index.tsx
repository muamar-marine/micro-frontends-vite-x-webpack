import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <section>
      <h1>Home Page</h1>
      <p>This is Homepage.</p>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
        }}>
        <h2>New Barge Package</h2>
        <ul>
          <li>
            <h3>Auth Module</h3>
          </li>
          <ul>
            <li>
              <Link to="/auth/login">Login</Link>
            </li>
            <li>
              <Link to="/auth/register">Register</Link>
            </li>
          </ul>

          <li>
            <h3>Profile Module</h3>
            <ul>
              <li>
                <Link to="/profile">Index</Link>
              </li>
            </ul>
          </li>
        </ul>
        <h2>Old Barge Package</h2>
        <ol>
          <li>
            <Link to="/shipment">Shipment</Link>
          </li>
        </ol>
      </div>
    </section>
  );
};

export default HomePage;
