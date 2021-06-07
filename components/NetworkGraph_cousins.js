const React = require('react');
const D3Component = require('idyll-d3-component');
const d3 = require('d3');
const { canvas } = require('d3');

class NetworkGraph_cousins extends D3Component {

  initialize(node,props) {
    var data = props.data
      const links = data.links.map(d => Object.create(d));
      const nodes = data.nodes.map(d => Object.create(d));
    
      const simulation = d3.forceSimulation(nodes)
          .force("link", d3.forceLink(links).id(d => d.name))
          .force("charge", d3.forceManyBody())
          .force("x", d3.forceX(1000 / 2))
          .force("y", d3.forceY(1000 / 2))
    
      const svg = d3.select(node).append("svg")
          .attr("viewBox", [0, 0, 1000 , 1000]);
    
      const link = svg.append("g")
          .attr("stroke-opacity", 0.1)
           .selectAll("line")
        .data(links)
        .join("line")
          .attr("stroke-width", d => Math.sqrt(d.value))
          .attr("stroke", d => d.color);
    
      const sample = svg.append("g")
          .attr("stroke", "#fff")
          .attr("stroke-width", 1.5)
        .selectAll("circle")
        .data(nodes)
        .join("circle")
          .attr("r", (d => d.overlap))
          .attr("fill", d => d.color)
      
      
        var div = d3.select("body").append("div")	
        .attr("class", "tooltip")				
        .style("opacity", 0);
       sample.append("title")
          .text(d => d.name);
      
      simulation.on("tick", () => {
        
        link
            .attr("x1", d => d.source.x)
            .attr("y1", d => d.source.y)
            .attr("x2", d => d.target.x)
            .attr("y2", d => d.target.y);
    
        sample
            .attr("cx", d => d.x)
            .attr("cy", d => d.y);
      })
    
        return svg.node();

        
    }
}
module.exports = NetworkGraph_cousins;