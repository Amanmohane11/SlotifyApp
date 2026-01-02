import { StyleSheet } from 'react-native';
import { colors } from '../../../theme/colors';
import { spacing } from '../../../theme/spacing';
import { typography } from '../../../theme/typography';

export const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface,
    borderRadius: spacing.radiusLg,
    padding: spacing.md,
    borderWidth: 1,
    borderColor: colors.borderGold,
    marginBottom: spacing.lg,
  },

  sectionTitle: {
    fontSize: typography.fontSize.md,
    fontWeight: typography.fontWeight.semibold,
    color: colors.primary,
    marginBottom: spacing.md,
    marginTop: spacing.sm,
  },

  serviceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: spacing.sm,
  },

  serviceName: {
    fontSize: typography.fontSize.sm,
    color: colors.textPrimary,
  },

  serviceTime: {
    fontSize: typography.fontSize.xs,
    color: colors.textMuted,
    marginTop: spacing.xs,
  },

  servicePrice: {
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.semibold,
    color: colors.textPrimary,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: spacing.sm,
  },

  label: {
    fontSize: typography.fontSize.sm,
    color: colors.textSecondary,
  },

  value: {
    fontSize: typography.fontSize.sm,
    color: colors.textPrimary,
  },

  discountValue: {
    fontSize: typography.fontSize.sm,
    color: colors.success,
  },

  divider: {
    height: 1,
    backgroundColor: colors.border,
    marginVertical: spacing.md,
  },

  totalRow: {
    marginTop: spacing.sm,
  },

  totalLabel: {
    fontSize: typography.fontSize.md,
    fontWeight: typography.fontWeight.semibold,
    color: colors.textPrimary,
  },

  totalValue: {
    fontSize: typography.fontSize.md,
    fontWeight: typography.fontWeight.semibold,
    color: colors.primary,
  },

  policyText: {
    fontSize: typography.fontSize.sm,
    color: colors.textMuted,
    lineHeight: 20,
  },
});
