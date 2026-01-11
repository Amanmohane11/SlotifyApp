import { StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';
import { spacing } from '../../theme/spacing';
import { typography } from '../../theme/typography';

export default StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: colors.background,
    padding: spacing.screenPadding,
  },

  /* ---------------- HEADINGS ---------------- */

  title: {
    fontSize: typography.fontSize.xl,
    fontWeight: typography.fontWeight.bold,
    color: colors.textPrimary,
    textAlign: 'center',
    marginBottom: spacing.lg,
  },

  subtitle: {
    fontSize: typography.fontSize.md,
    fontWeight: typography.fontWeight.medium,
    color: colors.textSecondary,
    marginBottom: spacing.md,
  },

  /* ---------------- OPTIONS ---------------- */

  optionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },

  optionText: {
    marginLeft: spacing.md,
    fontSize: typography.fontSize.md,
    color: colors.textPrimary,
  },

  radio: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },

  radioSelected: {
  width: 10,
  height: 10,
  borderRadius: 5,
  backgroundColor: colors.textInverse,
  },

  /* ---------------- OTHER INPUT ---------------- */

  input: {
    marginTop: spacing.md,
    minHeight: 90,
    borderRadius: spacing.radiusMd,
    backgroundColor: colors.surfaceLight,
    color: colors.textPrimary,
    padding: spacing.md,
    fontSize: typography.fontSize.sm,
    textAlignVertical: 'top',
  },

  /* ---------------- ERROR ---------------- */

  errorText: {
    marginTop: spacing.sm,
    fontSize: typography.fontSize.sm,
    color: colors.error,
    textAlign: 'center',
  },
});
