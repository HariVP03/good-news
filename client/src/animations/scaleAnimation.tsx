import { motion } from 'framer-motion';
import React, { useState } from 'react';

export const AnimateDiv: React.FC<{ children: any }> = ({ children }) => {
  const variant = {
    initial: { scale: 1.2 },
    hover: { scale: [1.2, 1.33, 1.25] },
  };
  const [hover, setHover] = useState(false);

  return (
    <motion.div
      transition={{ type: 'spring', duration: 0.4 }}
      variants={variant}
      onHoverStart={() => {
        setHover(true);
      }}
      onHoverEnd={() => {
        setHover(false);
      }}
      animate={hover ? 'hover' : 'initial'}
    >
      {children}
    </motion.div>
  );
};
