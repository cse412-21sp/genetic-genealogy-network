const React = require('react');
const D3Component = require('idyll-d3-component');
const d3 = require('d3');

class NetworkGraph extends D3Component {

  initialize(node, props) {
    var svg = d3.select(node).append('svg');
    const links = data.links.map(d => Object.create(d));
    const nodes = data.nodes.map(d => Object.create(d));

    const simulation = d3.forceSimulation(nodes)
      .force("link", d3.forceLink(links).id(d => d.id))
      .force("charge", d3.forceManyBody())
      .force("x", d3.forceX(width / 2))
      .force("y", d3.forceY(height / 2))

    const svg = d3.create("svg")
      .attr("viewBox", [0, 0, width, height]);

    const link = svg.append("g")
      .attr("stroke-opacity", 0.6)
       .selectAll("line")
      .data(links)
      .join("line")
      .attr("stroke-width", d => Math.sqrt(d.value))
      .attr("stroke", color);

    const node = svg.append("g")
      .attr("stroke", "#fff")
      .attr("stroke-width", 1.5)
      .selectAll("circle")
      .data(nodes)
      .join("circle")
      .attr("r", 5)
      .attr("fill", 'steelblue')
  }}

module.exports = NetworkGraph;
