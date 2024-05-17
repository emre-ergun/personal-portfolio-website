import { motion } from 'framer-motion';
import { FaCloudDownloadAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { profilePicture } from '../assets';

const Home = () => {
  return (
    <section
      id="home"
      className="mt-32 pb-32 border-b border-neutral-900 lg:mb-36 container mx-auto scroll-m-32"
    >
      <div className="flex flex-wrap px-4">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              initial={{ opacity: 0, x: -100 }}
              animate={{
                x: 0,
                opacity: 1,
                transition: {
                  duration: 0.5,
                },
              }}
              className="pb-8 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
            >
              Emre Ergün
            </motion.h1>
            <motion.span
              initial={{ opacity: 0, x: -100 }}
              animate={{
                x: 0,
                opacity: 1,
                transition: {
                  duration: 0.5,
                },
              }}
              className="pb-8 bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl lg:text-4xl tracking-tight text-transparent"
            >
              Senior Software Engineer
            </motion.span>
            <motion.p
              initial={{ opacity: 0, x: -100 }}
              animate={{
                x: 0,
                opacity: 1,
                transition: {
                  duration: 0.5,
                },
              }}
              className="my-1 max-w-xl py-4 font-light tracking-tighter"
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore
              veritatis id dignissimos consequuntur facilis asperiores maxime
              nemo, amet totam ut recusandae sequi alias non illo odit ipsa
              magnam. Vero, ea? Maxime illo quia aliquam ut dolorem. Sit nam
              distinctio perferendis soluta nulla qui, fuga ea voluptatibus rem
              error beatae dignissimos magnam reiciendis facilis quasi quis
              nesciunt labore!
            </motion.p>
            <div className="flex gap-4">
              <motion.a
                initial={{ opacity: 0, x: -100 }}
                animate={{
                  x: 0,
                  opacity: 1,
                  transition: {
                    duration: 0.5,
                  },
                }}
                className="flex items-center justify-center gap-2 py-2 px-4 font-semibold tracking-wide border border-slate-500  text-neutral-200 rounded-lg hover:bg-slate-500"
              >
                Download CV
                <FaCloudDownloadAlt />
              </motion.a>
              <motion.a
                initial={{ opacity: 0, x: 100 }}
                animate={{
                  x: 0,
                  opacity: 1,
                  transition: {
                    duration: 0.5,
                  },
                }}
                href="#contact"
                className="flex items-center justify-center gap-2 py-2 px-4 font-semibold tracking-wide border border-slate-500  text-neutral-200 rounded-lg hover:bg-slate-500"
              >
                Let's Connect
                <MdEmail />
              </motion.a>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 p-8 flex items-center justify-center">
          <div className="flex justify-center items-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                type: 'spring',
                stiffness: 260,
                damping: 20,
              }}
              className="relative w-[320px] h-[320px] lg:w-[400px] lg:h-[400px] rounded-full bg-gradient-to-r from-pink-300  to-purple-500 overflow-clip"
            >
              {/* <motion.img
                initial={{ scale: 0 }}
                animate={{ rotate: 360, scale: 1 }}
                transition={{
                  type: 'spring',
                  stiffness: 256,
                  damping: 20,
                  delay: 0.2,
                }}
                src={profilePicture}
                alt="Emre Ergün"
              /> */}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
