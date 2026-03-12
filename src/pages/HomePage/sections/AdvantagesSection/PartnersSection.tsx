import { partners } from "./advantagesData";

export const PartnetsSection = () => {
  return (
    <section className="w-full py-8">
      <div className="container-main p-0">
        <h2 className="text-text-white font-semibold text-5xl mb-8">Наши партнеры</h2>

        <div
          className="grid grid-cols-5 gap-6 p-8 rounded-2xl"
          style={{
            background: "linear-gradient(180deg, #26627A 0%, #14526B 100%)",
            border: "1px solid rgba(255,255,255,0.2)",
          }}
        >
          {partners.map((partner) => (
            <div key={partner.id} className="flex items-center justify-center p-4">
              <img
                src={partner.icon}
                alt={partner.alt}
                className="max-h-50 object-contain opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
