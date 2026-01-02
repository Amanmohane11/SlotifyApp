import { StyleSheet } from 'react-native';
import { colors } from '../../../../theme/colors';
import { spacing } from '../../../../theme/spacing';
import { typography } from '../../../../theme/typography';

export const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surface,
    padding: spacing.md,
    borderRadius: 14,
    marginBottom: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
  },

  image: {
    width: 44,
    height: 44,
    borderRadius: 22,
    marginRight: spacing.md,
  },

  info: {
    flex: 1,
  },

  salon: {
    color: colors.textPrimary,
    fontWeight: typography.fontWeight.semibold,
    marginBottom: 2,
  },

  date: {
    color: colors.textSecondary,
    fontSize: typography.fontSize.sm,
  },
});
