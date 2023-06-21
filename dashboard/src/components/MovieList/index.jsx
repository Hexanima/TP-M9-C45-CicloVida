import MovieListItem from "./Item";

function MovieList({ movieList }) {
  return (
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Título</th>
          <th scope="col">Duración</th>
          <th scope="col">Rating</th>
          <th scope="col">Género</th>
          <th scope="col">Premios</th>
        </tr>
      </thead>
      <tbody>
        {movieList.map((movie, i) => (
          <MovieListItem movie={movie} key={movie + i} />
        ))}
      </tbody>
    </table>
  );
}

export default MovieList;
