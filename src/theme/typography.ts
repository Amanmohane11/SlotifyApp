// src/theme/typography.ts

export const typography = {
  /* ======================
       FONT FAMILY
    ====================== */
  fontFamily: {
    regular: 'System',
    medium: 'System',
    semibold: 'System',
    bold: 'System',
  },

  /* ======================
       FONT SIZES
    ====================== */
  fontSize: {
    xs: 12, // captions, hints
    sm: 14, // secondary text
    md: 16, // body text
    lg: 18, // section titles
    xl: 22, // screen titles
    xxl: 28, // main headers
  },

  /* ======================
       LINE HEIGHTS
    ====================== */
  lineHeight: {
    sm: 18,
    md: 22,
    lg: 26,
    xl: 32,
  },

  /* ======================
       FONT WEIGHTS
    ====================== */
  fontWeight: {
    regular: '400' as const,
    medium: '500' as const,
    semibold: '600' as const,
    bold: '700' as const,
  },
};
