import { SelectedPage } from '@/shared/types';

type NavBarProp = {
  isTopOfPage: boolean;
  selectedPage?: SelectedPage;
  setSelectedPage?: (value: SelectedPage) => void;
};

const NavBar = ({ isTopOfPage }: NavBarProp) => {
  const navBarBackground = isTopOfPage ? '' : 'bg-primary-100 drop-shadow';
  return (
    <div
      className={`${navBarBackground} flex items-center justify-between fixed top-0 z-30 w-full py-6`}
    >
      NavBar
    </div>
  );
};

export default NavBar;
