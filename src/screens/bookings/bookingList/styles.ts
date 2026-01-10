import { StyleSheet } from 'react-native';
import { colors } from '../../../theme/colors';
import { spacing } from '../../../theme/spacing';
import { typography } from '../../../theme/typography';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: spacing.lg,
  },

  header: {
    fontSize: typography.fontSize.xl,
    fontWeight: typography.fontWeight.bold,
    color: colors.primary,
    marginBottom: spacing.lg,
  },

  tabContainer: {
    flexDirection: 'row',
    backgroundColor: colors.surface,
    borderRadius: 30,
    marginBottom: spacing.lg,
    padding: 4,
  },

  tab: {
    flex: 1,
    paddingVertical: spacing.sm,
    alignItems: 'center',
    borderRadius: 26,
  },

  activeTab: {
    backgroundColor: colors.surfaceLight,
  },

  tabText: {
    color: colors.textMuted,
    fontSize: typography.fontSize.sm,
  },

  activeTabText: {
    color: colors.primary,
    fontWeight: typography.fontWeight.semibold,
  },

  sectionTitle: {
    fontSize: typography.fontSize.md,
    color: colors.textPrimary,
    marginBottom: spacing.md,
  },
});
