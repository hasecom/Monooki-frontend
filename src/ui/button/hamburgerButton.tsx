import { NextPage } from 'next';
import { motion, useCycle } from 'framer-motion';
import { HamburgerButtonProps } from '@/types/common';

const Path = (props: any) => (
  <motion.path fill="transparent" strokeWidth="2" stroke="#2d3436" strokeLinecap="round" {...props} />
);
const HamburgerButton: NextPage<HamburgerButtonProps> = (props) => {
  const [isOpen, toggleOpen] = useCycle(true, false);

  const toggle = () => {
    toggleOpen();
  };
  return (
    <>
      <motion.nav
        animate={isOpen ? 'open' : 'closed'}
        style={{ display: 'flex', alignItems: 'center' }}
      >
        <button title="open a toggle" onClick={toggle}>
          <svg width="23" height="23" viewBox="0 0 23 23">
            <Path
              variants={{
                closed: { d: 'M 2 2.5 L 20 2.5' },
                open: { d: 'M 3 16.5 L 17 2.5' },
              }}
            />
            <Path
              d="M 2 9.423 L 20 9.423"
              variants={{
                closed: { opacity: 1 },
                open: { opacity: 0 },
              }}
              transition={{ duration: 0.1 }}
            />
            <Path
              variants={{
                closed: { d: 'M 2 16.346 L 20 16.346' },
                open: { d: 'M 3 2.5 L 17 16.346' },
              }}
            />
          </svg>
        </button>
      </motion.nav>
    </>
  );
};
export default HamburgerButton;