import React, { PureComponent, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import dayjs from 'dayjs';

export default function graph({weather}) {
        const [data, setData] = useState([]);

        useEffect(() => {
            if (weather.coord) { 
                const url = import.meta.env.VITE_API_URL2;
                const key = import.meta.env.VITE_API_KEY;
                const lat = weather.coord.lat.toFixed(2);
                const lon = weather.coord.lon.toFixed(2);
                const cnt = 8;


                const getURL = `${url}?lat=${lat}&lon=${lon}&cnt=${cnt}&appid=${key}`
                const promise = axios.get(getURL)
                promise.then((res) => {
                    setData(res.data)
                    })
                promise.catch((err) => {
                        alert("Erro: "+err.msg)
                    })
            }
        }, []) 

        function dateConvert(timestamp) {
            const date = dayjs.unix(timestamp);
            const formattedDate = date.format('DD/MM (ddd)');
            return formattedDate;
        }

        const graphData = data.list.map(data =>
            {
            name: dateConvert(data.dt) 
            temp: (data.temp.day - 273.15)
            }
        )
        if (graphData)
        return(
            <LineChart width={730} height={250} data={graphData}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="pv" stroke="#8884d8" />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>
        )
}
