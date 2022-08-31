export const useTheme = () => {
  const themeMode = localStorage.getItem('wd-theme-mode')
  themeMode == 'dark' && document.documentElement.classList.add('dark')
  themeMode != 'dark' && document.documentElement.classList.remove('dark')
}
