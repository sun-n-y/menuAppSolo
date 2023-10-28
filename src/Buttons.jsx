const Buttons = ({ buttons, btnClick }) => {
  return (
    <div className="btn-container">
      {buttons.map((button) => {
        return (
          <button
            type="button"
            className="btn"
            key={button}
            onClick={() => {
              btnClick(button);
            }}
          >
            {button}
          </button>
        );
      })}
    </div>
  );
};
export default Buttons;
