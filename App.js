import React from 'react';
import { View, Text } from 'react-native';
import { BarChart, Grid } from 'react-native-svg-charts';
import { Text as SVGText } from 'react-native-svg';
import { cityData } from './data';
import styles from './styles';

const CityPopulationChart = () => {
  const sortedData = [...cityData].sort((a, b) => b.population - a.population);

  const data = sortedData.map(city => city.population);
  const labels = sortedData.map(city => city.name);

  const Labels = ({ x, y, bandwidth, data }) => (
    data.map((value, index) => {
      const labelPositionX = x(value) + 5;
      const labelPositionY = y(index) + bandwidth / 2;

      return (
        <SVGText
          key={`value-${index}`}
          x={labelPositionX}
          y={labelPositionY}
          fontSize={12}
          fill="black"
          alignmentBaseline="middle"
          textAnchor="start"
        >
          {value}
        </SVGText>
      );
    })
  );

  return (
    <View style={[styles.container, { backgroundColor: 'white' }]}>
      <Text style={styles.title}>
        Iranin 10 suurinta kaupunkia väkiluvun mukaan R17
      </Text>

      <View style={styles.chartContainer}>
        {/* Kaupunkien nimet*/}
        <View style={[styles.leftPanel, { alignItems: 'flex-start', marginLeft: 0 }]}>
          {labels.map((label, index) => (
            <Text key={index} style={[styles.labelText, { textAlign: 'right', paddingLeft: 20 }]}>{label}</Text>
          ))}
        </View>

        {/* Vaakasuuntainen pylväsdiagrammi */}
        <BarChart
          style={styles.barChart}
          data={data}
          horizontal={true}
          svg={{ fill: 'rgba(134, 65, 244, 0.8)' }}
          contentInset={{ top: 15, bottom: 20, left: 0, right: 160 }}
          spacing={0.3}
          gridMin={0}
        >
          <Grid direction={Grid.Direction.VERTICAL} />
          <Labels />
        </BarChart>
      </View>
    </View>
  );
};

export default CityPopulationChart;
