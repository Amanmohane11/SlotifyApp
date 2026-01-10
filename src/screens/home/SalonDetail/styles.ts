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
  },

  /* =====================
     HEADER IMAGE
  ===================== */
  imageWrapper: {
    position: 'relative',
  },

  coverImage: {
    width: '100%',
    height: 260,
  },

  heartIcon: {
    position: 'absolute',
    top: spacing.lg,
    right: spacing.lg,
    backgroundColor: colors.surface,
    padding: spacing.sm,
    borderRadius: 20,
  },

  /* =====================
     COMMON SECTION
  ===================== */
  section: {
    padding: spacing.screenPadding,
  },

  sectionTitle: {
    fontSize: typography.fontSize.lg,
    fontWeight: typography.fontWeight.semibold,
    color: colors.textPrimary,
    marginBottom: spacing.md,
  },

  /* =====================
     SALON INFO
  ===================== */
  salonName: {
    fontSize: typography.fontSize.xl,
    fontWeight: typography.fontWeight.semibold,
    color: colors.textPrimary,
  },

  subText: {
    marginTop: spacing.xs,
    fontSize: typography.fontSize.sm,
    color: colors.textSecondary,
  },

  rating: {
    marginTop: spacing.sm,
    fontSize: typography.fontSize.sm,
    color: colors.primary,
  },

  link: {
    marginTop: spacing.sm,
    fontSize: typography.fontSize.sm,
    color: colors.primary,
  },

  /* =====================
     AVAILABILITY
  ===================== */
  availabilityRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colors.surface,
    padding: spacing.md,
    borderRadius: spacing.radiusLg,
    borderWidth: 1,
    borderColor: colors.borderGold,
    marginBottom: spacing.sm,
  },

  day: {
    fontSize: typography.fontSize.md,
    color: colors.textPrimary,
  },

  time: {
    fontSize: typography.fontSize.sm,
    color: colors.textSecondary,
  },

  /* =====================
     FOOTER
  ===================== */
  footer: {
    padding: spacing.screenPadding,
    paddingBottom: spacing.xxl,
  },
  loadingText: {
    color: '#fff',
    padding: 20,
  },
});
