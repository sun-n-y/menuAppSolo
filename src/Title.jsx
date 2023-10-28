const Title = ({ title }) => {
  return (
    <div className="title">
      <h1>{title || 'default title'}</h1>
      <div className="underline"></div>
    </div>
  );
};
export default Title;
