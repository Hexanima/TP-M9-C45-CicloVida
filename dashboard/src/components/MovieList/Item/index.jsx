function MovieListItem({ movie }) {
  return (
    <tr>
      <td>{movie.title}</td>
      <td>{movie.duration}</td>
      <td>{movie.rating}</td>
      <td>
        <ul>
          {movie.genres.map((genre, i) => (
            <li key={genre + i}>{genre.name}</li>
          ))}
        </ul>
      </td>
      <td>{movie.awards}</td>
    </tr>
  );
}

export default MovieListItem;
