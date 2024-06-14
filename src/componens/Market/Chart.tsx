import React, { useEffect, useRef, useState } from 'react';
import { createChart, IChartApi, ISeriesApi, Time } from 'lightweight-charts';

interface ChartProps {
    data: {
        result: {
            data: {
                data: [number, number, number, string][];
            };
        };
    };
}

interface ChartDataPoint {
    time: number | Time;
    value: number;
}

const Chart: React.FC<ChartProps> = ({ data }) => {
    const chartContainerRef = useRef<HTMLDivElement | null>(null);
    const chartInstanceRef = useRef<IChartApi | null>(null);
    const areaSeriesRef = useRef<ISeriesApi<'Area'> | null>(null);
    const [chartData, setChartData] = useState<ChartDataPoint[]>([]);

    useEffect(() => {
        const createChartInstance = () => {
            const chart = createChart(chartContainerRef.current!, {
                width: chartContainerRef.current!.clientWidth,
                height: 400,
                layout: {
                    background: { color: 'transparent' },
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
                    tickMarkFormatter: (time: any, locale: string) => {
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
                    chartInstanceRef.current.resize(chartContainerRef.current!.clientWidth, 400);
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

        const updateChartData = (newData: any) => {
            const newChartData = newData.result.data.data.map(([timestamp, , price]: [number, number, string]) => ({
                time: timestamp,
                value: parseFloat(price),
            }));

            setChartData(prevData => {
                const mergedData = [...prevData, ...newChartData];
                const uniqueData = Array.from(new Set(mergedData.map(d => d.time)))
                    .map(time => mergedData.find(d => d.time === time))
                    .sort((a, b) => a.time - b.time);
                return uniqueData as ChartDataPoint[];
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
            const areaData = chartData.map(point => ({
                time: point.time as Time,
                value: point.value,
            }));
            areaSeriesRef.current.setData(areaData);        
        }
    }, [chartData]);

    return (
        <div className="relative px-4 py-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-24">
            <div ref={chartContainerRef} style={{ width: '100%', height: '400px' }} />
        </div>
    );
};

export default Chart;