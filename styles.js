import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    marginTop: 60,
  },
  labelText: {
    fontSize: 14,
    marginBottom: 12,
  },
  chartContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
  },
  barChart: {
    height: 330,
    width: '100%',
  },
  leftPanel: {
    width: 100,
  },
});

export default styles;
