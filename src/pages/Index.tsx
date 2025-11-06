import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    sphere: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-[#0A1A3A]">
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0A1A3A]/95 backdrop-blur-sm border-b border-white/10">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Shield" className="text-[#00C389]" size={32} />
            <span className="text-2xl font-bold text-white">SafeDeal</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#main" className="text-white/80 hover:text-white transition-colors">Главная</a>
            <a href="#how-it-works" className="text-white/80 hover:text-white transition-colors">Принцип сделок</a>
            <a href="#spheres" className="text-white/80 hover:text-white transition-colors">Сферы</a>
            <a href="#pricing" className="text-white/80 hover:text-white transition-colors">Тарифы</a>
            <a href="#faq" className="text-white/80 hover:text-white transition-colors">Помощь</a>
          </nav>

          <div className="flex items-center gap-4">
            <Icon name="Search" className="text-white/60 hover:text-white cursor-pointer" size={20} />
            <div className="relative group">
              <Icon name="Bot" className="text-white/60 hover:text-white cursor-pointer" size={20} />
              <div className="absolute top-full right-0 mt-2 w-48 bg-card p-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                <p className="text-xs text-white/80">ИИ-помощник для создания контрактов</p>
              </div>
            </div>
            <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
              Мой аккаунт
            </Button>
          </div>
        </div>
      </header>

      <section id="main" className="pt-32 pb-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Безопасные сделки без риска:<br />
              <span className="text-[#00C389]">платите только за видимый результат</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/60 italic mb-4">
              "Доверяй, но проверяй"
            </p>
            <p className="text-lg text-white/80 mb-12">
              Эскроу-сервис для бизнеса и частных лиц
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-[#00C389] hover:bg-[#00A572] text-white text-lg px-8 py-6">
                Начать сделку
                <Icon name="ArrowRight" className="ml-2" size={20} />
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 text-lg px-8 py-6">
                Подробнее
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="py-24 px-6 bg-[#0D2147]">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Как это работает? Просто, как раз-два-три
            </h2>
          </div>

          <div className="mb-20">
            <h3 className="text-3xl font-bold text-white mb-6 text-center">
              Умный контракт для вашей безопасности
            </h3>
            <Card className="bg-card/50 border-white/10 p-8">
              <div className="flex items-start gap-4">
                <Icon name="Sparkles" className="text-[#F59E0B] flex-shrink-0" size={40} />
                <div>
                  <p className="text-white/90 text-lg leading-relaxed">
                    Наш ИИ-помощник автоматически составит для вас юридически корректный контракт на основе параметров вашей сделки. 
                    Подпишите его простой и юридически значимой цифровой подписью за пару кликов — и защитите свои интересы до начала работ.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="bg-card/50 border-white/10 p-8 hover:border-[#00C389]/50 transition-all">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-[#00C389]/20 rounded-full flex items-center justify-center mb-6">
                  <Icon name="Wallet" className="text-[#00C389]" size={32} />
                </div>
                <h4 className="text-2xl font-bold text-white mb-4">Шаг 1: Резервирование средств</h4>
                <p className="text-white/70">
                  Покупатель заключает контракт и резервирует деньги на номинальном счете в банке «Точка». Средства заморожены.
                </p>
              </div>
            </Card>

            <Card className="bg-card/50 border-white/10 p-8 hover:border-[#00C389]/50 transition-all">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-[#00C389]/20 rounded-full flex items-center justify-center mb-6">
                  <Icon name="CheckCircle" className="text-[#00C389]" size={32} />
                </div>
                <h4 className="text-2xl font-bold text-white mb-4">Шаг 2: Выполнение обязательств</h4>
                <p className="text-white/70">
                  Исполнитель спокойно выполняет работу или поставляет товар. Статус сделки отслеживается онлайн.
                </p>
              </div>
            </Card>

            <Card className="bg-card/50 border-white/10 p-8 hover:border-[#00C389]/50 transition-all">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-[#00C389]/20 rounded-full flex items-center justify-center mb-6">
                  <Icon name="LockOpen" className="text-[#00C389]" size={32} />
                </div>
                <h4 className="text-2xl font-bold text-white mb-4">Шаг 3: Успешное завершение</h4>
                <p className="text-white/70">
                  Покупатель подтверждает, что все условия выполнены. Средства автоматически размораживаются и переводятся продавцу.
                </p>
              </div>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-card/30 border border-white/10 p-6 rounded-lg">
              <Icon name="Scale" className="text-[#F59E0B] mb-3" size={28} />
              <h5 className="text-white font-semibold mb-2">Юридическая защита</h5>
              <p className="text-white/60 text-sm">Через лицензированный банк</p>
            </div>
            <div className="bg-card/30 border border-white/10 p-6 rounded-lg">
              <Icon name="Zap" className="text-[#F59E0B] mb-3" size={28} />
              <h5 className="text-white font-semibold mb-2">Полная автоматизация</h5>
              <p className="text-white/60 text-sm">Никакой бумажной волокиты</p>
            </div>
            <div className="bg-card/30 border border-white/10 p-6 rounded-lg">
              <Icon name="ShieldCheck" className="text-[#F59E0B] mb-3" size={28} />
              <h5 className="text-white font-semibold mb-2">Снижение рисков</h5>
              <p className="text-white/60 text-sm">Гарантия для обеих сторон</p>
            </div>
            <div className="bg-card/30 border border-white/10 p-6 rounded-lg">
              <Icon name="Eye" className="text-[#F59E0B] mb-3" size={28} />
              <h5 className="text-white font-semibold mb-2">Прозрачность</h5>
              <p className="text-white/60 text-sm">Все этапы сделки онлайн</p>
            </div>
          </div>
        </div>
      </section>

      <section id="spheres" className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 text-center">
            Для любых сделок, где важен результат
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Услуги и аутсорсинг', icon: 'Briefcase', desc: 'Фриланс, разработка, маркетинг, консалтинг' },
              { title: 'Автомобили и транспорт', icon: 'Car', desc: 'Покупка авто, спецтехники, мотоциклов' },
              { title: 'Электроника и техника', icon: 'Laptop', desc: 'Гаджеты, компьютеры, бытовая техника' },
              { title: 'Драгоценности и роскошь', icon: 'Gem', desc: 'Часы, украшения, предметы искусства' },
              { title: 'Мероприятия', icon: 'Calendar', desc: 'Свадьбы, корпоративы, организация событий' },
              { title: 'Цифровые активы и NFT', icon: 'Coins', desc: 'Токены, доменные имена, цифровое искусство' },
            ].map((sphere, index) => (
              <Card key={index} className="bg-card border-white/10 overflow-hidden hover:border-[#00C389]/50 transition-all group cursor-pointer">
                <div className="p-8">
                  <div className="w-14 h-14 bg-[#00C389]/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#00C389]/30 transition-colors">
                    <Icon name={sphere.icon} className="text-[#00C389]" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{sphere.title}</h3>
                  <p className="text-white/60">{sphere.desc}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="depository" className="py-24 px-6 bg-[#0D2147]">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">
            Надежное депонирование через банк «Точка»
          </h2>
          <div className="mb-12">
            <p className="text-lg text-white/80 leading-relaxed mb-6">
              Номинальный счет — это специальный банковский счет, который открывается для временного хранения средств в интересах третьих лиц. 
              В отличие от перевода денег юристу или частному эскроу-агенту, номинальный счет в банке «Точка» обеспечивает максимальную безопасность.
            </p>
            <p className="text-lg text-white/80 leading-relaxed">
              Банк «Точка» имеет лицензию ЦБ РФ и предоставляет банковские гарантии. Ваши средства защищены на государственном уровне.
            </p>
          </div>

          <Card className="bg-card/50 border-white/10 p-8 mb-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex flex-col items-center">
                <Icon name="User" className="text-[#00C389] mb-2" size={32} />
                <p className="text-white font-semibold">Покупатель</p>
              </div>
              <Icon name="ArrowRight" className="text-white/40" size={24} />
              <div className="flex flex-col items-center">
                <Icon name="Building2" className="text-[#F59E0B] mb-2" size={32} />
                <p className="text-white font-semibold">Банк «Точка»</p>
                <p className="text-white/60 text-sm">Номинальный счет</p>
              </div>
              <Icon name="ArrowRight" className="text-white/40" size={24} />
              <div className="flex flex-col items-center">
                <Icon name="UserCheck" className="text-[#00C389] mb-2" size={32} />
                <p className="text-white font-semibold">Продавец</p>
              </div>
            </div>
          </Card>

          <div className="text-center">
            <Button size="lg" className="bg-[#00C389] hover:bg-[#00A572] text-white">
              Зарегистрироваться и начать сделку
            </Button>
          </div>
        </div>
      </section>

      <section id="pricing" className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
            Прозрачные тарифы
          </h2>
          <p className="text-white/60 text-center mb-16">Без скрытых комиссий</p>

          <div className="grid md:grid-cols-4 gap-6">
            <Card className="bg-card border-white/10 p-8">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">Базовый</h3>
                <p className="text-white/60">Для разовых сделок</p>
              </div>
              <div className="mb-6">
                <div className="text-4xl font-bold text-[#00C389] mb-2">0.8%</div>
                <p className="text-white/60">+ 190 ₽ за сделку</p>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-[#00C389] flex-shrink-0 mt-1" size={16} />
                  <span className="text-white/80 text-sm">Без абонентской платы</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-[#00C389] flex-shrink-0 mt-1" size={16} />
                  <span className="text-white/80 text-sm">ИИ-контракты</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-[#00C389] flex-shrink-0 mt-1" size={16} />
                  <span className="text-white/80 text-sm">Базовая поддержка</span>
                </li>
              </ul>
            </Card>

            <Card className="bg-card border-[#00C389]/50 p-8 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#00C389] text-white text-xs px-3 py-1 rounded-full">
                Популярный
              </div>
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">Старт</h3>
                <p className="text-white/60">Для малого бизнеса</p>
              </div>
              <div className="mb-6">
                <div className="text-4xl font-bold text-[#00C389] mb-2">2 990 ₽</div>
                <p className="text-white/60">в месяц</p>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-[#00C389] flex-shrink-0 mt-1" size={16} />
                  <span className="text-white/80 text-sm">Комиссия 0.5%</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-[#00C389] flex-shrink-0 mt-1" size={16} />
                  <span className="text-white/80 text-sm">До 20 сделок</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-[#00C389] flex-shrink-0 mt-1" size={16} />
                  <span className="text-white/80 text-sm">Приоритетная поддержка</span>
                </li>
              </ul>
            </Card>

            <Card className="bg-card border-white/10 p-8">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">Бизнес</h3>
                <p className="text-white/60">Для растущих компаний</p>
              </div>
              <div className="mb-6">
                <div className="text-4xl font-bold text-[#00C389] mb-2">7 990 ₽</div>
                <p className="text-white/60">в месяц</p>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-[#00C389] flex-shrink-0 mt-1" size={16} />
                  <span className="text-white/80 text-sm">Комиссия 0.3%</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-[#00C389] flex-shrink-0 mt-1" size={16} />
                  <span className="text-white/80 text-sm">До 100 сделок</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-[#00C389] flex-shrink-0 mt-1" size={16} />
                  <span className="text-white/80 text-sm">Персональный менеджер</span>
                </li>
              </ul>
            </Card>

            <Card className="bg-card border-white/10 p-8">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">Про</h3>
                <p className="text-white/60">Для крупного бизнеса</p>
              </div>
              <div className="mb-6">
                <div className="text-4xl font-bold text-[#00C389] mb-2">19 990 ₽</div>
                <p className="text-white/60">в месяц</p>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-[#00C389] flex-shrink-0 mt-1" size={16} />
                  <span className="text-white/80 text-sm">Комиссия 0.2%</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-[#00C389] flex-shrink-0 mt-1" size={16} />
                  <span className="text-white/80 text-sm">Неограниченно сделок</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-[#00C389] flex-shrink-0 mt-1" size={16} />
                  <span className="text-white/80 text-sm">API интеграция</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      <section id="faq" className="py-24 px-6 bg-[#0D2147]">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
            Ответы на частые вопросы
          </h2>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-card/50 border-white/10 rounded-lg px-6">
              <AccordionTrigger className="text-white hover:text-[#00C389] text-left">
                Насколько это безопасно?
              </AccordionTrigger>
              <AccordionContent className="text-white/70">
                Ваши средства хранятся на номинальном счете в банке «Точка», имеющем лицензию ЦБ РФ. 
                Это обеспечивает максимальную безопасность и защиту на государственном уровне.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-card/50 border-white/10 rounded-lg px-6">
              <AccordionTrigger className="text-white hover:text-[#00C389] text-left">
                Что будет, если покупатель/продавец меня обманет?
              </AccordionTrigger>
              <AccordionContent className="text-white/70">
                Средства замораживаются до выполнения всех условий контракта. Если возникает спор, 
                подключается арбитраж, который рассматривает доказательства обеих сторон и принимает решение.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-card/50 border-white/10 rounded-lg px-6">
              <AccordionTrigger className="text-white hover:text-[#00C389] text-left">
                Как быстро замораживаются и размораживаются деньги?
              </AccordionTrigger>
              <AccordionContent className="text-white/70">
                Заморозка происходит мгновенно после подписания контракта. Разморозка и перевод продавцу — 
                в течение 1-3 рабочих дней после подтверждения выполнения условий.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-card/50 border-white/10 rounded-lg px-6">
              <AccordionTrigger className="text-white hover:text-[#00C389] text-left">
                Юридически ли значима цифровая подпись?
              </AccordionTrigger>
              <AccordionContent className="text-white/70">
                Да, мы используем квалифицированную электронную подпись, которая имеет полную юридическую силу 
                согласно 63-ФЗ «Об электронной подписи».
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-card/50 border-white/10 rounded-lg px-6">
              <AccordionTrigger className="text-white hover:text-[#00C389] text-left">
                Кто платит комиссию?
              </AccordionTrigger>
              <AccordionContent className="text-white/70">
                Комиссию оплачивает инициатор сделки (обычно покупатель). Условия можно обсудить между сторонами 
                и разделить комиссию по договоренности.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section id="lead-form" className="py-24 px-6">
        <div className="container mx-auto max-w-2xl">
          <div className="bg-gradient-to-br from-[#00C389]/20 to-[#F59E0B]/20 border border-[#00C389]/30 rounded-2xl p-12">
            <div className="text-center mb-8">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Станьте первым — получите специальные условия!
              </h2>
              <p className="text-white/80 text-lg">
                0% комиссии на первые 3 сделки + персональный менеджер на первый месяц
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-white mb-2">Имя</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-card/50 border-white/20 text-white"
                  placeholder="Иван Петров"
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-white mb-2">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-card/50 border-white/20 text-white"
                  placeholder="ivan@example.com"
                />
              </div>

              <div>
                <Label htmlFor="phone" className="text-white mb-2">Телефон</Label>
                <Input
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="bg-card/50 border-white/20 text-white"
                  placeholder="+7 (999) 123-45-67"
                />
              </div>

              <div>
                <Label htmlFor="sphere" className="text-white mb-2">Сфера интересов</Label>
                <Input
                  id="sphere"
                  value={formData.sphere}
                  onChange={(e) => setFormData({ ...formData, sphere: e.target.value })}
                  className="bg-card/50 border-white/20 text-white"
                  placeholder="Например: фриланс, авто, недвижимость"
                />
              </div>

              <Button type="submit" size="lg" className="w-full bg-[#00C389] hover:bg-[#00A572] text-white text-lg">
                Получить предложение
                <Icon name="Sparkles" className="ml-2" size={20} />
              </Button>
            </form>
          </div>
        </div>
      </section>

      <footer className="bg-[#050D1A] border-t border-white/10 py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Shield" className="text-[#00C389]" size={24} />
                <span className="text-xl font-bold text-white">SafeDeal</span>
              </div>
              <p className="text-white/60 text-sm">
                Безопасные эскроу-сделки для бизнеса и частных лиц
              </p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Сервис</h4>
              <ul className="space-y-2">
                <li><a href="#how-it-works" className="text-white/60 hover:text-white text-sm">Как работает</a></li>
                <li><a href="#pricing" className="text-white/60 hover:text-white text-sm">Тарифы</a></li>
                <li><a href="#faq" className="text-white/60 hover:text-white text-sm">FAQ</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Компания</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-white/60 hover:text-white text-sm">О нас</a></li>
                <li><a href="#" className="text-white/60 hover:text-white text-sm">Блог</a></li>
                <li><a href="#" className="text-white/60 hover:text-white text-sm">Контакты</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Документы</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-white/60 hover:text-white text-sm">Пользовательское соглашение</a></li>
                <li><a href="#" className="text-white/60 hover:text-white text-sm">Политика конфиденциальности</a></li>
                <li><a href="#" className="text-white/60 hover:text-white text-sm">Публичная оферта</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm">© 2024 SafeDeal. Все права защищены.</p>
            <div className="flex gap-4">
              <Icon name="Mail" className="text-white/60 hover:text-white cursor-pointer" size={20} />
              <Icon name="Phone" className="text-white/60 hover:text-white cursor-pointer" size={20} />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
