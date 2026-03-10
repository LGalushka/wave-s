interface AdvantageItemCardProps {
  icon: string;
  description: string;
}

export const AdvantageItemCard = ({ icon, description }: AdvantageItemCardProps) => {
  return (
    <div
      className="w-75 h-67.5 p-6 rounded-2xl flex flex-col gap-4"
      style={{
        background: "linear-gradient(180deg, #26627A 0%, #14526B 100%)",
        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.35), inset 0 -1px 0 rgba(255,255,255,0.10)",
        border: "1px solid rgba(255,255,255,0.2)",
      }}
    >
      {/* Иконка */}
      <div className="w-60 h-53">
        <img src={icon} alt="description" width={55} height={55} />

        {/**Описание  */}
        <p className="text-text-white font-medium text-2xl leading-tight mt-17.5">{description}</p>
      </div>
    </div>
  );
};
