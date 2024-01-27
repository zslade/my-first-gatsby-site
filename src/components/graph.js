import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

const Graph = ({ nodes, links }) => {
  const svgRef = useRef();

  useEffect(() => {

    const svg = d3.select(svgRef.current);

    // Adding the static text box
    const textBox = svg
      .append("rect")
      // .attr("x", -650 / 2)
      .attr("y", 190)
      .attr("height", 35)
      .attr("rx", 15) // Round corners
      .attr("ry", 15) // Round corners
      .attr("fill", "#f5f5f5");

    const textBoxText = svg
      .append("text")
      .text("Click on a title to go to the article, or just drag the nodes for fun")
      // .attr("x", -205)
      .attr("y", 212) 
      .style("font-family", "'BlinkMacSystemFont', '-apple-system', 'Segoe UI','Roboto','Helvetica Neue','Arial','Noto Sans', sans-serif")
      .style("font-size", "14px") 
      .style("fill", "#888888");

    function updateSize() {
      const width = window.innerWidth;  // Set width to the window width
      const height = '600';
    
      svg.attr("width", "100%") // Set width to 100% to be flexible
         .attr("height", "100%") // Set height to 100% to be flexible
         .attr("viewBox", [-width / 2, -height/2, width, height]);

      // Flex width of textBox for mobile screen
      const desiredWidth = Math.min(440, width);

      // Update textBox position and dimensions
      textBox.attr('width', desiredWidth)
      .attr('x', -desiredWidth / 2)

      let textPosition = -(desiredWidth / 2) + 15;

      if (desiredWidth != 440) {
         textPosition = -desiredWidth / 2;
      }

      textBoxText.attr('x', textPosition);

    }
    
    // Initial call to set the SVG size based on the window dimensions
    updateSize();
    
    // Attach the updateSize function to the window resize event
    window.addEventListener("resize", updateSize);

    const link = svg.append("g")
      .selectAll("line")
      .data(links)
      .enter().append("line")
      .style("stroke", "#C0C0C0")
      .style("stroke-width", 3);

    // colours for nodes
    const color = d3.scaleOrdinal(["#d62728", "#1f77b4", "#e377c2", "#2ca02c", "#ff7f0e", "#7f7f7f"]);

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
      .enter()
      .append("a")
      .attr("href", d => d.url)
      .append("text")
      .text(d => d.name)
      .style("font-family", "'BlinkMacSystemFont', '-apple-system', 'Segoe UI','Roboto','Helvetica Neue','Arial','Noto Sans', sans-serif")
      .style("font-weight", "bold")
      .style("fill", "#1d1d1d")
      .style("cursor", "pointer")
      .each(function(d) {
        console.log("Name", d.name);
        console.log("Clicked node:", d.id);
        console.log("name", d.name);
        console.log("URL:", d.url);

      // Apply strikethrough to text for nodes not belonging to "art" category
      if (d.category !== "art") {
        d3.select(this).style("fill", "#C0C0C0");
      }
      });

    const simulation = d3.forceSimulation()
      .force('charge', d3.forceManyBody().strength(-140))
      .force('center', d3.forceCenter())
      .force("link", d3.forceLink().id(d => d.id).distance(100))
      .on('tick', ticked);

      // Increase the initial alpha value to make the simulation more active at the beginning
      // simulation.alpha(2.8).restart();

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
