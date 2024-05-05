import React from 'react';

const Footer = () => {
  return (
    <section className="max-container flex justify-center items-center">
      <p className="mt-2 text-sm text-slate-500">
        Copyright &copy; {new Date().getFullYear()} EngramSoft
      </p>
    </section>
  );
};

export default Footer;
