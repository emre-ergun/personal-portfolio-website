import { SlSocialLinkedin, SlSocialGithub } from 'react-icons/sl';

const SocialMedia = () => {
  return (
    <div className="fixed flex flex-col gap-4 top-[128px] ml-4 py-2 px-1 rounded-3xl bg-black hover:bg-neutral-200">
      <a
        href="https://linkedin.com/in/emrergun"
        target="_blank"
        className="flex items-center justify-center w-10 h-10 border bg-black border-black rounded-full"
      >
        <SlSocialLinkedin />
      </a>
      <a
        href="https://github.com/emre-ergun"
        target="_blank"
        className="flex items-center justify-center w-10 h-10 border bg-black border-black rounded-full"
      >
        <SlSocialGithub />
      </a>
    </div>
  );
};

export default SocialMedia;
