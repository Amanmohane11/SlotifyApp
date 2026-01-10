import { StyleSheet } from 'react-native';
import { colors } from '../../../../theme/colors';
import { spacing } from '../../../../theme/spacing';
import { typography } from '../../../../theme/typography';

export const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface,
    borderRadius: 16,
    padding: spacing.md,
    marginBottom: spacing.lg,
    borderWidth: 1,
    borderColor: colors.border,
  },

  image: {
    width: '100%',
    height: 140,
    borderRadius: 12,
    marginBottom: spacing.md,
  },

  salon: {
    fontSize: typography.fontSize.md,
    color: colors.primary,
    fontWeight: typography.fontWeight.semibold,
    marginBottom: spacing.xs,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.md,
  },

  date: {
    color: colors.textSecondary,
  },

  statusBadge: {
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },

  statusText: {
    color: colors.primary,
    fontSize: typography.fontSize.xs,
  },

  actionRow: {
    flexDirection: 'row',
  },
});
