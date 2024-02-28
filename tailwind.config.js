/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ModalBackground: "rgba(0, 0, 0, 0.5)",
      },
      fontFamily: {
        Roboto: ["Roboto", "sans-serif"],
        RobotoSlab: ["Roboto Slab", "sans-serif"],
      },
    },
    backgroundImage: {
      DesktopPlane: "url('./Src/Images/DesktopPlane.avif')",
      MobileHeaderImage: "url('./Src/Images/MobileHeaderImage.png')",
      menu: "url('./Src/Assets/menu.svg')",
      closeIcon: "url('./Src/Assets/close.svg')",
    },
  },
  plugins: [],
};
