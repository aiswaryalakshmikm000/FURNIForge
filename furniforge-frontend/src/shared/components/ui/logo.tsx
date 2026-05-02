export const Logo = ({ text = "F" }: { text?: string }) => {
  return (
    <div className="w-12 h-12 rounded-xl gradient-copper mx-auto flex items-center justify-center text-accent-foreground font-bold text-xl font-display mb-4">
      {text}
    </div>
  );
};