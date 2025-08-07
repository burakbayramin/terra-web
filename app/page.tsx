"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Check,
  Menu,
  X,
  Moon,
  Sun,
  ArrowRight,
  Star,
  Users,
  Activity,
  Bell,
  MapPin,
  Phone,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useTheme } from "next-themes";

export default function LandingPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  const features = [
    {
      title: "Gerçek Zamanlı Deprem Uyarıları",
      description:
        "Anında bildirimle hayatınızı ve sevdiklerinizi koruyun.",
      icon: <Bell className="size-5" />,
    },
    {
      title: "Yapay Zeka Destekli Risk Analizi",
      description:
        "Gelişmiş yapay zeka teknolojisiyle, bölgenizdeki deprem riskini en doğru ve hızlı şekilde analiz edin. Hayatınızı güvence altına alın.",
      icon: <Activity className="size-5" />,
    },
    {
      title: "Etkileşimli Tehlike Haritaları",
      description:
        "Canlı sismik hareketleri anlık takip edin, riskli bölgeleri harita üzerinde görün ve her an kontrolü elinizde tutun.",
      icon: <MapPin className="size-5" />,
    },
    {
      title: "Kişiselleştirilmiş Güvenlik Önerileri",
      description:
        "Size ve ailenize özel, deprem öncesi, sırası ve sonrasında almanız gereken güvenlik önlemlerini adım adım öğrenin, hazırlıklı olun.",
      icon: <ShieldCheck className="size-5" />,
    },
    {
      title: "Ağ Özelliği ve Ağ İçi Özelleştirilmiş Bildirimler",
              description:
          "Ağınızdaki kişilerle güvenli iletişim kurun, özelleştirilmiş bildirimler alın ve acil durumlarda hızlı koordinasyon sağlayın.",
      icon: <Users className="size-5" />,
    },
    {
      title: "Çevrimdışı Acil Durum Bildirimi",
      description:
        "İnternet bağlantısı olmadan bile acil durum sinyali gönderin, yakınlarınızı uyarın ve acil durum kaynaklarına hızlıca ulaşın.",
      icon: <Phone className="size-5" />,
    },
  ];

  return (
    <div className="flex min-h-[100dvh] flex-col">
      <header 
        className={`sticky top-0 z-50 w-full backdrop-blur-lg transition-all duration-300 ${
          isScrolled ? "shadow-sm" : ""
        }`}
        style={{
          background: 'linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--primary) / 0.7) 100%)'
        }}
>
        <div className="container flex h-20 items-center justify-between">
          <div className="flex items-center gap-2 font-bold">
          <div className="h-12 px-1 flex items-center justify-center text-primary-foreground"
                style={{ fontFamily: "'TT Fors Trial Demibold', sans-serif", letterSpacing: "0.17em" }}>
                <img src="/icons/terraicon.png" alt="icon" className="h-16 w-16 mr-1" />
                TERRA 
              </div>
            {/* <span>Terra</span> */}
          </div>
          <nav className="hidden md:flex gap-8 absolute left-1/2 -translate-x-1/2">
            <Link
              href="#features"
              className="text-sm font-medium transition-colors text-primary-foreground hover:text-foreground link-muted-hover-reverse px-4 py-1 rounded-md hover:bg-muted/40 hover:text-foreground"
            >
              Öne Çıkanlar
            </Link>
            <Link
              href="#testimonials"
              className="text-sm font-medium transition-colors text-primary-foreground hover:text-foreground link-muted-hover-reverse px-4 py-1 rounded-md hover:bg-muted/40 hover:text-foreground"
            >
              Yorumlar
            </Link>
            <Link
              href="#futurefeatures"
              className="text-sm font-medium transition-colors text-primary-foreground hover:text-foreground link-muted-hover-reverse px-4 py-1 rounded-md hover:bg-muted/40 hover:text-foreground"
            >
              Gelecek Özellikler
            </Link>
            <Link
              href="#faq"
              className="text-sm font-medium transition-colors text-primary-foreground hover:text-foreground link-muted-hover-reverse px-4 py-1 rounded-md hover:bg-muted/40 hover:text-foreground"
            >
              SSS
            </Link>
          </nav>
          <div className="hidden md:flex gap-4 items-center text-primary-foreground">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full"
            >
              {mounted && theme === "dark" ? (
                <Sun className="size-[18px]" />
              ) : (
                <Moon className="size-[18px]" />
              )}
              <span className="sr-only">Toggle theme</span>
            </Button>
            {/* <Link
              href="#"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Log in
            </Link>
            <Button className="rounded-full">
              Get Started
              <ChevronRight className="ml-1 size-4" />
            </Button> */}
          </div>
          <div className="flex items-center gap-4 md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full"
            >
              {mounted && theme === "dark" ? (
                <Sun className="size-[18px]" />
              ) : (
                <Moon className="size-[18px]" />
              )}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="size-5" />
              ) : (
                <Menu className="size-5" />
              )}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-16 inset-x-0 bg-background/95 backdrop-blur-lg border-b"
          >
            <div className="container py-4 flex flex-col gap-4">
              <Link
                href="#features"
                className="py-2 text-sm font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Öne Çıkanlar
              </Link>
              <Link
                href="#testimonials"
                className="py-2 text-sm font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Yorumlar
              </Link>
              <Link
                href="#coming-soon"
                className="py-2 text-sm font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Gelecek Özellikler
              </Link>
              <Link
                href="#faq"
                className="py-2 text-sm font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                SSS
              </Link>
              {/* <div className="flex flex-col gap-2 pt-2 border-t">
                <Link href="#" className="py-2 text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
                  Log in
                </Link>
                <Button className="rounded-full">
                  Get Started
                  <ChevronRight className="ml-1 size-4" />
                </Button>
              </div> */}
            </div>
          </motion.div>
        )}
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-8 md:py-10 lg:py-12 overflow-hidden">
          <div className="container px-4 md:px-6 relative">
            <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-3xl mx-auto mb-12"
            >
              {/* <Badge
                className="mb-4 rounded-full px-4 py-1.5 text-sm font-medium"
                variant="secondary"
              >
                Launching Soon
              </Badge> */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 pt-4 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
                Depremden Bir Adım Önde Ol
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Toplumların bilinçlenmesini, yerel deprem risklerini analiz etmesini ve daha akıllı
              tepkiler geliştirmesini sağlayan kapsamlı bir farkındalık platformu. Gerçek zamanlı
              sismik aktiviteleri takip edin, bulunduğunuz bölgenin risk seviyesini değerlendirin.
              Riskleri tanıyın, önleminizi alın, güvende olun.
              </p>
              {/* <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="rounded-full h-12 px-8 text-base">
                  Start Free Trial
                  <ArrowRight className="ml-2 size-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full h-12 px-8 text-base"
                >
                  Book a Demo
                </Button>
              </div> */}
              {/* <div className="flex items-center justify-center gap-4 mt-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Check className="size-4 text-primary" />
                  <span>No credit card</span>
                </div>
                <div className="flex items-center gap-1">
                  <Check className="size-4 text-primary" />
                  <span>14-day trial</span>
                </div>
                <div className="flex items-center gap-1">
                  <Check className="size-4 text-primary" />
                  <span>Cancel anytime</span>
                </div>
              </div> */}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative mx-auto max-w-5xl"
            >
              <div className="rounded-xl overflow-hidden shadow-2xl border border-border/40 bg-gradient-to-b from-background to-muted/20">
                <Image
                  src="/mockup.png"
                  width={1280}
                  height={720}
                  alt="Terra dashboard - Deprem takibi, AI destekli analiz ve ağ yönetimi"
                  className="w-full h-auto"
                  priority
                />
                <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-black/10 dark:ring-white/10"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 -z-10 h-[300px] w-[300px] rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 blur-3xl opacity-70"></div>
              <div className="absolute -top-6 -left-6 -z-10 h-[300px] w-[300px] rounded-full bg-gradient-to-br from-secondary/30 to-primary/30 blur-3xl opacity-70"></div>
            </motion.div>
          </div>
        </section>

        {/* Logos Section */}
        {/* <section className="w-full py-12 border-y bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <p className="text-sm font-medium text-muted-foreground">
                Trusted by innovative companies worldwide
              </p>
              <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Image
                    key={i}
                    src={`/placeholder-logo.svg`}
                    alt={`Company logo ${i}`}
                    width={120}
                    height={60}
                    className="h-8 w-auto opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0"
                  />
                ))}
              </div>
            </div>
          </div>
        </section> */}

        {/* Features Section */}
        <section id="features" className="w-full py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
            >
              <Badge
                className="rounded-full px-4 py-1.5 text-sm font-medium"
                variant="secondary"
              >
                Öne Çıkanlar
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Yapay Zeka Destekli Risk Analizleri, Anlık Bildirimler ve Kullanıcı Ağları, Hepsi Tek Platformda!!
              </h2>
              <p className="max-w-[800px] text-muted-foreground md:text-lg">
              Terra, deprem risk analizinden gerçek zamanlı bildirimlere; 
              bölgesel tehlike haritalarından anlık uyarılara kadar tüm kritik bilgileri, 
              tek bir platformda sunar. Bulunduğunuz bölgedeki riskleri hızlıca keşfedin, 
              afet anında hayat kurtaran bilgilere ve güncel haberlere anında erişin. 
              Kullanıcı dostu arayüzü ve güvenilir verileriyle Terra; sadece bilgi vermekle kalmaz, 
              sizi ve sevdiklerinizi deprem karşısında güvende tutar. Şimdi Terra ile bilinçlenin, 
              hazırlıklı olun ve fark yaratın!
              </p>
            </motion.div>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {features.map((feature, i) => (
                <motion.div key={i} variants={item}>
                  <Card className="h-full overflow-hidden border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur transition-all hover:shadow-md">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="size-10 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary mb-4">
                        {feature.icon}
                      </div>
                      <h3 className="text-xl font-bold mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="w-full py-20 md:py-32 bg-muted/30 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_40%,transparent_100%)]"></div>

          <div className="container px-4 md:px-6 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-4 text-center mb-16"
            >
              <Badge
                className="rounded-full px-4 py-1.5 text-sm font-medium"
                variant="secondary"
              >
                Nasıl Çalışır
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Basit Süreç, Güçlü Sonuçlar
              </h2>
              <p className="max-w-[800px] text-muted-foreground md:text-lg">
              Sadece dakikalar içinde başlayın, sevdiklerinizi ve kendinizi deprem risklerine karşı koruyun.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 md:gap-12 relative">
              <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-border to-transparent -translate-y-1/2 z-0"></div>

              {[
                {
                  step: "01",
                  title: "Hesap Oluştur",
                  description:
                    "Sadece e-posta adresinle saniyeler içinde kaydol, Terra'nın sunduğu avantajlardan hemen yararlanmaya başla.",
                },
                {
                  step: "02",
                  title: "Bilgilerini Doldur",
                  description:
                    "Konumunu ve temel bilgilerini ekleyerek bölgenle ilgili en doğru deprem analizlerine ulaş.",
                },
                {
                  step: "03",
                  title: "Özellikleri Keşfet",
                  description:
                    "Gerçek zamanlı bildirimlerden risk analizine, tüm Terra özelliklerini keşfet ve güvende kal.",
                },
              ].map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative z-10 flex flex-col items-center text-center space-y-4"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary/70 text-primary-foreground text-xl font-bold shadow-lg">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="w-full py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
            >
              <Badge
                className="rounded-full px-4 py-1.5 text-sm font-medium"
                variant="secondary"
              >
                Yorumlar
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Türkiyenin Dört Bir Yanındaki Kullanıcılar Tarafından Seviliyor
              </h2>
              <p className="max-w-[800px] text-muted-foreground md:text-lg">
                Terra’yı tercih eden kullanıcılarımızdan gelen samimi geri
                bildirimleri inceleyin.
              </p>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  quote:
                    "Terra sayesinde bölgemizdeki deprem risklerini çok daha hızlı ve doğru bir şekilde analiz edebiliyoruz. Anlık bildirimler sayesinde tüm ekip anında haberdar oluyor.",
                  author: "Berkant YAŞAR",
                  role: "Kurumsal Firma Çalışanı",
                  rating: 5,
                },
                {
                  quote:
                    "Uygulamanın sunduğu harita ve raporlar, bizi gerçekten çok tatmin etti. Özellikle kişiselleştirilmiş güvenlik önerileri oldukça faydalı.",
                  author: "Hatice DEMİRBAŞ",
                  role: "Satınalma Uzmanı",
                  rating: 5,
                },
                {
                  quote:
                    "Ağım kısmı, lokasyon bazlı zemin risk analizi ve yapay zeka özellikleri gerçekten etkileyici. Fakat chat özelliği eklenebilirse daha iyi olabilir.",
                  author: "Süeda ÇUVALCI",
                  role: "E-Ticaret Uzmanı",
                  rating: 4,
                },
                {
                  quote:
                    "Uygulama içerisindeki yapay zeka sayesinde deprem ile ilgili detay bilgilere kolaylıkla ulaşabiliyoruz. Özellikle risk analizi ve tahmin özellikleri gerçekten etkileyici.",
                  author: "Berra KARTAL",
                  role: "Kimyager",
                  rating: 5,
                },
                {
                  quote:
                    "Terra'nın sunduğu detaylı risk analizleriyle aile ağımız altındaki acil durum planlarını güncelledik. Bir kriz anında ortak hareket edebileceğiz.",
                  author: "Gökçe Işıtan",
                  role: "Matematik Öğretmeni",
                  rating: 4,
                },
                {
                  quote:
                    "Uygulamanın arayüzü çok sade ve anlaşılır. Deprem anında hızlıca bilgi alabiliyor ve ek kaynaklara ulaşabiliyoruz.",
                  author: "Emre ULUIŞIK",
                  role: "Bilgisayar Programcısı",
                  rating: 5,
                },
              ].map((testimonial, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                >
                  <Card className="h-full overflow-hidden border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur transition-all hover:shadow-md">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="flex mb-4">
                        {Array(testimonial.rating)
                          .fill(0)
                          .map((_, j) => (
                            <Star
                              key={j}
                              className="size-4 text-yellow-500 fill-yellow-500"
                            />
                          ))}
                      </div>
                      <p className="text-lg mb-6 flex-grow">
                        {testimonial.quote}
                      </p>
                      <div className="flex items-center gap-4 mt-auto pt-4 border-t border-border/40">
                        <div className="size-10 rounded-full bg-muted flex items-center justify-center text-foreground font-medium">
                          {testimonial.author.charAt(0)}
                        </div>
                        <div>
                          <p className="font-medium">{testimonial.author}</p>
                          <p className="text-sm text-muted-foreground">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section
          id="futurefeatures"
          className="w-full py-20 md:py-32 bg-muted/30 relative overflow-hidden"
        >
          <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_40%,transparent_100%)]"></div>

          <div className="container px-4 md:px-6 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
            >
              <Badge
                className="rounded-full px-4 py-1.5 text-sm font-medium"
                variant="secondary"
              >
                  Gelecek Özellikler
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Çok Yakında: Yepyeni Özellikler
                </h2>
                <p className="max-w-[800px] text-muted-foreground md:text-lg">
                Terra’yı sürekli geliştiriyoruz. Çok yakında, 
                topluluk istekleri ve en son teknolojiyle 
                güçlendirilmiş yeni özellikler sizlerle buluşacak. 
                Güvenliğinizi artırmak ve deneyiminizi mükemmelleştirmek 
                için durmadan çalışıyoruz. Hazır olun, farkı hissedin!
                </p>
              </motion.div>

              <div className="mx-auto max-w-5xl">
                <Tabs defaultValue="in-progress" className="w-full">
                  <div className="flex justify-center mb-8">
                    <TabsList className="rounded-full p-1">
                      <TabsTrigger
                        value="in-progress"
                        className="rounded-full px-6"
                      >
                        Geliştiriliyor
                      </TabsTrigger>
                      <TabsTrigger value="soon" className="rounded-full px-6">
                        Yakında
                      </TabsTrigger>
                    </TabsList>
                  </div>
                  <TabsContent value="in-progress">
                    <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
                      {[
                        {
                          name: "Hassas Deprem Alarmı",
                          description:
                            "Sarsıntıyı anında algıla, kritik durumlarda seni hızlıca uyaralım.",
                          features: [
                            "Anlık sarsıntı tespiti",
                            "Hızlı ve güvenilir alarm",
                            "Mobil ve masaüstü bildirimler",
                          ],
                          cta: "Detayları Öğren",
                          popular: false,
                        },
                        {
                          name: "Akıllı Acil Durum Planı",
                          description:
                            "Deprem sonrası en güvenli ve hızlı yolu yapay zeka ile bul.",
                          features: [
                            "Dinamik rota planlama",
                            "Trafik ve kalabalık durumu analizli",
                          ],
                          cta: "Detayları Öğren",
                          popular: false,
                        },
                        {
                          name: "Akıllı Buluşma Noktası",
                          description:
                            "Sevdiklerinle kolayca güvenli buluşma noktaları belirle ve paylaş.",
                          features: [
                            "Güvenli buluşma önerileri",
                            "Anlık konum paylaşımı",
                            "Grup koordinasyonu",
                          ],
                          cta: "Detayları Öğren",
                          popular: false,
                        }
                      ].map((plan, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: i * 0.1 }}
                        >
                          <Card
                            className={`relative overflow-hidden h-full ${
                              plan.popular
                                ? "border-primary shadow-lg"
                                : "border-border/40 shadow-md"
                            } bg-gradient-to-b from-background to-muted/10 backdrop-blur`}
                          >
                            {/* {plan.popular && (
                              <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-3 py-1 text-xs font-medium rounded-bl-lg">
                                Most Popular
                              </div>
                            )} */}
                            <CardContent className="p-6 flex flex-col h-full">
                              <h3 className="text-2xl font-bold">{plan.name}</h3>
                              <div className="flex items-baseline mt-4">
                                {/* <span className="text-4xl font-bold">
                                  {plan.price}
                                </span> */}
                                {/* <span className="text-muted-foreground ml-1">
                                  /month
                                </span> */}
                              </div>
                              <p className="text-muted-foreground mt-2">
                                {plan.description}
                              </p>
                              <ul className="space-y-3 my-6 flex-grow">
                                {plan.features.map((feature, j) => (
                                  <li key={j} className="flex items-center">
                                    <Check className="mr-2 size-4 text-primary" />
                                    <span>{feature}</span>
                                  </li>
                                ))}
                              </ul>
                              {/* <Button
                                className={`w-full mt-auto rounded-full ${
                                  plan.popular
                                    ? "bg-primary hover:bg-primary/90"
                                    : "bg-muted hover:bg-muted/80"
                                }`}
                                variant={plan.popular ? "default" : "outline"}
                              >
                                {plan.cta}
                              </Button> */}
                            </CardContent>
                          </Card>
                        </motion.div>
                      ))}
                    </div>
                  </TabsContent>
                  <TabsContent value="soon">
                    <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
                      {[
                        {
                          name: "Sensör Entegrasyonu",
                          description:
                            "Akıllı ev ve IoT cihazlarınızla deprem anında otomatik önlemler alın.",
                          features: [
                            "IoT cihaz bağlantısı",
                            "Otomatik alarm sistemi",
                            "Cihaz durumu takibi",
                          ],
                          cta: "Yakında",
                          popular: false,
                        },
                        {
                          name: "Topluluk Destek Ağı",
                          description:
                            "Gönüllüler ve yardım kuruluşlarıyla hızlı destek ve kaynak paylaşımı yapın.",
                          features: [
                            "Yerel gönüllü ağı",
                            "Anlık yardım çağrısı",
                            "Kaynak paylaşımı",
                          ],
                          cta: "Yakında",
                          popular: false,
                        },
                        {
                          name: "Tehlikedeyim Bildirimi",
                          description:
                            "İnternet olmadan, acil durumlarda yardım talebinizi hızlıca iletin. Sevdiklerinizi bilgilendirin.",
                          features: [
                            "Offline mesajlaşma",
                            "Kablosuz bağlantı desteği",
                            "Hızlı acil sinyal gönderimi",
                          ],
                          cta: "Yakında",
                          popular: false,
                        }
                      ].map((plan, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: i * 0.1 }}
                        >
                          <Card
                            className={`relative overflow-hidden h-full ${
                              plan.popular
                                ? "border-primary shadow-lg"
                                : "border-border/40 shadow-md"
                            } bg-gradient-to-b from-background to-muted/10 backdrop-blur`}
                          >
                            {/* {plan.popular && (
                              <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-3 py-1 text-xs font-medium rounded-bl-lg">
                                Most Popular
                              </div>
                            )} */}
                            <CardContent className="p-6 flex flex-col h-full">
                              <h3 className="text-2xl font-bold">{plan.name}</h3>
                              <div className="flex items-baseline mt-4">
                                {/* <span className="text-4xl font-bold">
                                  {plan.price}
                                </span>
                                <span className="text-muted-foreground ml-1">
                                  /month
                                </span> */}
                              </div>
                              <p className="text-muted-foreground mt-2">
                                {plan.description}
                              </p>
                              <ul className="space-y-3 my-6 flex-grow">
                                {plan.features.map((feature, j) => (
                                  <li key={j} className="flex items-center">
                                    <Check className="mr-2 size-4 text-primary" />
                                    <span>{feature}</span>
                                  </li>
                                ))}
                              </ul>
                              {/* <Button
                                className={`w-full mt-auto rounded-full ${
                                  plan.popular
                                    ? "bg-primary hover:bg-primary/90"
                                    : "bg-muted hover:bg-muted/80"
                                }`}
                                variant={plan.popular ? "default" : "outline"}
                              >
                                {plan.cta}
                              </Button> */}
                            </CardContent>
                          </Card>
                        </motion.div>
                      ))}
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </section>

        {/* FAQ Section */}
