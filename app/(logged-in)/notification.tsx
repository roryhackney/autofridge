import React, { useState } from 'react';
import { View, Text, Switch, ScrollView } from 'react-native';
import globalStyles from '../../assets/globalStyles';

interface Notification {
  label: string;
  value: string;
}

const notifications: Notification[] = [
  { label: 'Stay Updated', value: 'stayUpdated' },
  { label: 'Fridge Update', value: 'fridgeUpdate' },
  { label: 'Grocery Update', value: 'groceryUpdate' },
  { label: 'Shared List Update', value: 'sharedListUpdate' },
  { label: 'Low Stock', value: 'lowStock' },
  { label: 'Expiring soon', value: 'expiringSoon' },
  { label: 'Expired Alert', value: 'expiredAlert' },
  { label: 'Shopping Reminder', value: 'shoppingReminder' },
  { label: 'Too many notifications', value: 'tooManyNotifications' },
];

interface Settings {
  [key: string]: boolean;
}

const NotificationSettingScreen = () => {
  const [settings, setSettings] = useState<Settings>(
    notifications.reduce((acc: Settings, item) => {
      acc[item.value] = false;
      return acc;
    }, {})
  );

  const toggleSwitch = (value: string) => {
    setSettings((prevSettings) => ({
      ...prevSettings,
      [value]: !prevSettings[value],
    }));
  };

  return (
    <ScrollView contentContainerStyle={globalStyles.container}>
      <Text style={globalStyles.notificationTitle}>Notifications</Text>
      {notifications.map((item) => (
        <View key={item.value} style={globalStyles.settingRow}>
          <Text style={globalStyles.label}>{item.label}</Text>
          <Switch
            value={settings[item.value]}
            onValueChange={() => toggleSwitch(item.value)}
            trackColor={{ false: '#ccc', true: '#38bdf8' }}
            thumbColor={settings[item.value] ? '#38bdf8' : '#f4f3f4'}
          />
        </View>
      ))}
    </ScrollView>
  );
};

export default Notification;
