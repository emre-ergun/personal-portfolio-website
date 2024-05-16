const HamburgerMenu = ({isClicked}) => {
  return (
    <button
      className="hamburger-button border-2 border-neutral-200 rounded-lg mt-2"
      aria-controls="primary-navigation"
      aria-expanded="false"
    >
      <svg
        viewBox="-10 -10 120 120"
        width="32"
        className={`fill-none stroke-neutral-200 ${isClicked ? 'hamburger-svg-close' : 'hamburger-svg-open'}`}
      >
        <path
          className={`${isClicked ? 'hamburger-line-close' : 'hamburger-line-open'}`}
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeWidth="10"
          d="m 20 40 h 60 a 1 1 0 0 1 0 20 h -60 a 1 1 0 0 1 0 -40 h 30 v 70"
        ></path>
      </svg>
    </button>
  );
};
export default HamburgerMenu;
