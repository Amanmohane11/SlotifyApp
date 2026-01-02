import { StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';
import { spacing } from '../../theme/spacing';
import { typography } from '../../theme/typography';

export const styles = StyleSheet.create({
  /* ───────── CONTAINER ───────── */

  container: {
    flex: 1,
    backgroundColor: colors.background,
  },

  content: {
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing.xl,
  },

  /* ───────── LOGO ───────── */

  logoContainer: {
    alignItems: 'center',
    marginTop: spacing.xl,
    marginBottom: spacing.lg,
  },

  logo: {
    fontSize: 34,
    fontWeight: 'bold',
    color: colors.primary,
    letterSpacing: 2,
  },

  tagline: {
    marginTop: spacing.xs,
    fontSize: typography.fontSize.sm,
    color: colors.textSecondary,
  },

  /* ───────── TITLE ───────── */

  title: {
    fontSize: typography.fontSize.xl,
    fontWeight: typography.fontWeight.semibold,
    color: colors.primary,
    textAlign: 'center',
    marginBottom: spacing.xl,
  },

  /* ───────── INPUT CARD ───────── */

  inputCard: {
    borderWidth: 1,
    borderColor: colors.primaryDark,
    borderRadius: spacing.radiusLg,
    padding: spacing.lg,
    marginBottom: spacing.lg,
    backgroundColor: colors.surface,
  },

  label: {
    color: colors.primary,
    fontSize: typography.fontSize.sm,
    marginBottom: spacing.sm,
  },

  input: {
    color: colors.textPrimary,
    fontSize: typography.fontSize.md,
  },

  /* ───────── GENDER (HORIZONTAL) ───────── */

  genderRow: {
    flexDirection: 'row', // horizontal layout
    justifyContent: 'space-between',
    marginTop: spacing.sm,
  },

  genderOption: {
    flex: 1, // equal width buttons
    borderWidth: 1,
    borderColor: colors.primaryDark,
    borderRadius: 20,
    paddingVertical: spacing.sm,
    alignItems: 'center',
    marginHorizontal: 6,
  },

  genderActive: {
    backgroundColor: colors.primary,
  },

  genderText: {
    color: colors.primary,
    fontSize: typography.fontSize.sm,
  },

  genderTextActive: {
    color: colors.textInverse,
  },

  /* ───────── CONTINUE BUTTON ───────── */

  continueButton: {
    marginTop: spacing.xl,
    alignSelf: 'center',
    width: '85%',
  },
});
