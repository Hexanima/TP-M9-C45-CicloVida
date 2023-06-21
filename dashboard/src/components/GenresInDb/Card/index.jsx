import PropTypes from "prop-types";

function GenresInDbCard({ genre }) {
  return (
    <div className="col-lg-6 mb-4">
      <div className="card bg-dark text-white shadow">
        <div className="card-body">{genre}</div>
      </div>
    </div>
  );
}

GenresInDbCard.propTypes = {
  genre: PropTypes.string.isRequired,
};

export default GenresInDbCard;
