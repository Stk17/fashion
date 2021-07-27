import {Box, makeStyles, Text, ScrollableContent} from '../../components';
import {HomeNavigationProps} from '../../components/Navigation';
import React from 'react';
import Graph, {DataPoint} from './Graph';
import Transaction from './Graph/Transaction';
import {ScrollView, StyleSheet, Dimensions} from 'react-native';
import {Theme} from '../../components/Theme';
import Header from '../../components/Header';

const footerHeight = Dimensions.get('window').width / 3;

const useStyles = makeStyles((theme: Theme) => ({
  footer: {
    ...StyleSheet.absoluteFillObject,
    width: undefined,
    height: undefined,
    borderTopLeftRadius: theme.borderRadii.xl,
  },
  scrollView: {
    paddingBottom: footerHeight,
  },
}));
//const aspectRatio = 3;
const startDate = new Date('2019-09-01').getTime();
const numberOfMonths = 6;
const data: DataPoint[] = [
  {
    date: new Date('2019-10-02').getTime(),
    value: 139.42,
    color: 'primary',
    id: 245672,
  },
  {
    date: new Date('2019-12-01').getTime(),
    value: 281.23,
    color: 'graph1',
    id: 245673,
  },

  {
    date: new Date('2020-02-01').getTime(),
    value: 198.54,
    color: 'graph2',
    id: 245674,
  },
];
const TransactionHistory = ({
  navigation,
}: HomeNavigationProps<'TransactionHistory'>) => {
  const styles = useStyles();
  return (
    <ScrollableContent>
      <Box flex={1} backgroundColor="background">
        <Header
          left={{icon: 'menu', onPress: () => navigation.openDrawer()}}
          right={{icon: 'share', onPress: () => true}}
          title="Transaction History"
        />
        <Box padding="m" flex={1}>
          <Box
            flexDirection="row"
            alignItems="flex-end"
            justifyContent="space-between">
            <Box>
              <Text variant="header" color="secondary" opacity={0.3}>
                Total Spent
              </Text>
              <Text variant="title1">$619,19</Text>
            </Box>
            <Box backgroundColor="primaryLight" borderRadius="m" padding="m">
              <Text color="primary">All Time</Text>
            </Box>
          </Box>
          <Graph
            data={data}
            startDate={startDate}
            numberOfMonths={numberOfMonths}
          />
          <ScrollView
            contentContainerStyle={styles.scrollView}
            showsVerticalScrollIndicator={false}>
            {data.map(transaction => (
              <Transaction key={transaction.id} transaction={transaction} />
            ))}
          </ScrollView>
        </Box>
      </Box>
    </ScrollableContent>
  );
};

export default TransactionHistory;