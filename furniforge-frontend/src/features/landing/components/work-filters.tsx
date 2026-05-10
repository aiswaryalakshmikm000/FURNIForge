// import { X } from "lucide-react";

// interface SortOption {
//   label: string;
//   value: "none" | "price" | "rating";
// }

// interface Props {
//   types: readonly string[];
//   colors: readonly string[];
//   type: string;
//   color: string;
//   setType: (v: string) => void;
//   setColor: (v: string) => void;
//   clear: () => void;
//   sortOptions?: SortOption[];
//   sortKey?: "none" | "price" | "rating";
//   setSortKey?: (v: "none" | "price" | "rating") => void;
// }

// export const WorkFilters = ({
//   types,
//   colors,
//   type,
//   color,
//   setType,
//   setColor,
//   clear,
//   sortOptions = [],
//   sortKey = "none",
//   setSortKey,
// }: Props) => {
//   const buttonStyle = (active: boolean) =>
//     `px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
//       active
//         ? "gradient-rose text-accent-foreground shadow-rose"
//         : "bg-muted text-muted-foreground hover:text-foreground"
//     }`;

//   return (
//     <div className="bg-card rounded-2xl border border-border p-6 shadow-warm">
      

//       <div className="flex flex-wrap gap-4">
//         {/* Type */}
//         <div>
//           <p className="text-xs uppercase mb-3 font-semibold text-muted-foreground font-sans">Type</p>
//           <div className="flex flex-wrap gap-2">
//             {types.map((t) => (
//               <button key={t} onClick={() => setType(t)} className={buttonStyle(type === t)}>
//                 {t}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Sort */}
//         {sortOptions.length > 0 && setSortKey && (
//           <div>
//             <p className="text-xs uppercase mb-3 font-semibold text-muted-foreground font-sans">Sort By</p>
//             <div className="flex gap-2">
//               {sortOptions.map(({ label, value }) => (
//                 <button
//                   key={value}
//                   onClick={() => setSortKey(value)}
//                   className={buttonStyle(sortKey === value)}
//                 >
//                   {label}
//                 </button>
//               ))}
//             </div>
//           </div>
//         )}

//         {/* Color */}
//         <div>
//           <p className="text-xs uppercase mb-3 font-semibold text-muted-foreground font-sans">Color</p>
//           <div className="flex flex-wrap gap-2">
//             {colors.map((c) => (
//               <button key={c} onClick={() => setColor(c)} className={buttonStyle(color === c)}>
//                 {c}
//               </button>
//             ))}
//           </div>
//         </div>
//       </div>

//       <button
//         onClick={clear}
//         className="mt-6 flex items-center gap-1 text-xs text-accent hover:underline"
//       >
//         <X size={12} /> Clear all
//       </button>
//     </div>
//   );
// };