import PropTypes from "prop-types";
import GenresInDbCard from "./Card";

function GenresInDb({ genreList }) {
  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
            Genres in Data Base
          </h5>
        </div>
        <div className="card-body">
          <div className="row">
            {genreList.map((genre, i) => (
              <GenresInDbCard genre={genre} key={genre+i}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

GenresInDb.propTypes = {
  genreList: PropTypes.arrayOf(PropTypes.string).isRequired,
};

GenresInDb.defaultProps = {
  genreList: [],
};

export default GenresInDb;
