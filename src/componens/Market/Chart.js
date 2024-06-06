import React, { useEffect, useRef } from 'react';
import { createChart } from 'lightweight-charts';

const Chart = ({ data }) => {
    const chartContainerRef = useRef(null);
    const chartInstanceRef = useRef(null);
    const areaSeriesRef = useRef(null);
    const lastTimeRef = useRef(null);

    useEffect(() => {
        // Function to create the chart instance and series
        const createChartInstance = () => {
            const chart = createChart(chartContainerRef.current, {
                width: chartContainerRef.current.clientWidth,
                height: 400,
                layout: {
                    background: { type: 'solid', color: 'transparent' }, // Make background transparent
                    textColor: '#d1d4dc'
                },
                grid: {
                    vertLines: { color: 'rgba(42, 46, 57, 0.5)' },
                    horzLines: { color: 'rgba(42, 46, 57, 0.5)' }
                },
                localization: {
                    timeFormatter: (timestamp) => {
                        const date = new Date(timestamp * 1000);
                        return `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')} ${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`;
                    }
                }
            });

            const areaSeries = chart.addAreaSeries({
                topColor: 'rgba(33, 150, 243, 0.56)',
                bottomColor: 'rgba(33, 150, 243, 0.04)',
                lineColor: 'rgba(33, 150, 243, 1)',
                lineWidth: 2
            });

            chartInstanceRef.current = chart;
            areaSeriesRef.current = areaSeries;

            // Handle chart resize
            const handleResize = () => {
                if (chartInstanceRef.current) {
                    chartInstanceRef.current.resize(chartContainerRef.current.clientWidth, 400);
                }
            };
            window.addEventListener('resize', handleResize);

            return () => {
                window.removeEventListener('resize', handleResize);
                if (chartInstanceRef.current) {
                    chartInstanceRef.current.remove();
                    chartInstanceRef.current = null;
                    areaSeriesRef.current = null;
                }
            };
        };

        // Function to update the series data
        const updateChartData = (newData) => {
            const chartData = newData.result.data.data.map(([timestamp, , price]) => ({
                time: timestamp,
                value: parseFloat(price),
            }));

            // Filter out duplicate timestamps
            const uniqueChartData = chartData.filter(item => item.time !== lastTimeRef.current);

            if (uniqueChartData.length > 0) {
                lastTimeRef.current = uniqueChartData[uniqueChartData.length - 1].time;
                
                if (areaSeriesRef.current) {
                    uniqueChartData.forEach(dataPoint => {
                        areaSeriesRef.current.update(dataPoint);
                    });
                }
            }
        };

        if (!chartInstanceRef.current) {
            createChartInstance();
        }

        if (data && data.result && data.result.data && data.result.data.data.length > 0) {
            updateChartData(data);
        }

        return () => {
            if (chartInstanceRef.current) {
                chartInstanceRef.current.remove();
                chartInstanceRef.current = null;
                areaSeriesRef.current = null;
            }
        };
    }, [data]);

    return (
        <div className="relative px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-8">
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">  
                <div ref={chartContainerRef} style={{ width: '100%', height: '400px' }} />
            </div> 
        </div>
    );
};

export default Chart;