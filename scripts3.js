document.addEventListener('DOMContentLoaded', function () {

    const dailyProductionData = {
        labels: ['13.7', '13.8', '13.9', '13.10', '13.11', '13.12', '13.13', '13.14', '13.15', '13.16', '14.1', '14.2', '14.3', '14.4', '14.5', '14.6', '14.7', '14.8', '14.9', '14.10', '14.11', '14.12', '14.13', '14.14', '14.15', '15.1', '15.2', '15.3', '15.4', '15.5'],
        datasets: [
            {
                label: 'Viego',
                data: [47.2, 51.5, 51.7, 55.2, 53.4, 48.7, 47.2, 47.0, 50.2, 50.3, 52.0, 47.2, 49.7, 49.5, 51, 47.2, 45.4, 48.6, 51.0, 52.2, 47.2, 45.4, 47.3, 47.2, 48.9, 47.2, 52.2, 54.4, 55.9, 57.8],
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                fill: false
            },
            {
                label: 'RekSai',
                data: [52.2, 51.4, 55.3, 54.2, 53.6, 55.0, 52.2, 52.2, 52.2, 52.2, 54.2, 54.2, 52.2, 52.2, 54.2, 52.2, 54.2, 51.4, 52.2, 54.2, 54.2, 52.2, 51.4, 54.2, 52.2, 51.4, 52.2, 54.2, 52.2, 54.2],
                borderColor: 'rgba(255, 159, 64, 1)',
                borderWidth: 1,
                fill: false
            }
        ]
    };

    const dailyProductionConfig = {
        type: 'line',
        data: dailyProductionData,
        options: {
            responsive: true,
            scales: {
                x: {
                    display: true,
                    title: {
                        display: true,
                        text: 'Atualização'
                    }
                },
                y: {
                    display: true,
                    title: {
                        display: true,
                        text: 'Win rate'
                    }
                }
            }
        }
    };

    var dailyProductionChart = new Chart(
        document.getElementById('dailyProductionChart'),
        dailyProductionConfig
    );


    const efficiencyComparisonData = {
        labels: ['Céu Divido', 'Eclipse', 'Cutelo Negro', 'Hydra Titânica', 'Capa de Fogo Solar'],
        datasets: [
            {
                label: 'Eficiencia de Primeiro Item',
                data: [75, 82, 78, 85, 90],
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }
        ]
    };

    const efficiencyComparisonConfig = {
        type: 'bar',
        data: efficiencyComparisonData,
        options: {
            responsive: true,
            scales: {
                x: {
                    display: true,
                    title: {
                        display: true,
                        text: 'Itens'
                    }
                },
                y: {
                    display: true,
                    title: {
                        display: true,
                        text: 'Eficiência (%)'
                    }
                }
            }
        }
    };

    var efficiencyComparisonChart = new Chart(
        document.getElementById('efficiencyComparisonChart'),
        efficiencyComparisonConfig
    );

    // Dados para a tabela de estoque de matéria-prima
    const rawMaterialStockData = [
        { material: 'BelVeth', quantity: 'A', required: '50.5%', status: 4.584 },
        { material: 'Kayn', quantity: 'S', required: '52.4%', status: 15.658 },
        { material: 'Nunu e Willump', quantity: 'B', required: '49.3%', status: 3.268 }
    ];

    const rawMaterialStockTable = document.getElementById('rawMaterialStockTable').getElementsByTagName('tbody')[0];
    rawMaterialStockData.forEach(item => {
        const row = rawMaterialStockTable.insertRow();
        row.insertCell(0).innerText = item.material;
        row.insertCell(1).innerText = item.quantity;
        row.insertCell(2).innerText = item.required;
        row.insertCell(3).innerText = item.status;
    });


    const currentProductionStatusData = [
        { produced: 'Flash', goal: 500, percentage: '90%' },
        { produced: 'Curar', goal: 250, percentage: '68%' },
        { produced: 'Fantasma', goal: 32, percentage: '43%' }
    ];

    const currentProductionStatusTable = document.getElementById('currentProductionStatusTable').getElementsByTagName('tbody')[0];
    currentProductionStatusData.forEach(item => {
        const row = currentProductionStatusTable.insertRow();
        row.insertCell(0).innerText = item.produced;
        row.insertCell(1).innerText = item.goal;
        row.insertCell(2).innerText = item.percentage;
    });
});