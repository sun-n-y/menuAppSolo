const Buttons = ({ buttons }) => {
  return (
    <div className="btn-container">
      {buttons.map((button) => {
        return (
          <button type="button" className="btn" key={button}>
            {button}
          </button>
        );
      })}
    </div>
  );
};
export default Buttons;
