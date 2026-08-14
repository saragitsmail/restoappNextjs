'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'
import { Language, TranslationDictionary, translations } from '@/i18n/translations'

interface LanguageContextType {
  lang: Language
  setLang: (lang: Language) => void
  t: TranslationDictionary
  isRTL: boolean
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>('fr') // Default French

  useEffect(() => {
    const savedLang = localStorage.getItem('resto_lang') as Language | null
    if (savedLang && (savedLang === 'en' || savedLang === 'fr')) {
      setLangState(savedLang)
    }
  }, [])

  const setLang = (newLang: Language) => {
    setLangState(newLang)
    localStorage.setItem('resto_lang', newLang)
  }

  const isRTL = false

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = lang
      document.documentElement.dir = 'ltr'
    }
  }, [lang])

  const t = translations[lang] || translations.fr

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, isRTL }}>
      <div dir="ltr">
        {children}
      </div>
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
