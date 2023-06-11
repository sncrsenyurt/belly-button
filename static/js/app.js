const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

d3.json(url).then(function(data) {
  let sampleValues = data.samples[0].sample_values.slice(0, 10).reverse();
  let otuIds = data.samples[0].otu_ids.slice(0, 10).reverse().map(id => `OTU ${id}`);
  
  let trace1 = {
    x: sampleValues,
    y: otuIds,
    type: 'bar',
    orientation: 'h'
  };

  let barData = [trace1];

  let barLayout = {
    title: 'Top 10 OTUs'
  };

  Plotly.newPlot("bar", barData, barLayout);

  let bubbleTrace = {
    x: data.samples[0].otu_ids,
    y: data.samples[0].sample_values,
    text: data.samples[0].otu_labels,
    mode: 'markers',
    marker: {
      size: data.samples[0].sample_values,
      color: data.samples[0].otu_ids,
      colorscale: 'Earth'
    }
  };

  let bubbleData = [bubbleTrace];

  let bubbleLayout = {
    title: 'OTU IDs vs Sample Values',
    xaxis: { title: 'OTU IDs' },
    yaxis: { title: 'Sample Values' }
  };

  Plotly.newPlot('bubble', bubbleData, bubbleLayout);

  let dropdown = d3.select("#selDataset");

  data.names.forEach(name => {
    dropdown.append("option").text(name);
  });

  let metadata = data.metadata[0];
  let demoInfo = d3.select("#sample-metadata");

  Object.entries(metadata).forEach(([key, value]) => {
    demoInfo.append("p").text(`${key}: ${value}`);
  });
});

function optionChanged(sample_id) {
  d3.json(url).then(function(data) {
    let sampleData = data.samples.filter(sample => sample.id === sample_id)[0];
    
    let sampleValues = sampleData.sample_values.slice(0, 10).reverse();
    let otuIds = sampleData.otu_ids.slice(0, 10).reverse().map(id => `OTU ${id}`);
    
    Plotly.restyle("bar", "x", [sampleValues]);
    Plotly.restyle("bar", "y", [otuIds]);

    Plotly.restyle("bubble", "x", [sampleData.otu_ids]);
    Plotly.restyle("bubble", "y", [sampleData.sample_values]);
    Plotly.restyle("bubble", "text", [sampleData.otu_labels]);

    let metadata = data.metadata.filter(meta => meta.id.toString() === sample_id)[0];
    let demoInfo = d3.select("#sample-metadata");
    demoInfo.html("");

    Object.entries(metadata).forEach(([key, value]) => {
      demoInfo.append("p").text(`${key}: ${value}`);
    });
  });
}
