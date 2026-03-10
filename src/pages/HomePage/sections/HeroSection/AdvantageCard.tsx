interface AdvantageCardProps {
  icon?: string;
  title?: string;
  description: string;
}

export const AdvantageCard = ({ icon, title, description }: AdvantageCardProps) => {
  return (
    <div
      className="flex flex-col  gap-3 px-4 py-3 rounded-xl justify-center"
      style={{
        background: "linear-gradient(180deg, #26627A 0%, #14526B 100%)",
        border: "1px solid rgba(255,255,255,0.2)",
      }}
    >
      {icon ? (
        <img src={icon} alt={description} width={55} height={55} />
      ) : (
        <p className="text-text-white font-medium text-2xl leading-tight">{title}</p>
      )}
      <p className="text-text-white font-medium text-base leading-snug">{description}</p>
    </div>
  );
};
