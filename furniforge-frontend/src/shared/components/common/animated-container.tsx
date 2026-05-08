// import { motion } from "framer-motion";
// import type { ReactNode } from "react";

// type Props = {
//   children: ReactNode;
//   className?: string;
//   delay?: number;
//   hover?: boolean;
// };

// export const AnimatedContainer = ({
//   children,
//   className,
//   delay = 0,
//   hover = false,
// }: Props) => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 15 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ delay }}
//       whileHover={hover ? { y: -4 } : undefined}
//       className={className}
//     >
//       {children}
//     </motion.div>
//   );
// };