<section id="faq" className="w-full py-20 md:py-32">
  <div className="container px-4 md:px-6">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
    >
      <Badge
        className="rounded-full px-4 py-1.5 text-sm font-medium"
        variant="secondary"
      >
        SSS
      </Badge>
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
        Sıkça Sorulan Sorular
      </h2>
      <p className="max-w-[800px] text-muted-foreground md:text-lg">
        Platformumuz hakkında sıkça sorulan sorulara yanıt bulun.
      </p>
    </motion.div>

    <div className="mx-auto max-w-3xl">
      <Accordion type="single" collapsible className="w-full">
        {[
          {
            question: "Deprem bildirimlerini nasıl alabilirim?",
            answer:
              "Platformumuza kayıt olduktan sonra konumunuza özel gerçek zamanlı deprem bildirimleri almaya başlayabilirsiniz. İster mobil, ister masaüstü cihazınızdan anında haberdar olun.",
          },
          {
            question: "Deprem risk analizleri ne kadar güvenilir?",
            answer:
              "Yapay zeka destekli gelişmiş algoritmalar ve resmi sismik veri kaynakları kullanılarak hazırlanır. Analizler sürekli güncellenir ve bölgenizdeki risk seviyeleri detaylı olarak raporlanır.",
          },
          {
            question: "Acil durumlar için topluluk desteği nasıl çalışıyor?",
            answer:
              "Topluluk tabanlı yardım ağı sayesinde bölgenizdeki gönüllüler ve kurumlar hızlıca organize olur. Yardım talebi gönderebilir, kaynak paylaşabilir ve destek alabilirsiniz.",
          },
          {
            question: "İnternet bağlantım kesilse bile acil durum bildirimi yapabilir miyim?",
            answer:
              "Evet, internet olmadan da 'Tehlikedeyim' bildirimleri gönderebilirsiniz. Cihazlar arası kablosuz bağlantılar sayesinde sinyaliniz çevrenizdekilere ulaştırılır.",
          },
          {
            question: "Sevdiklerimle güvenli bir ağ kurup anlık bildirimler gönderebilir miyim?",
            answer:
              "Evet, platformumuzla aileniz ve yakınlarınızla özel bir ağ oluşturabilir, deprem anında anında bildirimlerle birbirinizi hızlıca haberdar edebilirsiniz. Böylece sevdikleriniz her zaman güvende olur.",
          },
          {
            question: "Yeni özellikler için öneri ve görüşlerimi paylaşabilir miyim?",
            answer:
              "Kesinlikle! Kullanıcılarımızın fikirleri bizim için çok değerli. Öneri ve taleplerinizi platformumuz üzerinden kolayca iletebilir, birlikte daha etkili ve kullanıcı odaklı çözümler geliştirebiliriz.",
          },
          {
            question: "Ne tür destek hizmetleri sunuyorsunuz?",
            answer:
              "Bina ve zemin risk analizlerinizi yüksek hassasiyetle gerçekleştirin. Anlık ve özelleştirilebilir bildirimler sayesinde sevdiklerinize hızlıca ulaşın, onların da durumunu anında öğrenin. İnternet bağlantısı olmasa dahi, durum bildiriminizi gönderin. Geniş kapsamlı destek kaynakları ve aktif topluluk forumumuz, her zaman yanınızda olarak ihtiyaç duyduğunuzda sizi destekler.",
          },
        ].map((faq, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: i * 0.05 }}
          >
            <AccordionItem
              value={`item-${i}`}
              className="border-b border-border/40 py-2"
            >
              <AccordionTrigger className="text-left font-medium hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          </motion.div>
        ))}
      </Accordion>
    </div>
  </div>
