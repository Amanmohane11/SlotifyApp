import { StyleSheet } from 'react-native';
import { colors } from '../../../theme/colors';
import { spacing } from '../../../theme/spacing';
import { typography } from '../../../theme/typography';

const styles = StyleSheet.create({
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
    lineHeight: typography.fontSize.md * 1.3,
  },
});

export default styles;
