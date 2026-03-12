interface PartnerCarsProps {
  title: string;
  description: string;
}

export const PartnerCars = ({ title, description }: PartnerCarsProps) => {
  return (
    <div
      className="w-75 h-50 p-6 rounded-2xl flex flex-col items-center justify-center"
      style={{
        background: "linear-gradient(180deg, #26627A 0%, #14526B 100%)",
        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.35), inset 0 -1px 0 rgba(255,255,255,0.10)",
        border: "1px solid rgba(255,255,255,0.2)",
      }}
    >
      {/**Партнер */}
      <div className="flex flex-col ">
        <p className="text-text-white font-medium text-2xl  mb-2.5">{title}</p>
        <p className="text-text-white font-medium text-base">{description}</p>
      </div>
    </div>
  );
};
