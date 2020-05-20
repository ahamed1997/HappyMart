import React, {useEffect,useState} from 'react'
import { Bar} from 'react-chartjs-2';
import AuthService from './AuthService';
function SalesByProduct() {
    const [sales, setSales] = useState([]);
    const [salesDatas,setData] = useState([]);
    let salesData =[];
    const [charData, setcharData] = useState([]);
    const DATE_OPTIONS = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
    useEffect(() => {
        AuthService.getSalesByProducts()
        .then(result=>{
            console.log(result.data)
            let temp =[];
            for(let i=0; i<result.data.length; i++)
            {
                if(result.data[i].orderDetailsQuantity === null)
                {
                    salesData.push(0)
                    temp.push(result.data[i].productId)
                }else
            {
                salesData.push(result.data[i].orderDetailsQuantity)
                temp.push(result.data[i].productId)
            }
                
                
            }
            setData(salesData)
            setcharData({
                labels : temp,
            datasets:[{
                label:"Sales by Product",
                data:salesData,
                backgroundColor:[
                    'rgba(255,99,132,0.6)',
                    'rgba(54,99,86,0.6)',
                    'rgba(255,99,132,0.6)',
                    'rgba(75,99,192,0.6)',
                    'rgba(153,99,132,0.6)',
                    'rgba(255,99,132,0.6)',
                    'rgba(54,99,86,0.6)',
                    'rgba(255,99,132,0.6)',
                    'rgba(54,99,86,0.6)',
                    'rgba(123,99,132,0.6)',
                    'rgba(255,99,132,0.6)',
                    'rgba(54,99,86,0.6)'
                ]
               }]
            })
        })
        .catch(error=>{
            AuthService.errorHandling(error)
        })
    },[])
    return (
        <div style={{height:500}}>
            <Bar
                data={charData}
                width={300}
                height={100}
                options={{maintainAspectRatio:false}}
                >

                </Bar>
        </div>
    )
}

export default SalesByProduct
