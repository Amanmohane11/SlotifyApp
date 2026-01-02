import { StyleSheet } from 'react-native';
import { colors } from '../../../theme/colors';
import { spacing } from '../../../theme/spacing';
import { typography } from '../../../theme/typography';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: spacing.screenPadding,
  },

  greeting: {
    fontSize: typography.fontSize.xl,
    fontWeight: typography.fontWeight.semibold,
    color: colors.textPrimary,
    marginBottom: spacing.md,
  },

  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.lg,
  },

  notificationButton: {
    padding: spacing.xs,
  },

  searchContainer: {
    borderWidth: 1,
    borderColor: colors.borderGold,
    borderRadius: spacing.radiusLg,
    paddingHorizontal: spacing.md,
    marginBottom: spacing.lg,
  },

  searchInput: {
    color: colors.textPrimary,
    height: 48,
  },

  banner: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surface,
    borderRadius: spacing.radiusLg,
    borderWidth: 1,
    borderColor: colors.borderGold,
    padding: spacing.md,
    marginBottom: spacing.lg,
  },

  bannerImage: {
    width: 60,
    height: 60,
    borderRadius: spacing.radiusMd,
    marginRight: spacing.md,
  },

  bannerText: {
    flex: 1,
    color: colors.primary,
    fontSize: typography.fontSize.md,
    fontWeight: typography.fontWeight.medium,
  },

  sectionTitle: {
    fontSize: typography.fontSize.lg,
    color: colors.textPrimary,
    marginBottom: spacing.md,
  },

  servicesRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    rowGap: spacing.md,
  },

  serviceItem: {
    alignItems: 'center',
  },

  serviceIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: colors.borderGold,
    marginBottom: spacing.sm,
  },

  serviceText: {
    fontSize: typography.fontSize.sm,
    color: colors.textSecondary,
  },

  // statsRow: {
  //   flexDirection: 'row',
  //   justifyContent: 'space-between',
  //   marginBottom: spacing.lg,
  // },

  // statItem: {
  //   alignItems: 'center',
  //   flex: 1,
  // },

  // statValue: {
  //   color: colors.primary,
  //   fontSize: typography.fontSize.lg,
  //   fontWeight: typography.fontWeight.semibold,
  // },

  // statLabel: {
  //   color: colors.textSecondary,
  //   fontSize: typography.fontSize.xs,
  // },

  // salonCard: {
  //   backgroundColor: colors.surface,
  //   borderRadius: spacing.radiusLg,
  //   borderWidth: 1,
  //   borderColor: colors.borderGold,
  //   marginBottom: spacing.lg,
  //   padding: spacing.md,
  // },

  // salonImage: {
  //   width: '100%',
  //   height: 160,
  //   borderRadius: spacing.radiusMd,
  //   marginBottom: spacing.md,
  // },

  // salonName: {
  //   fontSize: typography.fontSize.lg,
  //   color: colors.textPrimary,
  // },

  // salonCategory: {
  //   fontSize: typography.fontSize.sm,
  //   color: colors.textSecondary,
  //   marginTop: spacing.xs,
  // },

  // salonRating: {
  //   fontSize: typography.fontSize.sm,
  //   color: colors.primary,
  //   marginTop: spacing.xs,
  // },

  /* ===== Rebook Section ===== */

  rebookCard: {
    width: 160,
    backgroundColor: colors.surface,
    borderRadius: spacing.radiusLg,
    borderWidth: 1,
    borderColor: colors.borderGold,
    padding: spacing.sm,
    marginRight: spacing.md,
  },

  rebookImage: {
    width: '100%',
    height: 100,
    borderRadius: spacing.radiusMd,
    marginBottom: spacing.sm,
  },

  rebookSalon: {
    color: colors.textPrimary,
    fontSize: typography.fontSize.md,
    fontWeight: typography.fontWeight.semibold,
  },

  rebookService: {
    color: colors.textSecondary,
    fontSize: typography.fontSize.sm,
    marginTop: spacing.xs,
  },

  rebookAction: {
    marginTop: spacing.sm,
    color: colors.primary,
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.medium,
  },
});
