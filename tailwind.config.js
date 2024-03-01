/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Roboto: ["Roboto", "sans-serif"],
        RobotoSlab: ["Roboto Slab", "sans-serif"],
      },
      screens: {},
    },
    backgroundImage: {
      DesktopPlane: "url('./Src/Images/DesktopPlane.avif')",
      MobileHeaderImage: "url('./Src/Images/MobileHeaderImage.png')",
      menu: "url('./Src/Assets/menu.svg')",
      closeIcon: "url('./Src/Assets/close.svg')",
      saveIcon: "url('./Src/Assets/bookmark.svg')",
    },
  },
  plugins: [],
};
