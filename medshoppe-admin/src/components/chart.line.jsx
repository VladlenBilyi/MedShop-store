import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from 'chart.js';
import { Box } from "@chakra-ui/react";
import { useSelector } from "react-redux";
ChartJS.register(...registerables);
function LineChart() {
  const {data} = useSelector(store=>store.auth)
  const [os , setOs] = useState(0)
  let chartData = {
    labels: ['June','July','Aug','Sep','Oct','Nov','Dec'],
    datasets: [{
      label: 'Our Sale',
      data: [23,30,35,40,42,43,os],
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1
    }]
  }
  
    useEffect(()=>{
     const getData = async()=>{
     let da = fetch('https://crimson-indri-sock.cyclic.app/order',{headers : {access_token : data.AccessToken}})
     .then((er)=>er.json()).then((er)=>{
      if(er.data.length !==0){
        er.data.map((ele)=>{
           setOs((prev)=>prev+ele.orderData.length)
        })
      }
     })
    }
     getData();
  },[])
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