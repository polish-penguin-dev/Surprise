tailwind.config = {
    theme: {
        extend: {
            keyframes: {
                scroll: {
                    "0%": { top: "-100%" },
                    "100%": { top: "100%" }
                }
            },

            animation: {
                scroll: "scroll 20s linear infinite"
            }
        }
    }
}