import React, { useEffect, useRef, useState } from 'react';
import { createChart } from 'lightweight-charts';

const Chart = ({ data }) => {
    const chartContainerRef = useRef(null);
    const chartInstanceRef = useRef(null);
    const areaSeriesRef = useRef(null);
    const [chartData, setChartData] = useState([]);

    useEffect(() => {
        const createChartInstance = () => {
            const chart = createChart(chartContainerRef.current, {
                width: chartContainerRef.current.clientWidth,
                height: 400,
                layout: {
                    background: { type: 'solid', color: 'transparent' },
                    textColor: 'rgb(3 7 18)',
                },
                grid: {
                    vertLines: { color: 'transparent' },
                    horzLines: { color: 'transparent' }
                },
                rightPriceScale: {
                    borderVisible: false
                },
                timeScale: {
                    borderVisible: false,
                    tickMarkFormatter: (time, locale) => {
                        const date = new Date(time * 1000);
                        return date.toLocaleString(locale, {
                            hour: '2-digit',
                            minute: '2-digit',
                        });
                    },
                },
            });

            const areaSeries = chart.addAreaSeries({
                topColor: 'rgba(33, 150, 243, 0.56)',
                bottomColor: 'rgba(33, 150, 243, 0.04)',
                lineColor: 'rgba(33, 150, 243, 1)',
                lineWidth: 2
            });

            chartInstanceRef.current = chart;
            areaSeriesRef.current = areaSeries;

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

        const updateChartData = (newData) => {
            const newChartData = newData.result.data.data.map(([timestamp, , price]) => ({
                time: timestamp,
                value: parseFloat(price),
            }));

            setChartData(prevData => {
                const mergedData = [...prevData, ...newChartData];
                const uniqueData = Array.from(new Set(mergedData.map(d => d.time))).map(time => mergedData.find(d => d.time === time));
                uniqueData.sort((a, b) => a.time - b.time);
                return uniqueData;
            });
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

    useEffect(() => {
        if (areaSeriesRef.current) {
            areaSeriesRef.current.setData(chartData);
        }
    }, [chartData]);

    return (
        <div className="relative px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-8">
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div ref={chartContainerRef} style={{ width: '100%', height: '400px' }} />
            </div> 
        </div>
    );
};

export default Chart;