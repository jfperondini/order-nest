/** @type {import('tailwindcss').Config} */
export const content = ['./src/**/*.{html,js}']
export const theme = {
  extend: {
    backgroundImage: {
      'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      'gradient-conic':
        'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
    },
    animation: {
      'spin-slow': 'spin 2s linear infinite',
      'spin-fast': 'spin 0.5s linear infinite'
    },
    colors: {
      'primary-blue': '#1DA1F2'
    }
  }
}
export const plugins = []

