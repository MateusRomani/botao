let users = [
    // {
    //     "id": 16,
    //     "nome": "Anna Carolina Ferreira Rosa",
    //     "temperatura": 22,
    //     "presente": false
    // },

    // {
    //     "id": 15,
    //     "nome": "Bruno Scholles Soares Dias",
    //     "temperatura": 21,
    //     "presente": false
    // }, 
    // {
    //     "id": 13,
    //     "nome": "Francisco Lopes de Caldas Filho",
    //     "temperatura": 23,
    //     "presente": false
    // },
    // {
    //     "id": 14,
    //     "nome": "Heitor Magalhães Vieira",
    //     "temperatura": 25,
    //     "presente": false
    // },
    // {
    //     "id": 1,
    //     "nome": "Ian Porto e Mello",
    //     "temperatura": 22,
    //     "presente": false
    // },

    // {
    //     "id": 2,
    //     "nome": "Leonardo de Oliveira Almeida",
    //     "temperatura": 21,
    //     "presente": false
    // }, 
    // {
    //     "id": 3,
    //     "nome": "Lincoln Abreu Barbosa",
    //     "temperatura": 23,
    //     "presente": false
    // },
    // {
    //     "id": 4,
    //     "nome": "Luis Felipe de Oliveira Carvalho",
    //     "temperatura": 25,
    //     "presente": false
    // },
    {
        "id": 22,
        "nome": "Matheus Santos Monteiro",
        "temperatura": 22,
        "presente": false
    },

    // {
    //     "id": 6,
    //     "nome": "Pedro de Oliveira Moura e Souza",
    //     "temperatura": 21,
    //     "presente": false
    // }, 
    {
        "id": 23,
        "nome": "Vinícius Salgueiro Costa",
        "temperatura": 23,
        "presente": false
    },
    // {
    //     "id": 8,
    //     "nome": "Igor David Morais",
    //     "temperatura": 25,
    //     "presente": false
    // },
    // {
    //     "id": 9,
    //     "nome": "William de Almeida Silva",
    //     "temperatura": 22,
    //     "presente": false
    // },

    // {
    //     "id": 10,
    //     "nome": "Mateus Flach Romani",
    //     "temperatura": 21,
    //     "presente": false
    // }, 
    // {
    //     "id": 11,
    //     "nome": "Mateus Leite Pedrosa",
    //     "temperatura": 23,
    //     "presente": false
    // },
    // {
    //     "id": 12,
    //     "nome": "Julia Jamile de Oliveira Gonçalves",
    //     "temperatura": 25,
    //     "presente": false
    // },
    // {
    //     "id": 17,
    //     "nome": "Gian Vitor Oliveira de Magalhães",
    //     "temperatura": 29,
    //     "presente": false
    // },
    // {
    //     "id": 18,
    //     "nome": "Lincoln Abreu Barbosa",
    //     "temperatura": 25,
    //     "presente": false
    // },
    // {
    //     "id": 19,
    //     "nome": "Ana Carolina Aguiar de Sousa",
    //     "temperatura": 20,
    //     "presente": false
    // },
    // {
    //     "id": 21,
    //     "nome": "Cássio Fabius Cambraia Ribeiro",
    //     "temperatura": 26,
    //     "presente": false
    // },
    // {
    //     "id": 22,
    //     "nome": "Gabriel Cunha Bessa Vieira",
    //     "temperatura": 27,
    //     "presente": false
    // },
    // {
    //     "id": 23,
    //     "nome": "Hector Wender dos Santos Oliveira",
    //     "temperatura": 22,
    //     "presente": false
    // },
    // {
    //     "id": 24,
    //     "nome": "Marcos Blandim Andrade",
    //     "temperatura": 23,
    //     "presente": false
    // },
    // {
    //     "id": 25,
    //     "nome": "Matheus Santos Moreira",
    //     "temperatura": 22,
    //     "presente": false
    // },
    // {
    //     "id": 26,
    //     "nome": "Paulo Thiago Galvão Mascarenhas",
    //     "temperatura": 21,
    //     "presente": false
    // },
    // {
    //     "id": 27,
    //     "nome": "Pedro Blandim Andrade",
    //     "temperatura": 28,
    //     "presente": false
    // },
    // {
    //     "id": 28,
    //     "nome": "Rafael Moraes Monteiro",
    //     "temperatura": 24,
    //     "presente": false
    // },
    // {
    //     "id": 29,
    //     "nome": "Rafael Zerbini Alves da Mata",
    //     "temperatura": 29,
    //     "presente": false
    // }


]
  
