import React, { useState, useEffect } from 'react';
import {
  Apple,
  Scale,
  Heart,
  Shield,
  Activity,
  Calendar,
  Clock,
  MapPin,
  Phone,
  Mail,
  Award,
  BookOpen,
  ChevronRight,
  FileText,
  Globe,
  Menu,
  X,
  ArrowRight,
  MessageCircle,
  Send,
  Star,
  CheckCircle,
  Info,
  Sparkles,
  ClipboardList,
  Instagram,
  Youtube,
  Facebook
} from 'lucide-react';
import { translations } from './data';

interface SavedAppointment {
  id: string;
  service: string;
  date: string;
  time: string;
  name: string;
  phone: string;
  email: string;
  note: string;
  timestamp: string;
}

const galleryImages = [
  { url: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&auto=format&fit=crop&q=80" },
  { url: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1200&auto=format&fit=crop&q=80" },
  { url: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&auto=format&fit=crop&q=80" },
  { url: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1200&auto=format&fit=crop&q=80" }
];

export default function App() {
  const [lang, setLang] = useState<'tr' | 'en'>('tr');
  const t = translations[lang];

  // UI state
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isApptModalOpen, setIsApptModalOpen] = useState(false);
  const [selectedServiceDetail, setSelectedServiceDetail] = useState<string | null>(null);
  const [selectedGalleryImage, setSelectedGalleryImage] = useState<number | null>(null);

  // VKI (BMI) state
  const [height, setHeight] = useState<string>('');
  const [weight, setWeight] = useState<string>('');
  const [bmiResult, setBmiResult] = useState<number | null>(null);
  const [bmiStatus, setBmiStatus] = useState<string>('');
  const [bmiAdvice, setBmiAdvice] = useState<string>('');
  const [bmiColorClass, setBmiColorClass] = useState<string>('');
  const [bmiError, setBmiError] = useState<string>('');

  // Contact Form state
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactMessage, setContactMessage] = useState('');
  const [isContactSuccess, setIsContactSuccess] = useState(false);

  // Newsletter state
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isNewsletterSuccess, setIsNewsletterSuccess] = useState(false);

  // Appointment Form state
  const [apptService, setApptService] = useState('weight-management');
  const [apptDate, setApptDate] = useState('');
  const [apptTime, setApptTime] = useState('09:00 - 11:00');
  const [apptName, setApptName] = useState('');
  const [apptPhone, setApptPhone] = useState('');
  const [apptEmail, setApptEmail] = useState('');
  const [apptNote, setApptNote] = useState('');
  const [isApptSuccess, setIsApptSuccess] = useState(false);
  const [apptError, setApptError] = useState<string>('');
  const [savedAppointments, setSavedAppointments] = useState<SavedAppointment[]>([]);

  // Load existing appointments from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem('dyt_appointments');
      if (stored) {
        setSavedAppointments(JSON.parse(stored));
      }
    } catch (e) {
      console.error("Failed to load appointments from localStorage", e);
    }
  }, []);

  const changeLanguage = (newLang: 'tr' | 'en') => {
    setLang(newLang);
    // Reset calculator output if lang changes so output status matches active text
    if (bmiResult !== null) {
      calculateBmi(newLang, Number(height), Number(weight));
    }
  };

  // BMI calculation logic
  const handleBmiSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBmiError('');
    const h = parseFloat(height);
    const w = parseFloat(weight);
    if (isNaN(h) || isNaN(w) || h < 50 || h > 280 || w < 20 || w > 300) {
      setBmiError(
        lang === 'tr'
          ? "Lütfen geçerli boy (50-280 cm) ve kilo (20-300 kg) değerleri giriniz."
          : "Please enter valid height (50-280 cm) and weight (20-300 kg) values."
      );
      setBmiResult(null);
      return;
    }
    calculateBmi(lang, h, w);
  };

  const calculateBmi = (curLang: 'tr' | 'en', hCm: number, wKg: number) => {
    const hM = hCm / 100;
    const bmiVal = parseFloat((wKg / (hM * hM)).toFixed(1));
    setBmiResult(bmiVal);

    const activeT = translations[curLang].bmi;

    if (bmiVal < 18.5) {
      setBmiStatus(activeT.statusUnderweight);
      setBmiAdvice(activeT.adviceUnderweight);
      setBmiColorClass('text-orange-500 bg-orange-50 border-orange-200');
    } else if (bmiVal >= 18.5 && bmiVal < 25) {
      setBmiStatus(activeT.statusNormal);
      setBmiAdvice(activeT.adviceNormal);
      setBmiColorClass('text-emerald-600 bg-emerald-50 border-emerald-200');
    } else if (bmiVal >= 25 && bmiVal < 30) {
      setBmiStatus(activeT.statusOverweight);
      setBmiAdvice(activeT.adviceOverweight);
      setBmiColorClass('text-amber-600 bg-amber-50 border-amber-200');
    } else if (bmiVal >= 30 && bmiVal < 35) {
      setBmiStatus(activeT.statusObese);
      setBmiAdvice(activeT.adviceObese);
      setBmiColorClass('text-red-500 bg-red-50 border-red-200');
    } else {
      setBmiStatus(activeT.statusExtremelyObese);
      setBmiAdvice(activeT.adviceExtremelyObese);
      setBmiColorClass('text-rose-700 bg-rose-50 border-rose-200');
    }
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactName || !contactEmail || !contactMessage) return;
    setIsContactSuccess(true);
    setTimeout(() => {
      setContactName('');
      setContactEmail('');
      setContactMessage('');
      setIsContactSuccess(false);
    }, 5000);
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setIsNewsletterSuccess(true);
    setTimeout(() => {
      setNewsletterEmail('');
      setIsNewsletterSuccess(false);
    }, 4000);
  };

  // Appointment Submission
  const handleApptSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setApptError('');
    if (!apptName.trim() || !apptPhone.trim() || !apptEmail.trim() || !apptDate) {
      setApptError(
        lang === 'tr'
          ? "Yasal Uyarı: Lütfen tüm gerekli alanları doldurunuz."
          : "Please fill in all required fields."
      );
      return;
    }

    const selectedServiceObj = t.services.items.find(item => item.id === apptService) || t.services.items[0];

    const newAppt: SavedAppointment = {
      id: "appt_" + Date.now(),
      service: selectedServiceObj.title,
      date: apptDate,
      time: apptTime,
      name: apptName,
      phone: apptPhone,
      email: apptEmail,
      note: apptNote,
      timestamp: new Date().toLocaleDateString()
    };

    const updated = [newAppt, ...savedAppointments];
    setSavedAppointments(updated);
    try {
      localStorage.setItem('dyt_appointments', JSON.stringify(updated));
    } catch (e) {
      console.error(e);
    }

    setIsApptSuccess(true);
  };

  const cancelAppointment = (id: string) => {
    const updated = savedAppointments.filter(item => item.id !== id);
    setSavedAppointments(updated);
    try {
      localStorage.setItem('dyt_appointments', JSON.stringify(updated));
    } catch (e) {
      console.error(e);
    }
  };

  const resetAppointmentForm = () => {
    setApptName('');
    setApptPhone('');
    setApptEmail('');
    setApptNote('');
    setApptDate('');
    setApptError('');
    setIsApptSuccess(false);
    setIsApptModalOpen(false);
  };

  const triggerAppointmentModal = (serviceId?: string) => {
    if (serviceId) {
      setApptService(serviceId);
    }
    setApptError('');
    setIsApptModalOpen(true);
  };

  // Build automatic WhatsApp pre-filled text
  const getWhatsAppLink = (serviceName?: string) => {
    const baseText = lang === 'tr'
      ? `Merhaba Diyetisyen Zeynep Dehmen, ${serviceName ? `"${serviceName}"` : 'Sağlıklı beslenme danışmanlığı'} hakkında ön bilgi edinmek ve randevu ayarlamak istiyorum.`
      : `Hello Diyetisyen Zeynep Dehmen, I would like to get information and set up an appointment for ${serviceName ? `"${serviceName}"` : 'clinical diet counseling'}.`;
    return `https://wa.me/905432866417?text=${encodeURIComponent(baseText)}`;
  };

  // Active Service detail finding
  const serviceDetailObject = t.services.items.find(item => item.id === selectedServiceDetail);

  return (
    <div className="min-h-screen bg-slate-50 font-sans relative antialiased text-slate-800">
      
      {/* Dynamic Background Design Details (No Clutter, Clean & Clinical yet Warm) */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none"></div>

      {/* STICKY NAVBAR */}
      <header id="main-header" className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            
            {/* Logo */}
            <a href="#" className="flex items-center space-x-2" id="nav-logo">
              <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center text-white font-serif font-bold text-xl shadow-md shadow-emerald-600/20">
                E
              </div>
              <div className="flex flex-col ml-2.5">
                <span className="font-serif font-bold text-lg text-slate-900 tracking-tight">Diyetisyen Zeynep Dehmen</span>
                <span className="text-[10px] uppercase tracking-wider font-semibold text-emerald-600 font-sans">
                  {lang === 'tr' ? 'Sağlıklı Yaşam Merkezi' : 'Sağlıklı Yaşam Merkezi · Çanakkale'}
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex space-x-8 items-center font-medium text-slate-600 text-sm">
              <a href="#about" className="hover:text-emerald-600 transition-colors py-2">{t.nav.about}</a>
              <a href="#services" className="hover:text-emerald-600 transition-colors py-2">{t.nav.services}</a>
              <a href="#vki-calc" className="hover:text-emerald-600 transition-colors py-2">{lang === 'tr' ? 'VKI Hesapla' : 'BMI Calculator'}</a>
              <a href="#testimonials" className="hover:text-emerald-600 transition-colors py-2">{t.nav.testimonials}</a>
              <a href="#contact" className="hover:text-emerald-600 transition-colors py-2">{t.nav.contact}</a>
            </nav>

            {/* Right Side Buttons: Language Selector + CTA */}
            <div className="hidden md:flex items-center space-x-4">
              {/* Language Switcher */}
              <div className="flex items-center space-x-1 bg-slate-100 p-1.5 rounded-lg border border-slate-200">
                <button
                  id="lang-tr"
                  onClick={() => changeLanguage('tr')}
                  className={`px-2.5 py-1 text-xs font-bold rounded-md transition-all ${
                    lang === 'tr'
                      ? 'bg-white text-emerald-700 shadow-sm'
                      : 'text-slate-500 hover:text-slate-900'
                  }`}
                >
                  TR
                </button>
                <button
                  id="lang-en"
                  onClick={() => changeLanguage('en')}
                  className={`px-2.5 py-1 text-xs font-bold rounded-md transition-all ${
                    lang === 'en'
                      ? 'bg-white text-emerald-700 shadow-sm'
                      : 'text-slate-500 hover:text-slate-900'
                  }`}
                >
                  EN
                </button>
              </div>

              {/* Randevu Al Button */}
              <button
                id="cta-appointment-desktop"
                onClick={() => triggerAppointmentModal()}
                className="bg-emerald-600 text-white font-semibold text-sm px-5 py-2.5 rounded-xl hover:bg-emerald-700 transition-all shadow-md shadow-emerald-600/10 hover:shadow-lg hover:shadow-emerald-600/20 active:scale-95 duration-200 flex items-center gap-1.5"
              >
                <Calendar className="w-4 h-4" />
                {t.nav.ctaButton}
              </button>
            </div>

            {/* Mobile Hamburger Menu Trigger */}
            <div className="flex items-center space-x-2 md:hidden">
              {/* Lang switcher on mobile header */}
              <div className="flex items-center space-x-1 bg-slate-100 p-1 rounded-lg mr-1 border border-slate-200">
                <button
                  id="lang-tr-mobile"
                  onClick={() => changeLanguage('tr')}
                  className={`px-2 py-0.5 text-[10px] font-bold rounded ${
                    lang === 'tr' ? 'bg-white text-emerald-700 shadow-sm' : 'text-slate-500'
                  }`}
                >
                  TR
                </button>
                <button
                  id="lang-en-mobile"
                  onClick={() => changeLanguage('en')}
                  className={`px-2 py-0.5 text-[10px] font-bold rounded ${
                    lang === 'en' ? 'bg-white text-emerald-700 shadow-sm' : 'text-slate-500'
                  }`}
                >
                  EN
                </button>
              </div>

              <button
                id="mobile-menu-toggle"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2.5 text-slate-700 hover:text-emerald-600 bg-slate-50 rounded-xl hover:bg-emerald-50 transition-all cursor-pointer active:scale-95"
                aria-label="Toggle Menu"
              >
                <Menu className="w-5.5 h-5.5" />
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Navigation Drawer with Overlay */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-50 md:hidden" id="mobile-menu-portal">
            {/* Backdrop slide-in screen */}
            <div 
              className="fixed inset-0 bg-slate-950/40 backdrop-blur-xs transition-opacity duration-350"
              onClick={() => setIsMobileMenuOpen(false)}
            ></div>
            
            {/* Drawer Body container */}
            <div className="fixed inset-y-0 right-0 w-full max-w-[320px] bg-white shadow-2xl p-6 flex flex-col justify-between z-50 border-l border-slate-100 animate-slide-in-right">
              <div>
                {/* Drawer Header */}
                <div className="flex justify-between items-center pb-5 border-b border-slate-100">
                  <div className="flex items-center space-x-2">
                    <div className="w-8.5 h-8.5 rounded-xl bg-emerald-600 flex items-center justify-center text-white font-serif font-bold text-base shadow-md shadow-emerald-600/20">
                      E
                    </div>
                    <div className="flex flex-col">
                      <span className="font-serif font-bold text-sm text-slate-900 leading-tight">Diyetisyen Zeynep Dehmen</span>
                      <span className="text-[9px] uppercase tracking-wider font-semibold text-emerald-600 font-sans leading-none mt-0.5">
                        {lang === 'tr' ? 'Sağlıklı Yaşam Merkezi · Çanakkale' : 'Sağlıklı Yaşam Merkezi · Çanakkale'}
                      </span>
                    </div>
                  </div>
                  <button 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-1.5 text-slate-500 hover:text-emerald-600 bg-slate-50 hover:bg-emerald-50 rounded-xl transition-all cursor-pointer hover:rotate-90 duration-250"
                    aria-label="Close menu"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Drawer Links */}
                <nav className="flex flex-col space-y-1.5 mt-6">
                  {[
                    { href: "#about", label: t.nav.about },
                    { href: "#services", label: t.nav.services },
                    { href: "#vki-calc", label: lang === 'tr' ? 'VKI Hesapla' : 'BMI Calculator' },
                    { href: "#clinic-gallery", label: lang === 'tr' ? 'Fotoğraf Galerisi' : 'Clinic Gallery' },
                    { href: "#testimonials", label: t.nav.testimonials },
                    { href: "#contact", label: t.nav.contact }
                  ].map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center justify-between text-slate-700 hover:text-emerald-600 hover:bg-emerald-50/50 font-semibold text-sm py-3 px-4 rounded-xl transition-all border border-transparent hover:border-emerald-500/10"
                    >
                      <span className="tracking-tight">{link.label}</span>
                      <ChevronRight className="w-4 h-4 text-slate-400" />
                    </a>
                  ))}
                </nav>
              </div>

              {/* Drawer Footer CTA */}
              <div className="pt-6 border-t border-slate-100 space-y-5">
                <button
                  id="cta-appointment-mobile"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    triggerAppointmentModal();
                  }}
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3.5 rounded-xl transition-all shadow-md shadow-emerald-600/10 active:scale-[0.98] flex items-center justify-center gap-1.5 text-sm cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  {t.nav.ctaButton}
                </button>
                
                <div className="flex flex-col items-center justify-center text-center p-3 bg-slate-50 rounded-2xl border border-slate-100">
                  <span className="text-[9px] text-slate-400 font-bold tracking-widest uppercase">
                    {lang === 'tr' ? 'HIZLI RANDEVU HATTI' : 'HOTLINE CONTACT'}
                  </span>
                  <a href="tel:05432866417" className="text-sm text-slate-800 font-extrabold mt-1 hover:text-emerald-600 transition-colors">
                    +90 532 123 4567
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      <main>
        
        {/* HERO SECTION */}
        <section id="hero" className="relative py-12 md:py-20 lg:py-24 bg-gradient-to-b from-emerald-50/20 via-slate-50 to-slate-50 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Hero Left Content */}
              <div className="lg:col-span-7 flex flex-col space-y-6 text-center lg:text-left">
                
                {/* Clinical Trust Badge */}
                <span className="inline-flex items-center justify-center lg:justify-start px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide text-emerald-800 bg-emerald-50 border border-emerald-100/80 self-center lg:self-start gap-1.5 shadow-sm">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                  {t.hero.badge}
                </span>

                {/* H1 Headline */}
                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-slate-900 font-extrabold tracking-tight leading-tight">
                  {t.hero.title}
                </h1>

                {/* Subheadline */}
                <p className="text-slate-600 text-base sm:text-lg lg:text-xl font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  {t.hero.subtitle}
                </p>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
                  <button
                    id="hero-online-consultancy-btn"
                    onClick={() => triggerAppointmentModal('online-diet')}
                    className="bg-emerald-600 text-white font-semibold text-base py-3.5 px-8 rounded-xl hover:bg-emerald-700 hover:shadow-lg hover:shadow-emerald-600/10 transition-all duration-200 shadow-md text-center active:scale-[0.98]"
                  >
                    {t.hero.onlineBtn}
                  </button>
                  <button
                    id="hero-free-consultation-btn"
                    onClick={() => triggerAppointmentModal('weight-management')}
                    className="bg-white text-emerald-800 font-semibold text-base py-3.5 px-8 rounded-xl hover:bg-slate-50 transition-colors border border-emerald-200 text-center active:scale-[0.98]"
                  >
                    {t.hero.freeConsultBtn}
                  </button>
                </div>

                {/* Statistics Bento Grid */}
                <div className="grid grid-cols-3 gap-4 pt-8 border-t border-slate-100 max-w-lg mx-auto lg:mx-0">
                  <div className="text-center lg:text-left">
                    <p className="text-2xl sm:text-3.5xl font-bold text-slate-900 font-serif">8+</p>
                    <p className="text-xs text-slate-500 font-medium tracking-wide mt-1">{t.hero.yearsExp}</p>
                  </div>
                  <div className="text-center lg:text-left border-x border-slate-100 px-4">
                    <p className="text-2xl sm:text-3.5xl font-bold text-slate-900 font-serif">3000+</p>
                    <p className="text-xs text-slate-500 font-medium tracking-wide mt-1">{t.hero.happyClients}</p>
                  </div>
                  <div className="text-center lg:text-left pl-4">
                    <p className="text-2xl sm:text-3.5xl font-bold text-slate-900 font-serif">%98</p>
                    <p className="text-xs text-slate-500 font-medium tracking-wide mt-1">{t.hero.successRate}</p>
                  </div>
                </div>

              </div>

              {/* Hero Right Visual Column */}
              <div className="lg:col-span-5 relative w-full flex justify-center items-center">
                
                {/* Visual Backdrop Sphere */}
                <div className="absolute inset-0 bg-gradient-to-tr from-amber-100/30 to-emerald-200/20 rounded-3xl -rotate-3 scale-95 blur-sm"></div>

                {/* Main Graphic Container */}
                <div className="relative bg-white p-6 rounded-3xl border border-slate-100 shadow-xl w-full max-w-md overflow-hidden flex flex-col justify-between" id="hero-graphic-card">
                  
                  {/* Clean illustration with CSS representing fresh food, wellness and diet */}
                  <div className="aspect-square bg-slate-50 rounded-2xl p-6 flex flex-col justify-center items-center relative overflow-hidden group">
                    
                    {/* Abstract Health Art in SVG instead of broken external images */}
                    <div className="relative w-44 h-44 flex items-center justify-center bg-white rounded-full shadow-inner border border-slate-100">
                      
                      {/* Interactive Rotating Organic Rings */}
                      <span className="absolute inset-0 rounded-full border-4 border-dashed border-emerald-500/20 animate-[spin_50s_linear_infinite]"></span>
                      <span className="absolute inset-3 rounded-full border border-teal-100/80"></span>
                      
                      {/* Leaf / Apple Center Theme */}
                      <div className="w-24 h-24 rounded-full bg-emerald-50 flex items-center justify-center">
                        <Apple className="w-12 h-12 text-emerald-600 animate-pulse" />
                      </div>

                      {/* Small visual floating badges */}
                      <div className="absolute top-2 right-2 bg-emerald-500 text-white rounded-full p-2.5 shadow-md">
                        <Heart className="w-4 h-4" />
                      </div>
                      <div className="absolute bottom-4 left-1 bg-amber-500 text-white rounded-full p-2 shadow-md">
                        <Scale className="w-4 h-4" />
                      </div>
                    </div>

                    <div className="mt-6 text-center z-10">
                      <p className="font-serif text-lg font-bold text-slate-900">
                        {lang === 'tr' ? 'Doğal & Dengeli Porsiyonlar' : 'Balanced & Natural Portions'}
                      </p>
                      <p className="text-xs text-slate-500 mt-1 max-w-xs">
                        {lang === 'tr' ? 'Yasaksız, vücudunuzu ödüllendiren diyet teorileriyle tanışın.' : 'No starvation, introduce your body to sustainable nutrition science.'}
                      </p>
                    </div>

                    {/* Background Soft Accents */}
                    <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-amber-100/50 rounded-full blur-xl"></div>
                    <div className="absolute -top-10 -left-10 w-24 h-24 bg-emerald-100/50 rounded-full blur-xl"></div>
                  </div>

                  {/* Micro Nutrition Quote Widget */}
                  <div className="mt-4 flex items-center gap-3 bg-slate-50 p-3 rounded-xl border border-slate-100">
                    <Award className="w-10 h-10 text-emerald-600 flex-shrink-0" />
                    <div>
                      <p className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                        {lang === 'tr' ? 'DOĞRU TIP & BESLENME' : 'EVIDENCE-BASED NUTRITION'}
                      </p>
                      <p className="text-xs text-slate-500 mt-0.5 line-clamp-1">
                        {lang === 'tr' ? 'Sadece kilo vermeyin, metabolizmanızı gençleştirin.' : 'Do not just lose weight, rejuvenate your metabolism.'}
                      </p>
                    </div>
                  </div>

                </div>

              </div>

            </div>
          </div>
        </section>

        {/* BMI / VKI CALCULATOR SECTION */}
        <section id="vki-calc" className="py-16 sm:py-20 lg:py-24 bg-white border-y border-slate-100 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
              <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest bg-emerald-50 px-3 py-1 rounded-full">
                {lang === 'tr' ? 'İNTERAKTİF ANALİZ' : 'INTERACTIVE ASSESSMENT'}
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-slate-900 font-extrabold tracking-tight mt-3">
                {t.bmi.title}
              </h2>
              <p className="text-slate-500 text-base mt-2">
                {t.bmi.subtitle}
              </p>
            </div>

            {/* Calculator Card & Chart layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              
              {/* Left Column: Form & Inputs */}
              <div className="lg:col-span-7 bg-slate-50/50 rounded-3xl p-6 sm:p-10 border border-slate-100 shadow-sm flex flex-col justify-between" id="bmi-calculator-card">
                <div>
                  <h3 className="font-serif text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                    <Scale className="w-5 h-5 text-emerald-600" />
                    {lang === 'tr' ? 'Vücut Verilerinizi Girin' : 'Enter Core Parameters'}
                  </h3>

                  <form onSubmit={handleBmiSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      
                      {/* Height Field */}
                      <div>
                        <label htmlFor="bmi-height" className="block text-sm font-semibold text-slate-700 tracking-wide mb-2">
                          {t.bmi.heightLabel}
                        </label>
                        <div className="relative">
                          <input
                            type="number"
                            id="bmi-height"
                            value={height}
                            onChange={(e) => setHeight(e.target.value)}
                            placeholder="Örn: 172"
                            required
                            min="50"
                            max="280"
                            className="block w-full px-4 py-3 bg-white text-slate-900 rounded-xl border border-slate-200 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10 placeholder-slate-400 font-medium transition-all"
                          />
                          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-semibold text-slate-400">cm</span>
                        </div>
                      </div>

                      {/* Weight Field */}
                      <div>
                        <label htmlFor="bmi-weight" className="block text-sm font-semibold text-slate-700 tracking-wide mb-2">
                          {t.bmi.weightLabel}
                        </label>
                        <div className="relative">
                          <input
                            type="number"
                            id="bmi-weight"
                            value={weight}
                            onChange={(e) => setWeight(e.target.value)}
                            placeholder="Örn: 68"
                            required
                            min="20"
                            max="300"
                            className="block w-full px-4 py-3 bg-white text-slate-900 rounded-xl border border-slate-200 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10 placeholder-slate-400 font-medium transition-all"
                          />
                          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-semibold text-slate-400">kg</span>
                        </div>
                      </div>

                    </div>

                    {bmiError && (
                      <div className="bg-red-50 border border-red-150 text-red-700 text-xs px-4 py-3 rounded-xl flex items-center gap-2 animate-pulse">
                        <Info className="w-4 h-4 text-red-500 shrink-0" />
                        <span>{bmiError}</span>
                      </div>
                    )}

                    <button
                      type="submit"
                      id="bmi-calculate-btn"
                      className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-base py-3 px-6 rounded-xl transition-all shadow-md active:scale-95 duration-150 cursor-pointer"
                    >
                      {t.bmi.calcBtn}
                    </button>
                  </form>
                </div>

                {/* BMI Result Display Block */}
                {bmiResult !== null && (
                  <div className="mt-8 pt-8 border-t border-slate-200/60 animate-fade-in" id="bmi-result-output-box">
                    <h4 className="text-xs uppercase font-bold text-slate-500 tracking-widest mb-3">
                      {t.bmi.resultTitle}
                    </h4>

                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-white p-5 rounded-2xl border border-slate-100 shadow-sm">
                      <div>
                        {/* BMI number and Status Badge */}
                        <div className="flex items-baseline space-x-3">
                          <span className="text-4.5xl font-extrabold text-slate-900 font-serif leading-none" id="bmi-value-text">{bmiResult}</span>
                          <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold leading-tight border ${bmiColorClass}`} id="bmi-status-badge">
                            {bmiStatus}
                          </span>
                        </div>

                        {/* Custom advice based on state */}
                        <p className="text-xs text-slate-500 mt-2 font-medium" id="bmi-ideal-range-notice">
                          {t.bmi.idealWeight} <span className="text-slate-800 font-bold">
                            {((18.5 * (parseFloat(height) / 100) ** 2).toFixed(1))} - {((24.9 * (parseFloat(height) / 100) ** 2).toFixed(1))} kg
                          </span>
                        </p>
                      </div>

                      {/* Visual Circular/Linear Meter representing BMI pointer */}
                      <div className="w-full sm:w-44 flex flex-col justify-end">
                        <div className="w-full h-2 bg-slate-100 rounded-full relative overflow-hidden mb-2">
                          {/* Ideal normal weight area color */}
                          <div className="absolute left-[18.5%] right-[50%] h-full bg-emerald-100"></div>
                          {/* Pointer mark */}
                          <div
                            className="absolute h-full w-2 bg-emerald-600 rounded-full -ml-1 transition-all duration-500"
                            style={{ left: `${Math.min(100, Math.max(0, ((bmiResult - 10) / (40 - 10)) * 100))}%` }}
                          ></div>
                        </div>
                        <div className="flex justify-between text-[10px] text-slate-400 font-bold">
                          <span>15 (Zayıf)</span>
                          <span>25 (Fazla)</span>
                          <span>35+ (Obez)</span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 bg-emerald-50/40 border border-emerald-100/50 p-4 rounded-xl flex gap-3">
                      <Info className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <p className="text-xs text-slate-600 leading-relaxed" id="bmi-advice-paragraph">
                        {bmiAdvice}
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Right Column: Educational Chart of VKI values */}
              <div className="lg:col-span-5 bg-white border border-slate-100 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-sm" id="bmi-scale-info-card">
                <div>
                  <h3 className="font-serif text-lg font-bold text-slate-900 mb-4">
                    {t.bmi.guideTitle}
                  </h3>
                  <div className="space-y-3.5">
                    <div className="flex justify-between items-center py-2 border-b border-slate-50 text-xs">
                      <span className="font-semibold text-slate-700">{"< 18.5"}</span>
                      <span className="text-orange-500 bg-orange-50 px-2 py-0.5 rounded font-bold">{t.bmi.statusUnderweight}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-slate-50 text-xs">
                      <span className="font-semibold text-slate-700">{"18.5 - 24.9"}</span>
                      <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-bold">{t.bmi.statusNormal}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-slate-50 text-xs">
                      <span className="font-semibold text-slate-700">{"25.0 - 29.9"}</span>
                      <span className="text-amber-700 bg-amber-50 px-2 py-0.5 rounded font-bold">{t.bmi.statusOverweight}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-slate-50 text-xs">
                      <span className="font-semibold text-slate-700">{"30.0 - 34.9"}</span>
                      <span className="text-red-500 bg-red-50 px-2 py-0.5 rounded font-bold">{t.bmi.statusObese}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 text-xs">
                      <span className="font-semibold text-slate-700">{"> 35.0"}</span>
                      <span className="text-rose-700 bg-rose-50 px-2 py-0.5 rounded font-bold">{t.bmi.statusExtremelyObese}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-amber-50/50 rounded-2xl p-4 border border-amber-100/50 mt-6 md:mt-0">
                  <p className="text-xs text-amber-800 leading-relaxed font-medium">
                    🔍 <strong>{lang === 'tr' ? 'Önemli Hatırlatma:' : 'Important Note:'}</strong> {t.bmi.idealText}
                  </p>
                  <button
                    onClick={() => triggerAppointmentModal()}
                    className="mt-3 inline-flex items-center text-xs font-bold text-emerald-700 hover:text-emerald-800 gap-1"
                  >
                    {lang === 'tr' ? 'Detaylı Ölçüm İçin Randevu Al' : 'Request Personal Measurement'}
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* SERVICES SECTION */}
        <section id="services" className="py-16 sm:py-20 lg:py-24 bg-slate-50 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
              <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest bg-emerald-50 px-3 py-1 rounded-full">
                {lang === 'tr' ? 'NELER YAPIYORUZ' : 'WHAT WE OFFER'}
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-slate-900 font-extrabold tracking-tight mt-3">
                {t.services.title}
              </h2>
              <p className="text-slate-500 text-base mt-2">
                {t.services.subtitle}
              </p>
            </div>

            {/* Services Grid (6 Columns on large layouts) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {t.services.items.map((svc) => {
                // Pick suitable icons for each service
                let SvcIcon = Apple;
                if (svc.id === 'sports-nutrition') SvcIcon = Activity;
                if (svc.id === 'medical-nutrition') SvcIcon = Heart;
                if (svc.id === 'pregnancy-nutrition') SvcIcon = Shield;
                if (svc.id === 'corporate-consulting') SvcIcon = Award;
                if (svc.id === 'online-diet') SvcIcon = Globe;

                return (
                  <div
                    key={svc.id}
                    className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      {/* Icon Container */}
                      <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6">
                        <SvcIcon className="w-6 h-6" />
                      </div>
                      
                      {/* Title & Short Description */}
                      <h3 className="font-serif text-lg sm:text-xl font-bold text-slate-900 leading-tight">
                        {svc.title}
                      </h3>
                      <p className="text-slate-500 text-xs sm:text-sm mt-3 line-clamp-3 leading-relaxed">
                        {svc.desc}
                      </p>
                    </div>

                    {/* Action buttons mapping inside individual card */}
                    <div className="flex items-center justify-between mt-6 pt-4 border-t border-slate-50">
                      <button
                        onClick={() => setSelectedServiceDetail(svc.id)}
                        className="text-xs font-bold text-emerald-600 hover:text-emerald-700 inline-flex items-center gap-1 cursor-pointer"
                      >
                        {t.services.learnMore}
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => triggerAppointmentModal(svc.id)}
                        className="text-xs bg-slate-100 hover:bg-emerald-600 hover:text-white font-semibold px-3 py-1.5 rounded-lg text-slate-700 transition-all duration-200"
                      >
                        {t.nav.ctaButton}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Quick Consultation Block */}
            <div className="mt-12 bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-3xl p-6 sm:p-10 text-white shadow-xl shadow-emerald-950/15 flex flex-col md:flex-row items-center justify-between gap-6" id="services-banner-prompt">
              <div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold">
                  {lang === 'tr' ? 'Hangi programın size uygun olduğundan emin değil misiniz?' : 'Not sure which nutrition path fits you best?'}
                </h3>
                <p className="text-emerald-100 text-xs sm:text-sm mt-1 max-w-2xl">
                  {lang === 'tr'
                    ? 'Hedeflerinizi anlatmanız için 15 dakikalık ücretsiz ön görüşme planlayalım. Birlikte en doğru yolu belirleyelim.'
                    : 'Schedule a free 15-minute diagnostic pre-consultation to analyze your metabolic desires.'}
                </p>
              </div>
              <button
                onClick={() => triggerAppointmentModal('weight-management')}
                className="bg-white text-emerald-800 font-bold px-6 py-3 rounded-xl hover:bg-slate-50 transition-all shadow-md flex-shrink-0 active:scale-95 duration-100 text-sm"
              >
                {t.hero.freeConsultBtn}
              </button>
            </div>

          </div>
        </section>

        {/* ABOUT ME SECTION */}
        <section id="about" className="py-16 sm:py-20 lg:py-24 bg-white border-b border-slate-100 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-center">
              
              {/* Left Column: Frame & Biography Image Mock */}
              <div className="lg:col-span-5 relative">
                {/* Visual Decorative Frame Accent */}
                <div className="absolute inset-0 bg-gradient-to-tr from-emerald-100 to-amber-100 rotate-6 rounded-3xl scale-95 blur-sm opacity-60"></div>
                
                {/* Visual Portrait Card resembling modern elegant style */}
                <div className="relative bg-amber-50 rounded-3xl overflow-hidden shadow-lg border border-slate-100 p-4">
                  {/* High Quality Diet & Health illustration canvas with subtle overlay */}
                  <div className="aspect-[4/5] bg-emerald-950/5 relative rounded-2xl overflow-hidden flex items-center justify-center">
                    
                    {/* Visual Graphic Representation of Clinical Professional */}
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-100 via-emerald-100/10 to-emerald-900/40 mix-blend-multiply"></div>
                    <div className="z-10 text-center px-4 flex flex-col justify-center items-center h-full">
                      <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center shadow-lg mb-4">
                        <Award className="w-12 h-12 text-emerald-600" />
                      </div>
                      <p className="font-serif text-white text-2xl font-bold drop-shadow-sm leading-tight">Diyetisyen Zeynep Dehmen</p>
                      <p className="text-emerald-200 text-xs uppercase tracking-wider font-bold mt-1 shadow-sm font-sans drop-shadow-sm">
                        {lang === 'tr' ? 'Klinik Diyetisyen' : 'Clinical Nutritionist'}
                      </p>
                      
                      {/* Signature Quote Element */}
                      <span className="inline-block mt-8 text-[12px] italic text-slate-100 max-w-sm font-serif">
                        {lang === 'tr'
                          ? '"Bedeniniz tabağınızdakilerin bir aynasıdır."'
                          : '"Your body is a reflection of your choices."'}
                      </span>
                    </div>

                    {/* Scientific Floating Symbols */}
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm shadow px-3 py-1.5 rounded-xl text-[10px] font-bold text-emerald-800 flex items-center gap-1 font-sans">
                      <Activity className="w-3.5 h-3.5 text-emerald-600" />
                      {lang === 'tr' ? 'Hacettepe Mezunu' : 'Hacettepe Alumna'}
                    </div>

                  </div>
                </div>
              </div>

              {/* Right Column: Bio Narrative */}
              <div className="lg:col-span-7 flex flex-col space-y-6" id="about-biography-narrative">
                <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest bg-emerald-50 px-3 py-1 rounded-full self-start">
                  {lang === 'tr' ? 'SÜRDÜRÜLEBİLİR REÇETELER' : 'SUSTAINABLE APPROACH'}
                </span>
                
                <h2 className="font-serif text-3xl sm:text-4xl text-slate-900 font-extrabold tracking-tight">
                  {t.about.title}
                </h2>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {t.about.p1}
                </p>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {t.about.p2}
                </p>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {t.about.p3}
                </p>

                {/* Editorial Callout */}
                <div className="border-l-4 border-emerald-600 pl-4 py-1 my-2 bg-slate-50 italic text-slate-700 font-serif text-base sm:text-lg">
                  {t.about.philosophyText}
                </div>

                {/* Sub-lists: Education & Credentials */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-slate-100">
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 flex items-center gap-1.5 mb-3 font-sans">
                      <BookOpen className="w-4 h-4 text-emerald-600" />
                      {t.about.educationTitle}
                    </h3>
                    <ul className="space-y-2">
                      {t.about.educationItems.map((item, i) => (
                        <li key={i} className="text-slate-500 text-xs flex items-start gap-1">
                          <span className="text-emerald-500 mr-1 font-bold">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 flex items-center gap-1.5 mb-3 font-sans">
                      <Award className="w-4 h-4 text-emerald-600" />
                      {t.about.experienceTitle}
                    </h3>
                    <ul className="space-y-2">
                      {t.about.experienceItems.map((item, i) => (
                        <li key={i} className="text-slate-500 text-xs flex items-start gap-1">
                          <span className="text-emerald-500 mr-1 font-bold">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* CLINIC PHOTO GALLERY SECTION */}
        <section id="clinic-gallery" className="py-16 sm:py-20 bg-white border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Gallery Header */}
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest bg-emerald-50 px-3 py-1 rounded-full">
                {t.gallery.tag}
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-slate-900 font-extrabold tracking-tight mt-3">
                {t.gallery.title}
              </h2>
              <p className="text-slate-500 text-xs sm:text-sm mt-2 font-normal leading-relaxed">
                {t.gallery.subtitle}
              </p>
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {galleryImages.map((img, i) => (
                <div
                  key={i}
                  id={`gallery-item-${i}`}
                  onClick={() => setSelectedGalleryImage(i)}
                  className="group relative rounded-3xl overflow-hidden shadow-sm hover:shadow-md cursor-pointer aspect-[4/3] bg-slate-150 transition-all duration-300 transform hover:-translate-y-1.5"
                >
                  <img
                    src={img.url}
                    alt={t.gallery.items[i].title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-900/10 to-transparent transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                    <span className="text-[10px] font-bold tracking-wider uppercase text-emerald-400 bg-emerald-950/90 px-2.5 py-1 rounded-lg mb-2.5 inline-block border border-emerald-500/10">
                      {t.gallery.items[i].category}
                    </span>
                    <h4 className="font-serif font-bold text-xs sm:text-sm text-white line-clamp-1">
                      {t.gallery.items[i].title}
                    </h4>
                    <p className="text-[10px] text-slate-300 mt-1.5 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                      {t.gallery.zoomIn}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* CUSTOMER REVIEWS / TESTIMONIALS */}
        <section id="testimonials" className="py-16 sm:py-20 lg:py-24 bg-slate-50 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
              <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest bg-emerald-50 px-3 py-1 rounded-full">
                {lang === 'tr' ? 'BAŞARI HİKAYELERİ' : 'CLIENT CASE STUDIES'}
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-slate-900 font-extrabold tracking-tight mt-3">
                {t.testimonials.title}
              </h2>
              <p className="text-slate-500 text-base mt-2">
                {t.testimonials.subtitle}
              </p>
            </div>

            {/* Testimonials Grid (3 Cards) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {t.testimonials.items.map((tItem, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-sm flex flex-col justify-between hover:shadow-md transition-all duration-300"
                >
                  <div>
                    {/* Stars indicator */}
                    <div className="flex items-center space-x-0.5 text-amber-500 mb-5">
                      {[...Array(tItem.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>

                    {/* Review text */}
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed italic">
                      "{tItem.text}"
                    </p>
                  </div>

                  {/* Profile bio + clinical objective outcomes */}
                  <div className="flex flex-col mt-6 pt-5 border-t border-slate-50">
                    <span className="font-serif font-bold text-slate-900">{tItem.name}</span>
                    <span className="text-slate-400 text-xs mt-0.5">{tItem.role}</span>
                    <span className="inline-block mt-3 px-3 py-1 bg-emerald-50/60 text-emerald-800 text-[11px] font-bold rounded-lg border border-emerald-100/50 self-start">
                      {tItem.result}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Disclaimer snippet for reassurance */}
            <div className="text-center mt-12">
              <p className="text-slate-400 text-xs italic">
                {lang === 'tr'
                  ? '*Her bireyin metabolizması, kronik yatkınlıkları farklı olup, metabolik ağırlık kayıpları farklı oranlarda seyredebilir.'
                  : '*Individual biological responses and overall weight drops strictly depend on physical parameters and genetic heritage.'}
              </p>
            </div>

          </div>
        </section>

        {/* CONTACT & MAP SECTION */}
        <section id="contact" className="py-16 sm:py-20 lg:py-24 bg-white relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16">
              
              {/* Left Column: Core Contact details & WhatsApp banner */}
              <div className="lg:col-span-5 flex flex-col justify-between space-y-8" id="contact-details-column">
                <div className="space-y-6">
                  <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest bg-emerald-50 px-3 py-1 rounded-full self-start">
                    {lang === 'tr' ? 'BİZE ULAŞIN' : 'GET IN TOUCH'}
                  </span>
                  
                  <h2 className="font-serif text-3xl sm:text-4xl text-slate-900 font-extrabold tracking-tight">
                    {t.contact.title}
                  </h2>
                  
                  <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
                    {t.contact.subtitle}
                  </p>

                  {/* Icon details */}
                  <div className="space-y-5 pt-4">
                    
                    {/* Address details */}
                    <div className="flex items-start gap-3.5">
                      <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-emerald-600 flex-shrink-0 border border-slate-100">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">{t.contact.addressLabel}</h4>
                        <p className="text-slate-700 text-xs sm:text-sm mt-0.5">{t.contact.addressValue}</p>
                      </div>
                    </div>

                    {/* Phone details */}
                    <div className="flex items-start gap-3.5">
                      <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-emerald-600 flex-shrink-0 border border-slate-100">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">{t.contact.phoneLabel}</h4>
                        <p className="text-slate-700 text-xs sm:text-sm mt-0.5">
                          <a href="tel:05432866417" className="hover:text-emerald-600 transition-colors">0543 286 64 17</a>
                        </p>
                      </div>
                    </div>

                    {/* Email details */}
                    <div className="flex items-start gap-3.5">
                      <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-emerald-600 flex-shrink-0 border border-slate-100">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">{t.contact.emailLabel}</h4>
                        <p className="text-slate-700 text-xs sm:text-sm mt-0.5">
                          <a href="mailto:info@ornekdomain.com" className="hover:text-emerald-600 transition-colors">info@ornekdomain.com</a>
                        </p>
                      </div>
                    </div>

                    {/* Working hours */}
                    <div className="flex items-start gap-3.5">
                      <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-emerald-600 flex-shrink-0 border border-slate-100">
                        <Clock className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">{t.contact.workingHoursLabel}</h4>
                        <p className="text-slate-700 text-xs sm:text-sm mt-0.5">{t.contact.workingHoursValue}</p>
                      </div>
                    </div>

                  </div>
                </div>

                {/* WhatsApp callout box specifically */}
                <div className="bg-emerald-50 rounded-2xl p-5 border border-emerald-100 flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-emerald-600 flex items-center justify-center text-white flex-shrink-0">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-emerald-800">{lang === 'tr' ? 'Hızlı WhatsApp Danışma Hattı' : 'WhatsApp Secretary Line'}</h4>
                    <p className="text-slate-600 text-xs mt-1 leading-relaxed">{t.contact.whatsappBanner}</p>
                    <a
                      href={getWhatsAppLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center text-xs font-bold text-emerald-700 hover:text-emerald-800 gap-1.5"
                    >
                      {t.contact.whatsappBtn}
                      <ArrowRight className="w-3.5 h-3.5 animate-bounce-horizontal" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Column: Contact Message Form */}
              <div className="lg:col-span-7 bg-slate-50/50 rounded-3xl p-6 sm:p-10 border border-slate-100 shadow-sm" id="contact-form-card">
                <h3 className="font-serif text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                  <Mail className="w-5 h-5 text-emerald-600" />
                  {t.contact.formTitle}
                </h3>

                {isContactSuccess ? (
                  <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-2xl p-6 text-center shadow-inner flex flex-col items-center justify-center space-y-2">
                    <CheckCircle className="w-12 h-12 text-emerald-600" />
                    <h4 className="font-serif text-lg font-bold">{lang === 'tr' ? 'Mesaj Gönderildi!' : 'Message Relayed!'}</h4>
                    <p className="text-xs text-slate-600 max-w-sm">{t.contact.formSuccess}</p>
                  </div>
                ) : (
                  <form onSubmit={handleContactSubmit} className="space-y-5">
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-1.5">{t.contact.formName}</label>
                      <input
                        type="text"
                        id="contact-name"
                        value={contactName}
                        onChange={(e) => setContactName(e.target.value)}
                        required
                        className="block w-full px-4 py-3 bg-white text-slate-900 rounded-xl border border-slate-200 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10 placeholder-slate-300 font-medium transition-all"
                        placeholder="Örn: Kaan Yılmaz"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-1.5">{t.contact.formEmail}</label>
                      <input
                        type="email"
                        id="contact-email"
                        value={contactEmail}
                        onChange={(e) => setContactEmail(e.target.value)}
                        required
                        className="block w-full px-4 py-3 bg-white text-slate-900 rounded-xl border border-slate-200 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10 placeholder-slate-300 font-medium transition-all"
                        placeholder="Örn: kaan@example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-msg" className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-1.5">{t.contact.formMessage}</label>
                      <textarea
                        id="contact-msg"
                        value={contactMessage}
                        onChange={(e) => setContactMessage(e.target.value)}
                        rows={4}
                        required
                        className="block w-full px-4 py-3 bg-white text-slate-900 rounded-xl border border-slate-200 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10 placeholder-slate-300 font-medium transition-all resize-y"
                        placeholder={lang === 'tr' ? 'Nasil yardimci olabiliriz?' : 'Your request details...'}
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      id="contact-submit-btn"
                      className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-base py-3 px-6 rounded-xl transition-all shadow-md hover:shadow-lg active:scale-95 duration-100 flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      {t.contact.formSubmit}
                    </button>
                  </form>
                )}

                {/* Simulated Google Map location placeholder */}
                <div className="mt-8 bg-slate-100 rounded-2xl h-44 relative overflow-hidden shadow-inner border border-slate-200">
                  <div className="absolute inset-0 flex flex-col justify-center items-center text-slate-400 bg-slate-50 px-4 text-center">
                    <MapPin className="w-8 h-8 text-emerald-600 mb-1" />
                    <span className="font-bold text-xs text-slate-700">{t.contact.addressValue}</span>
                    <span className="text-[10px] text-slate-400 mt-1">Latitude: 39.9042, Longitude: 32.8600 (Çankaya, Ankara)</span>
                    <a
                      href="https://maps.google.com/?q=Diyetisyen%20Zeynep%20Dehmen%20%C3%87anakkale"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 text-[10px] text-emerald-600 font-bold hover:underline"
                    >
                      {lang === 'tr' ? 'Haritada Göster ↗' : 'View on Google Maps ↗'}
                    </a>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* HEALTH ADVICE DIRECTIVE & NEWSLETTER BENTO BOX */}
        <section className="py-12 bg-emerald-950 text-white relative overflow-hidden">
          {/* Background details */}
          <div className="absolute -left-10 -bottom-10 w-44 h-44 bg-emerald-900 rounded-full blur-xl opacity-30"></div>
          <div className="absolute -right-10 -top-10 w-44 h-44 bg-amber-500/10 rounded-full blur-xl opacity-30"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-6 flex flex-col space-y-3">
                <span className="text-xs uppercase tracking-widest text-amber-400 font-bold">
                  {lang === 'tr' ? 'BÜLTEN ABONELİĞİ' : 'WELLNESS NEWSLETTER'}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight">
                  {t.newsletter.title}
                </h3>
                <p className="text-emerald-100 text-xs sm:text-sm max-w-lg leading-relaxed">
                  {t.newsletter.subtitle}
                </p>
              </div>

              <div className="lg:col-span-6 bg-emerald-900/40 p-1.5 rounded-2xl border border-emerald-800">
                {isNewsletterSuccess ? (
                  <div className="bg-emerald-900 border border-emerald-800 rounded-xl p-4 text-center text-xs font-semibold tracking-wide text-emerald-200">
                    🎉 {t.newsletter.success}
                  </div>
                ) : (
                  <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-2">
                    <input
                      type="email"
                      required
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      placeholder={t.newsletter.placeholder}
                      className="flex-grow px-4 py-3 bg-emerald-950 text-white placeholder-emerald-400/80 rounded-xl border border-emerald-850 outline-none focus:ring-1 focus:ring-emerald-400 text-sm font-medium transition-all"
                    />
                    <button
                      type="submit"
                      id="newsletter-submit-btn"
                      className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm px-6 py-3 rounded-xl transition-all shadow-md hover:shadow-lg active:scale-95 flex-shrink-0"
                    >
                      {t.newsletter.btn}
                    </button>
                  </form>
                )}
              </div>

            </div>
          </div>
        </section>

        {/* SOCIAL FOLLOW INTERACTIVE CARD */}
        <section id="social-follow-section" className="py-12 bg-gradient-to-b from-slate-50 to-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-3xl border border-slate-200/60 p-6 sm:p-10 shadow-lg relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8 animate-fade-in">
              
              {/* Decorative graphic background blur */}
              <div className="absolute -top-12 -left-12 w-36 h-36 bg-emerald-500/5 rounded-full blur-2xl"></div>
              
              <div className="flex-1 space-y-3.5 text-center lg:text-left z-10">
                <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest bg-emerald-50 px-2.5 py-1 rounded-full p-1 leading-none">
                  {t.socialFollow.tag}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
                  {t.socialFollow.title}
                </h3>
                <p className="text-slate-500 text-xs sm:text-sm max-w-xl leading-relaxed">
                  {t.socialFollow.subtitle}
                </p>
              </div>

              {/* Bento Social Media Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full lg:w-auto z-10">
                {t.socialFollow.platforms.map((p, idx) => {
                  let SvcIcon = Instagram;
                  let colorClass = "hover:text-pink-600 hover:border-pink-200 hover:bg-pink-50/50";
                  let btnColor = "bg-pink-600 hover:bg-pink-700 shadow-pink-600/10 hover:shadow-pink-600/20";
                  
                  if (p.name === "YouTube") {
                    SvcIcon = Youtube;
                    colorClass = "hover:text-red-600 hover:border-red-200 hover:bg-red-50/50";
                    btnColor = "bg-red-600 hover:bg-red-700 shadow-red-600/10 hover:shadow-red-600/20";
                  }
                  if (p.name === "Facebook") {
                    SvcIcon = Facebook;
                    colorClass = "hover:text-blue-600 hover:border-blue-200 hover:bg-blue-50/50";
                    btnColor = "bg-blue-600 hover:bg-blue-700 shadow-blue-600/10 hover:shadow-blue-600/20";
                  }

                  return (
                    <div
                      key={idx}
                      className={`bg-slate-50 border border-slate-100 rounded-2xl p-5 flex flex-col items-center text-center transition-all duration-300 shadow-sm ${colorClass}`}
                    >
                      <div className="w-11 h-11 rounded-xl bg-white border border-slate-100 flex items-center justify-center shadow-xs mb-3">
                        <SvcIcon className="w-5 h-5" />
                      </div>
                      <span className="font-bold text-slate-800 text-xs">{p.name}</span>
                      <span className="text-[10px] text-slate-400 font-semibold mt-0.5">{p.stat}</span>
                      <a
                        href={p.name === "Instagram" ? "https://www.instagram.com/dyt.zeynepdehmen" : p.name === "YouTube" ? "https://youtube.com/elifkayadiyet" : "https://www.facebook.com/ornekhesap"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`mt-4 w-full text-center text-[10px] font-bold text-white py-2 px-3.5 rounded-xl transition-all shadow-md cursor-pointer ${btnColor}`}
                      >
                        {p.action}
                      </a>
                    </div>
                  );
                })}
              </div>

            </div>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="bg-slate-900 text-slate-400 pt-16 pb-8 border-t border-slate-800 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-slate-800">
            
            {/* Logo and Intro descriptor */}
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center text-white font-serif font-bold text-base">
                  E
                </div>
                <span className="font-serif font-bold text-base text-white tracking-tight">Diyetisyen Zeynep Dehmen</span>
              </div>
              <p className="text-xs sm:text-sm leading-relaxed text-slate-400 max-w-sm">
                {t.footer.desc}
              </p>
              
              {/* Working hour notice */}
              <div className="text-[11px] uppercase tracking-wider font-semibold text-emerald-500">
                {t.contact.workingHoursValue}
              </div>

              {/* Footer Social Icons */}
              <div className="flex items-center space-x-3 pt-4">
                <a
                  href="https://www.instagram.com/dyt.zeynepdehmen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-slate-800/80 hover:bg-emerald-600 text-slate-400 hover:text-white transition-all duration-200 flex items-center justify-center border border-slate-700/30 cursor-pointer shadow-sm"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://youtube.com/elifkayadiyet"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-slate-800/80 hover:bg-emerald-600 text-slate-400 hover:text-white transition-all duration-200 flex items-center justify-center border border-slate-700/30 cursor-pointer shadow-sm"
                  aria-label="YouTube"
                >
                  <Youtube className="w-4 h-4" />
                </a>
                <a
                  href="https://www.facebook.com/ornekhesap"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-slate-800/80 hover:bg-emerald-600 text-slate-400 hover:text-white transition-all duration-200 flex items-center justify-center border border-slate-700/30 cursor-pointer shadow-sm"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Quick Navigation Menu */}
            <div className="lg:col-span-3 space-y-4 col-span-1">
              <h4 className="text-white text-xs font-bold uppercase tracking-wider">{t.footer.quickLinks}</h4>
              <ul className="space-y-2.5 text-xs">
                <li><a href="#about" className="hover:text-white transition-colors">{t.nav.about}</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">{t.nav.services}</a></li>
                <li><a href="#vki-calc" className="hover:text-white transition-colors">{lang === 'tr' ? 'VKI Hesaplayıcısı' : 'BMI Calculator'}</a></li>
                <li><a href="#testimonials" className="hover:text-white transition-colors">{t.nav.testimonials}</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">{t.nav.contact}</a></li>
              </ul>
            </div>

            {/* Program Spectrum */}
            <div className="lg:col-span-4 space-y-4 col-span-1">
              <h4 className="text-white text-xs font-bold uppercase tracking-wider">{t.footer.servicesLink}</h4>
              <ul className="space-y-2.5 text-xs text-slate-400">
                {t.services.items.map((svc) => (
                  <li key={svc.id}>
                    <button
                      onClick={() => setSelectedServiceDetail(svc.id)}
                      className="hover:text-white transition-colors text-left"
                    >
                      {svc.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Legal Disclaimer Box as required */}
          <div className="mt-8 pt-4 pb-4 bg-slate-950/40 p-4 rounded-xl border border-slate-800">
            <p className="text-[11px] sm:text-xs text-slate-500 leading-relaxed text-justify">
              <strong>⚠️ {lang === 'tr' ? 'Yasal Uyarı:' : 'Disclaimer:'}</strong> {t.footer.disclaimer}
            </p>
          </div>

          {/* Copyright notice */}
          <div className="mt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 space-y-4 sm:space-y-0">
            <span>&copy; {new Date().getFullYear()} Diyetisyen Zeynep Dehmen. {t.footer.rights}</span>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-slate-300">KVKK Aydınlatma Metni</a>
              <span className="text-slate-800">|</span>
              <a href="#" className="hover:text-slate-300">Gizlilik Sözleşmesi</a>
            </div>
          </div>

        </div>
      </footer>


      {/* INTERACTIVE COMPONENT: SERVICE EXPLANATION MODAL */}
      {selectedServiceDetail && serviceDetailObject && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-slate-100 relative animate-scale-up" id="service-detail-modal">
            
            {/* Close Button top corner */}
            <button
              onClick={() => setSelectedServiceDetail(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 bg-slate-100 hover:bg-slate-200 p-2 rounded-lg transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Icon decoration */}
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6">
              <Apple className="w-6 h-6" />
            </div>

            {/* Card Content */}
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-900 leading-tight">
              {serviceDetailObject.title}
            </h3>
            
            <p className="text-emerald-700 text-xs sm:text-sm font-semibold tracking-wide bg-emerald-50/50 inline-block px-3 py-1 rounded-md mt-3">
              {lang === 'tr' ? 'Aktif & Klinik Destekli' : 'Active & Clinical Guidance'}
            </p>

            <div className="text-slate-600 text-xs sm:text-base leading-relaxed space-y-4 mt-6 border-t border-slate-100 pt-6">
              <p>{serviceDetailObject.details}</p>
              <p className="text-slate-500 text-xs italic">
                {lang === 'tr'
                  ? "*Diyet süresince biyokimyasal kan tetkikleriniz, boy, kilo ve yaş parametreleriniz göz önünde bulundurularak her hafta listeleriniz güncellenir."
                  : "*For medical safeness, your biological metrics along with blood profiles are updated weekly during active schedules."}
              </p>
            </div>

            {/* Internal CTA */}
            <div className="flex flex-col sm:flex-row gap-3 mt-8 pt-4 border-t border-slate-100">
              <button
                onClick={() => {
                  setSelectedServiceDetail(null);
                  triggerAppointmentModal(selectedServiceDetail);
                }}
                className="flex-grow bg-emerald-600 text-white font-bold py-3 rounded-xl hover:bg-emerald-700 transition-colors shadow-md text-center text-sm"
              >
                {lang === 'tr' ? 'Bu Hizmet İçin Randevu Al' : 'Request This Plan'}
              </button>
              <a
                href={getWhatsAppLink(serviceDetailObject.title)}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-50 text-emerald-800 font-bold py-3 px-6 rounded-xl hover:bg-emerald-100 transition-colors text-center text-sm flex items-center justify-center gap-1.5"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
            </div>

          </div>
        </div>
      )}


      {/* CLINIC GALLERY LIGHTBOX MODAL */}
      {selectedGalleryImage !== null && (
        <div 
          className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-md flex flex-col justify-center items-center p-4"
          onClick={() => setSelectedGalleryImage(null)}
          id="gallery-lightbox"
        >
          {/* Close button */}
          <button 
            onClick={() => setSelectedGalleryImage(null)}
            className="absolute top-6 right-6 text-white/80 hover:text-emerald-400 bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all cursor-pointer z-10"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Lightbox content */}
          <div 
            className="max-w-4xl w-full flex flex-col justify-center items-center relative"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={galleryImages[selectedGalleryImage].url} 
              alt={t.gallery.items[selectedGalleryImage].title}
              className="max-h-[75vh] max-w-full rounded-2xl object-contain shadow-2xl border border-white/10 select-none animate-scale-up"
              referrerPolicy="no-referrer"
            />
            
            {/* Image Info Underlay */}
            <div className="mt-5 text-center text-white max-w-lg">
              <span className="text-[10px] font-bold text-emerald-400 bg-emerald-950/40 px-2.5 py-1 rounded-lg uppercase tracking-widest border border-emerald-500/10">
                {t.gallery.items[selectedGalleryImage].category}
              </span>
              <h3 className="font-serif text-lg sm:text-xl font-bold mt-2 text-white/95">
                {t.gallery.items[selectedGalleryImage].title}
              </h3>
            </div>
            
            {/* Left/Right controls */}
            <button
              onClick={() => setSelectedGalleryImage((selectedGalleryImage - 1 + galleryImages.length) % galleryImages.length)}
              className="absolute left-2 sm:-left-16 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3.5 rounded-full hover:text-emerald-400 transition-all cursor-pointer hover:scale-105 active:scale-95"
              aria-label="Previous image"
            >
              <ChevronRight className="w-5 h-5 rotate-180" />
            </button>
            <button
              onClick={() => setSelectedGalleryImage((selectedGalleryImage + 1) % galleryImages.length)}
              className="absolute right-2 sm:-right-16 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3.5 rounded-full hover:text-emerald-400 transition-all cursor-pointer hover:scale-105 active:scale-95"
              aria-label="Next image"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}

      {/* INTERACTIVE COMPONENT: FULL APPOINTMENT BOOKING MODAL */}
      {isApptModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl border border-slate-100 relative animate-scale-up" id="appointment-modal">
            
            {/* Close Button */}
            <button
              onClick={() => resetAppointmentForm()}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 bg-slate-100 p-2 rounded-lg cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            {isApptSuccess ? (
              <div className="text-center py-8 px-4 flex flex-col items-center justify-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-100 shadow-sm">
                  <CheckCircle className="w-10 h-10" />
                </div>
                
                <h3 className="font-serif text-2xl font-bold text-slate-900">
                  {t.appointment.successTitle}
                </h3>
                
                <p className="text-slate-500 text-xs sm:text-sm max-w-md leading-relaxed">
                  {t.appointment.successDesc}
                </p>

                <div className="flex flex-col sm:flex-row gap-3 pt-4 w-full">
                  <a
                    href={getWhatsAppLink(t.services.items.find(it => it.id === apptService)?.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-grow bg-emerald-600 text-white font-bold py-3 px-6 rounded-xl hover:bg-emerald-700 transition-colors text-sm flex items-center justify-center gap-1.5"
                  >
                    <MessageCircle className="w-4 h-4" />
                    {t.appointment.successWhatsAppBtn}
                  </a>
                  <button
                    onClick={() => resetAppointmentForm()}
                    className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-3 px-6 rounded-xl transition-colors text-sm"
                  >
                    {t.appointment.closeBtn}
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-900 leading-tight">
                  {t.appointment.title}
                </h3>
                <p className="text-slate-500 text-xs sm:text-sm mt-1 mb-6">
                  {t.appointment.subtitle}
                </p>

                <form onSubmit={handleApptSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    
                    {/* Category Selection */}
                    <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">{t.appointment.serviceLabel}</label>
                      <select
                        value={apptService}
                        onChange={(e) => setApptService(e.target.value)}
                        className="block w-full px-4 py-2.5 bg-slate-50 rounded-xl border border-slate-200 outline-none focus:border-emerald-500 font-medium text-xs sm:text-sm"
                      >
                        {t.services.items.map(it => (
                          <option key={it.id} value={it.id}>{it.title}</option>
                        ))}
                      </select>
                    </div>

                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">{t.appointment.nameLabel} *</label>
                      <input
                        type="text"
                        required
                        value={apptName}
                        onChange={(e) => setApptName(e.target.value)}
                        placeholder="Kaan Yılmaz"
                        className="block w-full px-4 py-2.5 bg-slate-50 rounded-xl border border-slate-200 outline-none focus:border-emerald-500 text-xs sm:text-sm"
                      />
                    </div>

                    {/* Date */}
                    <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">{t.appointment.dateLabel} *</label>
                      <input
                        type="date"
                        required
                        value={apptDate}
                        onChange={(e) => setApptDate(e.target.value)}
                        className="block w-full px-4 py-2.5 bg-slate-50 rounded-xl border border-slate-200 outline-none focus:border-emerald-500 text-xs sm:text-sm"
                      />
                    </div>

                    {/* Time frame selector */}
                    <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">{t.appointment.timeLabel}</label>
                      <select
                        value={apptTime}
                        onChange={(e) => setApptTime(e.target.value)}
                        className="block w-full px-4 py-2.5 bg-slate-50 rounded-xl border border-slate-200 outline-none focus:border-emerald-500 font-medium text-xs sm:text-sm"
                      >
                        <option value="09:00 - 11:00">09:00 - 11:00 (Sabah)</option>
                        <option value="11:00 - 14:00">11:00 - 14:00 (Öğle)</option>
                        <option value="14:00 - 17:00">14:00 - 17:00 (Öğleden Sonra)</option>
                        <option value="17:00 - 19:00">17:00 - 19:00 (Akşamüstü)</option>
                      </select>
                    </div>

                    {/* Phone details */}
                    <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">{t.appointment.phoneLabel} *</label>
                      <input
                        type="tel"
                        required
                        value={apptPhone}
                        onChange={(e) => setApptPhone(e.target.value)}
                        placeholder="0543 286 64 17"
                        className="block w-full px-4 py-2.5 bg-slate-50 rounded-xl border border-slate-200 outline-none focus:border-emerald-500 text-xs sm:text-sm"
                      />
                    </div>

                    {/* Email details */}
                    <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">{t.appointment.emailLabel} *</label>
                      <input
                        type="email"
                        required
                        value={apptEmail}
                        onChange={(e) => setApptEmail(e.target.value)}
                        placeholder="kaan@example.com"
                        className="block w-full px-4 py-2.5 bg-slate-50 rounded-xl border border-slate-200 outline-none focus:border-emerald-500 text-xs sm:text-sm"
                      />
                    </div>

                  </div>

                  {/* Message/Notes */}
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">{t.appointment.noteLabel}</label>
                    <textarea
                      value={apptNote}
                      onChange={(e) => setApptNote(e.target.value)}
                      rows={3}
                      placeholder={lang === 'tr' ? 'Varsa mevcut hastalıklarınız, hedef kilonuz...' : 'Goals, illnesses, food allergies...'}
                      className="block w-full px-4 py-2.5 bg-slate-50 rounded-xl border border-slate-200 outline-none focus:border-emerald-500 text-xs sm:text-sm resize-y"
                    ></textarea>
                  </div>

                  {apptError && (
                    <div className="bg-red-50 border border-red-150 text-red-700 text-xs px-4 py-3 rounded-xl flex items-center gap-2 animate-pulse mt-3">
                      <Info className="w-4 h-4 text-red-500 shrink-0" />
                      <span>{apptError}</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 rounded-xl transition-all shadow-md mt-4 flex items-center justify-center gap-1.5 text-sm cursor-pointer hover:shadow-emerald-600/10 active:scale-[0.98]"
                  >
                    <Calendar className="w-4 h-4" />
                    {t.appointment.submitBtn}
                  </button>
                </form>

                {/* Local Appointment History Section (Extremely unique & professional, shows data management) */}
                <div className="mt-8 border-t border-slate-100 pt-6">
                  <h4 className="text-xs uppercase font-extrabold text-slate-900 tracking-wider mb-3 flex items-center gap-1.5">
                    <ClipboardList className="w-4 h-4 text-emerald-600" />
                    {t.appointment.historyTitle}
                  </h4>
                  {savedAppointments.length === 0 ? (
                    <p className="text-xs text-slate-400 italic bg-slate-50/60 p-4 rounded-xl border border-slate-100 text-center">
                      {t.appointment.noAppointments}
                    </p>
                  ) : (
                    <div className="space-y-3 max-h-44 overflow-y-auto pr-1">
                      {savedAppointments.map((item) => (
                        <div
                          key={item.id}
                          className="bg-slate-50 p-3 rounded-xl border border-slate-100 flex justify-between items-center text-xs"
                        >
                          <div>
                            <p className="font-bold text-slate-900">{item.service}</p>
                            <p className="text-slate-500 text-[10px] mt-0.5">
                              📅 {item.date} | ⏰ {item.time} | 👤 {item.name}
                            </p>
                          </div>
                          <button
                            onClick={() => cancelAppointment(item.id)}
                            className="text-[10px] bg-red-50 hover:bg-red-100 text-red-600 font-bold px-2 py-1 rounded-md transition-colors"
                          >
                            {t.appointment.cancelBtn}
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

              </div>
            )}

          </div>
        </div>
      )}

    </div>
  );
}