</section>

        {/* CTA Section */}
        <section className="w-full py-20 md:py-25 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>

          <div className="container px-4 md:px-6 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-6 text-center"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
              Acil Durumlara Hazırlıklı Olun. Hemen Başlayın.
              </h2>
              <p className="mx-auto max-w-[700px] text-primary-foreground/80 md:text-xl">
              Yapay zekâ destekli sistemimizle bina ve zemin risklerini analiz edin, kat durumuna göre tehlikeleri değerlendirin. Geçmiş depremleri inceleyin, internetsiz durum bildirimi ile sevdiklerinizle bağlantıda kalın. Güvenliğinizi artıran akıllı çözümlerle her an hazırlıklı olun. Hemen indirin.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <a
                href="https://apps.apple.com/app/idXXXXXXXXX" // App Store linkini buraya ekle
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1"
              >
                <img
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                  alt="App Store'dan indir"
                  className="h-12 w-auto object-contain"
                />
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=XXXXXXXXX" // Play Store linkini buraya ekle
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Google Play'den indir"
                  className="h-12 w-auto object-contain"
                />
              </a>
            </div>
            </motion.div>
          </div>
        </section>

      </main>
      <footer className="w-full border-t bg-background/95 backdrop-blur-sm">
        <div className="container flex flex-col gap-8 px-4 py-10 md:px-6 lg:py-16">
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center gap-2 font-bold">
              <div className="h-10 px-2 rounded-lg bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-primary-foreground"
                style={{ fontFamily: "'TT Fors Trial Demibold', sans-serif", letterSpacing: "0.17em" }}>
                <img src="/icons/terraicon.png" alt="icon" className="h-12 w-12 mr-1" />
                TERRA 
              </div>
          </div>
              <p className="text-sm text-muted-foreground">
              Güvenliğinizi akılla yönetin: Deprem takibi, risk analizi ve daha fazlası Terra’da.
              </p>
              <div className="flex gap-4">
                <button
                  onClick={() => window.open('https://www.facebook.com/profile.php?id=61577754766905', '_blank')}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="size-5"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                  <span className="sr-only">Facebook</span>
                </button>
                <button
                  onClick={() => window.open('https://x.com/terraapp_tr', '_blank')}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="size-5"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                  <span className="sr-only">X (Twitter)</span>
                </button>
                <button
                  onClick={() => window.open('https://www.linkedin.com/company/terraapp', '_blank')}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="size-5"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect width="4" height="12" x="2" y="9"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                  <span className="sr-only">LinkedIn</span>
                </button>
                <button
                  onClick={() => window.open('https://www.instagram.com/terraapp.tr/', '_blank')}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="size-5"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                  </svg>
                  <span className="sr-only">Instagram</span>
                </button>
                <button
                  onClick={() => window.open('https://www.tiktok.com/@terraapp?_t=ZS-8ygezPmWuTC&_r=1', '_blank')}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="size-5"
                  >
                    <path d="M9 12a4 4 0 1 0 4 4V4a5.78 5.78 0 0 0 0 .571"></path>
                    <path d="M9 12a4 4 0 1 0 4 4V4a5.78 5.78 0 0 0 0 .571"></path>
                  </svg>
                  <span className="sr-only">TikTok</span>
                </button>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-bold">Product</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="#features"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Öne Çıkanlar
                  </Link>
                </li>
                <li>
                  <Link
                    href="#coming-soon"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Gelecek Özellikler
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-bold">Company</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="mailto:info@terraapp.io"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Support
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row justify-between items-center border-t border-border/40 pt-8">
            <p className="text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} Terra. Tüm hakları saklıdır.
            </p>
            <div className="flex gap-4">
              <Link
                href="#"
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="#"
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
