import './ProductList.css';
import { useNavigate } from 'react-router-dom';

const products = [
  { name: 'Tea', oldPrice: 25, newPrice: 15, image: 'tea.jpg' },
  { name: 'Coffee', oldPrice: 35, newPrice: 25, image: 'coffee.png' },
];

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1>Tea & Coffee</h1>

      {/* Add this wrapper for horizontal layout */}
      <div className="product-grid">
        {products.map((p) => (
          <div
            className="product-card"
            key={p.name}
            onClick={() => navigate(`/product/${encodeURIComponent(p.name)}`)}
          >
            <div className="circle-image">
              <img src={p.image} alt={p.name} />
            </div>
            <h3>{p.name}</h3>
            <p>
              <s>${p.oldPrice.toFixed(2)}</s>{' '}
              <span className="new-price">${p.newPrice.toFixed(2)}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
