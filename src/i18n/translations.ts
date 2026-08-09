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
  heroBadge: string
  heroTitle: string
  heroSubtitle: string
  heroCtaOrder: string
  heroCtaMenu: string
  openStatusOpen: string
  openStatusClosed: string
  urgencyLabel: string

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

  // Success Modal
  orderSuccessTitle: string
  orderSuccessDesc: string
  orderIdLabel: string
  whatsappBtn: string
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
  whatsappContactBtn: string

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
    navContact: 'Location & Hours',
    navOrderNow: 'Order Now',
    navStudio: 'Sanity Studio',
    cartTitle: 'Your Cart',

    heroBadge: '✨ Fine Gastronomy & Express Delivery',
    heroTitle: 'Exquisite Flavors, Delivered to Your Doorstep',
    heroSubtitle:
      'Experience masterfully crafted culinary creations by top chefs, made with fresh local ingredients and delivered with elegance.',
    heroCtaOrder: 'Order Food Now',
    heroCtaMenu: 'Explore Menu',
    openStatusOpen: '🟢 Open Now • Accepting Orders',
    openStatusClosed: '🔴 Currently Closed • Opens 11:00 AM',
    urgencyLabel: '🔥 Limited Special Today',

    catAll: 'All Dishes',
    catStarters: 'Starters & Raw Bar',
    catMains: 'Main Courses',
    catSignature: 'Signature Creations',
    catDesserts: 'Artisanal Desserts',

    badgePopular: 'Popular',
    badgeChefsChoice: "Chef's Choice",
    badgeHouseSpecial: 'House Special',
    badgeNew: 'New',
    badgeLimited: 'Limited Today',

    menuHeadingTitle: 'Culinary Masterpieces',
    menuHeadingSubtitle: 'Curated by our Michelin-starred executive chef with premium seasonal ingredients.',
    addToCart: 'Add to Order',
    viewDetails: 'View Details',
    priceCurrency: 'DA',
    pairingTitle: 'Sommelier Pairing:',
    ingredientsTitle: 'Ingredients:',

    cartHeading: 'Your Order Summary',
    cartEmpty: 'Your cart is currently empty. Add delicious items to get started!',
    cartSubtotal: 'Subtotal',
    cartDeliveryFee: 'Delivery Fee',
    cartDeliveryFree: 'FREE',
    cartTotal: 'Total Amount',
    cartCheckoutBtn: 'Proceed to Checkout',
    cartClearBtn: 'Clear Cart',

    checkoutTitle: 'Complete Your Order',
    checkoutSubtitle: 'Enter your delivery details to complete your order in seconds.',
    fullNameLabel: 'Full Name',
    fullNamePlaceholder: 'e.g. Yacine Benali',
    phoneLabel: 'Phone Number',
    phonePlaceholder: '0550 12 34 56',
    addressLabel: 'Delivery Address',
    addressPlaceholder: 'Street, District, Algiers',
    notesLabel: 'Special Instructions / Notes (Optional)',
    notesPlaceholder: 'e.g. Less spicy, extra sauce, call upon arrival...',
    orderSummaryTitle: 'Order Review',
    confirmOrderBtn: 'Confirm & Place Order',
    processingOrder: 'Sending Order...',

    orderSuccessTitle: '🎉 Order Successfully Placed!',
    orderSuccessDesc: 'Thank you! Your order has been recorded in Sanity CMS and our kitchen is preparing it.',
    orderIdLabel: 'Order Ref:',
    whatsappBtn: 'Send Order via WhatsApp',
    closeBtn: 'Continue Browsing',

    aboutHeadingTag: 'OUR HERITAGE & PASSION',
    aboutHeadingTitle: 'Where Culinary Art Meets Modern Convenience',
    aboutParagraph1:
      'Lumière was founded with a single mission: to blend high-end gastronomy with seamless local food ordering.',
    aboutParagraph2:
      'Every plate is crafted using ethically sourced organic produce, prime cut meats, and fresh Mediterranean seafood.',
    aboutFeature1Title: 'Premium Ingredients',
    aboutFeature1Desc: 'Handpicked daily from top local suppliers & artisanal producers.',
    aboutFeature2Title: 'Master Chefs',
    aboutFeature2Desc: 'Prepared by world-class culinary experts with immense passion.',
    aboutFeature3Title: 'Express Delivery',
    aboutFeature3Desc: 'Delivered hot in high-grade eco-insulated packaging.',

    reviewsTag: 'TESTIMONIALS',
    reviewsTitle: 'What Our Guests Say',
    review1Author: 'Kareem M.',
    review1Text: 'The Wagyu Ribeye was cooked to absolute perfection. Fast delivery and stunning presentation!',
    review1Role: 'Food Critic & Regular Guest',
    review2Author: 'Amel B.',
    review2Text: 'Best fine dining delivery in town. The Valrhona dark chocolate sphere is out of this world.',
    review2Role: 'Verified Orderer',
    review3Author: 'Sofiane K.',
    review3Text: 'Impressive ordering experience. Easy multi-language interface and super quick response on WhatsApp.',
    review3Role: 'Gourmet Lover',

    galleryTag: 'INSTAGRAM GALLERY',
    galleryTitle: 'A Feast for Your Eyes',

    contactTag: 'FIND US & GET IN TOUCH',
    contactTitle: 'Location & Opening Hours',
    addressTitle: 'Address',
    addressText: 'Boulevard 11 December 1960, El Biar, Algiers',
    phoneTitle: 'Direct Line',
    phoneText: '+213 (0) 550 99 88 77',
    hoursTitle: 'Opening Hours',
    hoursText: 'Monday - Sunday: 11:00 AM - 11:30 PM',
    whatsappContactBtn: 'Chat on WhatsApp',

    footerRights: '© 2026 Lumière Restaurant. All rights reserved.',
    footerDesc: 'Modern fine dining & express food ordering platform connected to Sanity CMS.',
  },
  fr: {
    brandName: 'LUMIÈRE',
    navHome: 'Accueil',
    navMenu: 'Carte & Menu',
    navAbout: 'Notre Histoire',
    navReviews: 'Avis Client',
    navContact: 'Accès & Horaires',
    navOrderNow: 'Commander',
    navStudio: 'Studio Sanity',
    cartTitle: 'Votre Panier',

    heroBadge: '✨ Haute Gastronomie & Livraison Express',
    heroTitle: 'Saveurs Exquises, Livrées à Votre Porte',
    heroSubtitle:
      'Découvrez des créations culinaires raffinées préparées par des chefs d’exception avec des produits frais et locaux.',
    heroCtaOrder: 'Commander Maintenant',
    heroCtaMenu: 'Voir le Menu',
    openStatusOpen: '🟢 Ouvert • Commandes Ouvertes',
    openStatusClosed: '🔴 Fermé Actuellement • Ouverture à 11h00',
    urgencyLabel: '🔥 Édition Limitée Aujourd’hui',

    catAll: 'Tous les Plats',
    catStarters: 'Entrées & Bar Cru',
    catMains: 'Plats Principaux',
    catSignature: 'Créations Signature',
    catDesserts: 'Desserts Artisanaux',

    badgePopular: 'Populaire',
    badgeChefsChoice: 'Choix du Chef',
    badgeHouseSpecial: 'Spécialité Maison',
    badgeNew: 'Nouveau',
    badgeLimited: 'Limité Aujourd’hui',

    menuHeadingTitle: 'Chefs-d’œuvre Culinaires',
    menuHeadingSubtitle: 'Conçus par notre chef exécutif avec des ingrédients de saison rigoureusement sélectionnés.',
    addToCart: 'Ajouter au Panier',
    viewDetails: 'Détails du Plat',
    priceCurrency: 'DA',
    pairingTitle: 'Accord Sommelier:',
    ingredientsTitle: 'Ingrédients Principaux:',

    cartHeading: 'Récapitulatif de Commande',
    cartEmpty: 'Votre panier est vide pour le moment. Ajoutez de délicieux plats !',
    cartSubtotal: 'Sous-total',
    cartDeliveryFee: 'Frais de Livraison',
    cartDeliveryFree: 'GRATUIT',
    cartTotal: 'Montant Total',
    cartCheckoutBtn: 'Passer à la Caisse',
    cartClearBtn: 'Vider le Panier',

    checkoutTitle: 'Finaliser la Commande',
    checkoutSubtitle: 'Renseignez vos coordonnées de livraison pour valider votre commande.',
    fullNameLabel: 'Nom Complet',
    fullNamePlaceholder: 'ex. Yacine Benali',
    phoneLabel: 'Numéro de Téléphone',
    phonePlaceholder: '0550 12 34 56',
    addressLabel: 'Adresse de Livraison',
    addressPlaceholder: 'Rue, Quartier, Alger',
    notesLabel: 'Instructions / Remarques (Optionnel)',
    notesPlaceholder: 'ex. Peu épicé, sauce à part, appeler à l’arrivée...',
    orderSummaryTitle: 'Aperçu de la Commande',
    confirmOrderBtn: 'Confirmer & Commander',
    processingOrder: 'Envoi de la Commande...',

    orderSuccessTitle: '🎉 Commande Enregistrée avec Succès !',
    orderSuccessDesc: 'Merci ! Votre commande est transmise dans Sanity CMS et la cuisine la prépare.',
    orderIdLabel: 'Réf Commande:',
    whatsappBtn: 'Envoyer sur WhatsApp',
    closeBtn: 'Continuer le Menu',

    aboutHeadingTag: 'NOTRE HÉRITAGE & PASSION',
    aboutHeadingTitle: 'L’Art Culinaire Élevé au Plus Haut Niveau',
    aboutParagraph1:
      'Lumière est né avec une ambition unique : associer la haute gastronomie avec la simplicité de la commande en ligne.',
    aboutParagraph2:
      'Chaque assiette est réalisée à partir d’ingrédients biologiques, de viandes d’exception et de fruits de mer frais.',
    aboutFeature1Title: 'Ingrédients Premium',
    aboutFeature1Desc: 'Sélectionnés chaque matin auprès des meilleurs producteurs locaux.',
    aboutFeature2Title: 'Grands Chefs',
    aboutFeature2Desc: 'Cuisinés par des experts passionnés et renommés.',
    aboutFeature3Title: 'Livraison Express',
    aboutFeature3Desc: 'Livrées chaudes dans des emballages isothermes écologiques.',

    reviewsTag: 'TÉMOIGNAGES',
    reviewsTitle: 'Ce Que Disent Nos Clients',
    review1Author: 'Kareem M.',
    review1Text: 'Le Ribeye de Wagyu était cuit à la perfection. Livraison rapide et présentation magnifique !',
    review1Role: 'Critique Gastronomique',
    review2Author: 'Amel B.',
    review2Text: 'La meilleure livraison gastronomique d’Alger. La sphère au chocolat Valrhona est incroyable.',
    review2Role: 'Cliente Vérifiée',
    review3Author: 'Sofiane K.',
    review3Text: 'Expérience de commande fluide et super service WhatsApp. Je recommande les yeux fermés !',
    review3Role: 'Amateur de Gastronomie',

    galleryTag: 'GALERIE INSTAGRAM',
    galleryTitle: 'Plaisir des Yeux & Papilles',

    contactTag: 'NOUS TROUVER & CONTACT',
    contactTitle: 'Adresse & Horaires d’Ouverture',
    addressTitle: 'Adresse',
    addressText: 'Boulevard du 11 Décembre 1960, El Biar, Alger',
    phoneTitle: 'Ligne Directe',
    phoneText: '+213 (0) 550 99 88 77',
    hoursTitle: 'Horaires',
    hoursText: 'Lundi - Dimanche : 11h00 - 23h30',
    whatsappContactBtn: 'Discuter sur WhatsApp',

    footerRights: '© 2026 Lumière Restaurant. Tous droits réservés.',
    footerDesc: 'Plateforme moderne de haute gastronomie et commande en ligne connectée à Sanity CMS.',
  },
  ar: {
    brandName: 'لوميير',
    navHome: 'الرئيسية',
    navMenu: 'قائمة الطعام',
    navAbout: 'قصتنا',
    navReviews: 'آراء العملاء',
    navContact: 'الموقع والساعات',
    navOrderNow: 'اطلب الآن',
    navStudio: 'استوديو سانيتي',
    cartTitle: 'سلة الطلبات',

    heroBadge: '✨ أرقى المأكولات وتوصيل سريع',
    heroTitle: 'نكهات فاخرة تصلك حتى باب بيتك',
    heroSubtitle: 'استمتع بأشهى الأطباق المحضرة بأيدي كبار الطهاة من مكونات طازجة ومحلية بكل عناية وإتقان.',
    heroCtaOrder: 'اطلب الطعام الآن',
    heroCtaMenu: 'استعرض القائمة',
    openStatusOpen: '🟢 مفتوح الآن • نستقبل طلباتكم',
    openStatusClosed: '🔴 مغلق حالياً • يفتح 11:00 صباحاً',
    urgencyLabel: '🔥 طبق محدد الكمية اليوم',

    catAll: 'جميع الأطباق',
    catStarters: 'المقبلات والبحريات',
    catMains: 'الأطباق الرئيسية',
    catSignature: 'الأطباق الخاصة',
    catDesserts: 'الحلويات الفاخرة',

    badgePopular: 'الأكثر طلباً',
    badgeChefsChoice: 'اختيار الشيف',
    badgeHouseSpecial: 'طبق البيت المميز',
    badgeNew: 'جديد',
    badgeLimited: 'كمية محدودة اليوم',

    menuHeadingTitle: 'تحف طهوية فاخرة',
    menuHeadingSubtitle: 'معدة بعناية من قِبل كبار طهاتنا باستخدام أفضل المكونات الموسمية.',
    addToCart: 'إضافة إلى الطلب',
    viewDetails: 'عرض التفاصيل',
    priceCurrency: 'د.ج',
    pairingTitle: 'المشروب المقترح:',
    ingredientsTitle: 'المكونات الرئيسية:',

    cartHeading: 'ملخص طلبك',
    cartEmpty: 'سلتك فارغة حالياً. أضف أشهى الأطباق للبدء!',
    cartSubtotal: 'المجموع الفرعي',
    cartDeliveryFee: 'رسوم التوصيل',
    cartDeliveryFree: 'مجاني',
    cartTotal: 'المبلغ الإجمالي',
    cartCheckoutBtn: 'المتابعة للشراء',
    cartClearBtn: 'تفرغ السلة',

    checkoutTitle: 'إتمام الطلب',
    checkoutSubtitle: 'أدخل تفاصيل التوصيل لإتمام طلبك في ثوانٍ معدودة.',
    fullNameLabel: 'الاسم الكامل',
    fullNamePlaceholder: 'مثال: ياسين بن علي',
    phoneLabel: 'رقم الهاتف',
    phonePlaceholder: '0550 12 34 56',
    addressLabel: 'عنوان التوصيل',
    addressPlaceholder: 'الشارع، الحي، الجزائر العاصمة',
    notesLabel: 'ملاحظات خاصة (اختياري)',
    notesPlaceholder: 'مثال: قليل التوابل، الصلصة جانباً، الاتصال عند الوصول...',
    orderSummaryTitle: 'مراجعة الطلب',
    confirmOrderBtn: 'تأكيد وإرسال الطلب',
    processingOrder: 'جاري إرسال الطلب...',

    orderSuccessTitle: '🎉 تم إرسال طلبك بنجاح!',
    orderSuccessDesc: 'شكراً لك! تم تسجيل طلبك في نظام Sanity CMS وطهاتنا يقومون بتحضيره الآن.',
    orderIdLabel: 'رقم الطلب:',
    whatsappBtn: 'إرسال الطلب عبر واتساب',
    closeBtn: 'متابعة التصفح',

    aboutHeadingTag: 'تراثنا وشغفنا',
    aboutHeadingTitle: 'حيث يلتقي فن الطهي مع التوصيل العصري',
    aboutParagraph1:
      'تأسست "لوميير" برؤية فريدة: دمج أرقى فنون الطهي العالمي مع سهولة الطلب الإلكتروني السريع.',
    aboutParagraph2:
      'يتم إعداد كل طبق باستخدام مكونات عضوية طازجة، ولحوم فاخرة، وأسماك البحر الأبيض المتوسط الطازجة يومياً.',
    aboutFeature1Title: 'مكونات فاخرة',
    aboutFeature1Desc: 'مختارة يومياً من أفضل المزارعين والموردين المحليين.',
    aboutFeature2Title: 'طهي عالميون',
    aboutFeature2Desc: 'بأيدي طهاة محترفين أصحاب خبرة وشغف عالي.',
    aboutFeature3Title: 'توصيل سريع',
    aboutFeature3Desc: 'تصلك ساخنة في تغليف حراري صديق للبيئة.',

    reviewsTag: 'آراء وانطباعات',
    reviewsTitle: 'ماذا يقول ضيوفنا',
    review1Author: 'كريم م.',
    review1Text: 'طبق الواجيو ريب آي كان مطهواً بإتقان تام. توصيل سريع وتقديم راقٍ جداً!',
    review1Role: 'ناقد طعام وزبون دائم',
    review2Author: 'أمل ب.',
    review2Text: 'أفضل مطعم فاخر يوصل للمنزل في الجزائر. كرة الشوكولاتة الفاخرة خيالية.',
    review2Role: 'زبونة معتمدة',
    review3Author: 'سفيان ك.',
    review3Text: 'تجربة طلب سلسة للغاية وخدمة واتساب سريعة وممتازة. أنصح به بشدة!',
    review3Role: 'عاشق للمأكولات الفاخرة',

    galleryTag: 'معرض الصور',
    galleryTitle: 'متعة للعين والذوق',

    contactTag: 'الموقع والتواصل',
    contactTitle: 'العنوان وساعات العمل',
    addressTitle: 'العنوان',
    addressText: 'شارع 11 ديسمبر 1960، الأبيار، الجزائر العاصمة',
    phoneTitle: 'الهاتف المباشر',
    phoneText: '+213 (0) 550 99 88 77',
    hoursTitle: 'ساعات العمل',
    hoursText: 'الإثنين - الأحد: 11:00 صباحاً - 11:30 مساءً',
    whatsappContactBtn: 'المحادثة عبر واتساب',

    footerRights: '© 2026 مطعم لوميير. جميع الحقوق محفوظة.',
    footerDesc: 'منصة مطعم فاخرة وتوصيل سريع مرتبطة بـ Sanity CMS.',
  },
}
