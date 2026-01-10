import { StyleSheet } from 'react-native';
import { colors } from '../../../theme/colors';
import { spacing } from '../../../theme/spacing';
import { typography } from '../../../theme/typography';

export const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface,
    borderRadius: spacing.radiusLg,
    borderWidth: 1,
    borderColor: colors.borderGold,
    marginBottom: spacing.lg,
    overflow: 'hidden',
  },

  imageWrapper: {
    position: 'relative',
  },

  image: {
    width: '100%',
    height: 160,
  },

  /* ===== TYPE BADGE ===== */
  typeBadge: {
    position: 'absolute',
    bottom: spacing.sm,
    right: spacing.sm,
    backgroundColor: colors.primary,
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    borderRadius: spacing.radiusSm,
  },

  typeText: {
    color: colors.textInverse,
    fontSize: typography.fontSize.xs,
    fontWeight: typography.fontWeight.medium,
  },

  content: {
    padding: spacing.md,
  },

  name: {
    fontSize: typography.fontSize.lg,
    fontWeight: typography.fontWeight.semibold,
    color: colors.textPrimary,
  },

  category: {
    fontSize: typography.fontSize.sm,
    color: colors.textSecondary,
    marginTop: spacing.xs,
  },

  rating: {
    marginTop: spacing.sm,
    fontSize: typography.fontSize.sm,
    color: colors.primary,
  },

  favoriteButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: colors.background,
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },

  favoriteIcon: {
    fontSize: 18,
  },
});
