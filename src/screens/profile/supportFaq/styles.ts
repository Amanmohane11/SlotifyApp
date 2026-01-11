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
    marginBottom: spacing.xs,
  },

  subtitle: {
    fontSize: typography.fontSize.sm,
    color: colors.textSecondary,
    marginBottom: spacing.lg,
  },

  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: spacing.lg,
    marginBottom: spacing.sm,
  },

  sectionTitle: {
    fontSize: typography.fontSize.md,
    fontWeight: typography.fontWeight.semibold,
    color: colors.textPrimary,
  },

  toggleText: {
    fontSize: typography.fontSize.sm,
    color: colors.primary,
  },

  faqCard: {
    backgroundColor: colors.surface,
    borderRadius: spacing.radiusMd,
    padding: spacing.md,
    marginBottom: spacing.sm,
    borderWidth: 1,
    borderColor: colors.border,
  },

  faqQuestion: {
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.medium,
    color: colors.textPrimary,
  },

  faqAnswer: {
    marginTop: spacing.sm,
    fontSize: typography.fontSize.sm,
    lineHeight: typography.lineHeight.md,
    color: colors.textSecondary,
  },

  supportText: {
    fontSize: typography.fontSize.sm,
    color: colors.textSecondary,
    marginBottom: spacing.sm,
    marginTop: spacing.xs,
  },

  input: {
    backgroundColor: colors.surface,
    borderRadius: spacing.radiusMd,
    padding: spacing.md,
    color: colors.textPrimary,
    minHeight: 120,
    textAlignVertical: 'top',
    borderWidth: 1,
    borderColor: colors.border,
  },

  placeholder: {
    color: colors.textMuted,
  },

  submitButton: {
    marginTop: spacing.md,
  },
});
