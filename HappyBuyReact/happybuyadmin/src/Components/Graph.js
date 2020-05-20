import React, {useEffect,useState} from 'react'
import { Bar,Line,Pie } from 'react-chartjs-2';
import AuthService from './AuthService';
import dateFormat from 'dateformat';
function Graph() {
    const [sales, setSales] = useState([]);
    const [salesDatas,setData] = useState([]);
    let salesData =[];
    const [charData, setcharData] = useState([]);
    const DATE_OPTIONS = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
  
useEffect(() => {

        AuthService.getSales()
        .then(result=>{
            let temp =[];
            for(let i=0; i<result.data.length; i++)
            {
                if(i===0)
                {
                    salesData.push(0)
                    temp.push(dateFormat("2020-03-13T11:58:07.57", "dd-mm-yyyy"))
                }
                salesData.push(result.data[i].orderDetailsQuantity)
                temp.push(dateFormat(result.data[i].paymentDetailsDateOfPayment, "dd-mm-yyyy"))
            }
            setData(salesData)
            setcharData({
                labels : temp,
            datasets:[{
                label:"Sales by Date",
                data:salesData,
                backgroundColor:[
                    'rgba(255,99,132,0.6)',
                    'rgba(54,99,86,0.6)',
                    'rgba(255,99,132,0.6)',
                    'rgba(75,99,192,0.6)',
                    'rgba(153,99,132,0.6)'
                ]
               }]
            })
        })
    .catch(error=>{
        AuthService.errorHandling(error)

    }
    )

},[])

    return (
        <div>
            <div>
                <Bar
                data={charData}
                width={500}
                height={300}
                options={{maintainAspectRatio:false}}
                >

                </Bar>
            </div>
            
        
        </div>
    )
}

export default Graph
