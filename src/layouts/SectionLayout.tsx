import React from 'react';

type Props = {
  id: string;
  children: React.ReactNode;
};

const SectionLayout = ({ id, children }: Props) => {
  return (
    <section id={id} className="w-full">
      <div className=' relative mx-auto px-4 md:px-0 md:w-5/6 lg:w-3/5'>{children}</div>
    </section>
  );
};

export default SectionLayout;
