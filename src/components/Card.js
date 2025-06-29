import { useState } from "react";

function Card({ id, image, info, price, name, removeTour, setTours, tours }) {
  const [readmore, setReadmore] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const tour = tours.find((t) => t.id === id);
  const isBookmarked = tour?.isBookmarked || false;

  const toggleBookmark = () => {
    const updatedTours = tours.map((tour) => {
      if (tour.id === id) {
        return { ...tour, isBookmarked: !tour.isBookmarked };
      }
      return tour;
    });
    setTours(updatedTours);
  };

  const description = readmore ? info : `${info.substring(0, 200)}....`;

  return (
    <>
      <div className="card">
        <div className="bookmark-icon" onClick={toggleBookmark}>
          {isBookmarked ? "❤️" : "🤍"}
        </div>

        <img
          src={image}
          className="image"
          alt="tour"
          onClick={() => setShowModal(true)}
        />

        <div className="tour-info">
          <div className="tour-details">
            <h4 className="tour-price">₹ {price}</h4>
            <h4 className="tour-name">{name}</h4>
          </div>

          <div className="description">
            {description}
            <span className="read-more" onClick={() => setReadmore(!readmore)}>
              {readmore ? "Show Less" : "Read More"}
            </span>
          </div>
        </div>

        <button className="btn-red" onClick={() => removeTour(id)}>
          Not Interested
        </button>
      </div>

      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="modal-close" onClick={() => setShowModal(false)}>
              ✖
            </span>
            <img src={image} alt="Zoomed Tour" className="modal-img" />
          </div>
        </div>
      )}
    </>
  );
}

export default Card;
