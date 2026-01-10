import { StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';
import { spacing } from '../../theme/spacing';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingTop: spacing.lg,
  },

  title: {
    fontSize: 32,
    fontWeight: 700,
    color: colors.primary,
    textAlign: 'center',
    marginBottom: spacing.lg,
  },

  list: {
    paddingHorizontal: spacing.screenPadding,
    paddingBottom: spacing.xl,
  },
});
