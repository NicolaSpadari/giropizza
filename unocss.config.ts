import {
    defineConfig,
    presetAttributify,
    presetIcons,
    presetTagify,
    presetTypography,
    presetUno,
    presetWebFonts,
    transformerDirectives,
    transformerVariantGroup
} from "unocss";

export default defineConfig({
    shortcuts: [
        ["crate", "container mx-auto"]
    ],
    safelist: [
        "i-fa-solid-drumstick-bite",
        "i-fa-solid-fish",
        "i-fa-solid-cheese",
        "i-fa-solid-seedling",
        "i-fa-solid-pepper-hot",
        "i-fa-solid-fill",
        "i-fa-solid-times",
    ],
    presets: [
        presetUno(),
        presetTagify(),
        presetAttributify(),
        presetIcons({
            extraProperties: {
                "display": "inline-block",
                "vertical-align": "middle"
            }
        }),
        presetTypography(),
        presetWebFonts({
            fonts: {
                heading: {
                    name: "Fugaz One",
                    weights: ["400", "700"]
                },
                sans: {
                    name: "DM Sans",
                    weights: ["400", "700", "900"]
                }
            }
        })
    ],
    theme: {
        breakpoints: {
            sm: "576px",
            md: "768px",
            lg: "992px",
            xl: "1200px",
            xxl: "1400px",
            uw: "2000px"
        }
    },
    transformers: [
        transformerDirectives(),
        transformerVariantGroup()
    ]
});
