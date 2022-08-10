//setup block
const data = {
    labels: ['Color1', 'Color2', 'Color3', 'Color4'],
    datasets: [{
        data: [90, 40, 45, 185],
        backgroundColor: [
        'rgb(255, 0, 0)',
        'rgb(140, 29, 162)',
        'rgb(61, 68, 255)',
        'rgb(158, 34, 255)'
        ],
        borderColor: [
        'rgb(255, 0, 0)',
        'rgb(140, 29, 162)',
        'rgb(61, 68, 255)',
        'rgb(158, 34, 255)'
        ], 
        borderWidth: 1
    }]
    };
    
    //options block
    /*const options = {
    plugins: {
        legend: {
        labels: {
          usePointStyle: true
        },
        position: right
        },
        tooltip: {
        enabled: false
        }
    },
    animations: false
    
    };*/
    
    //config block
    const config = {
    type: 'pie',
    data,
    options,
    rotation: 20
    };
    
    //render block
    const myChart = new Chart(
    document.getElementById('myChart'),
    config
    );