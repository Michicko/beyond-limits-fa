import { Roboto, Poppins } from "next/font/google";
import localFont from "next/font/local";

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
  display: "swap",
  variable: "--roboto",
});

const formula_condensed = localFont({
  src: [
    {
      path: "../../public/fonts/FormulaCondensed-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/FormulaCondensed-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--formula-condensed",
});

const clash_grotesk = localFont({
  src: [
    {
      path: "../../public/fonts/ClashGrotesk-Extralight.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../public/fonts/ClashGrotesk-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/ClashGrotesk-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/ClashGrotesk-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/ClashGrotesk-Semibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/ClashGrotesk-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--clash-grotesk",
});

const thicccboi = localFont({
  src: [
    {
      path: "../../public/fonts/THICCCBOI-Thin.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/fonts/THICCCBOI-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/THICCCBOI-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/THICCCBOI-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/THICCCBOI-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/THICCCBOI-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/THICCCBOI-ExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../public/fonts/THICCCBOI-Black.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--thicccboi",
});

export { formula_condensed, roboto, clash_grotesk, thicccboi };
