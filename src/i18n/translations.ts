export type Language = 'en' | 'fr'

export interface TranslationDictionary {
  // Navigation & Brand
  brandName: string
  navHome: string
  navMenu: string
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
  quantityLabel: string

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
    navReviews: 'Reviews',
    navContact: 'Location',
    navOrderNow: 'Order Now',
    navStudio: 'Sanity Studio',
    cartTitle: 'Your Cart',

    heroTitle: 'LUMIÈRE',
    heroTagline: 'Haute Gastronomie & Dining Experience',
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

    menuHeadingTag: 'Selection',
    menuHeadingTitle: 'Curated Menu',
    menuHeadingSubtitle:
      'Composed with seasonal produce, prime ingredients, and time-honored technique.',
    addToCart: 'Add to Order',
    viewDetails: 'Details',
    priceCurrency: 'DA',
    pairingTitle: 'Chef\'s Culinary Pairing',
    ingredientsTitle: 'Ingredients',
    quantityLabel: 'Quantity',

    cartHeading: 'Your Selection',
    cartEmpty: 'Your selection is empty. Explore our menu to begin.',
    cartSubtotal: 'Subtotal',
    cartDeliveryFee: 'Delivery',
    cartDeliveryFree: 'Complimentary',
    cartTotal: 'Total',
    cartCheckoutBtn: 'Place Order',
    cartClearBtn: 'Clear',

    checkoutTitle: 'Complete Your Order',
    checkoutSubtitle: 'Provide your contact details and our team will handle the rest.',
    fullNameLabel: 'Full Name',
    fullNamePlaceholder: 'e.g. Yacine Benali',
    phoneLabel: 'Phone Number',
    phonePlaceholder: '0550 12 34 56',
    addressLabel: 'Delivery Address',
    addressPlaceholder: 'Street, District, Algiers',
    notesLabel: 'Special Notes (Optional)',
    notesPlaceholder: 'Dietary preferences or delivery notes...',
    orderSummaryTitle: 'Order Summary',
    confirmOrderBtn: 'Confirm & Send Order',
    processingOrder: 'Transmitting...',

    orderReceivedTitle: 'Order Received',
    orderReceivedDesc:
      'Thank you. Your order has been registered and is being prepared with utmost care.',
    orderIdLabel: 'Reference ID',
    closeBtn: 'Return to Menu',

    reviewsTag: 'Testimonials',
    reviewsTitle: 'Guest Reflections',
    review1Author: 'Kareem M.',
    review1Text:
      'The Wagyu Ribeye was executed to absolute perfection. Exceptional presentation and remarkable delivery.',
    review1Role: 'Food Critic',
    review2Author: 'Amel B.',
    review2Text:
      'The finest delivery dining experience in Algiers. The Valrhona dark chocolate sphere is extraordinary.',
    review2Role: 'Verified Guest',
    review3Author: 'Sofiane K.',
    review3Text:
      'A seamless dining experience. The attention to detail and packaging are incomparable.',
    review3Role: 'Gourmet Enthusiast',

    contactTag: 'Location & Hours',
    contactTitle: 'Visit & Reserve',
    addressTitle: 'Address',
    addressText: 'Boulevard 11 December 1960, El Biar, Algiers',
    phoneTitle: 'Telephone',
    phoneText: '+213 (0) 550 99 88 77',
    hoursTitle: 'Hours',
    hoursText: 'Every day: 11:00 — 23:30',
    contactCallBtn: 'Reserve a Table',

    footerRights: '© 2026 Lumière Restaurant.',
    footerDesc: 'Haute gastronomy & express delivery service.',
  },
  fr: {
    brandName: 'LUMIÈRE',
    navHome: 'Accueil',
    navMenu: 'Localisation et Réservation',
    navReviews: 'Avis',
    navContact: 'Accès',
    navOrderNow: 'Commander',
    navStudio: 'Studio Sanity',
    cartTitle: 'Votre Panier',

    heroTitle: 'LUMIÈRE',
    heroTagline: 'Haute Gastronomie & Expérience Culinaire',
    heroCtaMenu: 'Voire le menu et Commander',

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

    menuHeadingTag: 'Sélection',
    menuHeadingTitle: 'Plats Sélectionnés',
    menuHeadingSubtitle:
      'Chaque création est composée avec précision — produits de saison et ingrédients d\'exception.',
    addToCart: 'Ajouter au Panier',
    viewDetails: 'Détails',
    priceCurrency: 'DA',
    pairingTitle: 'Accord Culinaire Signature',
    ingredientsTitle: 'Ingrédients',
    quantityLabel: 'Quantité',

    cartHeading: 'Votre Sélection',
    cartEmpty: 'Votre panier est vide. Parcourez la carte pour composer votre repas.',
    cartSubtotal: 'Sous-total',
    cartDeliveryFee: 'Livraison',
    cartDeliveryFree: 'Offerte',
    cartTotal: 'Total',
    cartCheckoutBtn: 'Valider la Commande',
    cartClearBtn: 'Vider',

    checkoutTitle: 'Finaliser la Commande',
    checkoutSubtitle: 'Renseignez vos coordonnées et notre équipe s\'occupe du reste.',
    fullNameLabel: 'Nom Complet',
    fullNamePlaceholder: 'ex. Yacine Benali',
    phoneLabel: 'Téléphone',
    phonePlaceholder: '0550 12 34 56',
    addressLabel: 'Adresse de Livraison',
    addressPlaceholder: 'Rue, Quartier, Alger',
    notesLabel: 'Notes Particulières (Optionnel)',
    notesPlaceholder: 'Préférences alimentaires ou précisions d\'accès...',
    orderSummaryTitle: 'Récapitulatif de la Commande',
    confirmOrderBtn: 'Confirmer la Commande',
    processingOrder: 'Transmission...',

    orderReceivedTitle: 'Commande Reçue',
    orderReceivedDesc:
      'Merci. Votre commande a bien été enregistrée et notre cuisine la prépare avec le plus grand soin.',
    orderIdLabel: 'Référence',
    closeBtn: 'Retour au Menu',

    reviewsTag: 'Témoignages',
    reviewsTitle: 'Ce Que Disent Nos Clients',
    review1Author: 'Kareem M.',
    review1Text:
      'Le Ribeye de Wagyu était cuit à la perfection. Présentation remarquable et service très réactif.',
    review1Role: 'Critique Gastronomique',
    review2Author: 'Amel B.',
    review2Text:
      'La meilleure expérience culinaire livrée à Alger. La sphère en chocolat est juste extraordinaire.',
    review2Role: 'Cliente Vérifiée',
    review3Author: 'Sofiane K.',
    review3Text:
      'Une expérience de commande fluide. Le soin apporté aux détails et au packaging est incomparable.',
    review3Role: 'Amateur de Gastronomie',

    contactTag: 'Accès & Horaires',
    contactTitle: 'Nous Trouver',
    addressTitle: 'Adresse',
    addressText: 'Boulevard du 11 Décembre 1960, El Biar, Alger',
    phoneTitle: 'Téléphone',
    phoneText: '+213 (0) 550 99 88 77',
    hoursTitle: 'Horaires',
    hoursText: 'Tous les jours : 11h00 — 23h30',
    contactCallBtn: 'Réserver une Table',

    footerRights: '© 2026 Lumière Restaurant.',
    footerDesc: 'Haute gastronomie & service de livraison sur-mesure.',
  },
}
