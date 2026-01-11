import { StyleSheet } from 'react-native';
import { colors } from '../../../theme/colors';
import { spacing } from '../../../theme/spacing';
import { typography } from '../../../theme/typography';

export const styles = StyleSheet.create({
  container: {
    padding: spacing.screenPadding,
    backgroundColor: colors.background,
  },

  title: {
    fontSize: typography.fontSize.xl,
    fontWeight: typography.fontWeight.bold,
    color: colors.primary,
    marginBottom: spacing.lg,
  },

  row: {
    backgroundColor: colors.surface,
    borderRadius: spacing.radiusMd,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.md,
    marginBottom: spacing.sm,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.border,
  },

  label: {
    fontSize: typography.fontSize.sm,
    color: colors.textPrimary,
  },

  value: {
    fontSize: typography.fontSize.sm,
    color: colors.textSecondary,
  },

  link: {
    fontSize: typography.fontSize.sm,
    color: colors.primary,
  },
});
