import { StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';
import { spacing } from '../../theme/spacing';
import { typography } from '../../theme/typography';

export const styles = StyleSheet.create({
  /* Root container */
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },

  /* FlatList content */
  listContent: {
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing.xxl,
    backgroundColor: colors.background,
  },

  /* -------- Sticky Header -------- */
  stickyHeader: {
    backgroundColor: colors.background,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,

    borderBottomWidth: 1,
    borderBottomColor: colors.border,

    // important for Android sticky header rendering
    zIndex: 10,
    elevation: 2,
  },

  headerTitle: {
    fontSize: typography.fontSize.lg,
    fontWeight: typography.fontWeight.bold,
    color: colors.textPrimary,
  },
});
