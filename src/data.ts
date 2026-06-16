export interface TranslationSet {
  nav: {
    logo: string;
    about: string;
    services: string;
    testimonials: string;
    contact: string;
    ctaButton: string;
  };
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    onlineBtn: string;
    freeConsultBtn: string;
    yearsExp: string;
    happyClients: string;
    successRate: string;
  };
  bmi: {
    title: string;
    subtitle: string;
    heightLabel: string;
    weightLabel: string;
    calcBtn: string;
    resultTitle: string;
    statusUnderweight: string;
    statusNormal: string;
    statusOverweight: string;
    statusObese: string;
    statusExtremelyObese: string;
    adviceUnderweight: string;
    adviceNormal: string;
    adviceOverweight: string;
    adviceObese: string;
    adviceExtremelyObese: string;
    idealWeight: string;
    guideTitle: string;
    idealText: string;
  };
  services: {
    title: string;
    subtitle: string;
    learnMore: string;
    closeBtn: string;
    items: {
      id: string;
      title: string;
      desc: string;
      details: string;
    }[];
  };
  about: {
    title: string;
    subtitle: string;
    p1: string;
    p2: string;
    p3: string;
    philosophyTitle: string;
    philosophyText: string;
    educationTitle: string;
    educationItems: string[];
    experienceTitle: string;
    experienceItems: string[];
  };
  testimonials: {
    title: string;
    subtitle: string;
    items: {
      name: string;
      role: string;
      text: string;
      rating: number;
      result: string;
    }[];
  };
  appointment: {
    title: string;
    subtitle: string;
    serviceLabel: string;
    dateLabel: string;
    timeLabel: string;
    nameLabel: string;
    phoneLabel: string;
    emailLabel: string;
    noteLabel: string;
    submitBtn: string;
    successTitle: string;
    successDesc: string;
    successWhatsAppBtn: string;
    closeBtn: string;
    historyTitle: string;
    noAppointments: string;
    cancelBtn: string;
  };
  contact: {
    title: string;
    subtitle: string;
    addressLabel: string;
    addressValue: string;
    phoneLabel: string;
    emailLabel: string;
    workingHoursLabel: string;
    workingHoursValue: string;
    formTitle: string;
    formName: string;
    formEmail: string;
    formMessage: string;
    formSubmit: string;
    formSuccess: string;
    whatsappBanner: string;
    whatsappBtn: string;
  };
  newsletter: {
    title: string;
    subtitle: string;
    placeholder: string;
    btn: string;
    success: string;
  };
  gallery: {
    title: string;
    subtitle: string;
    tag: string;
    zoomIn: string;
    items: {
      title: string;
      category: string;
    }[];
  };
  socialFollow: {
    title: string;
    subtitle: string;
    tag: string;
    platforms: {
      name: string;
      stat: string;
      action: string;
    }[];
  };
  footer: {
    desc: string;
    quickLinks: string;
    servicesLink: string;
    disclaimer: string;
    rights: string;
    followUs: string;
  };
}

