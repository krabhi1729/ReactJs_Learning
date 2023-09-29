import "../../index.css";

export const ShimmerUI = ({ cardData })  => {
  return (
    <div className="shimmer-card-list">
      {cardData.map((card, index) => (
        <div className="shimmer-card" key={index}>
          <div className="shimmer-image"></div>
          <h2 className="shimmer-title">{card.title}</h2> {/* Use card data */}
          <h3 className="shimmer-cuisines">{card.cuisines}</h3> {/* Use card data */}
          <h4 className="shimmer-rating">{card.rating}</h4> {/* Use card data */}
        </div>
      ))}
    </div>
  );
};