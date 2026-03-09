interface AdvantageCardProps {
  icon: string;
  label: string;
}

export const AdvantageCard = ({ icon, label }: AdvantageCardProps) => {
  return (
    <div
      className="flex items-center gap-3 px-4 py-3 rounded-xl"
      style={{
        background: "rgba(255, 255, 255, 0.07)",
        border: "1px solid rgba(255, 255, 255, 0.1)",
      }}
    >
      <img src={icon} alt={label} width={98} height={98} />
      <span className="text-text-white text-sm font-normal">{label}</span>
    </div>
  );
};
