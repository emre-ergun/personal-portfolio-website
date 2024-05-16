import { SlSocialLinkedin, SlSocialGithub } from 'react-icons/sl';
import { motion } from 'framer-motion';

const SocialMedia = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{
        x: 0,
        opacity: 1,
        transition: {
          duration: 0.5,
        },
      }}
      className="fixed flex-col bottom-[16px] right-[16px] ml-2 py-2 px-1 rounded-3xl bg-black hover:bg-neutral-200"
    >
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
        className="mt-4 flex items-center justify-center w-10 h-10 border bg-black border-black rounded-full"
      >
        <SlSocialGithub />
      </a>
    </motion.div>
  );
};

export default SocialMedia;
