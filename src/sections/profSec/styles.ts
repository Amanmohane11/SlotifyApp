import { StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';
import { spacing } from '../../theme/spacing';
import { typography } from '../../theme/typography';

export const styles = StyleSheet.create({
  section: {
    padding: spacing.screenPadding,
  },

  sectionTitle: {
    fontSize: typography.fontSize.lg,
    fontWeight: 600,
    color: colors.textPrimary,
    marginBottom: spacing.md,
  },

  avatarContainer: {
    alignItems: 'center',
    marginRight: spacing.md,
  },

  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    borderWidth: 2,
    borderColor: colors.borderGold,
    marginBottom: spacing.xs,
  },

  avatarPlaceholder: {
    backgroundColor: colors.surface,
    justifyContent: 'center',
    alignItems: 'center',
  },

  name: {
    fontSize: typography.fontSize.sm,
    color: colors.textPrimary,
  },
});
