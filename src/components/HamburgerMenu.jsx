const HamburgerMenu = ({style}) => {
  return (
    <div className={style}>
      <ul className="flex-row justify-center items-center">
        <li className="border border-black w-8 mb-2.5"></li>
        <li className="border border-black w-8 mb-2.5"></li>
        <li className="border border-black w-8 mb-2.5"></li>
      </ul>
    </div>
  );
};

export default HamburgerMenu;
