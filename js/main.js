var chartColors = {
    blue: "rgb(106, 147, 181)",
    green: 'rgb(97, 123, 114)',
    red: 'rgb(196, 78, 103)',
    yellow: 'rgb(251, 177, 52)',
    purple: 'rgb(151, 109, 127)',
    purple2: 'rgb(103, 97, 116)'
  };
  
  
  /*----------CANTIDAD DE SUCESOS------------------*/
  
  const ctx = document.getElementById("eventsNumber").getContext("2d");
  const chart = new Chart(ctx, {
    type: "horizontalBar",
    data: {
      labels: ["Accidentes", "Incidentes\ngraves", "Incidentes", "Intervenciónes"],
      datasets: [{
        label: "Cantidad de Sucesos (2020)",
        data: [ 30, 15, 13, 23, 35],
        backgroundColor: [
          chartColors.blue,
          chartColors.blue,
          chartColors.blue,
          chartColors.blue
        ],/*
        borderColor: [
          "rgb(1, 94, 184)",
          "rgb(1, 94, 184)",
          "rgb(1, 94, 184)",
          "rgb(1, 94, 184)"
        ],
        borderWidth: 3,
        hoverBorderWidth: 0
        */
      }] 
    },
    options: {
      responsive: true,
      legend: {
        display: false,
          position: 'bottom',
      },
      tooltips: {
        titleFontFamily: "Encode Sans",
        backgroundColor: 'rgba(0,0,0,0.3)',
        titleFontColor: 'black',
        caretSize: 5,
        cornerRadius: 2,
        xPadding: 10,
        yPadding: 10,
        mode: "index",
        intersect: true
      },
      scales: {
        yAxes: [{
          barPercentage: 0.5,
          ticks: {
            fontSize: 15,
            beginAtZero: true
          },
          gridLines: {
            color: "rgba(0, 0, 0, 0)",
        }
        }]
      }
    }
  
  });
  
  /*-------------------------OPERACIONES MENSUALES-----------------------------*/
  
  
  const operations = document.getElementById("operations").getContext("2d");
  
  var nonCommercialOperations = {
    label: "Linea 1", 
    data: [50, 10, 20, 24, 9, 6, 8, 8, 17, 15, 25, 21],
    /*lineTension: 0.3,*/
    borderColor: chartColors.blue,
    backgroundColor: 'transparent',
    /*borderDash: [5, 10],*/
    pointBorderColor: chartColors.blue,
    pointBackgroundColor: chartColors.blue,
    pointRadius: 4,
    pointHoverRadius: 7,
  /*  pointHitRadius: 10, */
  /*  pointBorderWidth: 0, */
    pointStyle: 'rectRounded'
  };
  
  
  var vuelosComerciales = {
    label: "Linea 2", 
    data: [30, 5, 13, 20, 10,5, 3, 3, 10, 15, 20, 20],
    /*lineTension: 0.3,*/
    borderColor: chartColors.green,
    backgroundColor: 'transparent',
    /*borderDash: [5, 10],*/
    pointBorderColor: chartColors.green,
    pointBackgroundColor: chartColors.green,
    pointRadius: 4,
    pointHoverRadius: 7,
  /*  pointHitRadius: 10, */
  /*  pointBorderWidth: 0, */
    pointStyle: 'rectRounded'
  };
  
  var operacionesEspecializadas = {
    label: "Linea 3", 
    data: [20, 15, 30, 30, 35, 30, 40, 20, 30, 5, 11, 12],
    borderColor: chartColors.red,
    backgroundColor: 'transparent',
    /*borderDash: [5, 10],*/
    pointBorderColor: chartColors.red, 
    pointBackgroundColor: chartColors.red,
    pointRadius: 4,
    pointHoverRadius: 7,
  /*  pointHitRadius: 10, */
  /*  pointBorderWidth: 0, */
    pointStyle: 'rectRounded'
  };
  
  var desconocido = {
    label: "Linea 4",
    data: [10, 15, 20, 30, 25, 10, 5, 10, 15, 20, 30, 20],
    /*lineTension: 0,*/
    /*fill: false,*/
    borderColor: chartColors.yellow,
    backgroundColor: 'transparent',
    /*borderDash: [5, 10],*/
    pointBorderColor: chartColors.yellow,
    pointBackgroundColor: chartColors.yellow,
    pointRadius: 4,
    pointHoverRadius: 7,
  /*  pointHitRadius: 10, */
  /*  pointBorderWidth: 0, */
    pointStyle: 'rectRounded'
  };
  
  var speedData = {
      labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
      datasets:  [nonCommercialOperations, vuelosComerciales, operacionesEspecializadas, desconocido]
  };
  
  var lineChart = new Chart(operations, {
    type: 'line',
    data: speedData,
    options: {
      responsive: true,
      maintainAspectRatio: true,
      legend: {
        display: false,
          position: 'bottom',
      },
      tooltips: {
        titleFontFamily: "Encode Sans",
        backgroundColor: 'rgba(0,0,0,0.3)',
        titleFontColor: 'black',
        caretSize: 5,
        cornerRadius: 2,
        xPadding: 10,
        yPadding: 10,
        mode: "index",
        intersect: true
      },
      scales: {
        yAxes: [{
          barPercentage: 0.5,
          ticks: {
            fontSize: 18,
            beginAtZero: true
          },/*,
          gridLines: {
            color: "rgba(0, 0, 0, 0)",
          }*/
        }],
        xAxes: [{
          gridLines: {
              color: "rgba(0, 0, 0, 0)",
          },
          ticks: {
            fontSize: 15,
          }   
      }]
      }
    }
  });
  
  /*-----------------------RESUMEN--------------------------- */
  
  var summary = document.getElementById("summary");
  /*
  Chart.defaults.global.defaultFontFamily = "Lato";
  Chart.defaults.global.defaultFontSize = 18;
  */
  var summaryData = {
      labels: [
          "Operaciones especializadas",
          "Operaciones estatales",
          "Transporte aéreo comercial",
          "Operaciones no comerciales",
          "Desconocido",
          "Ilegal"
      ],
      datasets: [
          {
              data: [57, 5, 104, 298, 7, 4],
              backgroundColor: [
                chartColors.green,
                chartColors.purple,
                chartColors.red,
                chartColors.yellow,
                chartColors.blue,
                chartColors.purple2
  
              ],
              
              borderColor: [
                "#eeeeee",
                "#eeeeee",
                "#eeeeee",
                "#eeeeee",
                "#eeeeee",
                "#eeeeee"
              ],
              borderWidth: 2
          }]
  };
  
  var pieChart = new Chart(summary, {
    type: 'doughnut',
    data: summaryData,
    options: {
      legend: {
        display: false,
        position: 'bottom',
    },
    }
  });
     
  /*----------------------------SUCESOS POR FASE DE VUELO--------------------------------------*/
  const faseDeVuelo = document.getElementById("faseDeVuelo").getContext("2d");
  const chart3 = new Chart(faseDeVuelo, {
    type: "bar",
    data: {
      labels: ["Rodaje salida", "Despegue", "Ascenso", "Crucero", "Maniobras", "Aproximación", "Descenso", "Aterrizaje", "Rodaje a plataforma", "Estacionado", "Se desconoce"],
      datasets: [{
        label: "Cantidad de Sucesos (2020)",
        data: [ 30, 15, 13, 23, 35, 30, 20, 10, 4, 6, 7, 40],
        backgroundColor: [
          chartColors.blue,
          chartColors.blue,
          chartColors.blue,
          chartColors.blue,
          chartColors.blue,
          chartColors.blue,
          chartColors.blue,
          chartColors.blue,
          chartColors.blue,
          chartColors.blue,
          chartColors.blue
        ],
        /*
        borderColor: [
          "rgb(1, 94, 184)",
          "rgb(1, 94, 184)",
          "rgb(1, 94, 184)",
          "rgb(1, 94, 184)",
          "rgb(1, 94, 184)",
          "rgb(1, 94, 184)",
          "rgb(1, 94, 184)",
          "rgb(1, 94, 184)",
          "rgb(1, 94, 184)",
          "rgb(1, 94, 184)",
          "rgb(1, 94, 184)"
        ],
        borderWidth: 3,
        hoverBorderWidth: 0
        */
      }] 
    },
    options: {
      responsive: true,
      legend: {
        display: false,
        position: 'bottom',
      },
      scales: {
        yAxes: [{
          barPercentage: 0.5,
            beginAtZero: true
          
          /*,
          gridLines: {
            color: "rgba(0, 0, 0, 0)",
          }*/
        }],
        xAxes: [{
          ticks: {
            fontSize: 15,
          },
          gridLines: {
              color: "rgba(0, 0, 0, 0)",
          }   
      }]
      }
    }
  
  });
   
  
  
  /*-----------------DOBLE DOS --------------------------*/
  
  var harmonizedCategory = document.getElementById("harmonizedCategory").getContext("2d");
  
  Chart.defaults.global.defaultFontFamily = "Lato";
  Chart.defaults.global.defaultFontSize = 18;
  
  var line1 = {
    label: 'Line 1',
    data: [0, 0, 15, 15, 47, 10, 30, 0],
    backgroundColor: chartColors.blue,
    /*
    borderColor: 'rgb(106, 127, 181)',
    borderWidth: 2,
    hoverBorderWidth: 0
    */
  };
  
  var line2 = {
    label: 'Line 2',
    data: [0, 0, 0, 0, 0, 0, 0, 0],
    backgroundColor: chartColors.green,
    /*
    borderColor: 'rgba(99, 112, 0)',
    borderWidth: 2,
    hoverBorderWidth: 0
    */
  };
  
  var line3 = {
    label: 'Line 3',
    data: [0, 0, 5, 0, 0, 0, 7, 0],
    backgroundColor: chartColors.red,
    /*
    borderColor: 'rgb(97, 103, 114)',
    borderWidth: 2,
    hoverBorderWidth: 0
    */
  };
  
  var line4 = {
    label: 'Line 4',
    data: [20, 35, 70, 35, 125, 0, 80, 0],
    backgroundColor: chartColors.yellow,
    /*
    borderColor: 'rgb(251, 157, 52)',
    borderWidth: 2,
    hoverBorderWidth: 0
    */
  };
  
  var line5 = {
    label: 'Line 5',
    data: [0, 0, 0, 0, 25, 0, 25, 0],
    backgroundColor: chartColors.purple,
    /*
    borderColor: 'rgb(103, 77, 116)',
    borderWidth: 2,
    hoverBorderWidth: 0
    */
  };
  
  var line6 = {
    label: 'Line 5',
    data: [0, 3, 0, 0, 3, 0, 0 , 0],
    backgroundColor: chartColors.purple2,
    /*
    borderColor: 'rgb(196, 58, 103)',
    borderWidth: 2,
    hoverBorderWidth: 0
    */
  };
  
  var category = {
    labels: ["CFIT", "LOC-I", "RS", "GS", "OD", "MED", "OTHER", "UNK"],
    datasets: [line1, line2, line3, line4, line5, line6]
  };
  
  var chartOptions = {
    legend: {
      display: false,
      position: 'bottom',
    },
    scales: {
      responsive: true,
      xAxes: [{
        barPercentage: 0.8,
        ticks: {
          fontSize: 15
        },
        categoryPercentage: 0.6,
        gridLines: {
          color: "rgba(0, 0, 0, 0)",
        }
      }],
      yAxes: [{
        ticks: {
          fontSize: 15,
        }   
        /*
        gridLines: {
          /*color: "rgba(0, 0, 0, 0)",
        }*/
      },
      ]
    }
  };
  
  var barChart = new Chart(harmonizedCategory, {
    type: 'bar',
    data: category,
    options: chartOptions
  });
  
  /*-----------------ACCIDENTES POR CATEGORIA --------------------------*/
  
  var accidentCategory = document.getElementById("accidentCategory").getContext("2d");
  
  Chart.defaults.global.defaultFontFamily = "Lato";
  Chart.defaults.global.defaultFontSize = 18;
  
  var accidentes = {
    label: 'Line 1',
    data: [0, 0, 15, 15, 47, 10, 30, 0, 10, 0, 20, 30, 0, 10, 20 , 30, 20, 10, 0, 10, 0, 0, 20, 30, 40],
    backgroundColor: "rgb(106, 147, 181)",
   /* borderColor: "rgb(1, 94, 184)",
    borderWidth: 2,
    hoverBorderWidth: 0 */
  };
  
  var accidentesFatales = {
    label: 'Line 2',
    data: [10, 0, 10, 50, 0, 20, 0, 10, 10, 20, 0, 5, 0, 10, 0, 20, 10, 0, 10, 20, 10, 0, 0, 10, 30],
    backgroundColor: "rgb(45, 44, 43)",
    /*
    borderColor: "rgb(45, 24, 43)",
    borderWidth: 2,
    hoverBorderWidth: 0
    */
  };
  
  var categoryA = {
    labels: ["SCF-PP", "ARC", "LOC-I", "RE", "LALT", "LOC-G", "F-POST", "CTOL", "ADRM", "OTROS", "FUEL", "CFIT", "UIMC", "GCOL", "MAC", "RI", "USOS", "AMAC", "GTOW", "WILD", "F-NI", "ICE", "LOLI", "RAMP", "WSTRW"],
    datasets: [accidentes, accidentesFatales]
  };
  
  var chartOptions = {
    responsive: true,
    legend: {
      display: false,
        position: 'bottom',
    },
    scales: {
      xAxes: [{
        barPercentage: 0.8,
        categoryPercentage: 0.6,
        gridLines: {
          color: "rgba(0, 0, 0, 0)",
        },
        ticks: {
          fontSize: 15
        }
      }],
      yAxes: [{
        ticks: {
          fontSize: 15,
        }   
        /*
        gridLines: {
          /*color: "rgba(0, 0, 0, 0)",
        }*/
      },
      ]
    }
  };
  
  var barChart = new Chart(accidentCategory, {
    type: 'bar',
    data: categoryA,
    options: chartOptions
  });