interface AdvantageCardProps {
  icon?: string;
  title?: string;
  description: string;
}

export const AdvantageCard = ({ icon, title, description }: AdvantageCardProps) => {
  return (
    <div className="flex items-center gap-3 px-4 py-3 rounded-xl justify-between">
      {icon ? (
        <img src={icon} alt={description} className="h-20 w-22" />
      ) : (
        <p className="text-text-white text-base leading-tight">{title}</p>
      )}
      <p className="text-text-white font-light text-base leading-snug">{description}</p>
    </div>
  );
};
