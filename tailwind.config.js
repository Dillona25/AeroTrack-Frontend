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
      DesktopPlane: "url('../src/Images/DesktopPlane.avif')",
      MobileHeaderImage: "url('../Src/Images/MobileHeaderImage.png')",
      menu: "url('../src/Assets/menu.svg')",
      menuBlack: "url('../src/Assets/menuBlack.svg')",
      closeIcon: "url('../src/Assets/close.svg')",
      saveIcon: "url('../src/Assets/bookmark.svg')",
      deleteIcon: "url('../src/Assets/trash.svg')",
      deleteHover: "url('../src/Assets/trashBlack.svg')",
      saveIconHover: "url('../src/Assets/bookmarkBlack.svg')",
      LinkedInIcon: "url('../src/Assets/linkedIn.svg')",
    },
  },
  plugins: [],
};
