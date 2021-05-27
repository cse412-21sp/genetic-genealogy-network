const React = require('react');
const D3Component = require('idyll-d3-component');
const d3 = require('d3');
const { svg } = require('d3');

class NetworkGraph extends D3Component {

  initialize(node,props) {
    const svg = d3.select(node).append('svg')
        .attr("viewBox", [0, 0, 1200, 1200]);
    d3.json("https://raw.githubusercontent.com/cse412-21sp/genetic-genealogy-network/main/data/triangulated_segments.json", function(error,data){
    const links = data.links.map(d => Object.create(d));
    const nodes = data.nodes.map(d => Object.create(d));
  
    const width = 1200
    const height = 1200 

    const simulation = d3.forceSimulation(nodes)
        .force("link", d3.forceLink(links).id(d => d.id))
        .force("charge", d3.forceManyBody())
        .force("x", d3.forceX(width / 2))
        .force("y", d3.forceY(height / 2))    
  
    const link = svg.append("g")
        .attr("stroke-opacity", 0.6)
         .selectAll("line")
      .data(links)
      .join("line")
        .attr("stroke-width", d => Math.sqrt(d.value))
        .attr("stroke", color);
  
    const samples = svg.append("g")
        .attr("stroke", "#fff")
        .attr("stroke-width", 1.5)
      .selectAll("circle")
      .data(nodes)
      .join("circle")
        .attr("r", size)
        .attr("fill", 'steelblue')
        .call(drag(simulation));
  


    simulation.on("tick", () => {
      link
          .attr("x1", d => d.source.x)
          .attr("y1", d => d.source.y)
          .attr("x2", d => d.target.x)
          .attr("y2", d => d.target.y);
  
      samples
          .attr("cx", d => d.x)
          .attr("cy", d => d.y);
    });
  
    invalidation.then(() => simulation.stop());
  
    return svg.node();
  })
  }
}
module.exports = NetworkGraph;
