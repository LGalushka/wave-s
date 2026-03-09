import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { useState } from "react";

export const ContactForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    console.log({ name, phone, message });
  };

  return (
    <section className="w-full py-16">
      <div className="container-main">
        {/* Заголовок */}
        <div className="text-center mb-10">
          <h2 className="text-text-white font-bold text-4xl mb-3">Оставьте заявку</h2>
          <p className="text-text-white/70 text-lg">Мы ответим на все интересующие вопросы</p>
        </div>

        {/* Форма */}
        <div className="max-w-160 mx-auto flex flex-col gap-4">
          {/* Имя + телефон */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input placeholder="Введите ваше имя" value={name} onChange={(e) => setName(e.target.value)} />
            <Input placeholder="Введите ваш телефон" value={phone} onChange={(e) => setPhone(e.target.value)} />
          </div>

          {/* Комментарий */}
          <Textarea placeholder="Комментарий" value={message} onChange={(e) => setMessage(e.target.value)} />

          {/* Кнопка */}
          <div className="flex justify-center mt-2">
            <Button variant="consultation" withArrow onClick={handleSubmit}>
              Получить консультацию
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
