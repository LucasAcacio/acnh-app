import React from 'react';
import { StyleSheet } from 'react-native';
import { Tab, TabView } from 'react-native-elements';

import BugPage from './components/BugPage';
import FishPage from './components/FishPage';
import SeaCreaturePage from './components/SeaCreaturePage';
import VillagerPage from './components/VillagerPage';

export default () => {
  const [index, setIndex] = React.useState(0);

  return (
    <>
      <Tab
        value={index}
        onChange={(e) => setIndex(e)}
        indicatorStyle={{
          backgroundColor: '#f7d359',
          height: 3,
          paddingTop:15,
        }}
        variant="primary"
      >
        <Tab.Item
          style={styles.tabContainer}
          title="Fish"
          titleStyle={{ fontSize: 14, color:'#f7d359' }}
        />
        <Tab.Item
          style={styles.tabContainer}
          title="Bugs"
          titleStyle={{ fontSize: 14, color:'#f7d359' }}
        />
        <Tab.Item
          style={styles.tabContainer}
          title="Sea Creatures"
          titleStyle={{ fontSize: 12, color:'#f7d359' }}
        />
        <Tab.Item
          style={styles.tabContainer}
          title="Villgers"
          titleStyle={{ fontSize: 14, color:'#f7d359' }}
        />
      </Tab>

      <TabView value={index} onChange={setIndex} animationType="spring">
        <TabView.Item>
          <FishPage/>
        </TabView.Item>
        <TabView.Item>
          <BugPage/>
        </TabView.Item>
        <TabView.Item>
          <SeaCreaturePage/>
        </TabView.Item>
        <TabView.Item>
          <VillagerPage/>
        </TabView.Item>
      </TabView>
    </>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
      alignItems: 'center',
      backgroundColor: '#786951',
      paddingTop: 20
  },
});