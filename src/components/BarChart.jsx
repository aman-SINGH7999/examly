import React from 'react'
import { Bar } from 'react-chartjs-2';

export default function BarChart({labels, dataset}) {
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
            label: 'Bar Chart',
            data: dataset,
            fill: true,
            borderColor: '#334e91',
            borderWidth: .8,
            tension: 0.4,
            backgroundColor: '#334e9155',
            hoverBackgroundColor: '#334e91',
        }]
    };
  return (
    <>
        <Bar options={options} data={data} />
    </>
  )
}
