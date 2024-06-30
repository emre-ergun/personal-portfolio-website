import React from 'react';

type Props = {
  id: string;
  children: React.ReactNode;
};

const SectionLayout = ({ id, children }: Props) => {
  return <section id={id}>{children}</section>;
};

export default SectionLayout;
