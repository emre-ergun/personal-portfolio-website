const HamburgerMenu = ({style}) => {
  return (
    <div className={style}>
      <ul className="flex-row justify-center items-center">
        <li className="border-2 border-black w-8 my-2"></li>
        <li className="border-2 border-black w-8 my-2"></li>
        <li className="border-2 border-black w-8 my-2"></li>
      </ul>
    </div>
  );
};

export default HamburgerMenu;
