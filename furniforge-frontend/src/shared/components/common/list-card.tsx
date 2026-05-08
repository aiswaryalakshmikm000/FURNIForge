// type Props = {
//   title: string;
//   subtitle?: string;
//   rightContent?: React.ReactNode;
//   leftContent?: React.ReactNode;
//   className?: string;
// };

// export const ListCard = ({
//   title,
//   subtitle,
//   rightContent,
//   leftContent,
//   className,
// }: Props) => {
//   return (
//     <div
//       className={`flex items-center justify-between p-4 rounded-xl bg-muted/30 border border-border ${className}`}
//     >
//       <div className="flex items-center gap-3">
//         {leftContent}

//         <div>
//           <p className="text-sm font-medium text-foreground font-sans">
//             {title}
//           </p>

//           {subtitle && (
//             <p className="text-xs text-muted-foreground font-sans">
//               {subtitle}
//             </p>
//           )}
//         </div>
//       </div>

//       {rightContent}
//     </div>
//   );
// };