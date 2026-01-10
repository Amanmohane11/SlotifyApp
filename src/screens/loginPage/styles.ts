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
    // marginBottom: spacing.xs,
  },


  logoImage: {
  width: 280,
  height: 280,
  marginBottom: 12,
},
  // logoText: {
  //   fontSize: 34,
  //   fontWeight: 'bold',
  //   color: colors.primary,
  //   letterSpacing: 2,
  // },

  // tagline: {
  //   marginTop: spacing.xs,
  //   fontSize: typography.fontSize.sm,
  //   color: colors.textSecondary,
  // },

  /* ───────── CARD ───────── */

  card: {
    backgroundColor: colors.surface,
    borderRadius: spacing.radiusLg,
    padding: spacing.lg,
    borderWidth: 1,
    borderColor: colors.primaryDark,
  },

  title: {
    // alignItems: 'center',
        paddingHorizontal: spacing.md,
    fontSize: typography.fontSize.xl,
    fontWeight: typography.fontWeight.semibold,
    color: colors.textPrimary,
    marginBottom: spacing.xl,
  },

  /* ───────── INPUT ───────── */

  input: {
    borderWidth: 1,
    borderColor: colors.primaryDark,
    borderRadius: spacing.radiusMd,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.md,
    color: colors.textPrimary,
    fontSize: typography.fontSize.md,
    marginBottom: spacing.md,
  },

  whatsappText: {
    color: colors.textSecondary,
    fontSize: typography.fontSize.sm,
    marginBottom: spacing.sm,
  },

  /* ───────── OTP ───────── */

  otpRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: spacing.md,
  },

  otpBox: {
    width: 46,
    height: 52,
    borderWidth: 1,
    borderColor: colors.primaryDark,
    borderRadius: spacing.radiusSm,
    textAlign: 'center',
    fontSize: typography.fontSize.lg,
    color: colors.textPrimary,
  },

  resend: {
    alignSelf: 'flex-end',
    color: colors.primary,
    fontSize: typography.fontSize.sm,
    marginBottom: spacing.lg,
  },

  /* ───────── BUTTON ───────── */

  verifyButton: {
    marginTop: spacing.sm,
    marginBottom: spacing.md,
  },

  /* ───────── FOOTER ───────── */


errorText: {
  color: 'red',
  fontSize: 13,
  marginTop: 8,
  textAlign: 'center',
},

  trouble: {
    textAlign: 'center',
    color: colors.textMuted,
    fontSize: typography.fontSize.sm,
    marginTop: spacing.lg,
  },
});
