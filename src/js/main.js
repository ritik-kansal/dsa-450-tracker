
export const loadQuestionSolved=()=>{
    var ctx = document.getElementById('myChart').getContext('2d');
    const data = {
        datasets: [
            {
                label: 'My First Dataset',
                data: [
                    100, 120, 80, 150
                ],
                backgroundColor: [
                    'rgba(82, 196, 26, 1)', 'rgba(245, 132, 70, 1)', 'rgba(245, 34, 45, 1)', 'rgba(245, 34, 45, 0)',
                ],
                hoverOffset: 4
            }
        ]
    };
    const Chart = window.Chart;
    var myChart = new Chart(ctx, {
        type: 'doughnut',
        data: data,
        options: {
            cutout: "80%",
            borderWidth: 0,
            offset: 5,
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });
    // myChart.destroy()
    // myChart.defaults.global.legend.position = 'bottom';
}

export const r_alert=()=>{
    alert("Dsasd")
}
