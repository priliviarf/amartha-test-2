import "./style.scss";
function List({ data = {} }) {
  const { data: dataSource = [] } = data;

  if (!dataSource?.length) return null;
  return (
    <div className="list-grid">
      {dataSource.map((anime) => (
        <div className="list-grid-item">{anime.title}</div>
      ))}
    </div>
  );
}

export default List;
