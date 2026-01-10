import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageSourcePropType,
  Linking,
} from 'react-native';
import styles from './styles';

interface BannerCardProps {
  image: ImageSourcePropType;
  text: string;

  // optional
  onPress?: () => void;
  link?: string; // external URL
}

const BannerCard: React.FC<BannerCardProps> = ({
  image,
  text,
  onPress,
  link,
}) => {
  const handlePress = async () => {
    if (link) {
      const canOpen = await Linking.canOpenURL(link);
      if (canOpen) {
        Linking.openURL(link);
      }
      return;
    }

    onPress?.();
  };

  const Wrapper = link || onPress ? TouchableOpacity : View;

  return (
    <Wrapper
      style={styles.banner}
      activeOpacity={0.85}
      onPress={handlePress}
    >
      <Image source={image} style={styles.bannerImage} />
      <Text style={styles.bannerText}>{text}</Text>
    </Wrapper>
  );
};

export default BannerCard;
