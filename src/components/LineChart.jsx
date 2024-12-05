import React from 'react'
import { Line } from 'react-chartjs-2';

// Define the custom plugin to draw lines
const customLinePlugin = {
    id: 'customLinePlugin',
    beforeDraw: (chart) => {
        const ctx = chart.ctx;
        const activeElements = chart.tooltip.getActiveElements();

        if (activeElements.length > 0) {
            const { x, y } = activeElements[0].element;

            // Draw vertical line
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(x, chart.chartArea.top);
            ctx.lineTo(x, chart.chartArea.bottom);
            ctx.lineWidth = .6;
            ctx.strokeStyle = '#334e9133';
            ctx.stroke();
            ctx.restore();

            // Draw horizontal line
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(chart.chartArea.left, y);
            ctx.lineTo(chart.chartArea.right, y);
            ctx.lineWidth = .6;
            ctx.strokeStyle = '#334e9133';
            ctx.stroke();
            ctx.restore();
        }
    }
};


export default function LineChart({labels, dataset}) {
    const options = {
        plugins: {
            tooltip: {
                backgroundColor: '#334e91',
                displayColors: false,
                callbacks: {
                    title: () => null,
                    label: (d) => `${d.label}: ${d.raw}`
                },
                enabled: true,
                intersect: false,
            },
            legend: false,
            datalabels: false
        },
        scales: {
            x: {
                ticks: {
                    font: {
                        size: 6,
                    }
                },
                grid: {
                    display: false,
                    drawOnChartArea: true,
                }
            },
            y: {
                ticks: {
                    font: {
                        size: 6,
                    }
                },
                grid: {
                    display: false,
                    drawOnChartArea: false,
                }
            }
        },
        responsive: true,
        maintainAspectRatio: false,
        interaction: {
            mode: 'nearest',
            intersect: false
        }
    };
    const data = {
        labels: labels,
        datasets: [{
            label: 'Line Chart',
            data: dataset,
            fill: true,
            borderColor: '#334e91',
            borderWidth: .8,
            tension: 0.4,
            backgroundColor: (context) => {
                const ctx = context.chart.ctx;
                const gradient = ctx.createLinearGradient(0, 0, 0, 200);
                gradient.addColorStop(0, "#dcecfc");
                gradient.addColorStop(1, "#ffffff00");
                return gradient;
            },
            hoverBackgroundColor: '#334e91',
            pointBackgroundColor: '#00000000',
            pointBorderColor: '#ffffff00',
            pointHitRadius: 15,
        }]
    };
  return (
    <>
        <Line options={options} data={data} plugins={[customLinePlugin]} />
    </>
  )
};