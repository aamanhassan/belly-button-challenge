function init(){


let url= "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json"

let selector= d3.select("#selDataset");

d3.json(url).then(function(data){
    let sampleNames= data.names;


    for (let i = 0; i < sampleNames.length; i++) {
        selector.append("option").text(sampleNames[i]).property("value",sampleNames[i]);
    }
})

}
init();