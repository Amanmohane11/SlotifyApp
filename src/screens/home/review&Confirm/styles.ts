import { StyleSheet } from 'react-native';
import { colors } from '../../../theme/colors';
import { spacing } from '../../../theme/spacing';
import { typography } from '../../../theme/typography';

const styles = StyleSheet.create({
  /* =====================
     CONTAINER
  ===================== */
  container: {
    flexGrow: 1,
    backgroundColor: colors.background,
    padding: spacing.screenPadding,
    paddingBottom: spacing.xxl,
  },

  /* =====================
     TITLE
  ===================== */
  title: {
    textAlign: 'center',
    fontSize: typography.fontSize.xl,
    fontWeight: typography.fontWeight.semibold,
    color: colors.primary,
    marginBottom: spacing.xl,
  },

  /* =====================
     PROFESSIONAL SUMMARY CARD
  ===================== */
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surface,
    borderRadius: spacing.radiusLg,
    padding: spacing.md,
    borderWidth: 1,
    borderColor: colors.borderGold,
    marginBottom: spacing.lg,
  },

  avatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
    borderWidth: 2,
    borderColor: colors.borderGold,
    marginRight: spacing.md,
  },

  cardInfo: {
    flex: 1,
  },

  profName: {
    fontSize: typography.fontSize.md,
    fontWeight: typography.fontWeight.semibold,
    color: colors.textPrimary,
  },

  subText: {
    marginTop: spacing.xs,
    fontSize: typography.fontSize.sm,
    color: colors.textSecondary,
  },

  slotTime: {
    marginTop: spacing.xs,
    fontSize: typography.fontSize.sm,
    color: colors.primary,
  },


    errorText: {
    color: '#D32F2F',        // accessible red (Material-style)
    fontSize: 14,
    lineHeight: 20,
    marginTop: 12,
    textAlign: 'center',
    paddingHorizontal: 16,
  },
});

export default styles;
