import { StyleSheet } from 'react-native';
import { colors } from '../../../theme/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },

  sectionHeader: {
  fontSize: 18,
  fontWeight: '700',
  paddingHorizontal: 16,
  paddingVertical: 12,
  // backgroundColor: '#fff',
},

  contentDefault: {
    paddingBottom: 20,
  },

  contentWithSelected: {
    paddingBottom: 90,
  },

bottomBar: {
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: '#fff',
  padding: 16,
  borderTopWidth: 1,
  borderTopColor: '#eee',
},

continueBtn: {
  backgroundColor: '#000',
  paddingVertical: 14,
  borderRadius: 10,
  alignItems: 'center',
},

continueText: {
  color: '#fff',
  fontSize: 16,
  fontWeight: '700',
},

});
