import { motion } from 'framer-motion';

const Home = () => {
  return (
    <section
      id="home"
      className="mt-32 border-b border-neutral-900 pb-4 lg:mb-36 container mx-auto scroll-m-32"
    >
      <div className="flex flex-wrap pl-4">
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
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
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
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
            >
              Senior Software Developer
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
              className="my-2 max-w-xl py-6 font-light tracking-tighter"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              nostrum maiores omnis fugit. Eos deleniti quia non atque
              praesentium earum illum saepe sint expedita. Accusamus iste nam
              quisquam quos tempore. Impedit tempore, hic aperiam totam modi
              ipsum sunt consequuntur deleniti nihil dignissimos ex quidem in
              fuga vero eaque quam. Consequatur deleniti atque quis fugiat
              architecto similique vitae iure numquam optio.
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8 flex items-center justify-center">
          <div className="flex justify-center items-center">
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{
                x: 0,
                opacity: 1,
                transition: {
                  duration: 0.5,
                },
              }}
              className="w-80 h-80 rounded-full bg-gradient-to-r from-pink-300  to-purple-500"
            ></motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
