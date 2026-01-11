import React, { useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { styles } from './styles';

import { profileMenuItems } from '../../../assets/data/saloonData2';
import { MenuItem } from '../../../components/menuItem/MenuItem';

import type { RootState, AppDispatch } from '../../../app/store';
import { fetchUserDetails } from '../../../app/slices/userDetailSlice';

const ProfileScreen = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { profile, loading } = useSelector(
    (state: RootState) => state.userDetail
  );

  useEffect(() => {
    if (!profile) {
      dispatch(fetchUserDetails());
    }
  }, [dispatch, profile]);

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <Text style={styles.header}>Profile</Text>

      {/* Avatar */}
      <View style={styles.avatarWrapper}>
        <View style={styles.avatarCircle} />
      </View>

      {/* User Info */}
      {loading ? (
        <Text style={styles.phone}>Loading profile...</Text>
      ) : profile ? (
        <>
          <Text style={styles.userName}>
            {profile.name ?? 'User'}
          </Text>
          <Text style={styles.phone}>{profile.mobile}</Text>
        </>
      ) : (
        <Text style={styles.phone}>No profile found</Text>
      )}

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
          />
        ))}
      </View>
    </ScrollView>
  );
};

export default ProfileScreen;
