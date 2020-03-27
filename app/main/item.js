import React from 'react';
import { View } from 'react-native';
import { Avatar, DataTable } from 'react-native-paper';

export const Item = ({
  city,
  title,
  temperature,
  sunset,
  sunrise,
  pressure,
  date,
  time,
  icon,
}) => {
  const showIcon = myIcon => {
    console.log(myIcon);
    if (myIcon) {
      return <Avatar.Icon icon={myIcon} size={40} />;
    }
  };
  return (
    <View>
      {/* {showIcon(icon)} */}
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Category</DataTable.Title>
          <DataTable.Title>Value</DataTable.Title>
        </DataTable.Header>

        <DataTable.Row>
          <DataTable.Cell>City</DataTable.Cell>
          <DataTable.Cell>{city}</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>Weather</DataTable.Cell>
          <DataTable.Cell>{title}</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>Temperature</DataTable.Cell>
          <DataTable.Cell>{temperature}</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>Sunrise</DataTable.Cell>
          <DataTable.Cell>{sunrise}</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>Sunset</DataTable.Cell>
          <DataTable.Cell>{sunset}</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>Pressure</DataTable.Cell>
          <DataTable.Cell>{pressure}</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>Date</DataTable.Cell>
          <DataTable.Cell>{date}</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>Time</DataTable.Cell>
          <DataTable.Cell>{time}</DataTable.Cell>
        </DataTable.Row>
      </DataTable>
    </View>
  );
};
