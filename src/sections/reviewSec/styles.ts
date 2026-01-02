import { StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';
import { spacing } from '../../theme/spacing';
import { typography } from '../../theme/typography';

export const styles = StyleSheet.create({
  container: {
    marginTop: spacing.lg,
  },

  sectionTitle: {
    fontSize: typography.fontSize.lg,
    fontWeight: 600,
    color: colors.textPrimary,
    marginBottom: spacing.md,
  },

  reviewItem: {
    backgroundColor: colors.surface,
    borderRadius: spacing.radiusLg,
    borderWidth: 1,
    borderColor: colors.borderGold,
    padding: spacing.md,
    marginBottom: spacing.md,
  },

  userName: {
    fontSize: typography.fontSize.md,
    fontWeight: 600,
    color: colors.textPrimary,
  },

  professional: {
    fontSize: typography.fontSize.xs,
    color: colors.textSecondary,
    marginTop: spacing.xs,
  },

  stars: {
    marginTop: spacing.xs,
    fontSize: typography.fontSize.sm,
    color: colors.primary,
  },

  comment: {
    marginTop: spacing.sm,
    fontSize: typography.fontSize.sm,
    color: colors.textSecondary,
    lineHeight: 20,
  },

  showMoreContainer: {
    alignItems: 'center',
    marginTop: spacing.sm,
  },

  showMoreText: {
    fontSize: typography.fontSize.sm,
    color: colors.primary,
    fontWeight: 500,
  },
});
