import React from 'react';
import { View, Text, ScrollView } from 'react-native';

import { styles } from './styles';

import {
  profileData,
  profileMenuItems,
} from '../../../assets/data/saloonData2';
import PrimaryButton from '../../../components/buttons/PrimaryButton';
import { MenuItem } from '../../../components/menuItem/MenuItem';

const ProfileScreen = () => {
  // const handleMenuAction = (action?: string) => {
  //   if (action === 'logout') {
  //     // logout logic
  //     console.log('Logout');
  //   }

  //   if (action === 'share') {
  //     // share logic
  //     console.log('Share App');
  //   }
  // };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <Text style={styles.header}>Profile</Text>

      {/* Avatar */}
      <View style={styles.avatarWrapper}>
        <View style={styles.avatarCircle} />
      </View>

      {/* User Info */}
      <Text style={styles.userName}>{profileData.name}</Text>
      <Text style={styles.phone}>{profileData.phone}</Text>

      {/* Edit Profile */}
      <PrimaryButton
        title="Edit Profile"
        onPress={() => {}}
        style={styles.editButton}
      />

      {/* Menu */}
      <View style={styles.menuContainer}>
        {profileMenuItems.map(item => (
          <MenuItem
            key={item.id}
            icon={item.icon}
            title={item.title}
            screen={(item as any).screen}
            route={(item as any).route}
            nested={(item as any).nested}
            danger={item.danger}
            // onPress={
            //   item.action ? () => handleMenuAction(item?.action) : undefined
            // }
          />
        ))}
      </View>
    </ScrollView>
  );
};

export default ProfileScreen;
