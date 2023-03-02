import * as React from 'react';
import moment from 'moment';
import {StyleSheet, Text, View} from 'react-native';
import {SetStateAction, useEffect, useState} from 'react';
import {fontStyles} from '../ui/common-styles';
import {GLOBAL_COLORS} from '../ui/colors';

interface Props {
  lastClicked: number;
}

const toMinutes = (seconds: number) => {
  return Math.floor(seconds / 60);
};

const TimeCounter = ({lastClicked}: Props) => {
  const [lastSeen, setLastSeen] = useState<number>(0);
  const [currentTime, setCurrentTime] = useState<string>('');

  const handleRefreshTime = (timeAgo: number) => {
    if (timeAgo >= 30) {
      return 30000;
    } else {
      return 1000;
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setLastSeen(moment().unix() - lastClicked);
      setCurrentTime(moment().unix() as unknown as SetStateAction<string>);
    }, handleRefreshTime(moment().unix() - lastClicked));
    return function cleanup() {
      clearInterval(timer);
    };
  });

  return (
    <View style={styles.Container}>
      <Text style={[styles.title, fontStyles.bold]}>
        {moment.unix(lastClicked).format('HH:mm:ss DD MMM YYYY')}
      </Text>

      {lastSeen > 59 ? (
        <Text style={[styles.title, fontStyles.bold]}>
          {toMinutes(lastSeen)} minutes ago
        </Text>
      ) : (
        <Text style={[styles.title, fontStyles.bold]}>
          {lastSeen} seconds ago
        </Text>
      )}

      <Text style={[styles.currentTime, fontStyles.bold]}>
        Current Time:{' '}
        {moment
          .unix(currentTime as unknown as number)
          .format('HH:mm:ss DD MMM YYYY')}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    alignItems: 'center',
    alignSelf: 'center',
    height: '50%',
    margin: 30,
    width: '90%',
  },
  currentTime: {
    color: GLOBAL_COLORS.silverChalice,
    fontSize: 14,
    marginTop: '20%',
  },
  title: {
    color: GLOBAL_COLORS.violetRed,
    fontSize: 22,
    marginVertical: '10%',
  },
});

export default TimeCounter;
