import { StyleSheet } from 'react-native';
import { colors } from '../../../theme/colors';
import { spacing } from '../../../theme/spacing';
import { typography } from '../../../theme/typography';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },

  /* ───────── IMAGE SECTION ───────── */

  imageWrapper: {
    margin: spacing.md,
    borderRadius: spacing.radiusLg,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: colors.primaryDark,
    position: 'relative',
  },

  image: {
    width: '100%',
    height: 190,
  },

  statusBadge: {
    position: 'absolute',
    top: spacing.sm,
    right: spacing.sm,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.primary,
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    borderRadius: 20,
  },

  statusText: {
    marginLeft: 6,
    color: colors.textInverse,
    fontSize: typography.fontSize.xs,
    fontWeight: typography.fontWeight.semibold,
  },

  /* ───────── CARD SECTION ───────── */

  card: {
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing.xl,
  },

  title: {
    fontSize: typography.fontSize.lg,
    fontWeight: typography.fontWeight.bold,
    color: colors.primary,
    marginBottom: spacing.md,
  },

  row: {
    flexDirection: 'row',
    marginBottom: spacing.sm,
  },

  label: {
    width: 110,
    color: colors.textSecondary,
    fontSize: typography.fontSize.sm,
  },

  value: {
    flex: 1,
    color: colors.textPrimary,
    fontSize: typography.fontSize.sm,
    lineHeight: 20,
  },

  /* ───────── SECTION TITLES ───────── */

  sectionTitle: {
    marginTop: spacing.lg,
    marginBottom: spacing.sm,
    fontSize: typography.fontSize.md,
    fontWeight: typography.fontWeight.semibold,
    color: colors.textPrimary,
  },

  /* ───────── POLICY TEXT ───────── */

  policyText: {
    color: colors.textMuted,
    fontSize: typography.fontSize.sm,
    lineHeight: 20,
    marginBottom: spacing.xl,
  },
});
