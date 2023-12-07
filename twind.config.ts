import { Options } from "$fresh/plugins/twind.ts";

export default {
  selfURL: import.meta.url,
  theme: {
    extend: {
      fontFamily: {
        "montserrat": ["Montserrat"],
        "foldit": ["Foldit"],
        "work": ["Work Sans"],
        "lato": ["Lato"],
        "garamond": ["Garamond"],
        "roboto": ["Roboto"],
        "poppins": ["Poppins"]
      },
    },
  }
} as Options;
