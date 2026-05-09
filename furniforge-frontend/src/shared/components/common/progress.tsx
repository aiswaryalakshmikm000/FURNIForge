import { motion } from "framer-motion";

type Props = {
  value: number;
  className?: string;
};

export const Progress = ({
  value,
  className = "",
}: Props) => {
  return (
    <div
      className={`w-full h-3 rounded-full bg-muted overflow-hidden ${className}`}
    >
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${value}%` }}
        transition={{ duration: 1 }}
        className="h-full rounded-full gradient-copper"
      />
    </div>
  );
};