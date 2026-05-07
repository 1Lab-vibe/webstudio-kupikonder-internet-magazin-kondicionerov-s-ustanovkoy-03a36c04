import { useState } from "react";
import { Phone, MapPin, Clock, Star, Check, Wrench, ShieldCheck, Snowflake, Wind, ArrowRight, Calculator } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import heroAc from "@/assets/hero-ac.jpg";
import installImg from "@/assets/install.jpg";
import outdoorImg from "@/assets/outdoor.jpg";
import officeImg from "@/assets/office.jpg";

const PHONE_DISPLAY = "+7 (343) 288-15-20";
const PHONE_HREF = "tel:+73432881520";
const ADDRESS = "г. Екатеринбург, ул. Малышева, 51";

const reviews = [
  { name: "Алексей М.", text: "Замерили в день обращения, на следующий день установили. Чисто, без мусора. Цена как договаривались.", rating: 5 },
  { name: "Ирина К.", text: "Помогли подобрать кондиционер на двушку, не навязывали дорогой. Монтаж аккуратный, всё работает уже второе лето.", rating: 5 },
  { name: "Дмитрий П.", text: "Ставили в офис 4 шт. Сделали за один день, дали гарантию. Рекомендую коллегам.", rating: 5 },
  { name: "Ольга В.", text: "Спокойно, по делу. Объяснили разницу между моделями. Установка под ключ, документы выдали.", rating: 5 },
];

const services = [
  { icon: Snowflake, title: "Подбор кондиционера", desc: "Под площадь, бюджет и тип помещения. Только проверенные бренды." },
  { icon: Wrench, title: "Монтаж под ключ", desc: "Установка за 1 день. Свои бригады, без посредников." },
  { icon: Wind, title: "Сервис и чистка", desc: "Дозаправка фреоном, чистка, ремонт любых сплит-систем." },
  { icon: ShieldCheck, title: "Гарантия 3 года", desc: "На оборудование и монтажные работы. Договор, чеки." },
];

const process = [
  { n: "01", t: "Заявка", d: "Звонок или форма — отвечаем за 15 минут" },
  { n: "02", t: "Замер", d: "Бесплатный выезд по Екатеринбургу" },
  { n: "03", t: "Монтаж", d: "Установка за 1 день, чисто и аккуратно" },
  { n: "04", t: "Гарантия", d: "Договор, документы, поддержка 3 года" },
];

const prices = [
  { name: "Эконом", model: "до 25 м²", price: "от 32 900 ₽", features: ["Сплит-система", "Стандартный монтаж", "Гарантия 3 года"] },
  { name: "Оптимум", model: "до 35 м²", price: "от 44 500 ₽", features: ["Инверторная система", "Монтаж под ключ", "Зимний комплект", "Гарантия 3 года"], popular: true },
  { name: "Премиум", model: "до 50 м²", price: "от 68 000 ₽", features: ["Премиум-бренд", "Тихий режим", "Wi-Fi управление", "Расширенная гарантия"] },
];

