import { useState, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';
import { Toaster } from '@/components/ui/toaster';

const Index = () => {
  const { toast } = useToast();
  const [isAIDialogOpen, setIsAIDialogOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    verif: 'Госуслуги',
  });

  const [contractData, setContractData] = useState({
    dealType: '',
    amount: '',
    dealDescription: '',
    sellerName: '',
    buyerName: '',
    deadline: '',
    conditions: '',
  });

  const [generatedContract, setGeneratedContract] = useState('');

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMobileMenuOpen(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: '✅ Заявка отправлена!',
      description: 'Мы свяжемся с вами в течение 24 часов.',
    });
    setFormData({ name: '', email: '', phone: '', verif: 'Госуслуги' });
  };

  const generateContract = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setIsGenerating(true);
    setTimeout(() => {
      const contract = `
ДОГОВОР ЭСКРОУ №${Math.floor(Math.random() * 10000)}

Стороны:
Продавец: ${contractData.sellerName || '[Имя продавца]'}
Покупатель: ${contractData.buyerName || '[Имя покупателя]'}

1. ПРЕДМЕТ ДОГОВОРА
${contractData.dealDescription || '[Описание сделки]'}

2. СТОИМОСТЬ
Сумма сделки: ${contractData.amount || '[Сумма]'} руб.
Срок выполнения: ${contractData.deadline || '[Срок]'}

3. УСЛОВИЯ СДЕЛКИ
${contractData.conditions || '[Условия]'}

4. ПОРЯДОК РАСЧЕТОВ
4.1. Покупатель резервирует средства на номинальном счете в банке «Точка».
4.2. После выполнения условий договора и подтверждения Покупателем, средства переводятся Продавцу.
4.3. В случае невыполнения условий, средства возвращаются Покупателю.

5. ОТВЕТСТВЕННОСТЬ СТОРОН
5.1. За неисполнение обязательств стороны несут ответственность согласно законодательству РФ.

Дата составления: ${new Date().toLocaleDateString('ru-RU')}
      `.trim();
      
      setGeneratedContract(contract);
      setIsGenerating(false);
      toast({
        title: '🤖 Контракт готов!',
        description: 'ИИ-помощник составил юридически корректный договор.',
      });
    }, 2000);
  };

  const downloadContract = () => {
    const blob = new Blob([generatedContract], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'contract.txt';
    a.click();
    toast({
      title: '📄 Контракт скачан!',
      description: 'Файл сохранен на ваше устройство.',
    });
  };

  const searchableContent = useMemo(() => [
    { section: 'main', text: 'Безопасные сделки без риска платите только за видимый результат эскроу-сервис для бизнеса и частных лиц доверенный цифровой гарант' },
    { section: 'how-it-works', text: 'Процесс безопасной сделки регистрация верификация создание подписание резервирование выполнение подтверждение арбитраж' },
    { section: 'spheres', text: 'автомобили транспорт недвижимость электроника техника драгоценности мероприятия услуги аутсорсинг дополнительные сферы' },
    { section: 'depository', text: 'Личный кабинет регистрация верификация госуслуги инн' },
    { section: 'pricing', text: 'Тарифы цены базовый бизнес комиссия' },
    { section: 'faq', text: 'Часто задаваемые вопросы отличие перевод комиссия эскроу-контракт оплата этапы' },
  ], []);

  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const query = searchQuery.toLowerCase();
    return searchableContent
      .filter(item => item.text.toLowerCase().includes(query))
      .map(item => item.section);
  }, [searchQuery, searchableContent]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (searchResults.length > 0) {
      scrollToSection(searchResults[0]);
      setIsSearchOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#000000] via-[#110042] to-[#142770]">
      <Toaster />

      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-white/10" style={{ backgroundColor: 'rgba(17,0,66,0.95)' }}>
        <div className="container mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-white leading-tight">Доверенный цифровой гарант</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <button onClick={() => scrollToSection('main')} className="text-white/80 hover:text-white transition-colors">Главная</button>
            <button onClick={() => scrollToSection('depository')} className="text-white/80 hover:text-white transition-colors">Личный кабинет</button>
            <button onClick={() => scrollToSection('how-it-works')} className="text-white/80 hover:text-white transition-colors">Принцип сделок</button>
            <button onClick={() => scrollToSection('spheres')} className="text-white/80 hover:text-white transition-colors">Сферы</button>
            <button onClick={() => scrollToSection('pricing')} className="text-white/80 hover:text-white transition-colors">Тарифы</button>
            <button onClick={() => scrollToSection('faq')} className="text-white/80 hover:text-white transition-colors">Помощь</button>
          </nav>

          <div className="flex items-center gap-3">
            <Dialog open={isSearchOpen} onOpenChange={setIsSearchOpen}>
              <button onClick={() => setIsSearchOpen(true)} className="w-12 h-12 bg-[#14024b]/50 rounded-full flex items-center justify-center hover:bg-[#14024b]/70 transition-colors">
                <Icon name="Search" className="text-white" size={20} />
              </button>
              <DialogContent className="bg-[#110042] border-[#2323c4]/30">
                <DialogHeader>
                  <DialogTitle className="text-white">Поиск по сайту</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <Input 
                    placeholder="Введите запрос..." 
                    className="bg-[#14024b] border-[#2323c4]/30 text-white"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        handleSearch(searchQuery);
                      }
                    }}
                  />
                  {searchQuery && (
                    <div className="space-y-2">
                      <p className="text-white/60 text-sm">
                        {searchResults.length > 0 
                          ? `Найдено разделов: ${searchResults.length}` 
                          : 'Ничего не найдено'}
                      </p>
                      {searchResults.length > 0 && (
                        <Button 
                          onClick={() => handleSearch(searchQuery)}
                          className="w-full bg-[#2323c4] hover:bg-[#101d9e] text-white"
                        >
                          Перейти к результатам
                        </Button>
                      )}
                    </div>
                  )}
                </div>
              </DialogContent>
            </Dialog>
            
            <button onClick={() => setIsAIDialogOpen(true)} className="w-12 h-12 bg-[#14024b]/50 rounded-full flex items-center justify-center hover:bg-[#14024b]/70 transition-colors relative group">
              <Icon name="Bot" className="text-white" size={20} />
              <div className="absolute top-full right-0 mt-2 w-48 bg-[#110042]/95 backdrop-blur-sm p-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-[#2323c4]/20">
                <p className="text-xs text-white/80">ИИ-помощник для создания контрактов</p>
              </div>
            </button>
            
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon" className="text-white">
                  <Icon name="Menu" size={24} />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-[#110042] border-[#2323c4]/20 w-[260px]">
                <nav className="flex flex-col gap-6 mt-8">
                  <button onClick={() => scrollToSection('main')} className="text-white/80 hover:text-white transition-colors text-left text-lg">Главная</button>
                  <button onClick={() => scrollToSection('depository')} className="text-white/80 hover:text-white transition-colors text-left text-lg">Личный кабинет</button>
                  <button onClick={() => scrollToSection('how-it-works')} className="text-white/80 hover:text-white transition-colors text-left text-lg">Принцип сделок</button>
                  <button onClick={() => scrollToSection('spheres')} className="text-white/80 hover:text-white transition-colors text-left text-lg">Сферы</button>
                  <button onClick={() => scrollToSection('pricing')} className="text-white/80 hover:text-white transition-colors text-left text-lg">Тарифы</button>
                  <button onClick={() => scrollToSection('faq')} className="text-white/80 hover:text-white transition-colors text-left text-lg">Помощь</button>
                  <div className="pt-4 border-t border-white/10 text-white/60 text-sm">
                    <p>Мы доступны для любого вида сделок, есть готовые шаблоны договоров и AI-ассистент.</p>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      <Dialog open={isAIDialogOpen} onOpenChange={setIsAIDialogOpen}>
        <DialogContent className="bg-[#110042] border-[#2323c4]/30 max-w-3xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-white flex items-center gap-2">
              <Icon name="Bot" className="text-[#2323c4]" size={28} />
              ИИ-помощник для создания контрактов
            </DialogTitle>
            <DialogDescription className="text-white/70">
              Заполните параметры сделки, и я составлю юридически корректный договор за несколько секунд
            </DialogDescription>
          </DialogHeader>
          
          <form onSubmit={generateContract} className="space-y-4 mt-4">
            <div>
              <Label className="text-white mb-2">Тип сделки</Label>
              <Select value={contractData.dealType} onValueChange={(value) => setContractData({...contractData, dealType: value})}>
                <SelectTrigger className="bg-[#14024b] border-[#2323c4]/20 text-white">
                  <SelectValue placeholder="Выберите тип сделки" />
                </SelectTrigger>
                <SelectContent className="bg-[#110042] border-[#2323c4]/20">
                  <SelectItem value="auto">Автомобили и транспорт</SelectItem>
                  <SelectItem value="realestate">Недвижимость</SelectItem>
                  <SelectItem value="electronics">Электроника и техника</SelectItem>
                  <SelectItem value="jewelry">Драгоценности и предметы роскоши</SelectItem>
                  <SelectItem value="events">Мероприятия</SelectItem>
                  <SelectItem value="services">Услуги и аутсорсинг</SelectItem>
                  <SelectItem value="other">Дополнительные сферы</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label className="text-white mb-2">Имя продавца</Label>
                <Input
                  value={contractData.sellerName}
                  onChange={(e) => setContractData({...contractData, sellerName: e.target.value})}
                  className="bg-[#14024b] border-[#2323c4]/20 text-white"
                  placeholder="ООО 'Компания'"
                />
              </div>
              <div>
                <Label className="text-white mb-2">Имя покупателя</Label>
                <Input
                  value={contractData.buyerName}
                  onChange={(e) => setContractData({...contractData, buyerName: e.target.value})}
                  className="bg-[#14024b] border-[#2323c4]/20 text-white"
                  placeholder="Иван Иванов"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label className="text-white mb-2">Сумма сделки (₽)</Label>
                <Input
                  value={contractData.amount}
                  onChange={(e) => setContractData({...contractData, amount: e.target.value})}
                  className="bg-[#14024b] border-[#2323c4]/20 text-white"
                  placeholder="100000"
                  type="number"
                />
              </div>
              <div>
                <Label className="text-white mb-2">Срок выполнения</Label>
                <Input
                  value={contractData.deadline}
                  onChange={(e) => setContractData({...contractData, deadline: e.target.value})}
                  className="bg-[#14024b] border-[#2323c4]/20 text-white"
                  placeholder="30 дней"
                />
              </div>
            </div>

            <div>
              <Label className="text-white mb-2">Описание сделки</Label>
              <Textarea
                value={contractData.dealDescription}
                onChange={(e) => setContractData({...contractData, dealDescription: e.target.value})}
                className="bg-[#14024b] border-[#2323c4]/20 text-white min-h-[80px]"
                placeholder="Разработка веб-сайта с адаптивным дизайном..."
              />
            </div>

            <div>
              <Label className="text-white mb-2">Условия выполнения</Label>
              <Textarea
                value={contractData.conditions}
                onChange={(e) => setContractData({...contractData, conditions: e.target.value})}
                className="bg-[#14024b] border-[#2323c4]/20 text-white min-h-[80px]"
                placeholder="Принятие работы в течение 3 дней после сдачи..."
              />
            </div>

            <Button
              type="button"
              onClick={() => generateContract()}
              disabled={isGenerating}
              className="w-full bg-[#101d9e] hover:bg-[#0d1670] text-white text-lg py-6"
            >
              {isGenerating ? (
                <>
                  <Icon name="Loader2" className="animate-spin mr-2" size={20} />
                  Генерирую контракт...
                </>
              ) : (
                <>
                  <Icon name="Sparkles" className="mr-2" size={20} />
                  Создать контракт
                </>
              )}
            </Button>

            {generatedContract && (
              <div className="mt-6 animate-fade-in">
                <Label className="text-white mb-2">Готовый контракт</Label>
                <Textarea
                  value={generatedContract}
                  readOnly
                  className="bg-[#14024b] border-[#2323c4]/30 text-white min-h-[300px] font-mono text-sm"
                />
                <div className="flex gap-3 mt-3">
                  <Button
                    type="button"
                    onClick={downloadContract}
                    variant="outline"
                    className="flex-1 border-[#2323c4]/30 text-white hover:bg-[#2323c4]/10"
                  >
                    <Icon name="Download" className="mr-2" size={18} />
                    Скачать
                  </Button>
                  <Button
                    type="button"
                    onClick={() => {
                      navigator.clipboard.writeText(generatedContract);
                      toast({
                        title: '📋 Скопировано!',
                        description: 'Контракт скопирован в буфер обмена.',
                      });
                    }}
                    variant="outline"
                    className="flex-1 border-[#2323c4]/30 text-white hover:bg-[#2323c4]/10"
                  >
                    <Icon name="Copy" className="mr-2" size={18} />
                    Копировать
                  </Button>
                </div>
              </div>
            )}
          </form>
        </DialogContent>
      </Dialog>

      <section id="main" className="pt-32 pb-24 px-6 relative min-h-screen flex items-center" style={{
        backgroundImage: 'linear-gradient(to bottom, rgba(105,0,255,0.2), rgba(1,0,3,0.8)), url(https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1920&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              ДЦГ — ваша защита в сделках между частными лицами и бизнесом
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-4 font-semibold italic">
              Доверенный цифровой гарант — ваш надежный посредник в сделках
            </p>
            <p className="text-lg text-white/80 mb-3 italic">
              Мы принимаем платеж от депонента на защищенный номинальный счет,
            </p>
            <p className="text-lg text-white/80 mb-12 italic">
              переводя деньги бенефициару только после выполнения всех обязательств
            </p>
            <Button onClick={() => scrollToSection('depository')} size="lg" className="bg-[#101d9e] hover:bg-[#0d1670] text-white text-lg px-8 py-6 rounded-full">
              Получить гарантию на сделку
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-16">
            {[
              { icon: 'CheckCircle2', title: 'Беспристрастность', desc: 'Мы — третья сторона. Деньги уйдут к продавцу только после вашего подтверждения, что все условия выполнены.' },
              { icon: 'Zap', title: 'Скорость и простота', desc: 'Все процессы запускаются онлайн. Забудьте о бумажных аккредитивах и долгих согласованиях.' },
              { icon: 'ShieldCheck', title: 'Финансовая безопасность', desc: 'Средства хранятся на защищенном номинальном счете в банке-партнере. Никто не может получить к ним доступ без вашего согласия.' },
            ].map((item, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 p-6 hover:bg-white/15 transition-all" style={{animationDelay: `${index * 150}ms`}}>
                <Icon name={item.icon} className="text-white mb-4" size={24} />
                <h3 className="text-white font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-white/80 text-sm">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="depository" className="py-24 px-6 relative min-h-screen flex items-center" style={{
        backgroundImage: 'linear-gradient(to bottom, rgba(41,34,28,0.7), rgba(41,34,28,0.7)), url(https://images.unsplash.com/photo-1557425529-fc5b82c3d8a0?w=1920&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Личный кабинет
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Зарегистрируйте учетную запись
            </p>
          </div>

          <Card className="bg-[#222222] border-white/20 p-8">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label className="text-white mb-2">E-mail</Label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-white border-0 text-black"
                  placeholder="E-mail"
                  required
                />
              </div>

              <div>
                <Label className="text-white mb-2">Телефон</Label>
                <Input
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="bg-white border-0 text-black"
                  placeholder="+7"
                  required
                />
              </div>

              <div>
                <Label className="text-white mb-2">ФИО</Label>
                <Input
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-white border-0 text-black"
                  placeholder="ФИО"
                  required
                />
              </div>

              <div>
                <Label className="text-white mb-2">Верификация</Label>
                <Select value={formData.verif} onValueChange={(value) => setFormData({...formData, verif: value})}>
                  <SelectTrigger className="bg-white border-0 text-black">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    <SelectItem value="Госуслуги">Госуслуги (ИНН если юрлицо)</SelectItem>
                    <SelectItem value="СберБизнес">СберБизнес</SelectItem>
                    <SelectItem value="Банк Точка">Банк Точка</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button type="submit" className="w-full bg-[#052555] hover:bg-[#041d44] text-white py-6 text-lg rounded-lg">
                Зарегистрироваться
              </Button>

              <p className="text-white/60 text-sm text-center mt-4">
                + форма согласия обработки данных
              </p>
            </form>
          </Card>
        </div>
      </section>

      <section id="how-it-works" className="py-24 px-6 relative" style={{
        backgroundImage: 'linear-gradient(0.707turn, rgba(35,0,176,1) 37%, rgba(216,225,238,0) 100%)',
      }}>
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Процесс безопасной сделки
            </h2>
          </div>

          <div className="space-y-24">
            {[
              { 
                num: '01', 
                title: 'Предварительная подготовка и регистрация',
                content: `Регистрация на платформе. Верификация личности/компании (происходит один раз):
• Для Физлиц (C2C): Подключение и авторизация через «Госуслуги» для автоматического подтверждения ФИО и паспортных данных.
• Для Юрлиц и ИП (B2B): Ввод ИНН. Автоматическая проверка данных компании через API ФНС. Подтверждение полномочий руководителя.`
              },
              { 
                num: '02', 
                title: 'Создание и подписание сделки',
                content: `Инициация сделки. Одна из сторон (чаще Продавец) создает новую сделку в личном кабинете. 
Формирование эскроу-контракта. ИИ-Агент автоматически генерирует юридически корректный контракт на основе введенных параметров.
Цифровая подпись контракта. Покупатель и Продавец подписывают контракт усиленной квалифицированной электронной подписью (УКЭП).`
              },
              { 
                num: '03', 
                title: 'Резервирование и блокировка средств',
                content: `Оплата на номинальный счет. Покупатель переводит сумму сделки на специальный номинальный счет, открытый в банке «Точка».
Средства замораживаются банком. Никто (ни Продавец, ни Платформа) не может ими распоряжаться на этом этапе.`
              },
              { 
                num: '04', 
                title: 'Выполнение обязательств',
                content: `Исполнение контракта. Продавец выполняет свои обязательства: оказывает услугу, отгружает товар, предоставляет доступ и т.д.
Стороны взаимодействуют друг с другом, при необходимости используя встроенный мессенджер платформы.`
              },
              { 
                num: '05', 
                title: 'Подтверждение и перевод средств',
                content: `Подтверждение выполнения. После выполнения условий контракта Покупатель нажимает кнопку «Подтвердить выполнение обязательств».
Автоматический перевод денег Продавцу. Платформа автоматически направляет в банк «Точка» запрос на разблокировку средств.`
              },
            ].map((step, index) => (
              <div key={index} className="flex gap-8 items-start animate-fade-in" style={{animationDelay: `${index * 200}ms`}}>
                <div className="text-8xl font-bold text-white/40 flex-shrink-0">{step.num}</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-white mb-4">{step.title}</h3>
                  <p className="text-white/80 whitespace-pre-line leading-relaxed">{step.content}</p>
                </div>
              </div>
            ))}

            <div className="mt-16 p-8 bg-white/5 border border-white/10 rounded-lg">
              <h3 className="text-2xl font-semibold text-white mb-4">Если возник спор (Невыполнение обязательств)</h3>
              <div className="text-white/80 space-y-3 text-sm leading-relaxed">
                <p><strong>1. Открытие спора.</strong> Если Покупатель не подтверждает выполнение, он или Продавец может открыть спор.</p>
                <p><strong>2. Работа арбитража.</strong> Стороны загружают доказательства. Спор рассматривается автоматически ИИ-Агентом или привлеченным арбитром.</p>
                <p><strong>3. Решение по сделке.</strong> Вариант А: Перечислить средства Продавцу. Вариант Б: Вернуть средства Покупателю.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="spheres" className="py-24 px-6 bg-[#171717]">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { img: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80', title: 'Автомобили и транспорт', desc: 'Продавец получает деньги только после успешной передачи транспортного средства и проверке соответствия заявленных характеристик авто.' },
              { img: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80', title: 'Коммерческая недвижимость', desc: 'Крупные сделки с поэтапным расчетом при выполнении юридических и технических условий.' },
              { img: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=800&q=80', title: 'Электроника и техника', desc: 'Оплата резервируется, покупатель проверяет работоспособность товара перед подтверждением сделки.' },
              { img: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80', title: 'Драгоценности и предметы роскоши', desc: 'Средства замораживаются до экспертной проверки подлинности и полного расчёта.' },
              { img: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80', title: 'Мероприятия', desc: 'Организатор получает оплату только после успешного проведения мероприятия.' },
              { img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80', title: 'Услуги и аутсорсинг', desc: 'Поэтапная оплата по мере выполнения работ с подтверждением качества.' },
              { img: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80', title: 'Дополнительные сферы', desc: 'IT-разработка и стартапы, агробизнес и поставки сырья и др. Мы постоянно расширяем возможности нашего сервиса. Если ваша сделка не подходит под стандартные категории — мы разработаем индивидуальное решение.' },
            ].map((sphere, index) => (
              <Card key={index} className="bg-[#222222] border-0 overflow-hidden group cursor-pointer hover-scale relative h-[400px]" style={{animationDelay: `${index * 100}ms`}}>
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                  style={{
                    backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${sphere.img})`
                  }}
                />
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className="text-2xl font-bold text-white mb-3">{sphere.title}</h3>
                  <p className="text-white/90 text-sm">{sphere.desc}</p>
                  {index === 6 && (
                    <Button onClick={() => setIsAIDialogOpen(true)} className="mt-4 bg-white text-black hover:bg-white/90">
                      Узнать больше
                    </Button>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-24 px-6 bg-[#efefef]">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#110042] mb-4">
              Тарифы на наши услуги
            </h2>
            <p className="text-[#110042]/80 max-w-2xl mx-auto text-lg">
              Мы предлагаем надёжную защиту ваших сделок по доступным ценам, чтобы вы могли быть уверены в безопасности ваших финансовых операций и не переживать о возможных рисках.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: 'Базовый', price: '0₽', subtitle: 'Бесплатный тариф', desc: 'Комиссия за сделку: 1.2% + 100 руб.', popular: false },
              { title: 'Бизнес', price: '2990₽', subtitle: 'Месячная подписка', desc: 'Комиссия за сделку: 0.8%. Срок сделки: до 180 дней включительно.', popular: true },
            ].map((plan, index) => (
              <Card key={index} className={`overflow-hidden ${plan.popular ? 'border-2 border-[#2323c4] shadow-xl' : 'border border-gray-300'}`}>
                <div className="bg-[#2323c4] text-white p-8 text-center border-b border-[#3939d4]">
                  <h3 className="text-2xl font-bold mb-4">{plan.title}</h3>
                  <div className="text-4xl font-bold mb-2">{plan.price}</div>
                  <p className="text-white/80 text-sm">{plan.subtitle}</p>
                </div>
                <div className="bg-[#f0f0f0] p-8">
                  <p className="text-[#110042] text-center mb-6">{plan.desc}</p>
                  <Button className="w-full bg-[#2323c4] hover:bg-[#101d9e] text-white rounded-xl py-6">
                    Подробнее
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-24 px-6 bg-[#efefef]">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#110042] mb-4">
              Часто задаваемые вопросы
            </h2>
            <p className="text-[#110042]/80 text-lg">
              Ответы на популярные вопросы о нашем сервисе. Нужна помощь? Свяжитесь с поддержкой!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'В чём главное отличие вашего сервиса от обычного перевода?', desc: 'Наш сервис обеспечивает дополнительную безопасность сделок за счёт депонирования средств и выступает гарантом между сторонами.' },
              { title: 'Сколько составляет комиссия за услугу?', desc: 'Размер комиссии зависит от условий сделки и будет указан при её оформлении.' },
              { title: 'Юридически ли значим ваш эскроу-контракт?', desc: 'Наш эскроу-контракт имеет юридическую силу и соответствует законодательству.' },
              { title: 'Можно ли разбить оплату на этапы?', desc: 'Условия оплаты зависят от типа сделки и её параметров. Уточните их при оформлении.' },
            ].map((faq, index) => (
              <Card key={index} className="bg-white p-6 shadow-md hover-scale">
                <h3 className="text-lg font-semibold text-[#110042] mb-3">{faq.title}</h3>
                <p className="text-[#110042]/80 text-sm mb-4">{faq.desc}</p>
                <button className="text-[#ff8562] hover:underline text-sm font-medium">Подробнее</button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-[#111111] py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="mb-4">
                <span className="text-lg font-bold text-white">Доверенный цифровой гарант</span>
              </div>
            </div>

            <div>
              <ul className="space-y-2">
                <li><button onClick={() => scrollToSection('main')} className="text-white/80 hover:text-white text-sm uppercase">Главная</button></li>
                <li><button onClick={() => scrollToSection('spheres')} className="text-white/80 hover:text-white text-sm uppercase">Отзывы</button></li>
                <li><button className="text-white/80 hover:text-white text-sm uppercase">Партнеры</button></li>
              </ul>
            </div>

            <div>
              <ul className="space-y-2 text-[#7d7d7d] text-sm">
                <li>События</li>
                <li>Контакты</li>
                <li>Офис</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8">
            <p className="text-white/60 text-sm text-center">© 2024 Доверенный Цифровой Гарант. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
