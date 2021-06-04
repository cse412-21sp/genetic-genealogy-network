const React = require('react');
const D3Component = require('idyll-d3-component');
const d3 = require('d3');
const { canvas } = require('d3');

class NetworkGraph extends D3Component {

  initialize(node,props) {
    var data = props.data
    var canvas = d3.select(node).append('canvas')
        .attr("viewBox", [0, 0, 1200, 1200]);
    var links = data.links.map(d => Object.create(d));

    var nodes = data.nodes.map(d => Object.create(d));

    var width = 1200

    var height = 1200 

    var scale = d3.scaleLog()
    .domain([1,20])
    .range([2,4,6,8,10])

    var simulation = d3.forceSimulation(samples)
        .force("link", d3.forceLink(link).id(d => d.id))
        .force("charge", d3.forceManyBody())
        .force("x", d3.forceX(width / 2))
        .force("y", d3.forceY(height / 2))    

    const link = canvas.append("g")
        .attr("stroke-opacity", 0.6)
         .selectAll("line")
      .data(links)
      .join("line")
        .attr("stroke-width", d => Math.sqrt(d.value))
        .attr("stroke", 'gray');
  
    const samples = canvas.append("g")
        .attr("stroke", "#fff")
        .attr("stroke-width", 1.5)
      .selectAll("circle")
      .data(nodes)
      .join("circle")
        .attr("r", d => scale(d.overlap))
        .attr("fill", 'steelblue');

    simulation.on("tick", () => {
      link
          .attr("x1", d => d.source.x)
          .attr("y1", d => d.source.y)
          .attr("x2", d => d.target.x)
          .attr("y2", d => d.target.y);
  
      samples
          .attr("cx", d => d.x)
          .attr("cy", d => d.y);


    
    }
  );

    return canvas.node();

  }
}
module.exports = NetworkGraph;