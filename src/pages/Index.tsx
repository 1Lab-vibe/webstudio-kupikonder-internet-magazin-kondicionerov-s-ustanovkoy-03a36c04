import { useState } from "react";
import { Phone, MapPin, Clock, Shield, Wrench, Snowflake, CheckCircle2, Star, ArrowRight, Calculator, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import heroAc from "@/assets/hero-ac.jpg";
import installImg from "@/assets/install.jpg";

const PHONE = "+7 (343) 290-12-34";
const PHONE_HREF = "tel:+73432901234";
const ADDRESS = "Екатеринбург, ул. Малышева, 84";

const reviews = [
  { name: "Алексей К.", text: "Замерщик приехал в день обращения. На следующий день поставили кондиционер в спальне — чисто, аккуратно, без пыли. Цена не выросла после монтажа.", rating: 5 },
  { name: "Марина С.", text: "Подобрали по площади, объяснили разницу между моделями без навязывания. Установили за 2,5 часа. Работает тихо, в квартире прохладно даже в +33.", rating: 5 },
  { name: "Дмитрий В.", text: "Брали 2 кондиционера в офис. Сделали в выходной, чтобы не мешать работе. Документы, гарантия — всё по делу.", rating: 5 },
];

const services = [
  { icon: Snowflake, title: "Подбор кондиционера", text: "Подберём модель под площадь, остекление и бюджет. От 22 000 ₽ за сплит-систему 7-ки." },
  { icon: Wrench, title: "Монтаж под ключ", text: "Стандартный монтаж от 8 500 ₽. Штробление, фреон, пусконаладка — всё включено." },
  { icon: Shield, title: "Сервис и чистка", text: "Сезонное обслуживание, дозаправка, ремонт. Договор на регулярное ТО для офисов." },
  { icon: Calculator, title: "Бесплатный замер", text: "Замерщик приедет в удобное время, посчитает смету на месте без обязательств." },
];

const process = [
  { n: "01", t: "Заявка", d: "Звонок или форма — отвечаем в течение 15 минут в рабочее время." },
  { n: "02", t: "Замер", d: "Бесплатный выезд по Екатеринбургу. Считаем смету при вас." },
  { n: "03", t: "Монтаж", d: "Установка в течение 1–3 дней. Чисто, с защитой пола и мебели." },
  { n: "04", t: "Гарантия", d: "3 года на монтаж, заводская гарантия на технику. Сервис в одном месте." },
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
    <div className="min-h-screen bg-background text-foreground">
      {/* Top bar */}
      <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <a href="#" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg" style={{ background: "var(--gradient-hero)" }}>
              <Snowflake className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-lg font-extrabold tracking-tight">КупиКондер</span>
          </a>
          <nav className="hidden items-center gap-7 text-sm font-medium md:flex">
            <a href="#services" className="hover:text-primary">Услуги</a>
            <a href="#works" className="hover:text-primary">Работы</a>
            <a href="#process" className="hover:text-primary">Как работаем</a>
            <a href="#contacts" className="hover:text-primary">Контакты</a>
          </nav>
          <a href={PHONE_HREF} className="hidden items-center gap-2 text-sm font-semibold text-primary md:flex">
            <Phone className="h-4 w-4" />
            {PHONE}
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden" style={{ background: "var(--gradient-soft)" }}>
        <div className="container mx-auto grid gap-10 px-4 py-12 lg:grid-cols-2 lg:items-center lg:py-20">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-muted-foreground">
              <span className="flex h-2 w-2 rounded-full bg-accent"></span>
              Работаем в Екатеринбурге с 2020 года
            </div>
            <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] tracking-tight md:text-5xl lg:text-6xl">
              Кондиционеры с установкой <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-hero)" }}>под ключ</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg text-muted-foreground">
              Подберём модель, привезём и установим за 1–3 дня. Бесплатный замер, фиксированная цена, гарантия 3 года на монтаж.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Button size="lg" asChild className="h-14 text-base font-semibold shadow-[var(--shadow-cta)]">
                <a href="#request"><Calculator className="mr-2 h-5 w-5" />Рассчитать стоимость</a>
              </Button>
              <Button size="lg" variant="outline" asChild className="h-14 text-base font-semibold">
                <a href={PHONE_HREF}><Phone className="mr-2 h-5 w-5" />Позвонить</a>
              </Button>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-4 border-t border-border pt-6">
              <div>
                <div className="text-2xl font-extrabold text-primary">5 лет</div>
                <div className="text-xs text-muted-foreground">на рынке Екб</div>
              </div>
              <div>
                <div className="text-2xl font-extrabold text-primary">1 800+</div>
                <div className="text-xs text-muted-foreground">установок</div>
              </div>
              <div>
                <div className="text-2xl font-extrabold text-primary">4,9</div>
                <div className="text-xs text-muted-foreground">на Яндекс Картах</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="overflow-hidden rounded-2xl shadow-[var(--shadow-card)]">
              <img src={heroAc} alt="Кондиционер в квартире" width={1536} height={1024} className="h-full w-full object-cover" />
            </div>
            <div className="absolute -bottom-5 -left-5 hidden rounded-xl border border-border bg-background p-4 shadow-[var(--shadow-card)] sm:block">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent/10">
                  <Clock className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <div className="text-sm font-semibold">Замер сегодня</div>
                  <div className="text-xs text-muted-foreground">Свободные слоты 14:00, 17:00</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews / Yandex Maps trust */}
      <section className="border-y border-border bg-muted/40 py-14">
        <div className="container mx-auto px-4">
          <div className="mb-10 flex flex-col items-start justify-between gap-3 md:flex-row md:items-end">
            <div>
              <div className="text-sm font-semibold uppercase tracking-wider text-primary">Отзывы</div>
              <h2 className="mt-2 text-3xl font-extrabold md:text-4xl">Нам доверяют жители Екатеринбурга</h2>
            </div>
            <div className="flex items-center gap-3 rounded-xl border border-border bg-background px-4 py-3">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <div>
                <div className="text-sm font-bold">4,9 / 5</div>
                <div className="text-xs text-muted-foreground">Яндекс Карты · 240+ отзывов</div>
              </div>
            </div>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {reviews.map((r, i) => (
              <div key={i} className="rounded-xl border border-border bg-background p-6 shadow-sm">
                <div className="mb-3 flex">
                  {[...Array(r.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm leading-relaxed text-foreground/90">«{r.text}»</p>
                <div className="mt-4 text-sm font-semibold text-muted-foreground">— {r.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mb-10 max-w-2xl">
            <div className="text-sm font-semibold uppercase tracking-wider text-primary">Услуги</div>
            <h2 className="mt-2 text-3xl font-extrabold md:text-4xl">Что делаем</h2>
            <p className="mt-3 text-muted-foreground">От подбора и доставки до запуска и сервиса. Работаем с квартирами, офисами и коммерческими объектами.</p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => (
              <div key={i} className="group rounded-xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:shadow-[var(--shadow-card)]">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg" style={{ background: "var(--gradient-hero)" }}>
                  <s.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-bold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Works / portfolio */}
      <section id="works" className="bg-muted/40 py-16 md:py-20">
        <div className="container mx-auto grid gap-10 px-4 lg:grid-cols-2 lg:items-center">
          <div className="overflow-hidden rounded-2xl shadow-[var(--shadow-card)]">
            <img src={installImg} alt="Монтаж кондиционера" width={1024} height={1024} loading="lazy" className="h-full w-full object-cover" />
          </div>
          <div>
            <div className="text-sm font-semibold uppercase tracking-wider text-primary">Наши работы</div>
            <h2 className="mt-2 text-3xl font-extrabold md:text-4xl">1 800+ установок в Екатеринбурге и области</h2>
            <p className="mt-4 text-muted-foreground">
              Работаем с квартирами в новостройках и вторичке, офисами, кафе и магазинами. На каждый объект — свой замерщик и монтажная бригада с опытом от 5 лет.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Установка с защитой пола, мебели и фасада",
                "Аккуратный монтаж трассы, без сколов и подтёков",
                "Документы, чек, договор и гарантийный талон",
                "Помощь с выбором места для внешнего блока",
              ].map((t, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mb-10 max-w-2xl">
            <div className="text-sm font-semibold uppercase tracking-wider text-primary">Как работаем</div>
            <h2 className="mt-2 text-3xl font-extrabold md:text-4xl">От заявки до прохлады — 1–3 дня</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {process.map((p, i) => (
              <div key={i} className="relative rounded-xl border border-border bg-card p-6">
                <div className="text-3xl font-extrabold text-primary/30">{p.n}</div>
                <h3 className="mt-2 text-lg font-bold">{p.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Request form */}
      <section id="request" className="py-16 md:py-20" style={{ background: "var(--gradient-hero)" }}>
        <div className="container mx-auto grid gap-10 px-4 lg:grid-cols-2 lg:items-center">
          <div className="text-primary-foreground">
            <h2 className="text-3xl font-extrabold leading-tight md:text-4xl">
              Рассчитаем стоимость кондиционера с установкой за 10 минут
            </h2>
            <p className="mt-4 text-base opacity-90">
              Оставьте заявку — перезвоним, уточним площадь и пришлём 2–3 варианта по бюджету. Без навязчивых звонков.
            </p>
            <ul className="mt-6 space-y-2 text-sm opacity-95">
              <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4" /> Замер бесплатный</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4" /> Фиксированная цена в смете</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4" /> Гарантия 3 года на монтаж</li>
            </ul>
          </div>
          <form onSubmit={submit} className="rounded-2xl bg-background p-6 shadow-[var(--shadow-card)] md:p-8">
            <div className="space-y-4">
              <div>
                <Label htmlFor="name">Как к вам обращаться</Label>
                <Input id="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Имя" className="mt-1.5 h-12" />
              </div>
              <div>
                <Label htmlFor="phone">Телефон</Label>
                <Input id="phone" type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+7 (___) ___-__-__" className="mt-1.5 h-12" />
              </div>
              <div>
                <Label htmlFor="area">Площадь помещения, м² <span className="text-muted-foreground">(необязательно)</span></Label>
                <Input id="area" value={form.area} onChange={(e) => setForm({ ...form, area: e.target.value })} placeholder="Например, 25" className="mt-1.5 h-12" />
              </div>
              <Button type="submit" size="lg" className="h-13 w-full text-base font-semibold">
                Получить расчёт <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <p className="text-center text-xs text-muted-foreground">
                Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
              </p>
            </div>
          </form>
        </div>
      </section>

      {/* Contacts */}
      <section id="contacts" className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-xl border border-border bg-card p-6">
              <Phone className="h-6 w-6 text-primary" />
              <div className="mt-3 text-sm text-muted-foreground">Телефон</div>
              <a href={PHONE_HREF} className="mt-1 block text-xl font-bold hover:text-primary">{PHONE}</a>
              <a href="https://wa.me/73432901234" className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline">
                <MessageCircle className="h-4 w-4" /> Написать в WhatsApp
              </a>
            </div>
            <div className="rounded-xl border border-border bg-card p-6">
              <MapPin className="h-6 w-6 text-primary" />
              <div className="mt-3 text-sm text-muted-foreground">Адрес офиса</div>
              <div className="mt-1 text-lg font-bold">{ADDRESS}</div>
              <div className="mt-3 text-sm text-muted-foreground">Выезд замерщика по всему Екатеринбургу и пригороду</div>
            </div>
            <div className="rounded-xl border border-border bg-card p-6">
              <Clock className="h-6 w-6 text-primary" />
              <div className="mt-3 text-sm text-muted-foreground">Режим работы</div>
              <div className="mt-1 text-lg font-bold">Пн–Сб 09:00–20:00</div>
              <div className="mt-3 text-sm text-muted-foreground">Вс — по предварительной записи</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/40 py-8">
        <div className="container mx-auto flex flex-col items-center justify-between gap-3 px-4 text-sm text-muted-foreground md:flex-row">
          <div>© {new Date().getFullYear()} КупиКондер · Екатеринбург</div>
          <div>Кондиционеры, продажа и установка под ключ</div>
        </div>
      </footer>

      {/* Mobile sticky CTA */}
      <a href={PHONE_HREF} className="fixed bottom-4 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full text-primary-foreground shadow-[var(--shadow-cta)] md:hidden" style={{ background: "var(--gradient-hero)" }} aria-label="Позвонить">
        <Phone className="h-6 w-6" />
      </a>
    </div>
  );
};

export default Index;
