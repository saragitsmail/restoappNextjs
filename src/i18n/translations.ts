export type Language = 'en' | 'fr' | 'ar'

export interface TranslationDictionary {
  // Navigation & Brand
  brandName: string
  navHome: string
  navMenu: string
  navAbout: string
  navReviews: string
  navContact: string
  navOrderNow: string
  navStudio: string
  cartTitle: string

  // Hero Section
  heroTitle: string
  heroTagline: string
  heroCtaMenu: string

  // Categories
  catAll: string
  catStarters: string
  catMains: string
  catSignature: string
  catDesserts: string

  // Badges
  badgePopular: string
  badgeChefsChoice: string
  badgeHouseSpecial: string
  badgeNew: string
  badgeLimited: string

  // Menu Section
  menuHeadingTag: string
  menuHeadingTitle: string
  menuHeadingSubtitle: string
  addToCart: string
  viewDetails: string
  priceCurrency: string
  pairingTitle: string
  ingredientsTitle: string

  // Cart Drawer
  cartHeading: string
  cartEmpty: string
  cartSubtotal: string
  cartDeliveryFee: string
  cartDeliveryFree: string
  cartTotal: string
  cartCheckoutBtn: string
  cartClearBtn: string

  // Checkout Modal
  checkoutTitle: string
  checkoutSubtitle: string
  fullNameLabel: string
  fullNamePlaceholder: string
  phoneLabel: string
  phonePlaceholder: string
  addressLabel: string
  addressPlaceholder: string
  notesLabel: string
  notesPlaceholder: string
  orderSummaryTitle: string
  confirmOrderBtn: string
  processingOrder: string

  // Success Screen
  orderReceivedTitle: string
  orderReceivedDesc: string
  orderIdLabel: string
  closeBtn: string

  // Story / About Section
  aboutHeadingTag: string
  aboutHeadingTitle: string
  aboutParagraph1: string
  aboutParagraph2: string
  aboutFeature1Title: string
  aboutFeature1Desc: string
  aboutFeature2Title: string
  aboutFeature2Desc: string
  aboutFeature3Title: string
  aboutFeature3Desc: string

  // Reviews
  reviewsTag: string
  reviewsTitle: string
  review1Author: string
  review1Text: string
  review1Role: string
  review2Author: string
  review2Text: string
  review2Role: string
  review3Author: string
  review3Text: string
  review3Role: string

  // Gallery
  galleryTag: string
  galleryTitle: string

  // Contact Section
  contactTag: string
  contactTitle: string
  addressTitle: string
  addressText: string
  phoneTitle: string
  phoneText: string
  hoursTitle: string
  hoursText: string
  contactCallBtn: string

  // Footer
  footerRights: string
  footerDesc: string
}

