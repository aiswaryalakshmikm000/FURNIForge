// import type { ReactNode } from "react";
// import type { LucideIcon } from "lucide-react";

// type Props = {
//   title: string;
//   children: ReactNode;
//   icon?: LucideIcon;
//   iconColor?: string;
//   action?: ReactNode;
//   className?: string;
// };

// export const SectionCard = ({
//   title,
//   children,
//   icon: Icon,
//   iconColor,
//   action,
//   className,
// }: Props) => {
//   return (
//     <div
//       className={`bg-card border border-border rounded-2xl p-6 shadow-warm ${className}`}
//     >
//       <div className="flex items-center justify-between mb-5">
//         <div className="flex items-center gap-2">
//           {Icon && (
//             <Icon
//               size={18}
//               className={iconColor}
//             />
//           )}

//           <h2 className="text-lg font-bold font-display text-foreground">
//             {title}
//           </h2>
//         </div>

//         {action}
//       </div>

//       {children}
//     </div>
//   );
// };