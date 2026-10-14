import { useCallback, useEffect, useState } from 'react';

export type Theme = 'light' | 'dark';

const STORAGE_KEY = 'theme';
const THEME_COLORS: Record<Theme, string> = { light: '#f3f2f6', dark: '#0d0d12' };

function readStoredTheme(): Theme | null {
  try {
    const value = localStorage.getItem(STORAGE_KEY);
    return value === 'light' || value === 'dark' ? value : null;
  } catch {
    return null;
  }
}

function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', THEME_COLORS[theme]);
}

/**
 * The inline script in index.html sets the initial data-theme before paint;
 * this hook reads it back, handles toggling, and follows the OS setting
 * until the visitor makes an explicit choice.
 */
export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() =>
    document.documentElement.dataset.theme === 'light' ? 'light' : 'dark',
  );

  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: light)');
    function onChange(e: MediaQueryListEvent) {
      if (readStoredTheme()) return;
      const next: Theme = e.matches ? 'light' : 'dark';
      applyTheme(next);
      setTheme(next);
    }
    media.addEventListener('change', onChange);
    return () => media.removeEventListener('change', onChange);
  }, []);

  const toggleTheme = useCallback(() => {
    const next: Theme = theme === 'light' ? 'dark' : 'light';
    applyTheme(next);
    setTheme(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Storage unavailable (private mode); the choice just won't persist.
    }
  }, [theme]);

  return { theme, toggleTheme };
}
