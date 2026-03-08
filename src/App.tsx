import { Input } from "./components/ui/Input";

function App() {
  return (
    <>
      <div className="min-h-screen bg-gradient-header-start p-8 flex flex-col gap-4 max-w-2xl">
        <Input placeholder="Введите ваше имя" />
        <Input placeholder="Введите ваш телефон" />
        <Input placeholder="Комментарий" />
      </div>
    </>
  );
}

export default App;
