import PropTypes from "prop-types";

function GenresInDbCard({ name }) {
  return (
    <div className="col-lg-6 mb-4">
      <div className="card bg-dark text-white shadow">
        <div className="card-body">{name}</div>
      </div>
    </div>
  );
}

GenresInDbCard.propTypes = {
  name: PropTypes.string.isRequired,
};

export default GenresInDbCard;
