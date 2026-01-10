import { StyleSheet } from 'react-native';
import { colors } from '../../../theme/colors';
import { spacing } from '../../../theme/spacing';
import { typography } from '../../../theme/typography';

export const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 12,
    padding: spacing.md,
    marginBottom: spacing.lg,
    backgroundColor: colors.surface,
  },

  row: {
    flexDirection: 'row',
    paddingVertical: spacing.sm,
  },

  headerRow: {
    borderBottomWidth: 1,
    borderColor: colors.border,
    paddingBottom: spacing.sm,
    marginBottom: spacing.sm,
  },

  cell: {
    flex: 1,
    fontSize: typography.fontSize.sm,
    color: colors.textPrimary,
  },

  headerText: {
    color: colors.textSecondary,
    fontWeight: typography.fontWeight.semibold,
  },

  center: {
    textAlign: 'center',
  },

  right: {
    textAlign: 'right',
  },

  divider: {
    height: 1,
    backgroundColor: colors.border,
    marginVertical: spacing.sm,
  },

  totalText: {
    fontWeight: typography.fontWeight.bold,
  },

  totalPrice: {
    color: colors.primary,
    fontWeight: typography.fontWeight.bold,
  },
});
