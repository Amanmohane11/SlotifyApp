import { StyleSheet } from 'react-native';
import { typography } from '../../theme/typography';
import { colors } from '../../theme/colors';
import { spacing } from '../../theme/spacing';

export const styles = StyleSheet.create({
  container: {
    paddingBottom: 24,
  },

  categoryBlock: {
    marginBottom: 24,
  },

  categoryTitle: {
    marginBottom: 8,
    marginTop: 16,
    fontSize: 14,
    fontWeight: '700',
    letterSpacing: 1,
    color: '#666',
    textTransform: 'uppercase',
  },
  continueBtn: {
  marginTop: 24,
  marginHorizontal: 16,
  backgroundColor: '#000',
  paddingVertical: 14,
  borderRadius: 12,
  alignItems: 'center',
},

continueText: {
  color: '#fff',
  fontSize: 16,
  fontWeight: '600',
},

 serviceLeft: {
    flex: 1,
    paddingRight: 10,
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
});
