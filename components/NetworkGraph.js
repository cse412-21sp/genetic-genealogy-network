const React = require('react');
const D3Component = require('idyll-d3-component');
const d3 = require('d3');
const { canvas } = require('d3');

class NetworkGraph extends D3Component {

  initialize(node,props) {
    var data = props.data
    var canvas = d3.select(node).append('canvas')
        .attr("viewBox", [0, 0, 1200, 1200]);
        const links = data.links.map(d => Object.create(d));
        const nodes = data.nodes.map(d => Object.create(d));
      
        const simulation = d3.forceSimulation(nodes)
            .force("link", d3.forceLink(links).id(d => d.name))
            .force("charge", d3.forceManyBody())
            .force("x", d3.forceX(1200 / 2))
            .force("y", d3.forceY(1200 / 2))
    
      
        const link = canvas.node.append("g")
            .attr("stroke-opacity", 0.1)
             .selectAll("line")
          .data(links)
          .join("line")
            .attr("stroke-width", d => Math.sqrt(d.value))
            .attr("stroke",'gray');
      
        const sample = canvas.node.append("g")
            .attr("stroke", "#fff")
            .attr("stroke-width", 1.5)
          .selectAll("circle")
          .data(nodes)
          .join("circle")
            .attr("r", 3)
            .attr("fill", 'gray')
          
        var div = d3.select("body").append("div")	
          .attr("class", "tooltip")				
          .style("opacity", 0);
         node.append("title")
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
        });
      
        invalidation.then(() => simulation.stop());
      
        return canvas.node();

  }
}
module.exports = NetworkGraph;