/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Roboto: ["Roboto", "sans-serif"],
        RobotoSlab: ["Roboto Slab", "sans-serif"],
      },
      animation: {
        bounce200: "bounce 1s infinite 200ms",
        bounce400: "bounce 1s infinite 400ms",
      },
    },
    backgroundImage: {
      DesktopPlane: "url('./Src/Images/DesktopPlane.avif')",
      MobileHeaderImage: "url('./Src/Images/MobileHeaderImage.png')",
      menu: "url('./Src/Assets/menu.svg')",
      menuBlack: "url('./Src/Assets/menuBlack.svg')",
      closeIcon: "url('./Src/Assets/close.svg')",
      saveIcon: "url('./Src/Assets/bookmark.svg')",
      LinkedInIcon: "url('./Src/Assets/linkedIn.svg')",
    },
  },
  plugins: [],
};
