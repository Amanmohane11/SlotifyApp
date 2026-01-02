import { StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';
import { spacing } from '../../theme/spacing';
import { typography } from '../../theme/typography';

export const styles = StyleSheet.create({
  menuContainer: {
    marginBottom: spacing.xl,
  },

  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.primaryDark,
    borderRadius: 14,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
    marginBottom: spacing.md,
    backgroundColor: colors.surface,
  },

  menuText: {
    marginLeft: spacing.md,
    fontSize: typography.fontSize.md,
    color: colors.textPrimary,
  },
});
