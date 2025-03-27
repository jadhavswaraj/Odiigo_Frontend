import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Calendar, DateData } from 'react-native-calendars';

const CalendarScreen: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<string>('');

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Calendar</Text>
      </View>

      {/* Calendar Component */}
      <Calendar
        onDayPress={(day: DateData) => setSelectedDate(day.dateString)}
        markedDates={{
          [selectedDate]: { selected: true, selectedColor: '#007bff' },
        }}
        theme={{
          selectedDayBackgroundColor: '#007bff',
          todayTextColor: '#ff6347',
          arrowColor: '#007bff',
        }}
      />

      {/* Selected Date Display */}
      {selectedDate ? (
        <Text style={styles.selectedDate}>Selected Date: {selectedDate}</Text>
      ) : (
        <Text style={styles.placeholderText}>Select a date</Text>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f6f9',
    padding: 12,
  },
  header: {
    backgroundColor: '#007bff',
    paddingVertical: 18,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  headerText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    letterSpacing: 0.8,
  },
  selectedDateContainer: {
    marginTop: 20,
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 3,
    alignSelf: 'center',
    width: '90%',
  },
  selectedDate: {
    fontSize: 18,
    textAlign: 'center',
    color: '#333',
    fontWeight: '600',
  },
  placeholderText: {
    marginTop: 15,
    fontSize: 16,
    textAlign: 'center',
    color: '#6c757d',
    fontStyle: 'italic',
  },
});


export default CalendarScreen;
