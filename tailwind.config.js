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
        leftToRight: "leftToRight 6s ease-in-out infinite",
      },
      keyframes: {
        leftToRight: {
          "0%": { transform: "translateX(-100%)" },
          "50%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
    },
    backgroundImage: {
      DesktopPlane: "url('../src/images/DesktopPlane.avif')",
      MobileHeaderImage: "url('./images/MobileHeaderImage.png')",
      menu: "url('../src/assets/menu.svg')",
      menuBlack: "url('../src/assets/menuBlack.svg')",
      closeIcon: "url('../src/assets/close.svg')",
      saveIcon: "url('../src/assets/bookmark.svg')",
      saveIconSaved: "url('../src/assets/bookmarkSaved.svg')",
      deleteIcon: "url('../src/assets/trash.svg')",
      deleteHover: "url('../src/assets/trashBlack.svg')",
      saveIconHover: "url('../src/assets/bookmarkBlack.svg')",
      LinkedInIcon: "url('../src/assets/linkedIn.svg')",
    },
  },
  plugins: [],
};
