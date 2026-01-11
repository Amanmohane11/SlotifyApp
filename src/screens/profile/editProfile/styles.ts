import { StyleSheet } from "react-native";
import { colors } from "../../../theme/colors";
import { spacing } from "../../../theme/spacing";
import { typography } from "../../../theme/typography";


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: spacing.screenPadding,
  },

  title: {
    fontSize: typography.fontSize.xl,
    fontWeight: typography.fontWeight.semibold,
    color: colors.primary,
    textAlign: 'center',
    marginBottom: spacing.lg,
  },

  field: {
    marginBottom: spacing.md,
  },

  label: {
    fontSize: typography.fontSize.sm,
    color: colors.textSecondary,
    marginBottom: spacing.xs,
  },

  input: {
    backgroundColor: colors.surface,
    borderRadius: spacing.radiusMd,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    fontSize: typography.fontSize.md,
    color: colors.textPrimary,
    borderWidth: 1,
    borderColor: colors.border,
  },

  inputDisabled: {
    opacity: 0.6,
  },

  multiline: {
    minHeight: 80,
    textAlignVertical: 'top',
  },

  genderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  genderButton: {
    flex: 1,
    paddingVertical: spacing.sm,
    marginHorizontal: spacing.xs,
    borderRadius: spacing.radiusMd,
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: 'center',
    backgroundColor: colors.surface,
  },

  genderButtonSelected: {
    backgroundColor: colors.primary,
    borderColor: colors.borderGold,
  },

  genderText: {
    fontSize: typography.fontSize.sm,
    color: colors.textSecondary,
  },

  genderTextSelected: {
    color: colors.textInverse,
    fontWeight: typography.fontWeight.semibold,
  },

  saveButton: {
    marginTop: spacing.xl,
    backgroundColor: colors.buttonPrimary,
    paddingVertical: spacing.buttonPaddingVertical,
    borderRadius: spacing.radiusLg,
    alignItems: 'center',
  },

  saveButtonText: {
    fontSize: typography.fontSize.md,
    fontWeight: typography.fontWeight.bold,
    color: colors.textInverse,
  },
});
