import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { NewsCard } from "@/components/shared/NewsCard/index";
import { newsItems } from "./newsData";

export const NewsSection = () => {
  return (
    <section className="w-full py-12 bg-white">
      <div className="container-main">
        {/* Заголовок */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-text-primary font-semibold text-[36px]">Новости нашей компании</h2>
          <div className="flex items-center gap-3">
            <Link to="/news" className="text-text-accent text-sm hover:underline">
              Посмотреть все новости
            </Link>
            <button className="w-8 h-8 rounded-full border border-text-primary/20 flex items-center justify-center hover:bg-gray-100 transition-colors">
              <ChevronLeft size={16} className="text-text-primary" />
            </button>
            <button className="w-8 h-8 rounded-full bg-ui-button flex items-center justify-center hover:opacity-90 transition-colors">
              <ChevronRight size={16} className="text-white" />
            </button>
          </div>
        </div>

        {/* Карточки */}
        <div className="grid grid-cols-3 gap-6">
          {newsItems.map((item) => (
            <NewsCard key={item.id} title={item.title} description={item.description} image={item.image} date={item.date} />
          ))}
        </div>
      </div>
    </section>
  );
};
