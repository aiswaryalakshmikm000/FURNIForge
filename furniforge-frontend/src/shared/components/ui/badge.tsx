// import { cn } from "../../utils/cn";

// type Props = {
//   children: React.ReactNode;
//   variant?:
//     | "default"
//     | "success"
//     | "warning"
//     | "destructive"
//     | "gradient";
//   className?: string;
// };

// export const Badge = ({
//   children,
//   variant = "default",
//   className,
// }: Props) => {
//   return (
//     <span
//       className={cn(
//         "px-3 py-1 rounded-full text-xs font-medium font-sans",
//         {
//           "bg-muted text-foreground":
//             variant === "default",

//           "bg-green-100 text-green-700":
//             variant === "success",

//           "bg-yellow-100 text-yellow-700":
//             variant === "warning",

//           "bg-destructive/10 text-destructive":
//             variant === "destructive",

//           "gradient-copper text-accent-foreground":
//             variant === "gradient",
//         },
//         className
//       )}
//     >
//       {children}
//     </span>
//   );
// };