import React from 'react';

const Footer = () => {
  return (
    <section className="max-container flex justify-center items-center my-4">
      <p className="mt-2 text-sm text-slate-500">
        Copyright &copy; {new Date().getFullYear()}{' '}
        <span>
          <a
            href="https://engramsoft.com"
            target="_blank"
            className="underline"
          >
            EngramSoft
          </a>
        </span>
      </p>
    </section>
  );
};

export default Footer;
