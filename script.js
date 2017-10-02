console.log("run script")

var width=$("#TVL1516").width()
    console.log("width")



d3.queue()
  .defer(d3.json,"tvl1517.json")
  .defer(d3.json,"sasb1517.json")
  .defer(d3.json,"sasb1517mat.json")
  .await(ready);


 function ready(error,tvl,sasb,sasbmat)   {
    
      console.log(tvl);
      console.log(sasb);
      console.log(sasbmat)

     
    tvl = MG.convert.date(tvl, 'date');
//    console.log(tvl)

    var markers = [{
        'date': new Date('2016-08-31T00:00:00.000Z'),
        'label': "2016 AUG"
    }];
     
     MG.data_graphic({
        title: "TVL Daily Volume (full company universe) / SEP 2015 - AUG 2017",
        description: "",
        data: tvl,
        width: 1200,
        height: 300,
        left: 100,
        y_extended_ticks: true,
        target: '#TVL',
        min_x: new Date('2015-09-01'),
        max_x: new Date('2017-08-31'),
        x_label: 'date',
        y_label: 'volume',
        markers:markers  
        });
     
     
     
    sasb = MG.convert.date(sasb, 'date');
//    console.log(sasb)
     
    MG.data_graphic({
        title: "SASB Daily Volume with Materiality Off (full company universe) / SEP 2015 - AUG 2017",
        description: "",
        data: sasb,
        width: 1200,
        height: 300,
        left: 100,
        min_x: new Date('2015-09-01'),
        max_x: new Date('2017-08-31'),
        y_extended_ticks: true,
        target: '#SASB',
        x_label: 'date',
        y_label: 'volume',
        markers:markers 
        }); 
     
     
    sasbmat = MG.convert.date(sasbmat, 'date');
    console.log(sasbmat)
    
    MG.data_graphic({
        title: "SASB Daily Volume with Materiality On (full company universe) / SEP 2015 - AUG 2017",
        description: "",
        data: sasbmat,
        width: 1200,
        height: 300,
        left: 100,
        min_x: new Date('2015-09-01'),
        max_x: new Date('2017-08-31'),
        y_extended_ticks: true,
        target: '#SASBMateriality',
        x_label: 'date',
        y_label: 'volume',
        markers:markers 
        }); 
 
  
     
     
     
     
 }
   
