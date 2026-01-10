import { StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';
import { spacing } from '../../theme/spacing';
import { typography } from '../../theme/typography';

export const styles = StyleSheet.create({
  /* ---------------- SEARCH BAR ---------------- */

  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surface,
    borderRadius: spacing.radiusLg,
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    marginHorizontal: spacing.md,
    marginTop: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
  },

  searchInput: {
    flex: 1, // 👈 takes remaining space
    fontSize: typography.fontSize.md,
    color: colors.textPrimary,
    paddingVertical: spacing.xs,
  },

  searchDivider: {
    width: 1,
    height: 24,
    backgroundColor: colors.border,
    marginHorizontal: spacing.sm,
  },

  rangeSelector: {
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
  },

  rangeLabel: {
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.semibold,
    color: colors.primary,
  },

  /* ---------------- RANGE OPTIONS ---------------- */

  rangeRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: spacing.md,
    marginTop: spacing.sm,
  },

  rangeChip: {
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
    borderRadius: spacing.radiusXl,
    borderWidth: 1,
    borderColor: colors.border,
    marginRight: spacing.sm,
    marginBottom: spacing.sm,
    backgroundColor: colors.surfaceLight,
  },

  rangeActive: {
    backgroundColor: colors.buttonPrimary,
    borderColor: colors.borderGold,
  },

  rangeText: {
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.medium,
    color: colors.textSecondary,
  },

  rangeTextActive: {
    color: colors.textInverse,
    fontWeight: typography.fontWeight.semibold,
  },
});
