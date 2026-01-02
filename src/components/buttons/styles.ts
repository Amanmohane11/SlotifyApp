import { StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';
import { spacing } from '../../theme/spacing';
import { typography } from '../../theme/typography';

export const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.buttonPrimary,
    paddingVertical: spacing.buttonPaddingVertical,
    paddingHorizontal: spacing.buttonPaddingHorizontal,
    borderRadius: spacing.radiusLg,
    alignItems: 'center',
    justifyContent: 'center',
  },

  disabledButton: {
    backgroundColor: colors.buttonDisabled,
  },

  text: {
    color: colors.textInverse,
    fontSize: typography.fontSize.md,
    fontWeight: typography.fontWeight.semibold,
  },

  /* ───────── OUTLINE VARIANT ───────── */

  outlineButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: colors.buttonPrimary,
  },

  outlineText: {
    color: colors.buttonPrimary,
  },
});
