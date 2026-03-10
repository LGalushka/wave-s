import { ArrowUpRight, Clock } from "lucide-react";

interface NewsCardProps {
  title: string;
  description: string;
  image: string;
  date: string;
}

export const NewsCard = ({ title, description, image, date }: NewsCardProps) => {
  return (
    <div className="flex flex-col rounded-[10px] overflow-hidden border border-text-primary/50 h-119">
      {/* Фото */}
      <div className="h-63.75 shrink-0 p-4">
        <img src={image} alt={title} className="w-full h-full object-cover rounded-lg" />
      </div>

      {/* Контент */}
      <div className="flex flex-col justify-between flex-1 p-4">
        <div className="flex flex-col gap-2">
          {/* Название */}
          <h3 className="text-text-primary font-medium text-2xl">{title}</h3>
          {/* Описание */}
          <p className="text-text-primary text-base leading-snug">{description}</p>
        </div>

        {/* Нижняя строка */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-text-primary text-sm">Читать далее</span>
            <button className="w-10 h-10 rounded-md flex items-center justify-center" style={{ background: "#0C91FC" }}>
              <ArrowUpRight size={24} className="text-white" />
            </button>
          </div>
          <div className="flex items-center gap-1">
            <Clock size={18} className="text-text-primary" />
            <span className="text-text-primary/90 text-sm">{date}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
