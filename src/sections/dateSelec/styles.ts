import { StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';
import { spacing } from '../../theme/spacing';
import { typography } from '../../theme/typography';

export const styles = StyleSheet.create({
  container: {
    paddingVertical: spacing.md,
  },

  dateBtn: {
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: colors.borderGold,
    backgroundColor: colors.surface,
    marginRight: spacing.sm,
  },

  dateSelected: {
    backgroundColor: colors.primary,
  },

  dateText: {
    fontSize: typography.fontSize.md,
    color: colors.textPrimary,
    textAlign: 'center',
  },

  dateTextSelected: {
    color: colors.surfaceLight,
    fontWeight: typography.fontWeight.semibold,
  },
});
