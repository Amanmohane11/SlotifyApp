import { StyleSheet } from 'react-native';
import { colors } from '../../../theme/colors';
import { spacing } from '../../../theme/spacing';
import { typography } from '../../../theme/typography';

export const styles = StyleSheet.create({
  /* =====================
     CONTAINER
  ===================== */
  container: {
    flexGrow: 1,
    backgroundColor: colors.background,
    padding: spacing.screenPadding,
    paddingBottom: spacing.xxl,
  },

  /* =====================
     PROCEED BUTTON
  ===================== */
  proceedBtn: {
    backgroundColor: colors.buttonPrimary,
    paddingVertical: spacing.buttonPaddingVertical + 6,
    borderRadius: spacing.radiusXl,
    marginTop: spacing.xl,

    // Shadow for premium look
    shadowColor: colors.shadow,
    shadowOpacity: 0.35,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
    elevation: 6,
  },

  proceedText: {
    textAlign: 'center',
    fontSize: typography.fontSize.lg,
    fontWeight: typography.fontWeight.semibold,
    color: colors.textInverse,
  },
});
