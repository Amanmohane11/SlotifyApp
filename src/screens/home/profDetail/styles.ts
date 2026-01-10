import { StyleSheet } from 'react-native';
import { colors } from '../../../theme/colors';
import { spacing } from '../../../theme/spacing';
import { typography } from '../../../theme/typography';

export const styles = StyleSheet.create({
  /* =====================
     CONTAINER
  ===================== */
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: spacing.screenPadding,
  },

  /* =====================
     HEADER (OPTIONAL)
  ===================== */
  header: {
    alignItems: 'center',
    marginBottom: spacing.lg,
  },

  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 2,
    borderColor: colors.borderGold,
    marginBottom: spacing.md,
  },

  name: {
    fontSize: typography.fontSize.xl,
    fontWeight: typography.fontWeight.semibold,
    color: colors.textPrimary,
  },

  expertise: {
    marginTop: spacing.xs,
    fontSize: typography.fontSize.md,
    color: colors.textSecondary,
  },

  experience: {
    marginTop: spacing.xs,
    fontSize: typography.fontSize.sm,
    color: colors.primary,
  },

  /* =====================
     INFO CARD
  ===================== */
  infoCard: {
    backgroundColor: colors.surface,
    borderRadius: spacing.radiusLg,
    borderWidth: 1,
    borderColor: colors.borderGold,
    padding: spacing.md,
    marginTop: spacing.lg,
  },

  infoTitle: {
    fontSize: typography.fontSize.lg,
    fontWeight: typography.fontWeight.semibold,
    color: colors.textPrimary,
    marginBottom: spacing.sm,
  },

  infoText: {
    fontSize: typography.fontSize.sm,
    color: colors.textSecondary,
    lineHeight: 20,
  },

  /* =====================
     ACTION BUTTON
  ===================== */
  actionContainer: {
    marginTop: spacing.xxl,
  },
});
