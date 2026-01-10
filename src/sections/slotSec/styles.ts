import { StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';
import { spacing } from '../../theme/spacing';
import { typography } from '../../theme/typography';

export const styles = StyleSheet.create({
  row: {
    justifyContent: 'space-between',
    marginBottom: spacing.md,
  },

  slotBtn: {
    flex: 1,
    marginHorizontal: spacing.xs,
    paddingVertical: spacing.md,
    borderRadius: spacing.radiusLg,
    borderWidth: 1,
    borderColor: colors.borderGold,
    backgroundColor: colors.surface,
  },

  slotSelected: {
    backgroundColor: colors.primaryLight,
  },

  slotText: {
    textAlign: 'center',
    fontSize: typography.fontSize.md,
    color: colors.textPrimary,
  },

  slotTextSelected: {
    color: colors.surface,
    fontWeight: typography.fontWeight.semibold,
  },

  slotDisabled: {
  opacity: 0.4,
},
slotTextDisabled: {
  color: '#999',
},

});
