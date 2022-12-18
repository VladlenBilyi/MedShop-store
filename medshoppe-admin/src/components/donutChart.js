import React, { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from 'chart.js';
import { Box, StatHelpText } from "@chakra-ui/react";
import axios from "axios";
ChartJS.register(...registerables);
function PieChart() {
    const [t , setT] = useState({
        labels: [
          'Products',
          'Users',
          'Order Success',
          'Order Pending'
        ],
        datasets: [{
          label: 'My First Dataset',
        data:[20,30,40,60],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)',
            '#2cd340'
          ],
          hoverOffset: 4
        }]
      })
    useEffect(()=>{
     async function getData(){
      let res = await axios.get('https://crimson-indri-sock.cyclic.app/all');
      let data = await res.data.data;
      let arr1 = [];
      console.log(data)
      let p = 0;
      if(data?.product.length !==0){
          for(let i=0;i<data.product.length;i++){
            let ele = data.product[i]
            p+=ele.total
          }
      }
      arr1.push(p);
      let u = 0;
      if(data?.user.length !==0){
          for(let i=0;i<data.user.length;i++){
            let ele = data.user[i]
            u+=ele.total
          }

      }
      arr1.push(u);


      let os=0;
      let ps=0;
     if(data?.order.length !==0){
        for(let i=0;i<data.order.length;i++){
            let ele = data.order[i]
            if(ele._id){
                os+=ele.total
            }
            else{
                ps+=ele.total
            }
          }
     }
     arr1.push(os);
     arr1.push(ps);
   setT({...t,['datasets.data']:arr1})
     }
     getData();
    },[])
  return (
    <Box className="chart-container" w='100%' m='auto'>
      <Doughnut
        data={t}
      />
    </Box>
  );
}
export default PieChart;