import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const services = [
    {
      icon: 'Zap',
      title: 'Монтаж электропроводки',
      description: 'Профессиональная прокладка кабелей и установка розеток, выключателей'
    },
    {
      icon: 'Lightbulb',
      title: 'Установка освещения',
      description: 'Монтаж люстр, светильников, LED-подсветки любой сложности'
    },
    {
      icon: 'Shield',
      title: 'Электрощиты и автоматика',
      description: 'Сборка и установка распределительных щитов, УЗО, автоматов'
    },
    {
      icon: 'Home',
      title: 'Умный дом',
      description: 'Интеграция систем умного дома, автоматизация освещения'
    },
    {
      icon: 'AlertTriangle',
      title: 'Аварийный ремонт',
      description: 'Быстрое устранение неисправностей 24/7'
    },
    {
      icon: 'FileCheck',
      title: 'Электроизмерения',
      description: 'Проверка и диагностика электрических сетей'
    }
  ];

  const priceList = [
    { service: 'Монтаж розетки/выключателя', price: 'от 500 ₽' },
    { service: 'Установка люстры', price: 'от 800 ₽' },
    { service: 'Прокладка кабеля (1 м)', price: 'от 150 ₽' },
    { service: 'Сборка электрощита', price: 'от 3000 ₽' },
    { service: 'Замена автомата/УЗО', price: 'от 600 ₽' },
    { service: 'Выезд и диагностика', price: 'бесплатно' }
  ];

  const reviews = [
    {
      name: 'Анна М.',
      rating: 5,
      text: 'Отличная работа! Быстро поменяли всю проводку в квартире. Мастер очень аккуратный, все убрал за собой.'
    },
    {
      name: 'Дмитрий К.',
      rating: 5,
      text: 'Вызывал для установки щита в новостройке. Сделали профессионально, все объяснили. Рекомендую!'
    },
    {
      name: 'Ольга П.',
      rating: 5,
      text: 'Срочно нужен был электрик, приехали в течение часа. Проблему решили быстро. Спасибо!'
    }
  ];

  const faqs = [
    {
      question: 'Как быстро вы можете приехать?',
      answer: 'При срочном вызове можем приехать в течение 1-2 часов. Плановые работы согласуем в удобное для вас время.'
    },
    {
      question: 'Есть ли гарантия на работы?',
      answer: 'Да, мы предоставляем гарантию на все виды работ от 1 года. Гарантийные условия прописываются в договоре.'
    },
    {
      question: 'Работаете ли вы с юридическими лицами?',
      answer: 'Да, работаем как с физическими, так и с юридическими лицами. Предоставляем полный пакет документов.'
    },
    {
      question: 'Какие материалы используете?',
      answer: 'Используем только сертифицированные материалы от проверенных производителей. Можем работать с вашими материалами.'
    },
    {
      question: 'Сколько стоит выезд мастера?',
      answer: 'Выезд и диагностика абсолютно бесплатны. Оплата только за выполненные работы.'
    }
  ];

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Zap" className="text-primary" size={32} />
              <span className="text-2xl font-bold font-heading text-primary">RPO-Vollit</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-6">
              <button onClick={() => scrollToSection('home')} className="text-sm font-medium hover:text-primary transition-colors">Главная</button>
              <button onClick={() => scrollToSection('services')} className="text-sm font-medium hover:text-primary transition-colors">Услуги</button>
              <button onClick={() => scrollToSection('prices')} className="text-sm font-medium hover:text-primary transition-colors">Цены</button>
              <button onClick={() => scrollToSection('about')} className="text-sm font-medium hover:text-primary transition-colors">О нас</button>
              <button onClick={() => scrollToSection('reviews')} className="text-sm font-medium hover:text-primary transition-colors">Отзывы</button>
              <button onClick={() => scrollToSection('faq')} className="text-sm font-medium hover:text-primary transition-colors">FAQ</button>
              <button onClick={() => scrollToSection('contacts')} className="text-sm font-medium hover:text-primary transition-colors">Контакты</button>
            </div>

            <a href="tel:89029342417" className="hidden md:block">
              <Button className="bg-secondary hover:bg-secondary/90">
                <Icon name="Phone" size={18} className="mr-2" />
                8 (902) 934-24-17
              </Button>
            </a>
          </div>
        </nav>
      </header>

      <section id="home" className="pt-32 pb-20 px-4 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold font-heading mb-6 leading-tight">
                Профессиональные <span className="text-primary">электромонтажные</span> работы
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Качественные услуги электрика в Москве и области. Опыт работы более 10 лет. Гарантия на все виды работ.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg" onClick={() => scrollToSection('contacts')}>
                  <Icon name="PhoneCall" size={20} className="mr-2" />
                  Вызвать мастера
                </Button>
                <Button size="lg" variant="outline" className="text-lg" onClick={() => scrollToSection('services')}>
                  <Icon name="ListChecks" size={20} className="mr-2" />
                  Наши услуги
                </Button>
              </div>
              <div className="mt-8 flex items-center gap-8">
                <div>
                  <div className="text-3xl font-bold text-primary font-heading">500+</div>
                  <div className="text-sm text-muted-foreground">Выполненных объектов</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary font-heading">10+</div>
                  <div className="text-sm text-muted-foreground">Лет опыта</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary font-heading">24/7</div>
                  <div className="text-sm text-muted-foreground">Аварийная служба</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://cdn.poehali.dev/projects/f8436cb2-df7b-4814-9909-c624aafe6a37/files/16796914-1577-4da6-ba91-fcb48b0f3c64.jpg" 
                alt="Профессиональный электрик" 
                className="rounded-2xl shadow-2xl animate-fade-in"
              />
              <div className="absolute -bottom-6 -right-6 bg-secondary text-white p-6 rounded-xl shadow-xl animate-pulse-glow">
                <div className="text-2xl font-bold font-heading">Бесплатный</div>
                <div className="text-sm">выезд мастера</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-heading mb-4">Наши услуги</h2>
            <p className="text-xl text-muted-foreground">Полный спектр электромонтажных работ</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary">
                <CardContent className="p-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={service.icon} className="text-primary" size={28} />
                  </div>
                  <h3 className="text-xl font-bold font-heading mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="prices" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-heading mb-4">Прайс-лист</h2>
            <p className="text-xl text-muted-foreground">Прозрачные цены без скрытых платежей</p>
          </div>
          <Card>
            <CardContent className="p-0">
              {priceList.map((item, index) => (
                <div 
                  key={index} 
                  className={`flex justify-between items-center p-6 ${index !== priceList.length - 1 ? 'border-b' : ''} hover:bg-primary/5 transition-colors`}
                >
                  <span className="font-medium">{item.service}</span>
                  <span className="text-xl font-bold text-primary font-heading">{item.price}</span>
                </div>
              ))}
            </CardContent>
          </Card>
          <p className="text-center text-muted-foreground mt-6">
            * Точная стоимость определяется после осмотра объекта
          </p>
        </div>
      </section>

      <section id="about" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://cdn.poehali.dev/projects/f8436cb2-df7b-4814-9909-c624aafe6a37/files/738a81bc-e072-4693-8f67-3fd6d593bd60.jpg" 
                alt="Инструменты электрика" 
                className="rounded-2xl shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold font-heading mb-6">О нас</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Мы — команда профессиональных электриков с более чем 10-летним опытом работы. Специализируемся на выполнении электромонтажных работ любой сложности в Москве и Московской области.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle2" className="text-primary mt-1" size={24} />
                  <div>
                    <h4 className="font-bold mb-1">Квалифицированные специалисты</h4>
                    <p className="text-muted-foreground">Все мастера имеют допуски и сертификаты</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle2" className="text-primary mt-1" size={24} />
                  <div>
                    <h4 className="font-bold mb-1">Качественные материалы</h4>
                    <p className="text-muted-foreground">Работаем только с проверенными поставщиками</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle2" className="text-primary mt-1" size={24} />
                  <div>
                    <h4 className="font-bold mb-1">Гарантия на работы</h4>
                    <p className="text-muted-foreground">Предоставляем официальную гарантию от 1 года</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle2" className="text-primary mt-1" size={24} />
                  <div>
                    <h4 className="font-bold mb-1">Работаем 24/7</h4>
                    <p className="text-muted-foreground">Аварийная служба работает круглосуточно</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-heading mb-4">Отзывы клиентов</h2>
            <p className="text-xl text-muted-foreground">Что говорят о нас наши клиенты</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {reviews.map((review, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="text-yellow-400 fill-yellow-400" size={20} />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">{review.text}</p>
                  <p className="font-bold">{review.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 px-4">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-heading mb-4">Часто задаваемые вопросы</h2>
            <p className="text-xl text-muted-foreground">Ответы на популярные вопросы</p>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4 bg-gradient-to-br from-primary to-primary/80 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold font-heading mb-4">Свяжитесь с нами</h2>
          <p className="text-xl mb-8 opacity-90">Мы всегда готовы помочь вам с электрикой</p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="bg-white/10 backdrop-blur border-white/20">
              <CardContent className="p-6 text-center">
                <Icon name="Phone" className="mx-auto mb-3" size={32} />
                <h3 className="font-bold mb-2">Телефон</h3>
                <a href="tel:89029342417" className="hover:underline">8 (902) 934-24-17</a>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur border-white/20">
              <CardContent className="p-6 text-center">
                <Icon name="MessageCircle" className="mx-auto mb-3" size={32} />
                <h3 className="font-bold mb-2">WhatsApp</h3>
                <a href="https://wa.me/79029342417" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  Написать в WhatsApp
                </a>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur border-white/20">
              <CardContent className="p-6 text-center">
                <Icon name="Mail" className="mx-auto mb-3" size={32} />
                <h3 className="font-bold mb-2">Email</h3>
                <a href="mailto:dima.sobolev102210@mail.ru" className="hover:underline text-sm">
                  dima.sobolev102210@mail.ru
                </a>
              </CardContent>
            </Card>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:89029342417">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                <Icon name="Phone" size={20} className="mr-2" />
                Позвонить сейчас
              </Button>
            </a>
            <a href="https://wa.me/79029342417" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90">
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Написать в WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-background py-8 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Icon name="Zap" size={24} />
            <span className="text-xl font-bold font-heading">ЭлектроПро</span>
          </div>
          <p className="text-sm opacity-80">
            © {new Date().getFullYear()} ЭлектроПро. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;