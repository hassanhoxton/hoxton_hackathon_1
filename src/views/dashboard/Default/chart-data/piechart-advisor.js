const chartData = {
    series: [2200, 3300, 1400, 2300, 2200, 5000, 4000, 600, 5260],
    options: {
        labels: [
            'LOA(Sent)',
            'LOA (Received)',
            'Transfer Values Added',
            'Proposal Stage',
            'Deal Agreed',
            'Dbar  PTSR 1st Call ',
            'Dbar PTSR 2nd Call',
            'Transfer in Process',
            'Client'
        ],
        theme: {
            monochrome: {
                enabled: false
            }
        },
        responsive: [
            {
                breakpoint: 480,
                options: {
                    chart: {
                        width: '100%'
                    },
                    legend: {
                        show: false
                    }
                }
            }
        ],
        chart: {
            events: {
                dataPointSelection: (event, chartContext, config) => {
                    console.log(config.w.config.labels[config.dataPointIndex]);
                }
            }
        }
    },
    type: 'pie',
    height: '400'
};
export default chartData;
