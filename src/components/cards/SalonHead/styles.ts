import { StyleSheet } from "react-native";
import { colors } from "../../../theme/colors";
import { typography } from "../../../theme/typography";
import { Dimensions } from 'react-native';

const { width: SCREEN_WIDTH } = Dimensions.get('window');


 export const styles = StyleSheet.create({
  container: {
    height: 280,
    borderRadius: 28,
    overflow: 'hidden',
    backgroundColor: colors.surface,
  },

 image: {
  width: SCREEN_WIDTH,
  height: '100%',
},


  heartBtn: {
    position: 'absolute',
    top: 18,
    right: 18,
    backgroundColor: 'rgba(0,0,0,0.4)',
    padding: 10,
    borderRadius: 24,
  },

  dots: {
    position: 'absolute',
    top: 18,
    left: 18,
    flexDirection: 'row',
    gap: 6,
  },

  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: 'rgba(255,255,255,0.4)',
  },

  dotActive: {
    backgroundColor: colors.primary,
    width: 14,
  },

  content: {
    position: 'absolute',
    bottom: 22,
    left: 22,
    right: 22,
  },

  name: {
    color: colors.primary,
    fontSize: typography.fontSize.xl,
    fontWeight: typography.fontWeight.bold,
  },

  type: {
    color: colors.textSecondary,
    fontSize: typography.fontSize.sm,
    marginTop: 2,
  },

  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
    gap: 6,
  },

  rating: {
    color: colors.textPrimary,
    fontSize: typography.fontSize.sm,
  },

  directionBtn: {
    marginTop: 12,
    backgroundColor: colors.buttonPrimary,
    paddingHorizontal: 18,
    paddingVertical: 8,
    borderRadius: 22,
    alignSelf: 'flex-start',
  },

  directionText: {
    color: colors.textInverse,
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.semibold,
  },
});