let client = {
    name: "ENV_CTL presenca",
    chipset: "A8:B2:F2:3E:A4:F1",
    mac: "00:10:FA:6E:38:4A",
    channel: "Ethernet",
    processor: "ATMega",
    serial: "CA124"
}

// let service = {
//     name: "",
//     parameter: "",
//     chipset: "82371SB",
//     mac: "00:10:FA:6E:38:4A",
//     dns: "",
//     number: 1,
//     from: "",
//     until: "",

// }

// let data = {
//     sensitive: 1,
//     serviceNumber: 1,
//     chipset: "",
//     mac: "",
//     dns: "",
//     from: "",
//     until: "",
//     value: ""
// }

function gera() {
    var tab = document.getElementById("busca")
    var tbody = document.createElement("tbody");

      users.forEach((reg, idx) => {
         var myrw = document.createElement("tr");
         var mytd = document.createElement("td");
         mytd = document.createElement("td");
         mytd.innerHTML=reg.nome;
         mytd.setAttribute("nome", reg.nome);
         myrw.appendChild(mytd);
         mytd = document.createElement("td");
         mytd.innerHTML=reg.temperatura;
         myrw.appendChild(mytd);
         mytd = document.createElement("td");
         btn = document.createElement('input');
         btn.type = "button";
         btn.className = reg.presente?"btntrue":"btnfalse"; btn.value = reg.presente ? "Sim"  : "Não";
         btn.id = reg.id
         btn.onclick = function(){
            a = users.filter(e => e.id == reg.id)
            a[0].presente = !a[0].presente; 
            button = document.getElementById(a[0].id) 
            button.className = a[0].presente?"btntrue":"btnfalse"; button.value = a[0].presente ? "Sim"  : "Não";
            }
            mytd.appendChild(btn);
         myrw.appendChild(mytd);
         tbody.appendChild(myrw);
      });
      tab.appendChild(tbody);



     
$(document).ready( function () {
    // Setup - add a text input to each footer cell
    $('#busca tfoot th').each(function () {
        var title = $(this).text();

        switch (title) {
            case "Número da Demanda":
                $(this).html('<input type="text" placeholder="Busca ' + title + '" style="width:120px;" />');
                break;
            case "Matrícula":
                $(this).html('<input type="text" placeholder="Busca ' + title + '" style="width:80px;" />');
                break;           
            case "Nome":
                $(this).html('<input type="text" placeholder="Busca ' + title + '" style="width:182px;" />');
                break;
            case "Prefeitura":
                $(this).html('<input type="text" placeholder="Busca ' + title + '" style="width:160px;" />');
                break;
            case "Vencimento":
                $(this).html('<input type="text" placeholder="Busca ' + title + '" style="width:70px;" />');
                break;
            default:
                //Instruções executadas quando o valor da expressão é diferente de todos os cases
                $(this).html('<input type="text" placeholder="Busca ' + title + '"/>');
        };

    });	
    var table = 	$('#busca')
    //	.addClass( 'nowrap' )
    .DataTable( {					
        dom: 'Pfrtip',
 
        buttons: [
            'copy', 'csv', 'excel', 'pdf', 'print',
                      ,{
                text: 'Import',
                action: function ( e, dt, node, config ) {
                    alert( 'Importando arquivo aguarde.' );
                }
            }
        ],
             "initComplete": function () {
            // Apply the search
            this.api()
                .columns()
                .every(function () {
                    var that = this;

                    $('input', this.footer()).on('keyup change clear', function () {
                        if (that.search() !== this.value) {
                            that.search(this.value).draw();
                        }
                    });
                });	
            },				
        responsive: true,
    //	"scrollX": true,
    //	"scrollY": "380px",
        columnDefs: [
            { targets: [-1, -3], className: 'dt-body-right' }
        ],
            "bJQueryUI": true,
            "oLanguage": {
                "sProcessing":   "Processando...",
                "sLengthMenu":   "Mostrar _MENU_ registros",
                "sZeroRecords":  "Não foram encontrados resultados",
                "sInfo":         "Mostrando de _START_ até _END_ de _TOTAL_ registros",
                "sInfoEmpty":    "Mostrando de 0 até 0 de 0 registros",
                "sInfoFiltered": "",
                "sInfoPostFix":  "",
                "sSearch":       "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Buscar:",
                "sUrl":          "",
                "oPaginate": {
                    "sFirst":    " Primeiro ",
                    "sPrevious": " Anterior ",
                    "sNext":     " Seguinte ",
                    "sLast":     " Último "
                }
            }
            
    } );
    // Highcharts.setOptions({
    //     colors: Highcharts.map(Highcharts.getOptions().colors, function (color) {
    //         return {
    //         radialGradient: {
    //             cx: 0.5,
    //             cy: 0.3,
    //             r: 0.7
    //         },
    //         stops: [
    //             [0, color],
    //             [1, Highcharts.color(color).brighten(-0.3).get('rgb')] // darken
    //         ]
    //         };
    //     })
    //    });

    // Create the chart with initial data
    // var container = $('<div/>').insertBefore(table.table().container());

    // var chart = Highcharts.chart(container[0], {
    //     chart: {
    //         plotBackgroundColor: null,
    //         plotBorderWidth: null,
    //         plotShadow: false,
    //         type: 'pie',
    //         options3d: {
    //             enabled: true,
    //             alpha: 45,
    //             beta: 0
    //         }
    //     },
    //     title: {
    //         text: 'Por prefeitura',
    //     },
    //     series: [
    //         {
    //             data: chartData(table),
    //         },
    //     ],
    //     plotOptions: {
    //         pie: {
    //             allowPointSelect: true,
    //             cursor: 'pointer',
    //             depth: 35,
    //             dataLabels: {
    //                 enabled: true,
    //                 format: '{point.name}'
    //             }
    //         }
    //     },
    // });

    // On each draw, update the data in the chart
    // table.on('draw', function () {
    //     chart.series[0].setData(chartData(table));
    // });

var list = $('div.w-g-l > ul');
list.children(':gt(7)').css( 'display', 'none' );

var showingFull = false;
$('<li><a>Show more features...</a></li>')
    .on( 'click', function (e) {
        e.preventDefault;

        if ( showingFull ) {
            list.children(':gt(7)').css( 'display', 'none' );
            list.children(':last').css( 'display', 'block' );
            $('a', this).html('Show more features...');
            showingFull = false;
        }
        else {
            list.find('li').css( 'display', 'block' );
            $('a', this).html('Show less');
            showingFull = true;
        }
    } )
    .appendTo( list );



// $.each( uniqueRand( 6, usedBy.length ), function (i, val) {
//     data = usedBy[ val ];
//     $('#usedBy').append(
//         '<div class="unit one-sixth center">'+
//             '<a href="'+data[0]+'"><img src="/media/images/used_by/'+data[1]+'" alt="DataTables is used by '+data[2]+'"></a>'+
//         '</div>'
//     );
// } );



} );


}

