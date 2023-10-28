const SingleMenuItem = ({ title, price, img, desc }) => {
  return (
    <article className="single-item">
      <img src={img} className="item-img" />
      <header>
        <h3>{title}</h3>
        <span>{price}</span>
      </header>
      <p>{desc}</p>
    </article>
  );
};
export default SingleMenuItem;