export const translations: Record<'tr' | 'en', TranslationSet> = {
  tr: {
    nav: {
      logo: "Diyetisyen Zeynep Dehmen",
      about: "Hakkımda",
      services: "Hizmetler",
      testimonials: "Danışan Yorumları",
      contact: "İletişim",
      ctaButton: "Randevu Al"
    },
    hero: {
      badge: "Uzman Klinik Diyetisyen & Beslenme Danışmanı",
      title: "Sağlıklı Bir Yaşama Açılan Kapınız",
      subtitle: "Kişiye özel beslenme programları ile sürdürülebilir sağlığa adım atın. Yasaklarla değil, doğrularla zayıflayın, bedeninizi besleyin.",
      onlineBtn: "Online Danışmanlık",
      freeConsultBtn: "Ücretsiz Ön Görüşme",
      yearsExp: "Yıllık Deneyim",
      happyClients: "Aktif Danışan",
      successRate: "Başarı Oranı"
    },
    bmi: {
      title: "Vücut Kitle İndeksi (VKI) Hesapla",
      subtitle: "Boy ve kilo değerlerinizi girerek sağlık durumunuz hakkında hızlıca bilgi edinin.",
      heightLabel: "Boy (cm)",
      weightLabel: "Kilo (kg)",
      calcBtn: "Hesapla",
      resultTitle: "Hesaplama Sonucu",
      statusUnderweight: "Zayıf",
      statusNormal: "Normal Kilolu",
      statusOverweight: "Fazla Kilolu",
      statusObese: "1. Derece Obez",
      statusExtremelyObese: "2. Derece Ciddi Obez",
      adviceUnderweight: "Vücut ağırlığınız boyunuza göre yetersiz. Sağlıklı bir şekilde kilo almak ve kas kütlenizi artırmak için besleyici içeriği yüksek bir program uygulamalısınız.",
      adviceNormal: "Tebrikler! Vücut ağırlığınız boyunuza göre oldukça ideal ve sağlıklı dengede. Bu formu korumak için dengeli beslenme ve aktif yaşam tarzını sürdürün.",
      adviceOverweight: "Kilonuz ideal sınırın biraz üzerinde görünüyor. Gelecekteki olası kronik sağlık sorunlarını riskini azaltmak için porsiyon kontrolü ve hafif egzersizlere başlayabilirsiniz.",
      adviceObese: "Vücut kitle indeksiniz obezite sınırında. Kalp, tansiyon ve diyabet gibi riskleri kontrol altında tutmak için uzman eşliğinde profesyonel bir beslenme tedavisi almanız önerilir.",
      adviceExtremelyObese: "İleri düzeyde vücut ağırlığına sahipsiniz. Metabolik sağlığınızı korumak ve güvenli bir şekilde ideal kilonuza ulaşmak için mutlaka klinik takipli beslenme programı uygulamalısınız.",
      idealWeight: "İdeal Kilo Aralığınız:",
      guideTitle: "VKI Tablosu Değerlendirmesi",
      idealText: "Kişiye özel en sağlıklı kilo hedefi için mutlaka klinik ölçüm yapılmalıdır."
    },
    services: {
      title: "Uzmanlık Alanları & Hizmetler",
      subtitle: "Bilimsel veriler ışığında, tamamen sizin metabolizmanıza ve yaşam tarzınıza özel olarak planlanan beslenme tedavileri.",
      learnMore: "Detayları Gör",
      closeBtn: "Kapat",
      items: [
        {
          id: "weight-management",
          title: "Kilo Yönetimi (Zayıflama & Kilo Alma)",
          desc: "Kalıcı ve sağlıklı ağırlık kaybı ya da kas ağırlıklı sağlıklı kilo alımı programları.",
          details: "Kilo yönetimi programlarımız, popüler şok diyetler yerine sürdürülebilir beslenme alışkanlığı edinmenizi hedefler. Yağ analizi, kan bulguları ve günlük rutininize göre metabolizma hızınız hesaplanır, yasaksız ve porsiyon kontrollü kişiye özel bir program hazırlanır. Günlük WhatsApp takibi ile motivasyonunuz yüksek tutulur."
        },
        {
          id: "sports-nutrition",
          title: "Sporcu Beslenmesi",
          desc: "Antrenman performansını zirveye taşıyan, kas kütlesini artıran özel beslenme planları.",
          details: "Spor dalınıza, idman sıklığınıza ve kas-yağ hedeflerinize uygun karbonhidrat, protein ve yağ dağılımı yapılır. Egzersiz öncesi, esnası ve sonrasındaki beslenme zamanlamaları ve sporcu takviyeleri (suplementler) bilimsel protokollerle planlanır. Hem profesyonel hem de amatör sporculara özeldir."
        },
        {
          id: "medical-nutrition",
          title: "Hastalıklarda Tıbbi Beslenme Tedavisi",
          desc: "Diyabet, İnsülin Direnci, Kolesterol, Tiroid ve Sindirim Sistemi hastalıklarında beslenme desteği.",
          details: "Diyabet, Polikistik Over Sendromu (PKOS), İnsülin Direnci, Karaciğer Yağlanması, Hipertansiyon, Huzursuz Bağırsak (IBS) gibi klinik tablolarda kan tahlili parametreleriniz incelenerek hekim tedavisine destek beslenme programı uygulanır. Hücresel düzeyde iyileşme ve semptomların hafifletilmesi hedeflenir."
        },
        {
          id: "pregnancy-nutrition",
          title: "Hamilelik ve Emzirme Dönemi Beslenmesi",
          desc: "Anne ve bebeğin sağlığını koruyan, emzirme sürecinde kaliteli süt oluşumunu destekleyen planlama.",
          details: "Gebelikte haftalık gelişim sürecine göre makro ve mikro besin ögeleri (folik asit, demir, kalsiyum vb.) dengelenir, gereksiz kilo alımının önüne geçilir. Emzirme döneminde ise bebeğin gaz durumuna dikkat edilerek anne sütünü artıran ve kalitesini yükselten içeriklerle beslenme düzenlenir."
        },
        {
          id: "corporate-consulting",
          title: "Kurumsal Beslenme Danışmanlığı",
          desc: "Şirket çalışanlarının sağlığını ve enerjisini artıran, menü planlama ve seminer hizmetleri.",
          details: "Ofis çalışanlarında masa başı yaşama bağlı gelişen rahatsızlıkları ve yorgunluğu önlemek amacıyla kurumsal check-up, menü tasarımı ve sağlıklı atıştırmalık köşesi önerileri sunulur. Kurum içi motivasyonu ve üretkenliği artırmaya yönelik interaktif eğitim ve seminerler düzenlenir."
        },
        {
          id: "online-diet",
          title: "Online Diyet Programı",
          desc: "Coğrafi sınırlardan bağımsız, her hafta güncellenen listeler ve kesintisiz WhatsApp takibi.",
          details: "Yoğun çalışanlar, şehir dışında veya yurt dışında yaşayan danışanlarımız için birebir ev konforunda diyet hizmetidir. Mobil ölçüm cihazlarınızın verileri doğrultusunda haftalık görüntülü görüşmeler yapılır. Whatsapp üzerinden her öğününüz klinik süzgeçten geçirilerek anlık yönlendirilir."
        }
      ]
    },
    about: {
      title: "Diyetisyen Zeynep Dehmen Kimdir?",
      subtitle: "Sağlıklı yaşamı bir kısıtlama değil, özgürlük olarak gören sürdürülebilir beslenme felsefesi.",
      p1: "Hacettepe Üniversitesi Beslenme ve Diyetetik bölümünden yüksek onur derecesiyle mezun olduktan sonra, klinik beslenme alanındaki uzmanlığımı pekiştirmek amacıyla çeşitli hastanelerde çalışmalarda bulundum. Yıllar içerisinde binlerce danışanımın hayatına dokunarak sağlıklı beslenme alışkanlıklarını keyifli hale getirmelerine yardımcı oldum.",
      p2: "Beslenme danışmanlığındaki temel yaklaşımım; kişileri tek tip kalıplara sokmak yerine, kan tahlili bulguları, genetik yatkınlıklar, sosyoekonomik durum ve en önemlisi kişinin psikolojik beslenme ilişkisini analiz ederek tamamen 'kişiye özel' reçeteler hazırlamaktır.",
      p3: "Benim felsefeme göre hiçbir besin tek başına suçlu ya da mucizevi değildir. Gerçek başarı; yasakların gölgesinde aç kalmak değil, sevdiğiniz besinleri porsiyon kontrolü ve doğru kombinasyonlarla hayatınıza adapte edebilmektir. Geleceğinize yapacağınız en büyük yatırım, bedeninizi sevmek ve onu bilimsel doğrularla beslemektir.",
      philosophyTitle: "Sürdürülebilir Beslenme Felsefesi",
      philosophyText: "\"Kısa süreli diyet reçeteleri geçici sonuçlar verir. Önemli olan tabağınızdakileri yaşam tarzınıza uydurmak ve bunu hayat boyu gülümseyerek sürdürebilmektir.\"",
      educationTitle: "Eğitim ve Sertifikalar",
      educationItems: [
        "Hacettepe Üniversitesi - Beslenme ve Diyetetik (Lisans)",
        "Acıbadem Üniversitesi - Sporcu Beslenmesi Uzmanlığı Eğitimi",
        "Klinik Enteral Parenteral Nütrisyon Derneği (KEPAN) Klinik Eğitimleri",
        "Fonksiyonel Tıp Akademisi - Beslenme ve Mikrobiyota Eğitimi"
      ],
      experienceTitle: "Mesleki Deneyimler",
      experienceItems: [
        "Hacettepe Üniversitesi Tıp Fakültesi Hastaneleri (Stajyer Diyetisyen)",
        "Özel Memorial Hastanesi - Klinik ve Poliklinik Departmanı (Uzman Diyetisyen)",
        "Diyetisyen Zeynep Dehmen Sağlıklı Yaşam ve Diyet Danışmanlık Merkezi (Kurucu - Aktif)"
      ]
    },
    testimonials: {
      title: "Başarı Hikayeleri",
      subtitle: "Yasaklardan arınmış, sürdürülebilir beslenme yolculuğunda hedeflerine ulaşan danışanlarımızın yorumları.",
      items: [
        {
          name: "Ayşe Yıldız",
          role: "Banka Müdürü (42 Yaş)",
          text: "Elif Hanım ile yolumuz 4 ay önce kesiştiğinde insülin direncim tavan yapmıştı ve sürekli tatlı krizleri yaşıyordum. Aç kalmadan, listemde çikolatama bile yer vererek tam 14 kilo verdik. En önemlisi tahlil sonuçlarım tamamen normale döndü. Kendisine sonsuz teşekkürler!",
          rating: 5,
          result: "-14 Kilo & İnsülin Direnci Kontrolü"
        },
        {
          name: "Mehmet Kara",
          role: "Yazılım Geliştirici (29 Yaş)",
          text: "Masa başı işimden dolayı bel bölgemde ciddi yağlanma vardı ve spor yapmaya enerjim kalmıyordu. Elif Hanım'ın sadece ofis hayatıma uygun hazırladığı pratik tarifler ve öğün düzenlemeleri sayesinde aç kalmadan 10 kilo verdim ve enerjim tavan yaptı.",
          rating: 5,
          result: "-10 Kilo & Yağ Kaybı"
        },
        {
          name: "Selin Yılmaz",
          role: "Öğretmen (34 Yaş)",
          text: "Doğum sonrası veremediğim kilolar kabusum olmuştu. Emzirme döneminde olduğum için de korkuyordum. Elif Hanım sütün kalitesini artırırken aynı zamanda sütüme zarar vermeden 12 kilodan kurtulmamı sağladı. İnanılmaz sevecen ve motive ediciydi.",
          rating: 5,
          result: "-12 Kilo & Anne Sütü Artışı"
        }
      ]
    },
    appointment: {
      title: "Randevu & Ön Görüşme Formu",
      subtitle: "Sağlıklı bir geleceğe adım atmak için ilk adımı atın. Sizinle en kısa sürede iletişime geçeceğiz.",
      serviceLabel: "Hizmet Türü",
      dateLabel: "Tercih Edilen Tarih",
      timeLabel: "Tercih Edilen Saat Dilimi",
      nameLabel: "Adınız ve Soyadınız",
      phoneLabel: "Telefon Numaranız",
      emailLabel: "E-posta Adresiniz",
      noteLabel: "Varsa Özel Notunuz (Klinik Bulgular vb.)",
      submitBtn: "Randevu Talebini Gönder",
      successTitle: "Randevu Talebiniz Alındı!",
      successDesc: "Diyetisyenimiz Diyetisyen Zeynep Dehmen ve asistanı, randevu detaylarını netleştirmek için en kısa sürede sizinle telefon veya WhatsApp üzerinden iletişime geçecektir.",
      successWhatsAppBtn: "WhatsApp'tan Doğrudan Yaz",
      closeBtn: "Kapat",
      historyTitle: "Aktif Randevu Talepleriniz",
      noAppointments: "Henüz oluşturulmuş aktif randevu talebiniz bulunmamaktadır.",
      cancelBtn: "İptal Et"
    },
    contact: {
      title: "İletişim & Randevu",
      subtitle: "Klinik muayenehanemizi ziyaret edebilir veya online randevu sistemimizle her yerden bize ulaşabilirsiniz.",
      addressLabel: "Adres",
      addressValue: "Diyetisyen Zeynep Dehmen, Çanakkale, Türkiye",
      phoneLabel: "Telefon",
      emailLabel: "E-posta",
      workingHoursLabel: "Çalışma Saatleri",
      workingHoursValue: "Pazartesi - Cumartesi: 09:00 - 19:00",
      formTitle: "Bize Mesaj Gönderin",
      formName: "Adınız Soyadınız",
      formEmail: "E-postanız",
      formMessage: "Mesajınız",
      formSubmit: "Mesajı Gönder",
      formSuccess: "Mesajınız başarıyla iletildi! En kısa zamanda geri döneceğiz.",
      whatsappBanner: "Anında bilgi almak ve hızlı kayıt için asistanımıza yazın.",
      whatsappBtn: "Hızlı WhatsApp İletişimi"
    },
    newsletter: {
      title: "Sağlıklı Yaşam Bülteni",
      subtitle: "Gereksiz diyet efsanelerinden uzak, bilimsel beslenme tüyolarını ve mevsimsel tarifleri e-posta ile alın.",
      placeholder: "E-posta adresinizi girin...",
      btn: "Kayıt Ol",
      success: "Bültene başarıyla abone oldunuz! Teşekkürler."
    },
    gallery: {
      title: "Klinik & Ofisimizden Kareler",
      subtitle: "Danışanlarımızı ağırladığımız, vücut analizlerini gerçekleştirdiğimiz modern ve konforlu kliniklerimiz.",
      tag: "MEKAN RESİMLERİ",
      zoomIn: "Büyütmek için tıklayın",
      items: [
        { title: "Bireysel Görüşme & Danışmanlık Odası", category: "Danışmanlık" },
        { title: "Gelişmiş Vücut Analiz ve Ölçüm Alanı", category: "Analiz" },
        { title: "Sıcak & Konforlu Bekleme Alanı", category: "Bekleme Salonu" },
        { title: "Klinik Giriş & Karşılama Bankosu", category: "Karşılama" }
      ]
    },
    socialFollow: {
      title: "Bizi Sosyal Medyada Takip Edin",
      subtitle: "Günlük sağlıklı yaşam tüyoları, fit tarifler, danışan başarı hikayeleri ve canlı yayınlarımız için bizi takip etmeyi unutmayın!",
      tag: "SOSYAL MEDYA",
      platforms: [
        { name: "Instagram", stat: "15K+ Takipçi", action: "Takip Et" },
        { name: "YouTube", stat: "5K+ Abone", action: "Yorum Yap" },
        { name: "Facebook", stat: "3K+ Takipçi", action: "Beğen" }
      ]
    },
    footer: {
      desc: "Uzman Klinik Diyetisyen Diyetisyen Zeynep Dehmen liderliğinde, bilimin ışığında sürdürülebilir beslenme rehberliği ile ideal sağlığınıza ve formunuza kavuşun.",
      quickLinks: "Hızlı Menü",
      servicesLink: "Hizmet Skalası",
      disclaimer: "Yasal Uyarı: Bu web sitesinde yer alan tüm bilgiler genel bilgilendirme amaçlı olup, asla tanı ve tedavi yerine geçemez. Sağlık problemleriniz için mutlaka uzman hekiminize danışınız.",
      rights: "Tüm hakları saklıdır.",
      followUs: "Sosyal Medyada Biz"
    }
  },
  en: {
    nav: {
      logo: "Diyetisyen Zeynep Dehmen",
      about: "About Me",
      services: "Services",
      testimonials: "Testimonials",
      contact: "Contact",
      ctaButton: "Book Now"
    },
    hero: {
      badge: "Clinical Dietitian & Nutrition Consultant",
      title: "Your Gateway to a Healthy Life",
      subtitle: "Step into sustainable health with tailored nutritional programs. Say goodbye to restrictions, say hello to professional scientific truths.",
      onlineBtn: "Online Consultancy",
      freeConsultBtn: "Free Evaluation",
      yearsExp: "Years Exp",
      happyClients: "Active Members",
      successRate: "Success Rate"
    },
    bmi: {
      title: "Calculate Body Mass Index (BMI)",
      subtitle: "Enter your height and weight to get general insights about your nutritional status.",
      heightLabel: "Height (cm)",
      weightLabel: "Weight (kg)",
      calcBtn: "Calculate",
      resultTitle: "BMI Result",
      statusUnderweight: "Underweight",
      statusNormal: "Normal Weight",
      statusOverweight: "Overweight",
      statusObese: "Class 1 Obese",
      statusExtremelyObese: "Class 2 Severely Obese",
      adviceUnderweight: "Your body weight is low relative to your height. To gain weight in a healthy way and build muscle, you should follow a nutrient-dense custom program.",
      adviceNormal: "Congratulations! Your body weight is perfectly balanced and healthy. Maintain this splendid shape with balanced eating and an active lifestyle.",
      adviceOverweight: "Your weight is slightly above the ideal range. You can initiate portion control and mild exercise to lower the risk of chronic health conditions.",
      adviceObese: "Your BMI corresponds to obesity. It is highly recommended to receive structured medical nutrition therapy to guard against heart, pressure, and diabetic conditions.",
      adviceExtremelyObese: "You have an advanced level of weight. To protect metabolic health and safely achieve your target weight, you should follow a clinically supervised nutrition plan.",
      idealWeight: "Your Ideal Weight Range:",
      guideTitle: "BMI Scale Assessment",
      idealText: "A clinical measurement is essential for identifying the precise healthy individual weight target."
    },
    services: {
      title: "Areas of Expertise & Services",
      subtitle: "Evidence-based, scientific nutritional therapies customized completely to your metabolism and individual lifestyle.",
      learnMore: "View Details",
      closeBtn: "Close",
      items: [
        {
          id: "weight-management",
          title: "Weight Management (Slimming & Weight Gain)",
          desc: "Sustained and medically safe weight loss or muscle-focused weight gain programs.",
          details: "Our weight management programs focus on developing sustainable eating habits rather than crash-diet fads. Based on your body fat analysis, blood tests, and routine, your metabolism is calculated to compile a personalized, non-restrictive meal plan. Continuous encouragement is provided over WhatsApp daily."
        },
        {
          id: "sports-nutrition",
          title: "Sports Nutrition",
          desc: "Tailored sports diets that elevate workout endurance and increase lean muscle mass.",
          details: "We distribute carbohydrates, proteins, and lipids to fit your specific discipline, exercise frequency, and lean-mass goals. Pre-, intra-, and post-workout nutritional timing, along with scientific supplement recommendations, are fully integrated. Suitable for both elite and recreational athletes."
        },
        {
          id: "medical-nutrition",
          title: "Medical Nutrition Therapy in Diseases",
          desc: "Supportive dietary programs for Diabetes, Insulin Resistance, Cholesterol, Thyroid, and Bowel conditions.",
          details: "In diagnostic scenarios like Diabetes, PCOS, Insulin Resistance, Fatty Liver, Hypertension, and IBS, we assess blood panels to build parallel nutrition protocols that boost medical doctor therapy. Our aim is recovery at a molecular level and alleviation of symptoms."
        },
        {
          id: "pregnancy-nutrition",
          title: "Pregnancy & Lactation Nutrition",
          desc: "Safeguarding mother and infant health while boosting milk nutritional quality.",
          details: "Gestaional diet plans balance macro/micronutrients (folic acid, iron, calcium) weekly to prevent excess weight. In postpartum lactation, the eating regimen is managed to boost milk production while keeping infant digestive colic patterns under strict clinical view."
        },
        {
          id: "corporate-consulting",
          title: "Corporate Wellness Consultation",
          desc: "Boosting team morale, energy, and cognitive focus via seminars and customized workplace menus.",
          details: "To counter office burnout, desk-bound chronic fatigue, or weight gain, we offer employee health check-ups, structural canteen menu designing, and clever snack bar recommendations. In-person or virtual interactive micro-seminars inspire daily wellness."
        },
        {
          id: "online-diet",
          title: "Online Diet Program",
          desc: "Global reach with weekly personalized menu updates and continuous WhatsApp feedback.",
          details: "Perfect for busy professionals or clients residing overseas. By checking parameters from your home scale devices, we schedule weekly video calls and analyze every meal picture you send instantly over WhatsApp to steer your choices dynamically."
        }
      ]
    },
    about: {
      title: "Who is Diyetisyen Zeynep Dehmen?",
      subtitle: "Approaching healthy living not as a restriction, but as a path to long-term vitality.",
      p1: "After graduating with high honors in Nutrition and Dietetics from Hacettepe University, I participated in extensive chemical and medical trials at multiple teaching hospitals to broaden my expertise in clinical therapy. Over the years, I have helped thousands of clients redesign their relationship with food and weight.",
      p2: "My absolute core belief is to avoid carbon-copy templates. Instead, I carefully scrutinize your blood work, physical parameters, genetic markers, daily routines, and psychological connections to food to formulate a program that is uniquely and completely yours.",
      p3: "Under my philosophy, there is no single food that acts as a miracle or a villain. True therapeutic success lies not in starving under stress, but in learning to blend your favorite flavors with portion control. The greatest asset for your future is treating your body with compassion and nourishing it scientifically.",
      philosophyTitle: "Our Nutrition Philosophy",
      philosophyText: "\"Strict, short-lived diet fads yield temporary results. Real success is matching what's on your plate to how you live, while keeping a vibrant smile on your face for years to come.\"",
      educationTitle: "Education & Certificates",
      educationItems: [
        "Hacettepe University - Nutrition & Dietetics (Bachelor's Degree)",
        "Acibadem University - Specialist Sports Dietitian Training Certificate",
        "Clinical Enteral and Parenteral Nutrition Association (KEPAN) Advanced Training",
        "Functional Medicine Academy - Advanced Microbiome & Digestion Protocols"
      ],
      experienceTitle: "Professional History",
      experienceItems: [
        "Hacettepe University Medical Faculty Hospital (Clinical Intern Dietitian)",
        "Memorial Private Hospital Group - Clinical and Outpatient Dept. (Chief Dietitian)",
        "Diyetisyen Zeynep Dehmen Clinical Nutrition & Healthy Living Center (Founder & Active Lead)"
      ]
    },
    testimonials: {
      title: "Success Stories",
      subtitle: "Reviews from our beloved clients who achieved their wellness targets without mental constraints.",
      items: [
        {
          name: "Ayse Yildiz",
          role: "Branch Manager (Age 42)",
          text: "When I met Elif 4 months ago, my insulin resistance had spiked and I had non-stop sugar cravings. We lost 14 kg without ever feel starved, keeping small pieces of chocolate in my plans. Most importantly, my blood values became perfect. Eternal thanks!",
          rating: 5,
          result: "-14 Kg Lost & Insulin Control"
        },
        {
          name: "Mehmet Kara",
          role: "Software Developer (Age 29)",
          text: "Due to desk work, I amassed visceral stomach fat and had zero workout stamina. Thanks to Elif's tailored office-friendly meal prepping and schedule hacks, I trimmed 10 kg and my energy surged. Truly professional!",
          rating: 5,
          result: "-10 Kg Lost & Body fat trimmed"
        },
        {
          name: "Selin Yilmaz",
          role: "Primary School Teacher (Age 34)",
          text: "Postpartum weight had become a continuous nightmare for me, and I was deeply afraid of hurting my breastfeeding supply. Elif boosted my breast milk density while safely guiding me to drop 12 kg. Exceptionally compassionate and motivating.",
          rating: 5,
          result: "-12 Kg lost & Elevated lactation"
        }
      ]
    },
    appointment: {
      title: "Appointment Request Form",
      subtitle: "Take your primary step towards a vitality-driven tomorrow. We will reach back to you shortly.",
      serviceLabel: "Consulting Category",
      dateLabel: "Preferred Date",
      timeLabel: "Preferred Time Block",
      nameLabel: "Your Name & Surname",
      phoneLabel: "Phone Number",
      emailLabel: "Email Address",
      noteLabel: "Any Clinical Notes (Allergies, chronic conditions etc.)",
      submitBtn: "Send Request",
      successTitle: "Appointment Request Logged!",
      successDesc: "Our scheduler and Dietitian Diyetisyen Zeynep Dehmen will contact you shortly over mobile or WhatsApp to choose the exact slot and prepare for your meeting.",
      successWhatsAppBtn: "Message Directly on WhatsApp",
      closeBtn: "Close",
      historyTitle: "Your Pending Requests",
      noAppointments: "You do not have any active appointments saved currently.",
      cancelBtn: "Cancel"
    },
    contact: {
      title: "Contact & Location",
      subtitle: "Come visit our beautiful modern clinic in Ankara or book digital sessions from anywhere around the globe.",
      addressLabel: "Address",
      addressValue: "Diyetisyen Zeynep Dehmen, Çanakkale, Türkiye",
      phoneLabel: "Phone",
      emailLabel: "Email",
      workingHoursLabel: "Working Hours",
      workingHoursValue: "Monday - Saturday: 09:00 - 19:00",
      formTitle: "Send a Message",
      formName: "Full Name",
      formEmail: "Your Email",
      formMessage: "How can we help you?",
      formSubmit: "Send Message",
      formSuccess: "Your message has been received successfully! Under evaluation.",
      whatsappBanner: "Chat directly with our medical secretary on WhatsApp for immediate support.",
      whatsappBtn: "Contact Secretariate"
    },
    newsletter: {
      title: "Wellness Newsletter",
      subtitle: "Receive evidence-based clinical diet advice, seasonal lists, and delicious recipes directly to your inbox.",
      placeholder: "Your email address",
      btn: "Subscribe",
      success: "Successfully registered to our clinical mailing list! Thank you."
    },
    gallery: {
      title: "Moments From Our Clinic",
      subtitle: "Our modern, state-of-the-art healthy living center styled for your comfort and precise analysis.",
      tag: "PHOTOS OF OUR CLINIC",
      zoomIn: "Click to expand",
      items: [
        { title: "Private Counseling & Guidance Room", category: "Consultation" },
        { title: "Advanced Body Composition Analysis Zone", category: "Analysis" },
        { title: "Warm & Cozy Waiting Lounge", category: "Lounge" },
        { title: "Clinic Lobby & Greeting Reception", category: "Reception" }
      ]
    },
    socialFollow: {
      title: "Follow Us on Social Media",
      subtitle: "Don't miss our daily healthy eating hacks, easy fit desserts, client progress stories, and interactive live Q&As!",
      tag: "FOLLOW US",
      platforms: [
        { name: "Instagram", stat: "15K+ Followers", action: "Follow" },
        { name: "YouTube", stat: "5K+ Subscribers", action: "Subscribe" },
        { name: "Facebook", stat: "3K+ Followers", action: "Like" }
      ]
    },
    footer: {
      desc: "Reclaim your long-term health and physique under the guidance of Expert Clinical Dietitian Diyetisyen Zeynep Dehmen, using verified scientific guidelines and compassionate counseling.",
      quickLinks: "Quick Menu",
      servicesLink: "Services Spectrum",
      disclaimer: "Disclaimer: All information shared on this portal is strictly educational and cannot serve as diagnostic advice or direct treatment. Always consult your medical doctor for queries.",
      rights: "All rights reserved.",
      followUs: "Follow Us"
    }
  }
};
