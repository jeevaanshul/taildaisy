import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // To get the ID from URL

function Details() {
  const { id } = useParams(); // Get the game ID from the route
  const [gameDetails, setGameDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    // Fetch game details based on the game ID
    fetch(`https://www.cheapshark.com/api/1.0/games?id=${id}`)
      .then((response) => response.json())
      .then((data) => {
        setGameDetails(data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to fetch game details.");
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="container">
      <h2 className="text-2xl font-bold mb-4">Game Details</h2>
      {gameDetails && (
        <div className="card bg-base-200 shadow-xl p-4">
          <h3 className="text-xl font-semibold">{gameDetails.info.title}</h3>
          <p>Cheapest Price: {gameDetails.cheapestPriceEver.price}$</p>
          <img
            src={gameDetails.info.thumb}
            alt={gameDetails.info.title}
            className="w-40 h-auto"
          />
          <p>
            Deals:{" "}
            {gameDetails.deals.map((deal) => (
              <li key={deal.dealID}>
                {deal.storeID}: {deal.price}$
              </li>
            ))}
          </p>
        </div>
      )}
    </div>
  );
}

export default Details;