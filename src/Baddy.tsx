import { motion } from 'framer-motion';
import meimg from './assets/shimron.JPG';

const ContextMain = () => {
  return (
    <div className="flex justify-center w-full p-5 mt-28">
      <div className="w-auto p-10 flex justify-center">
        <div className="w-[50rem] flex items-center">
          <div className="p-5 w-[40em]">
            <motion.h1
              className="font-bold text-[50px] font-mono"
              initial={{ opacity: 0 }}
              animate={{ x: [-200, 0], opacity: 1 }}
              transition={{ duration: 1.5 }}
            >
              I'm Shimron!
            </motion.h1>
            <motion.p
              className="text-center text-xl"
              initial={{ opacity: 0 }}
              animate={{ y: [100, 0], opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              My full name is Shimron M. Guray I'm a 4th year student a system
              developer excellent in vb language, but this time I'm trying
              broaden my knowledge and to deep dive into web development
            </motion.p>
          </div>
          <div>
            <motion.img
              className="rounded-full h-auto drop-shadow-lg w-[25em]"
              initial={{ opacity: 0 }}
              animate={{ y: [100, 0], opacity: 1 }}
              transition={{ duration: 1.5 }}
              src={meimg}
              alt="Portrait of Shimron M. Guray"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContextMain;
