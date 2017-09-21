console.log("run script")





d3.queue()
  .defer(d3.json,"tvl1517.json")
  .defer(d3.json,"sasb1517.json")
  .await(ready)

//d3.json("tvl1517.json",function(d){
 function ready(error,tvl,sasb)   {
    
     console.log(tvl)
     console.log(sasb)

////    convert object to array
//        var array =$.map(d,function(value,index){return [value]})
//    var array = Object.keys(d).map(function(k) { return d[k] }); 
//    console.log(array)    
//    
//    //convert each series from an object of object to an array of object  
//    //    for (var j=0;j<array.length;j++){
//    //        array[j].series = $.map(array[j].series,function(value,index){
//    //            return [value] 
//    //        })} 
//    
//    for (var j=0;j<array.length;j++){
//        array[j].series=Object.keys(array[j].series).map(function(k) {return array[j].series[k]})
//        }
//     
//    //    console.log(array[0].series[0].date)
//    console.log(array)
//    
//    //create a newArray with objects that has companyname, date, and volume attritutes 
//        var newArray=[];
//        var arrayLength = array.length
//
//    //loop thorugh the 1st object inside the array and remove those with null volume value 
//        
//        for (var j=0;j<arrayLength;j++){
//            
//            var seriesLength=array[j].series.length;
//            
//            for (var i=0;i<seriesLength;i++){
//            
//            if (array[j].series[i].volume !== null){
//                newArray.push(
//                 {
//    // "companyName":array[j].ISIN,
//                  "date":array[j].series[i].date,
////                  "dailyVolume":array[j].series[i].volume.OverallDailyVolume,
//                  "materialityVolume":array[j].series[i].volume.SASBMaterialVolume       
//                     
//                  
//                 })} else {newArray.push()}       
//            }
//            
//        }
//    
//    
//    console.log('newarray', newArray);
//    var nestDate=d3.nest()
//        .key(function(d){return d.date})
//        .rollup(function(v) { return d3.sum(v, function(d) { return d.value;  }) })
//        .entries(newArray);
//    
//    var format = d3.timeFormat("%Y-%m-%d");
//    var dataset = []
//    for (var i=0;i<nestDate.length;i++){
//        dataset.push({
//            "date":format(new Date(nestDate[i].key)),
//            "value":nestDate[i].value  })
//    }
//            
//
//    console.log(dataset);
   
//    returns a string
//    
//    MG.js 
//    
    tvl = MG.convert.date(tvl, 'date');
    console.log(tvl)
    
    MG.data_graphic({
        title: "TVL Daily Volume (full company universe) / 2015-2017",
        description: "",
        data: tvl,
        width: 1200,
        height: 300,
        left: 100,
        y_extended_ticks: true,
        target: '#TVL1516',
        min_x: new Date('2015-01-01'),
        max_x: new Date('2017-08-30'),
        x_label: 'date',
        y_label: 'volume'
        });
     
     
     
    sasb = MG.convert.date(sasb, 'date');
    console.log(sasb)
    
    MG.data_graphic({
        title: "SASB Daily Volume (full company universe) / 2015-2017",
        description: "",
        data: sasb,
        width: 1200,
        height: 300,
        left: 100,
        y_extended_ticks: true,
        target: '#SASB1516',
        x_label: 'date',
        y_label: 'volume',
        });
           
 }
   
//    }
//)