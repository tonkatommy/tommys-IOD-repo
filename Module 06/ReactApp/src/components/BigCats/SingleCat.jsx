const SingleCat = ({ id, name, latinName, image, onDelete }) => {
  return (
    <>
      <h1>{name}</h1>
      <h2>{latinName}</h2>
      <img src={image} alt="A Big Cat" />
      <button onClick={() => onDelete(id)}>Delete Cat</button>
    </>
  );
};

export default SingleCat;
