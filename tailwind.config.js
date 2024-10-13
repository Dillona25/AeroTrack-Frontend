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
      DesktopPlane: "url('../src/Images/DesktopPlane.avif')",
      MobileHeaderImage: "url('../src/Images/MobileHeaderImage.png')",
      menu: "url('../src/Assets/menu.svg')",
      menuBlack: "url('../src/Assets/menuBlack.svg')",
      closeIcon: "url('../src/Assets/close.svg')",
      saveIcon: "url('../src/Assets/bookmark.svg')",
      saveIconSaved: "url('../src/Assets/bookmarkSaved.svg')",
      deleteIcon: "url('../src/Assets/trash.svg')",
      deleteHover: "url('../src/Assets/trashBlack.svg')",
      saveIconHover: "url('../src/Assets/bookmarkBlack.svg')",
      LinkedInIcon: "url('../src/Assets/linkedIn.svg')",
    },
  },
  plugins: [],
};
