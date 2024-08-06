<script>
    import {onMount} from 'svelte';
    import * as d3 from 'd3';

    export let data;

    let svg;

    onMount(() => {
        const width = svg.clientWidth;
        const height = svg.clientHeight;

        const simulation = d3.forceSimulation(data.nodes)
            .force("link", d3.forceLink(data.links).id(d => d.id).distance(100))
            .force("charge", d3.forceManyBody().strength(-300))
            .force("center", d3.forceCenter(width / 2, height / 2));

        const zoom = d3.zoom()
            .scaleExtent([0.1, 4])
            .on("zoom", zoomed);

        const svgElement = d3.select(svg)
            .attr("viewBox", [0, 0, width, height])
            .call(zoom);

        const g = svgElement.append("g");

        const link = g.append("g")
            .selectAll("line")
            .data(data.links)
            .join("line")
            .attr("stroke", "#999")
            .attr("stroke-opacity", 0.6)
            .attr("stroke-width", 2);

        const node = g.append("g")
            .selectAll("circle")
            .data(data.nodes)
            .join("circle")
            .attr("r", 10)
            .attr("fill", "#4299e1")
            .call(drag(simulation));

        const label = g.append("g")
            .selectAll("text")
            .data(data.nodes)
            .join("text")
            .attr("dx", 12)
            .attr("dy", ".35em")
            .text(d => d.name)
            .attr("font-size", "12px")
            .attr("fill", "#333");

        simulation.on("tick", () => {
            link
                .attr("x1", d => d.source.x)
                .attr("y1", d => d.source.y)
                .attr("x2", d => d.target.x)
                .attr("y2", d => d.target.y);

            node
                .attr("cx", d => d.x)
                .attr("cy", d => d.y);

            label
                .attr("x", d => d.x)
                .attr("y", d => d.y);
        });

        function zoomed(event) {
            g.attr("transform", event.transform);
        }

        function drag(simulation) {
            function dragstarted(event) {
                if (!event.active) simulation.alphaTarget(0.3).restart();
                event.subject.fx = event.subject.x;
                event.subject.fy = event.subject.y;
            }

            function dragged(event) {
                event.subject.fx = event.x;
                event.subject.fy = event.y;
            }

            function dragended(event) {
                if (!event.active) simulation.alphaTarget(0);
                event.subject.fx = null;
                event.subject.fy = null;
            }

            return d3.drag()
                .on("start", dragstarted)
                .on("drag", dragged)
                .on("end", dragended);
        }


    });
</script>

<svg bind:this={svg} width="100%" height="100%"></svg>

<style>
    svg {
        border: 1px solid #e2e8f0;
        border-radius: 4px;
        background-color: #f7fafc;
    }
</style>