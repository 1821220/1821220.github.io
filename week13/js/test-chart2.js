var labels = ['January', 'February', 'March', 'April', 'May', 'June'];

var data = {
    labels: labels,
    datasets: [{
        label: '初めてのグラフ',
        borderColor: 'rgb(150, 50, 60)',
        backgroundColor: 'rgb(255, 100, 130',
        data: [0, 10, 15, 3, 20, 60, 10],
    }]
};

const config = {
    type: 'radar',
    data: data,
    options: {
        elements: {
            line: {
                borderWidth: 3
            }
        }
    },
};

var lineChart = new Chart(
    document.getElementById('lineChart'),
    config,
);