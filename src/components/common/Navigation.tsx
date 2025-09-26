import React from 'react';
import { ArrowLeft, Home, LogOut, Globe } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { useAuth } from '../../contexts/AuthContext';
import { Language } from '../../types';

interface NavigationProps {
  onBack?: () => void;
  onHome?: () => void;
  showBack?: boolean;
  showHome?: boolean;
  className?: string;
}

export const Navigation: React.FC<NavigationProps> = ({
  onBack,
  onHome,
  showBack = true,
  showHome = true,
  className = ''
}) => {
  const { language, setLanguage, t } = useLanguage();
  const { logout, offlineMode } = useAuth();

  const languages: { code: Language; name: string; flag: string }[] = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'hi', name: 'हिंदी', flag: '🇮🇳' },
    { code: 'od', name: 'ଓଡ଼ିଆ', flag: '🇮🇳' }
  ];

  const currentLang = languages.find(lang => lang.code === language);

  return (
    <div className={`flex items-center justify-between p-4 bg-white shadow-sm ${className}`}>
      <div className="flex items-center space-x-2">
        {showBack && onBack && (
          <button
            onClick={onBack}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            title={t('nav.back')}
          >
            <ArrowLeft size={20} />
          </button>
        )}
        {showHome && onHome && (
          <button
            onClick={onHome}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            title={t('nav.home')}
          >
            <Home size={20} />
          </button>
        )}
      </div>

      <div className="flex items-center space-x-2">
        {/* Language Toggle */}
        <div className="relative group">
          <button className="flex items-center space-x-1 p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <Globe size={16} />
            <span className="text-sm">{currentLang?.flag}</span>
          </button>
          <div className="absolute right-0 top-full mt-1 bg-white border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => setLanguage(lang.code)}
                className={`flex items-center space-x-2 px-3 py-2 text-sm hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg ${
                  language === lang.code ? 'bg-blue-50 text-blue-600' : ''
                }`}
              >
                <span>{lang.flag}</span>
                <span>{lang.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Logout/Exit */}
        {!offlineMode && (
          <button
            onClick={logout}
            className="flex items-center space-x-1 p-2 hover:bg-gray-100 rounded-lg transition-colors text-red-600"
            title={t('nav.logout')}
          >
            <LogOut size={16} />
            <span className="text-sm">{t('nav.logout')}</span>
          </button>
        )}
        
        {offlineMode && (
          <button
            onClick={logout}
            className="flex items-center space-x-1 p-2 hover:bg-gray-100 rounded-lg transition-colors text-gray-600"
            title={t('nav.exit')}
          >
            <LogOut size={16} />
            <span className="text-sm">{t('nav.exit')}</span>
          </button>
        )}
      </div>
    </div>
  );
};