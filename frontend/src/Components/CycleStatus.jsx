import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Chart from 'chart.js/auto';

const HorizontalTimeScaleChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/data'); // Assuming your API endpoint is '/api/data'
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    if (data.length > 0) {
      createChart();
    }
  }, [data]);

  const createChart = () => {
    const timestamps = data.map(entry => new Date(entry.ts));
    const vibrationValues = data.map(entry => entry.vibration);
    const machineStatus = data.map(entry => entry.machine_status);
  
    const backgroundColors = machineStatus.map(status => {
      if (status === 0) {
        return 'rgba(255, 255, 0, 0.2)'; // Yellow
      } else if (status === 1) {
        return 'rgba(0, 128, 0, 0.2)'; // Green
      } else {
        return 'rgba(255, 0, 0, 0.2)'; // Red (missing)
      }
    });
  
    const ctx = document.getElementById('chart').getContext('2d');
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: timestamps,
        datasets: [{
          label: 'Vibration',
          data: vibrationValues,
          borderColor: 'blue',
          backgroundColor: backgroundColors, // Use conditional background colors
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          x: {
            type: 'time',
            time: {
              unit: 'minute' // Adjust the time unit as per your preference
            },
            title: {
              display: true,
              text: 'Time'
            }
          },
          y: {
            title: {
              display: true,
              text: 'Vibration'
            }
          }
        }
      }
    });
  };
  

  return (
    <div>
      <h2>Horizontal Time Scale Chart</h2>
      <canvas id="chart" width="400" height="200"></canvas>
    </div>
  );
};

export default HorizontalTimeScaleChart;
