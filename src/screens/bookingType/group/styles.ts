import { StyleSheet } from 'react-native';
import { colors } from '../../../theme/colors';
import { spacing } from '../../../theme/spacing';
import { typography } from '../../../theme/typography';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.xl,
  },

  title: {
    fontSize: typography.fontSize.xl,
    color: colors.primary,
    fontWeight: typography.fontWeight.bold,
    textAlign: 'center',
  },

  subtitle: {
    textAlign: 'center',
    color: colors.textSecondary,
    marginBottom: spacing.xl,
  },

  /* ───────── PARTICIPANT CARD ───────── */

  card: {
    borderWidth: 1,
    borderColor: colors.primaryDark,
    borderRadius: spacing.radiusLg,
    padding: spacing.lg,
    marginBottom: spacing.lg,
    backgroundColor: colors.surface,
  },

  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: spacing.sm,
  },

  cardTitle: {
    color: colors.primary,
    fontSize: typography.fontSize.md,
    fontWeight: typography.fontWeight.semibold,
  },

  cardText: {
    color: colors.textPrimary,
    marginBottom: 4,
  },

  /* ───────── FORM ───────── */

  formCard: {
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: spacing.radiusLg,
    padding: spacing.lg,
    backgroundColor: colors.surface,
    marginBottom: spacing.xl,
  },

  formTitle: {
    color: colors.primary,
    fontSize: typography.fontSize.md,
    marginBottom: spacing.md,
  },

  input: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: spacing.radiusMd,
    padding: spacing.md,
    color: colors.textPrimary,
    marginBottom: spacing.md,
  },

  genderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  genderChip: {
    flex: 1,
    borderWidth: 1,
    borderColor: colors.primaryDark,
    borderRadius: 20,
    paddingVertical: 8,
    marginHorizontal: 4,
    alignItems: 'center',
  },

  genderChipActive: {
    backgroundColor: colors.primary,
  },

  genderText: {
    color: colors.primary,
  },

  genderTextActive: {
    color: colors.textInverse,
  },

  /* ───────── ACTIONS ───────── */

  addAnother: {
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: spacing.radiusMd,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.xl,
    marginBottom: spacing.xl,
  },

  addAnotherText: {
    color: colors.primary,
  },

  confirmButton: {
    marginBottom: spacing.xl,
  },
});
