import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import { BarChart } from 'react-native-chart-kit';
import { cityData } from './data'; // Varmista, että polku on oikea
import styles from './styles';

const screenWidth = Dimensions.get('window').width;

const CityPopulationChart = () => {
  const data = {
    labels: cityData.map(city => city.name), // Kaupunkien nimet x-akselille
    datasets: [
      {
        data: cityData.map(city => city.population), // Väkiluvut y-akselille
      }
    ]
  };

  const chartConfig = {
    backgroundColor: "#ffffff",
    backgroundGradientFrom: "#ffffff",
    backgroundGradientTo: "#ffffff",
    decimalPlaces: 0,
    color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`,
    style: {
      borderRadius: 16,
      paddingBottom: 10,
    },
    xAxisLabelRotation: 45, // Kierrä x-akselin tekstit 45 astetta
    labelColor: () => '#000', // Määritetään akselin tekstin väri
  };

  return (
    <View style={[styles.container, { backgroundColor: 'white', flex: 1 }]}>
      <Text style={[styles.title, { fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginBottom: 10 }]}>
        Suurimmat kaupungit väkiluvun mukaan
      </Text>

      <BarChart
        style={[styles.chart, { marginVertical: 10, marginRight: 50 }]} // Pienemmät marginaalit
        data={data}
        width={screenWidth - 40} // Varmistetaan, että kaavio ei mene ruudun ulkopuolelle
        height={300}
        chartConfig={chartConfig}
        verticalLabelRotation={30} // Kierrä pystysuoria etikettejä
        fromZero={true}  // Varmistetaan, että y-akseli alkaa nollasta
        withVerticalLabels={true} // Näytetään pystysuuntaiset etiketit
        withHorizontalLabels={true} // Näytetään vaakasuorat etiketit
        showBarTops={true} // Näytetään pylväiden yläpään arvot
        showValuesOnTopOfBars={true} // Näytetään pylväiden yläpuolella arvot
        xAxisLabelStyle={{
          fontSize: 8, // Fonttikoko pienemmäksi
          color: '#000',
          textAlign: 'center', // Keskitetään tekstit
          marginBottom: 10, // Lisää väliä x-akselin teksteille
          paddingRight: 15, // Lisää väliä oikealle
        }}
        yAxisLabelStyle={{
          fontSize: 12, // Pienennetään y-akselin arvot
          color: '#000', // Y-akselin arvot näkyy mustina
        }}
      />
    </View>
  );
};

export default CityPopulationChart;