var count = 10, time1 = setInterval(function() {
    $("#timer").html(count--);
    if(count == 0  ) {
        var xmlHttp = new XMLHttpRequest(); 
        
        users.forEach((user)=>{
            if(user.presente === true){
                let time = new Date()
                xmlHttp.open("POST", "http://200.130.75.146/data", true);
                xmlHttp.setRequestHeader("Content-Type", "application/json");
                xmlHttp.onload = function(){
                    console.log(this.status);
                    console.log(this.responseText);
                }
                // xmlHttp.open('GET', 'http://200.130.75.146/list/client');
                
                // xmlHttp.send();
               
                // xmlHttp.send(JSON.stringify({
                //     "name": user.nome.toString(),
                //     "parameter": time.getHours().toString() + ":" + time.getMinutes().toString(),
                //     "chipset": "82371SB",
                //     "mac": "00:10:FA:6E:38:4A",
                //     "dns": "",
                //     "number": user.temperatura,
                //     "from": "",
                //     "until": ""
                
                // }));

                
                xmlHttp.send(JSON.stringify({
                    "chipset": "82371SB",
                    "mac": "00:10:FA:6E:38:4A",
                    "sensitive": 0,
                    "serviceNumber": user.id,
                    "value": user.temperatura,
                
                }));
                // console.log(JSON.stringify({
                //     "name": user.nome.toString(),
                //     "parameter": time.getHours().toString(),
                //     "chipset": "82371SB",
                //     "mac": "00:10:FA:6E:38:4A",
                //     "dns": "",
                //     "number": user.temperatura,
                //     "from": "",
                //     "until": ""
                
                // }));
                // console.log(xmlHttp.status)
            }
        })
        count = 10;
    }
}, 1000);