export const translations: Record<Language, TranslationDictionary> = {
  en: {
    brandName: 'LUMIÈRE',
    navHome: 'Home',
    navMenu: 'Menu',
    navAbout: 'Our Story',
    navReviews: 'Reviews',
    navContact: 'Location',
    navOrderNow: 'Order Now',
    navStudio: 'Sanity Studio',
    cartTitle: 'Your Cart',

    heroTitle: 'LUMIÈRE',
    heroTagline: 'Fine dining, delivered with intention.',
    heroCtaMenu: 'View Menu',

    catAll: 'All',
    catStarters: 'Starters',
    catMains: 'Mains',
    catSignature: 'Signature',
    catDesserts: 'Desserts',

    badgePopular: 'Popular',
    badgeChefsChoice: "Chef's Choice",
    badgeHouseSpecial: 'House Special',
    badgeNew: 'New',
    badgeLimited: 'Limited',

    menuHeadingTag: 'Our Menu',
    menuHeadingTitle: 'Curated Dishes',
    menuHeadingSubtitle:
      'Each plate is composed with precision — seasonal produce, prime ingredients, and time-honed technique.',
    addToCart: 'Add to Order',
    viewDetails: 'Details',
    priceCurrency: 'DA',
    pairingTitle: 'Sommelier Pairing',
    ingredientsTitle: 'Ingredients',

    cartHeading: 'Your Order',
    cartEmpty: 'Your cart is empty. Browse the menu to begin.',
    cartSubtotal: 'Subtotal',
    cartDeliveryFee: 'Delivery',
    cartDeliveryFree: 'Free',
    cartTotal: 'Total',
    cartCheckoutBtn: 'Checkout',
    cartClearBtn: 'Clear',

    checkoutTitle: 'Complete Your Order',
    checkoutSubtitle: 'Enter your details and we will take care of the rest.',
    fullNameLabel: 'Full Name',
    fullNamePlaceholder: 'e.g. Yacine Benali',
    phoneLabel: 'Phone Number',
    phonePlaceholder: '0550 12 34 56',
    addressLabel: 'Delivery Address',
    addressPlaceholder: 'Street, District, Algiers',
    notesLabel: 'Notes (Optional)',
    notesPlaceholder: 'Dietary preferences, special requests...',
    orderSummaryTitle: 'Order Summary',
    confirmOrderBtn: 'Place Order',
    processingOrder: 'Processing...',

    orderReceivedTitle: 'Order Received',
    orderReceivedDesc:
      'Thank you. Your order has been confirmed and our kitchen is preparing it now.',
    orderIdLabel: 'Reference',
    closeBtn: 'Continue',

    aboutHeadingTag: 'Our Story',
    aboutHeadingTitle: 'Where Craft Meets Table',
    aboutParagraph1:
      'Lumière was founded on a simple conviction: great food should not require a reservation weeks in advance.',
    aboutParagraph2:
      'Every plate is crafted from ethically sourced organic produce, prime cut meats, and fresh Mediterranean seafood — prepared with the same rigour as any acclaimed dining room.',
    aboutFeature1Title: 'Premium Ingredients',
    aboutFeature1Desc: 'Handpicked daily from trusted local producers.',
    aboutFeature2Title: 'Master Chefs',
    aboutFeature2Desc: 'Prepared by culinary experts with uncompromising standards.',
    aboutFeature3Title: 'Express Delivery',
    aboutFeature3Desc: 'Delivered hot in eco-insulated packaging.',

    reviewsTag: 'Guest Reviews',
    reviewsTitle: 'What Our Guests Say',
    review1Author: 'Kareem M.',
    review1Text:
      'The Wagyu Ribeye was cooked to absolute perfection. Exceptional presentation and surprisingly fast delivery.',
    review1Role: 'Food Critic & Regular Guest',
    review2Author: 'Amel B.',
    review2Text:
      'The finest delivery dining experience in Algiers. The dark chocolate sphere is extraordinary.',
    review2Role: 'Verified Guest',
    review3Author: 'Sofiane K.',
    review3Text:
      'A seamless ordering experience. The multilingual interface is a thoughtful touch. Highly recommended.',
    review3Role: 'Gourmet Enthusiast',

    galleryTag: 'Gallery',
    galleryTitle: 'The Plate as Canvas',

    contactTag: 'Find Us',
    contactTitle: 'Location & Hours',
    addressTitle: 'Address',
    addressText: 'Boulevard 11 December 1960, El Biar, Algiers',
    phoneTitle: 'Telephone',
    phoneText: '+213 (0) 550 99 88 77',
    hoursTitle: 'Opening Hours',
    hoursText: 'Monday — Sunday: 11:00 — 23:30',
    contactCallBtn: 'Call to Reserve',

    footerRights: '© 2026 Lumière Restaurant. All rights reserved.',
    footerDesc: 'Fine dining & express delivery — connected to Sanity CMS.',
  },
  fr: {
    brandName: 'LUMIÈRE',
    navHome: 'Accueil',
    navMenu: 'Carte',
    navAbout: 'Notre Histoire',
    navReviews: 'Avis',
    navContact: 'Accès',
    navOrderNow: 'Commander',
    navStudio: 'Studio Sanity',
    cartTitle: 'Votre Panier',

    heroTitle: 'LUMIÈRE',
    heroTagline: 'La haute gastronomie, livrée avec soin.',
    heroCtaMenu: 'Voir la Carte',

    catAll: 'Tous',
    catStarters: 'Entrées',
    catMains: 'Plats',
    catSignature: 'Signature',
    catDesserts: 'Desserts',

    badgePopular: 'Populaire',
    badgeChefsChoice: 'Choix du Chef',
    badgeHouseSpecial: 'Spécialité Maison',
    badgeNew: 'Nouveau',
    badgeLimited: 'Limité',

    menuHeadingTag: 'Notre Carte',
    menuHeadingTitle: 'Plats Sélectionnés',
    menuHeadingSubtitle:
      'Chaque assiette est composée avec précision — produits de saison, ingrédients d'exception et technique maîtrisée.',
    addToCart: 'Ajouter au Panier',
    viewDetails: 'Détails',
    priceCurrency: 'DA',
    pairingTitle: 'Accord Mets & Vins',
    ingredientsTitle: 'Ingrédients',

    cartHeading: 'Votre Commande',
    cartEmpty: 'Votre panier est vide. Parcourez la carte pour commencer.',
    cartSubtotal: 'Sous-total',
    cartDeliveryFee: 'Livraison',
    cartDeliveryFree: 'Gratuite',
    cartTotal: 'Total',
    cartCheckoutBtn: 'Commander',
    cartClearBtn: 'Vider',

    checkoutTitle: 'Finaliser la Commande',
    checkoutSubtitle: 'Renseignez vos coordonnées et nous nous occupons du reste.',
    fullNameLabel: 'Nom Complet',
    fullNamePlaceholder: 'ex. Yacine Benali',
    phoneLabel: 'Téléphone',
    phonePlaceholder: '0550 12 34 56',
    addressLabel: 'Adresse de Livraison',
    addressPlaceholder: 'Rue, Quartier, Alger',
    notesLabel: 'Notes (Optionnel)',
    notesPlaceholder: 'Préférences alimentaires, demandes spéciales...',
    orderSummaryTitle: 'Récapitulatif',
    confirmOrderBtn: 'Valider la Commande',
    processingOrder: 'En cours...',

    orderReceivedTitle: 'Commande Reçue',
    orderReceivedDesc:
      'Merci. Votre commande est confirmée et notre cuisine la prépare dès maintenant.',
    orderIdLabel: 'Référence',
    closeBtn: 'Continuer',

    aboutHeadingTag: 'Notre Histoire',
    aboutHeadingTitle: 'Là Où le Savoir-Faire Rencontre la Table',
    aboutParagraph1:
      'Lumière est né d'une conviction simple : la grande cuisine ne devrait pas nécessiter des semaines de réservation.',
    aboutParagraph2:
      'Chaque assiette est réalisée à partir de produits biologiques sélectionnés, de viandes d'exception et de fruits de mer frais — préparée avec la même rigueur qu'une grande salle.',
    aboutFeature1Title: 'Ingrédients Premium',
    aboutFeature1Desc: 'Sélectionnés chaque matin auprès des meilleurs producteurs.',
    aboutFeature2Title: 'Grands Chefs',
    aboutFeature2Desc: 'Cuisinés par des experts aux exigences irréprochables.',
    aboutFeature3Title: 'Livraison Express',
    aboutFeature3Desc: 'Livrée chaude dans des emballages isothermes écologiques.',

    reviewsTag: 'Avis Clients',
    reviewsTitle: 'Ce Que Disent Nos Hôtes',
    review1Author: 'Kareem M.',
    review1Text:
      'Le Ribeye de Wagyu était cuit à la perfection. Présentation remarquable et livraison étonnamment rapide.',
    review1Role: 'Critique Gastronomique',
    review2Author: 'Amel B.',
    review2Text:
      'La meilleure expérience de livraison gastronomique d'Alger. La sphère au chocolat est extraordinaire.',
    review2Role: 'Cliente Vérifiée',
    review3Author: 'Sofiane K.',
    review3Text:
      'Une expérience de commande fluide. L'interface multilingue est une attention délicate. Hautement recommandé.',
    review3Role: 'Amateur de Gastronomie',

    galleryTag: 'Galerie',
    galleryTitle: 'L\'Assiette comme Toile',

    contactTag: 'Nous Trouver',
    contactTitle: 'Adresse & Horaires',
    addressTitle: 'Adresse',
    addressText: 'Boulevard du 11 Décembre 1960, El Biar, Alger',
    phoneTitle: 'Téléphone',
    phoneText: '+213 (0) 550 99 88 77',
    hoursTitle: 'Horaires',
    hoursText: 'Lundi — Dimanche : 11h00 — 23h30',
    contactCallBtn: 'Appeler pour Réserver',

    footerRights: '© 2026 Lumière Restaurant. Tous droits réservés.',
    footerDesc: 'Haute gastronomie & livraison express — connecté à Sanity CMS.',
  },
  ar: {
    brandName: 'لوميير',
    navHome: 'الرئيسية',
    navMenu: 'القائمة',
    navAbout: 'قصتنا',
    navReviews: 'آراء',
    navContact: 'الموقع',
    navOrderNow: 'اطلب الآن',
    navStudio: 'استوديو سانيتي',
    cartTitle: 'سلة الطلبات',

    heroTitle: 'لوميير',
    heroTagline: 'مطبخ راقٍ، يُقدَّم بعناية.',
    heroCtaMenu: 'استعرض القائمة',

    catAll: 'الكل',
    catStarters: 'مقبلات',
    catMains: 'رئيسية',
    catSignature: 'خاصة',
    catDesserts: 'حلويات',

    badgePopular: 'الأكثر طلباً',
    badgeChefsChoice: 'اختيار الشيف',
    badgeHouseSpecial: 'طبق البيت',
    badgeNew: 'جديد',
    badgeLimited: 'محدود',

    menuHeadingTag: 'قائمتنا',
    menuHeadingTitle: 'أطباق مختارة',
    menuHeadingSubtitle:
      'كل طبق مُعدّ بدقة — منتجات موسمية ومكونات فاخرة وتقنية متقنة.',
    addToCart: 'إضافة إلى الطلب',
    viewDetails: 'التفاصيل',
    priceCurrency: 'د.ج',
    pairingTitle: 'المشروب المقترح',
    ingredientsTitle: 'المكونات',

    cartHeading: 'طلبك',
    cartEmpty: 'سلتك فارغة. تصفح القائمة للبدء.',
    cartSubtotal: 'المجموع الفرعي',
    cartDeliveryFee: 'التوصيل',
    cartDeliveryFree: 'مجاني',
    cartTotal: 'الإجمالي',
    cartCheckoutBtn: 'إتمام الطلب',
    cartClearBtn: 'تفريغ',

    checkoutTitle: 'إتمام الطلب',
    checkoutSubtitle: 'أدخل بياناتك ونحن نتولى الباقي.',
    fullNameLabel: 'الاسم الكامل',
    fullNamePlaceholder: 'مثال: ياسين بن علي',
    phoneLabel: 'رقم الهاتف',
    phonePlaceholder: '0550 12 34 56',
    addressLabel: 'عنوان التوصيل',
    addressPlaceholder: 'الشارع، الحي، الجزائر',
    notesLabel: 'ملاحظات (اختياري)',
    notesPlaceholder: 'تفضيلات غذائية، طلبات خاصة...',
    orderSummaryTitle: 'ملخص الطلب',
    confirmOrderBtn: 'تأكيد الطلب',
    processingOrder: 'جاري المعالجة...',

    orderReceivedTitle: 'تم استلام طلبك',
    orderReceivedDesc:
      'شكراً. تم تأكيد طلبك وطهاتنا يقومون بتحضيره الآن.',
    orderIdLabel: 'المرجع',
    closeBtn: 'متابعة',

    aboutHeadingTag: 'قصتنا',
    aboutHeadingTitle: 'حيث تلتقي الحرفة بالمائدة',
    aboutParagraph1:
      'تأسست لوميير على قناعة بسيطة: الطعام الرفيع لا ينبغي أن يستلزم حجزاً لأسابيع مسبقاً.',
    aboutParagraph2:
      'كل طبق يُعدّ من منتجات عضوية منتقاة ولحوم فاخرة وأسماك طازجة — بنفس الدقة المتبعة في أرقى المطاعم.',
    aboutFeature1Title: 'مكونات فاخرة',
    aboutFeature1Desc: 'مختارة يومياً من أفضل المنتجين المحليين.',
    aboutFeature2Title: 'طهاة متميزون',
    aboutFeature2Desc: 'بأيدي خبراء لا يساومون على الجودة.',
    aboutFeature3Title: 'توصيل سريع',
    aboutFeature3Desc: 'تصلك ساخنة في تغليف حراري صديق للبيئة.',

    reviewsTag: 'آراء ضيوفنا',
    reviewsTitle: 'ماذا يقول ضيوفنا',
    review1Author: 'كريم م.',
    review1Text:
      'طبق الواجيو ريب آي كان مطهواً بإتقان تام. تقديم استثنائي وتوصيل سريع بشكل مدهش.',
    review1Role: 'ناقد طعام وزبون دائم',
    review2Author: 'أمل ب.',
    review2Text:
      'أفضل تجربة توصيل طعام راقية في الجزائر. كرة الشوكولاتة الداكنة خارقة.',
    review2Role: 'زبونة معتمدة',
    review3Author: 'سفيان ك.',
    review3Text:
      'تجربة طلب سلسة للغاية. الواجهة متعددة اللغات لمسة لطيفة ومدروسة. أنصح به بشدة.',
    review3Role: 'عاشق للمأكولات الفاخرة',

    galleryTag: 'المعرض',
    galleryTitle: 'الطبق كلوحة فنية',

    contactTag: 'الموقع',
    contactTitle: 'العنوان وساعات العمل',
    addressTitle: 'العنوان',
    addressText: 'شارع 11 ديسمبر 1960، الأبيار، الجزائر',
    phoneTitle: 'الهاتف',
    phoneText: '+213 (0) 550 99 88 77',
    hoursTitle: 'ساعات العمل',
    hoursText: 'الإثنين — الأحد: 11:00 — 23:30',
    contactCallBtn: 'اتصل للحجز',

    footerRights: '© 2026 مطعم لوميير. جميع الحقوق محفوظة.',
    footerDesc: 'مطعم فاخر وتوصيل سريع — مرتبط بـ Sanity CMS.',
  },
}
