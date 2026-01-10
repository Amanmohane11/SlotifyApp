import { StyleSheet } from 'react-native';
import { colors } from '../../../theme/colors';
import { spacing } from '../../../theme/spacing';
import { typography } from '../../../theme/typography';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: spacing.lg,
  },

  header: {
    fontSize: typography.fontSize.xl,
    fontWeight: typography.fontWeight.bold,
    color: colors.primary,
    textAlign: 'center',
    marginTop: spacing.lg,
    marginBottom: spacing.xl,
  },

  /* ───────── AVATAR ───────── */

  avatarWrapper: {
    alignItems: 'center',
    marginBottom: spacing.md,
  },

  avatarCircle: {
    width: 110,
    height: 110,
    borderRadius: 55,
    borderWidth: 3,
    borderColor: colors.primary,
    backgroundColor: colors.surface,
  },

  userName: {
    textAlign: 'center',
    fontSize: typography.fontSize.lg,
    color: colors.textPrimary,
    fontWeight: typography.fontWeight.semibold,
    marginTop: spacing.sm,
  },

  phone: {
    textAlign: 'center',
    fontSize: typography.fontSize.sm,
    color: colors.textSecondary,
    marginBottom: spacing.lg,
  },

  editButton: {
    alignSelf: 'center',
    width: 160,
    marginBottom: spacing.xl,
  },

  menuContainer: {
    marginBottom: spacing.xl,
  },
});
