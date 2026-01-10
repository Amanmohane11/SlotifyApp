import { StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';
import { spacing } from '../../theme/spacing';
import { typography } from '../../theme/typography';

export const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontSize: typography.fontSize.xl,
    fontWeight: typography.fontWeight.semibold,
    color: colors.primary,
    marginBottom: spacing.lg,
  },

  professionalRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },

  avatarWrapper: {
    alignItems: 'center',
    marginHorizontal: spacing.sm,
    marginBottom: spacing.md,
  },

  avatarSelected: {
    transform: [{ scale: 1.05 }],
  },

  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    borderWidth: 2,
    borderColor: colors.borderGold,
  },

  randomAvatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    borderWidth: 2,
    borderColor: colors.borderGold,
    backgroundColor: colors.surface,
    alignItems: 'center',
    justifyContent: 'center',
  },

  randomText: {
    fontSize: 24,
  },

  name: {
    marginTop: spacing.xs,
    fontSize: typography.fontSize.xs,
    color: colors.textSecondary,
  },
});
