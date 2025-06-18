import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const AsteroidsCharts = ({data})=> {

const chartData = data.map((asteroid)=> ({
    name:asteroid.name,
    diameter: asteroid.estimated_diameter.meters.estimated_diameter_max,
}));

return (
    <div>
        <h3>Asteroids Sizes</h3>
    </div>
)

}