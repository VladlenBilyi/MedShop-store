import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from 'chart.js';
import { Box } from "@chakra-ui/react";
ChartJS.register(...registerables);
function LineChart({ chartData }) {
  return (
    <Box className="chart-container" w='100%' m='auto'>
      <Line
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
            },
            legend: {
              display: false
            }
          }
        }}
      />
    </Box>
  );
}
export default LineChart;