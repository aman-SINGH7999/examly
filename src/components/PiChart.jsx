import React, { useEffect, useState } from 'react'
import { Pie } from 'react-chartjs-2';

export default function PiChart({labels, dataset}) {
    const [sorted_labels, setSortedLabels] = useState([]);
    const [percentData, setPercentData] = useState([]);
    const [colors, setColors] = useState([]);
    useEffect(()=>{
        const total = dataset.reduce((acc, curr) => acc + curr, 0);
        const percentages = dataset.map((num) => (num / total * 100).toFixed(2));
        const sortedData = sortArraysByValue(labels, percentages);
        const clrs = randomColorGenerator('#dcecff','#334eaa', sortedData.values);
        // console.log(sortedData.labels)
        setPercentData(sortedData.values);
        setSortedLabels(sortedData.labels);
        // console.log(sorted_labels)
        setColors(clrs);
    }, [labels, dataset])
    function sortArraysByValue(labelArr, valueArr) {
        const combinedArray = labelArr.map((item, index) => ({ item, value: valueArr[index] }));
        combinedArray.sort((a, b) => b.value - a.value);
        let l=combinedArray.map(item => item.item);
          let v=combinedArray.map(item=>item.value);
          return {labels:l,values:v};
      }
    function randomColorGenerator(baseColor1, baseColor2, valueArray) {
        function hexToRgb(hex) {
            const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
            return result ? result.slice(1).map(x => parseInt(x, 16)) : null;
          }
          
          function hexToRgb(hex) {
            const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
            return result ? result.slice(1).map(x => parseInt(x, 16)) : null;
          }
          
          function rgbToHex(rgb) {
            return "#" + rgb.map(x => x.toString(16).padStart(2, '0')).join('');
          }
        // Convert the base colors to RGB components
        const baseRGB1 = hexToRgb(baseColor1);
        const baseRGB2 = hexToRgb(baseColor2);
      
        // Find the maximum value in the array
        const maxValue = Math.max(...valueArray);
      
        // Generate random color values based on the array, scaled between the base colors
        const randomRGB = valueArray.map(value => {
          const scale = value / maxValue;
          return baseRGB1.map((baseValue1, index) => {
            const baseValue2 = baseRGB2[index];
            return Math.round(baseValue1 + (baseValue2 - baseValue1) * scale);
          });
        });
      
        // Convert the combined RGB values to hexadecimal color codes
        const randomColors = randomRGB.map(rgb => rgbToHex(rgb));
      
        return randomColors;
      }
    function oppositColor(color) {
        // Remove the '#' from the color code
        if (color) {
            color = color.replace('#', '');
        
            // Convert hexadecimal color to RGB components
            const r = parseInt(color.substring(0, 2), 16);
            const g = parseInt(color.substring(2, 4), 16);
            const b = parseInt(color.substring(4, 6), 16);
        
            // Calculate luminance using the Y'UV color space formula
            const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;
        
            // Determine if the color is bright based on a threshold
            return luminance > 180?'#334e91':'#ffffff'; // Adjust the threshold as needed
        } else {
            return '#334e91';
        }
    }
    const options = {
        plugins: {
            tooltip: {
                backgroundColor: '#334e91',
                displayColors: false,
                callbacks: {
                    title: () => null,
                    label: (d) => `${d.label}: ${d.raw}%`
                },
                enabled: true,
                intersect: false,
            },
            legend: false,
            datalabels: { // Add the datalabels plugin configuration
                color: '#dcecfc',
                formatter: (value, context) => {
                    // console.log(value, context.dataIndex);
                    return `${sorted_labels[context.dataIndex]}`;//\n${value}%`;
                }, // Display percentage
                font: {
                    size: 8,
                    weight: 'bold'
                },
                anchor: 'center',
                align: 'center',
                display: true, // Always display labels
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
        labels: sorted_labels,
        datasets: [{
            label: 'Pi Chart',
            data: percentData,
            fill: true,
            borderColor: '#334e91',
            borderWidth: .8,
            tension: 0.4,
            backgroundColor: colors,
            hoverBackgroundColor: '#334e91',
        }]
    };
  return (
    <div className='h-full'>
        <div className='w-full'>
            <Pie options={options} data={data} />
        </div>
        <div className='w-full text-[11px] mt-2'>
            <div className='w-full'>
                <div className='overflow-y-scroll overflow-x-hidden h-full max-h-[150px] custom-scrollbar border-b-2 grid grid-cols-3 gap-x-1'>
                    {
                        sorted_labels.map((l,i)=>{
                            return (
                                <div className='flex my-0 flex justify-between px-1 flex-wrap' key={i} style={{background:colors[i], color: oppositColor(colors[i]) }}>
                                    <div className='text-left capitalize'>{l}</div>
                                    <div className='text-right'>{percentData[i]}</div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    </div>
  )
}
