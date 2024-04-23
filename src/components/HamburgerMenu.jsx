const HamburgerMenu = () => {
  return (
    <button
      className="button-one border-2 border-button-primary rounded-lg mt-2"
      aria-controls="primary-navigation"
      aria-expanded="false"
    >
      <svg viewBox="0 0 10 10" width="45" className="fill-button-primary">
        <rect
          className="line top"
          width="8"
          height="1"
          x="1"
          y="2"
          rx="0.5"
        ></rect>
        <rect
          className="line middle"
          width="8"
          height="1"
          x="1"
          y="4.5"
          rx="0.5"
        ></rect>
        <rect
          className="line bottom"
          width="8"
          height="1"
          x="1"
          y="7"
          rx="0.5"
        ></rect>
      </svg>
    </button>
  );
};
export default HamburgerMenu;
