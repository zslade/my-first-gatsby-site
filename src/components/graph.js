import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

const Graph = ({ nodes, links }) => {
  const svgRef = useRef();

  useEffect(() => {
    const width = 500;
    const height = 500;

    const color = d3.scaleOrdinal(["#d62728", "#1f77b4", "#e377c2", "#2ca02c", "#ff7f0e", "#7f7f7f"]);

    const svg = d3.select(svgRef.current)
      .attr("width", width)
      .attr("height", height)
      .attr("viewBox", [-width / 2, -height / 2, width, height]);

    const link = svg.append("g")
      .selectAll("line")
      .data(links)
      .enter().append("line")
      .style("stroke", "#C0C0C0")
      .style("stroke-width", 3);

    const node = svg.append("g")
      .selectAll("circle")
      .data(nodes)
      .enter().append("circle")
      .attr("r", 10)
      .attr("fill", d => color(d.category))
      .attr("stroke", "#FFFFFF")
      .attr("stroke-width", 1)
      .call(d3.drag()
        .on("start", dragstarted)
        .on("drag", dragged)
        .on("end", dragended));

    const text = svg.append("g")
      .selectAll("text")
      .data(nodes)
      .enter().append("text")
      .text(d => d.name)
      .style("font-family", "Arial, sans-serif")
      .style("font-size", "18px")
      .style("font-weight", "bold")
      .style("fill", "#1d1d1d")
      .on("click", function (d) {
        window.open(d.url, "_blank");
      })
      .style("cursor", "pointer");

    const simulation = d3.forceSimulation()
      .force('charge', d3.forceManyBody().strength(-40))
      .force('center', d3.forceCenter())
      .force("link", d3.forceLink().id(d => d.id).distance(100))
      .on('tick', ticked);

    function ticked() {
      link.attr("x1", d => d.source.x)
        .attr("y1", d => d.source.y)
        .attr("x2", d => d.target.x)
        .attr("y2", d => d.target.y);

      node.attr("cx", d => d.x)
        .attr("cy", d => d.y);

      text.attr("x", d => d.x + 13)
        .attr("y", d => d.y - 5);
    }

    function dragstarted(event, d) {
      if (!event.active) simulation.alphaTarget(0.3).restart();
      d.fx = d.x;
      d.fy = d.y;
    }

    function dragged(event, d) {
      d.fx = event.x;
      d.fy = event.y;
    }

    function dragended(event, d) {
      if (!event.active) simulation.alphaTarget(0.1);
      d.fx = null;
      d.fy = null;
    }

    simulation.nodes(nodes);
    simulation.force("link").links(links);

    return () => {
      // Cleanup function (if needed)
    };
  }, [nodes, links]);

  return <svg ref={svgRef} />;
};

export default Graph;