const Index = () => {
  const [form, setForm] = useState({ name: "", phone: "", area: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone) {
      toast.error("Укажите имя и телефон");
      return;
    }
    toast.success("Заявка принята. Перезвоним в течение 15 минут.");
    setForm({ name: "", phone: "", area: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
        <div className="container flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-hero">
              <Snowflake className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-lg font-bold">КупиКондер</span>
          </a>
          <nav className="hidden gap-6 md:flex">
            <a href="#services" className="text-sm font-medium text-muted-foreground hover:text-foreground">Услуги</a>
            <a href="#prices" className="text-sm font-medium text-muted-foreground hover:text-foreground">Цены</a>
            <a href="#works" className="text-sm font-medium text-muted-foreground hover:text-foreground">Работы</a>
            <a href="#contacts" className="text-sm font-medium text-muted-foreground hover:text-foreground">Контакты</a>
          </nav>
          <a href={PHONE_HREF} className="hidden items-center gap-2 text-sm font-semibold md:flex">
            <Phone className="h-4 w-4 text-primary" />
            {PHONE_DISPLAY}
          </a>
          <Button asChild size="sm" className="md:hidden">
            <a href={PHONE_HREF}><Phone className="h-4 w-4" /></a>
          </Button>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-cool">
        <div className="container grid gap-10 py-12 md:grid-cols-2 md:py-20 md:gap-12">
          <div className="flex flex-col justify-center">
            <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
              <span className="h-2 w-2 rounded-full bg-success" />
              Работаем 5 лет в Екатеринбурге
            </div>
            <h1 className="text-4xl font-extrabold leading-tight md:text-6xl">
              Кондиционеры с установкой <span className="text-primary">за 1 день</span>
            </h1>
            <p className="mt-5 text-lg text-muted-foreground md:text-xl">
              Подбор, монтаж и обслуживание сплит-систем в Екатеринбурге. Бесплатный замер, расчёт за 15 минут, гарантия 3 года.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-cta">
                <a href="#request"><Calculator className="mr-2 h-5 w-5" />Рассчитать стоимость</a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href={PHONE_HREF}><Phone className="mr-2 h-5 w-5" />{PHONE_DISPLAY}</a>
              </Button>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-accent text-accent" />)}
                </div>
                <span className="font-semibold">4,9</span>
                <span className="text-muted-foreground">на Яндекс Картах</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Check className="h-4 w-4 text-success" />
                Более 1 200 установок
              </div>
            </div>
          </div>
          <div className="relative">
            <img src={heroAc} alt="Установленный кондиционер в квартире в Екатеринбурге" width={1280} height={960} className="aspect-[4/3] w-full rounded-2xl object-cover shadow-card" />
            <div className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-border bg-card p-4 shadow-card md:block">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Замер сегодня</div>
                  <div className="font-bold">Бесплатно</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="border-y border-border bg-card py-14 md:py-20">
        <div className="container">
          <div className="mb-10 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div>
              <div className="text-sm font-semibold uppercase tracking-wider text-primary">Отзывы</div>
              <h2 className="mt-2 text-3xl font-bold md:text-4xl">Нам доверяют жители Екатеринбурга</h2>
            </div>
            <div className="flex items-center gap-3 rounded-xl border border-border bg-background px-4 py-3">
              <div className="text-3xl font-extrabold">4,9</div>
              <div>
                <div className="flex">{[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-accent text-accent" />)}</div>
                <div className="text-xs text-muted-foreground">Яндекс Карты · 80+ отзывов</div>
              </div>
            </div>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {reviews.map((r, i) => (
              <div key={i} className="rounded-2xl border border-border bg-background p-6 shadow-card">
                <div className="mb-3 flex">{[...Array(r.rating)].map((_, j) => <Star key={j} className="h-4 w-4 fill-accent text-accent" />)}</div>
                <p className="text-sm leading-relaxed text-foreground">{r.text}</p>
                <div className="mt-4 text-sm font-semibold text-muted-foreground">{r.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-14 md:py-20">
        <div className="container">
          <div className="mb-10 max-w-2xl">
            <div className="text-sm font-semibold uppercase tracking-wider text-primary">Услуги</div>
            <h2 className="mt-2 text-3xl font-bold md:text-4xl">Что мы делаем</h2>
            <p className="mt-3 text-muted-foreground">Полный цикл — от подбора модели до сервиса. Свои монтажники, без субподряда.</p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => (
              <div key={i} className="group rounded-2xl border border-border bg-card p-6 transition-all hover:shadow-card hover:-translate-y-1">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-lg font-bold">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio / works */}
      <section id="works" className="bg-cool py-14 md:py-20">
        <div className="container">
          <div className="mb-10">
            <div className="text-sm font-semibold uppercase tracking-wider text-primary">Наши работы</div>
            <h2 className="mt-2 text-3xl font-bold md:text-4xl">Установки в Екатеринбурге</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {[
              { img: installImg, title: "Квартира, ЖК «Манхэттен»", desc: "Сплит-система Hisense 09, монтаж за 4 часа" },
              { img: outdoorImg, title: "Частный дом, Широкая речка", desc: "Внешний блок на фасаде, медь под защитой" },
              { img: officeImg, title: "Офис, ул. Малышева", desc: "4 кондиционера, монтаж за один рабочий день" },
            ].map((w, i) => (
              <div key={i} className="overflow-hidden rounded-2xl border border-border bg-card shadow-card">
                <img src={w.img} alt={w.title} loading="lazy" width={1024} height={768} className="aspect-[4/3] w-full object-cover" />
                <div className="p-5">
                  <h3 className="font-bold">{w.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{w.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-14 md:py-20">
        <div className="container">
          <div className="mb-10 max-w-2xl">
            <div className="text-sm font-semibold uppercase tracking-wider text-primary">Как работаем</div>
            <h2 className="mt-2 text-3xl font-bold md:text-4xl">От заявки до прохлады — 1 день</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-4">
            {process.map((p, i) => (
              <div key={i} className="relative rounded-2xl border border-border bg-card p-6">
                <div className="mb-3 text-3xl font-extrabold text-primary/30">{p.n}</div>
                <h3 className="mb-2 text-lg font-bold">{p.t}</h3>
                <p className="text-sm text-muted-foreground">{p.d}</p>
                {i < process.length - 1 && (
                  <ArrowRight className="absolute right-4 top-1/2 hidden h-5 w-5 -translate-y-1/2 text-border md:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prices */}
      <section id="prices" className="bg-cool py-14 md:py-20">
        <div className="container">
          <div className="mb-10 max-w-2xl">
            <div className="text-sm font-semibold uppercase tracking-wider text-primary">Цены</div>
            <h2 className="mt-2 text-3xl font-bold md:text-4xl">Кондиционер с установкой</h2>
            <p className="mt-3 text-muted-foreground">Цены указаны с учётом стандартного монтажа до 5 м трассы.</p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {prices.map((p, i) => (
              <div key={i} className={`relative rounded-2xl border bg-card p-7 shadow-card ${p.popular ? "border-primary ring-2 ring-primary/20" : "border-border"}`}>
                {p.popular && (
                  <div className="absolute -top-3 left-7 rounded-full bg-accent px-3 py-1 text-xs font-bold text-accent-foreground">Хит продаж</div>
                )}
                <div className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">{p.name}</div>
                <div className="mt-2 text-sm text-muted-foreground">Помещение {p.model}</div>
                <div className="mt-4 text-3xl font-extrabold">{p.price}</div>
                <ul className="mt-5 space-y-2.5">
                  {p.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild className="mt-6 w-full" variant={p.popular ? "default" : "outline"}>
                  <a href="#request">Оставить заявку</a>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Request form */}
      <section id="request" className="py-14 md:py-20">
        <div className="container">
          <div className="overflow-hidden rounded-3xl bg-hero p-8 text-primary-foreground shadow-card md:p-14">
            <div className="grid gap-10 md:grid-cols-2 md:items-center">
              <div>
                <h2 className="text-3xl font-bold md:text-4xl">Бесплатный расчёт за 15 минут</h2>
                <p className="mt-4 text-base opacity-90 md:text-lg">
                  Оставьте заявку — перезвоним, уточним площадь и подберём оптимальный вариант. Без навязывания.
                </p>
                <ul className="mt-6 space-y-3 text-sm">
                  <li className="flex items-center gap-2"><Check className="h-5 w-5" />Замер бесплатно по Екатеринбургу</li>
                  <li className="flex items-center gap-2"><Check className="h-5 w-5" />Фиксированная цена в договоре</li>
                  <li className="flex items-center gap-2"><Check className="h-5 w-5" />Гарантия 3 года</li>
                </ul>
              </div>
              <form onSubmit={submit} className="rounded-2xl bg-card p-6 text-card-foreground md:p-8">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="name">Ваше имя</Label>
                    <Input id="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Иван" className="mt-1.5" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Телефон</Label>
                    <Input id="phone" type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+7 (___) ___-__-__" className="mt-1.5" />
                  </div>
                  <div>
                    <Label htmlFor="area">Площадь помещения</Label>
                    <Input id="area" value={form.area} onChange={(e) => setForm({ ...form, area: e.target.value })} placeholder="например, 25 м²" className="mt-1.5" />
                  </div>
                  <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                    Получить расчёт
                  </Button>
                  <p className="text-xs text-muted-foreground">Нажимая кнопку, вы соглашаетесь с обработкой персональных данных.</p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Contacts */}
      <section id="contacts" className="border-t border-border bg-card py-14 md:py-20">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <div className="flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-hero">
                  <Snowflake className="h-5 w-5 text-primary-foreground" />
                </div>
                <span className="text-lg font-bold">КупиКондер</span>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                Интернет-магазин кондиционеров с установкой в Екатеринбурге. Работаем с 2020 года.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="font-bold">Контакты</h3>
              <a href={PHONE_HREF} className="flex items-start gap-3 text-sm hover:text-primary">
                <Phone className="mt-0.5 h-4 w-4 text-primary" />
                <div>
                  <div className="font-semibold">{PHONE_DISPLAY}</div>
                  <div className="text-muted-foreground">Звонки и WhatsApp</div>
                </div>
              </a>
              <div className="flex items-start gap-3 text-sm">
                <MapPin className="mt-0.5 h-4 w-4 text-primary" />
                <div>
                  <div className="font-semibold">{ADDRESS}</div>
                  <div className="text-muted-foreground">Шоурум и офис</div>
                </div>
              </div>
              <div className="flex items-start gap-3 text-sm">
                <Clock className="mt-0.5 h-4 w-4 text-primary" />
                <div>
                  <div className="font-semibold">Пн–Сб: 9:00–20:00</div>
                  <div className="text-muted-foreground">Вс: по записи</div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="mb-4 font-bold">Зона работ</h3>
              <p className="text-sm text-muted-foreground">
                Екатеринбург и пригороды: Верхняя Пышма, Берёзовский, Среднеуральск, Арамиль. Выезд замерщика — бесплатно.
              </p>
              <Button asChild className="mt-5 w-full" size="lg">
                <a href={PHONE_HREF}><Phone className="mr-2 h-4 w-4" />Позвонить сейчас</a>
              </Button>
            </div>
          </div>
          <div className="mt-12 border-t border-border pt-6 text-xs text-muted-foreground">
            © {new Date().getFullYear()} КупиКондер. Все права защищены.
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
