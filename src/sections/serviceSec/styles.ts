import { StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';
import { spacing } from '../../theme/spacing';
import { typography } from '../../theme/typography';

export const styles = StyleSheet.create({
  section: {
    marginTop: spacing.lg,
  },

  sectionTitle: {
    fontSize: typography.fontSize.lg,
    fontWeight: typography.fontWeight.semibold,
    color: colors.textPrimary,
    marginBottom: spacing.md,
  },

  continueBtn: {
  marginTop: 24,
  backgroundColor: '#000',
  paddingVertical: 14,
  borderRadius: 10,
  alignItems: 'center',
},

categoryTitle: {
  marginTop: 20,
  marginBottom: 8,
  fontSize: 14,
  fontWeight: '700',
  letterSpacing: 1,
  color: '#666',        // muted heading
  textTransform: 'uppercase',
},
continueText: {
  color: '#fff',
  fontSize: 16,
  fontWeight: '600',
},


  serviceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },

  serviceName: {
    fontSize: typography.fontSize.md,
    color: colors.textPrimary,
  },

  serviceTime: {
    fontSize: typography.fontSize.sm,
    color: colors.textMuted,
    marginTop: spacing.xs,
  },

  serviceRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  price: {
    fontSize: typography.fontSize.md,
    fontWeight: typography.fontWeight.semibold,
    color: colors.textPrimary,
    marginRight: spacing.md,
  },

  addBtn: {
    width: 28,
    height: 28,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },

  addText: {
    fontSize: typography.fontSize.md,
    color: colors.primary,
    fontWeight: typography.fontWeight.bold,
  },

  seeMoreContainer: {
    alignItems: 'center',
    marginTop: spacing.md,
  },

  seeMoreText: {
    fontSize: typography.fontSize.sm,
    color: colors.primary,
    fontWeight: typography.fontWeight.semibold,
  },

  capsuleContainer: {
  marginVertical: 10,
},

capsule: {
  backgroundColor: '#1E1E1E',
  paddingHorizontal: 14,
  paddingVertical: 6,
  borderRadius: 18,
  marginRight: 8,
  borderWidth: 1,
  borderColor: '#2A2A2A',
},

capsuleActive: {
  backgroundColor: '#f5a802ff',
  borderColor: '#f5a802ff',
},

capsuleText: {
  color: '#F5E9C6',
  fontSize: 13,
  fontWeight: '500',
},

addBtnSelected: {
  backgroundColor: '#f5a802ff',
},

addTextSelected: {
  color: '#000',
  fontWeight: '700',
},

});
