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
      className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-4"
    >
      <div className="mb-4 p-5 border relative border-red-100 bg-gray-200 rounded-full flex justify-center items-center w-14 h-14">
        <Image
          src={Group_Logo}
          width={24}
          height={24}
          alt="Group"
          className="absolute m-auto"
        />
      </div>
      <h4 className="text-lg font-semibold">{title}</h4>
      <p className="text-sm text-gray-500">{description}</p>
    </motion.div>
  );
};
export default AnimatedCard;
