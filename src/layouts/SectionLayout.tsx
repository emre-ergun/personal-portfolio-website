import React from 'react';

type Props = {
  id: string;
  children: React.ReactNode;
};

const SectionLayout = ({ id, children }: Props) => {
  return (
    <section id={id} className="w-full">
      <div className=' relative mx-auto px-4 xl:px-0 max-w-screen-xl'>{children}</div>
    </section>
  );
};

export default SectionLayout;
