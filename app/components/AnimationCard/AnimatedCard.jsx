import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import Group_Logo from '@/app/assets/icon/Group.png';

const AnimatedCard = ({ title, description }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
      transition={{ duration: 0.5 }}
      className="w-full  border shadow-sm rounded-md bg-gray-100 p-4 m-2"
    >
      <div className="mb-4 p-3 border relative border-red-100 bg-gray-200 rounded-full flex justify-center items-center w-12 h-12">
        <Image
          src={Group_Logo}
          width={20}
          height={20}
          alt="Group"
          className="absolute m-auto"
        />
      </div>
      <h4 className="text-md sm:text-lg font-semibold">{title}</h4>
      <div className="lg:h-20 sm:h-auto h-16  overflow-y-auto">
        <p className="text-sm text-gray-500">{description}</p>
      </div>
    </motion.div>
  );
};
export default AnimatedCard;
