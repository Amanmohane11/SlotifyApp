import { StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';
import { spacing } from '../../theme/spacing';
import { typography } from '../../theme/typography';

export const styles = StyleSheet.create({
  categoryRow: {
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },

  categoryBtn: {
    marginRight: spacing.lg,
    alignItems: 'center',
  },

  categoryText: {
    fontSize: typography.fontSize.md,
    color: colors.textSecondary,
  },

  categoryActive: {
    color: colors.primary,
    fontWeight: typography.fontWeight.semibold,
  },

  underline: {
    marginTop: spacing.xs,
    height: 2,
    width: '100%',
    backgroundColor: colors.primary,
    borderRadius: 1,
  },
});
