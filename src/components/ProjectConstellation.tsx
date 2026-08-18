import { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import { Project } from '../types';
import { ProjectIcon } from './ProjectIcon';

interface ProjectConstellationProps {
  projects: Project[];
  onProjectClick: (project: Project) => void;
}

interface Node extends d3.SimulationNodeDatum {
  id: string;
  project: Project;
  x?: number;
  y?: number;
  fx?: number | null;
  fy?: number | null;
}

interface Link extends d3.SimulationLinkDatum<Node> {
  source: string | Node;
  target: string | Node;
}

export function ProjectConstellation({ projects, onProjectClick }: ProjectConstellationProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const nodesRef = useRef<Map<string, HTMLDivElement>>(new Map());

  useEffect(() => {
    if (!containerRef.current || !svgRef.current) return;
    const { width, height } = containerRef.current.getBoundingClientRect();

    
    const nodes: Node[] = projects.map((p) => ({
      id: p.id,
      project: p,
      
      x: width / 2 + (Math.random() - 0.5) * 100,
      y: height / 2 + (Math.random() - 0.5) * 100,
    }));

    
    const links: Link[] = [];
    for (let i = 0; i < nodes.length - 1; i++) {
      links.push({
        source: nodes[i].id,
        target: nodes[i + 1].id,
      });
    }

    
    const simulation = d3
      .forceSimulation<Node>(nodes)
      .force('link', d3.forceLink<Node, Link>(links).id((d) => d.id).distance(120)) 
      .force('charge', d3.forceManyBody().strength(-300)) 
      .force('center', d3.forceCenter(width / 2, height / 2).strength(0.05)) 
      .force('collide', d3.forceCollide().radius(50).iterations(3)); 

    
    const linkElements = d3
      .select(svgRef.current)
      .selectAll('line')
      .data(links)
      .join('line')
      .attr('stroke', 'var(--color-border)')
      .attr('stroke-width', 2)
      .attr('stroke-dasharray', '4 4'); 

    
    simulation.on('tick', () => {
      
      linkElements
        .attr('x1', (d: any) => d.source.x)
        .attr('y1', (d: any) => d.source.y)
        .attr('x2', (d: any) => d.target.x)
        .attr('y2', (d: any) => d.target.y);

      
      nodes.forEach((node) => {
        const el = nodesRef.current.get(node.id);
        if (el && node.x !== undefined && node.y !== undefined) {
          
          const paddingX = 90;
          const paddingY = 80;
          node.x = Math.max(paddingX, Math.min(width - paddingX, node.x));
          node.y = Math.max(paddingY, Math.min(height - paddingY, node.y));
          
          el.style.transform = `translate(${node.x}px, ${node.y}px) translate(-50%, -50%)`;
        }
      });
    });

    
    const d3Nodes = d3.selectAll<HTMLDivElement, Node>('.constellation-node')
      .data(nodes);
      
    const drag = d3.drag<HTMLDivElement, Node>()
      .on('start', (event, d) => {
        if (!event.active) simulation.alphaTarget(0.3).restart();
        d.fx = d.x;
        d.fy = d.y;
      })
      .on('drag', (event, d) => {
        d.fx = event.x;
        d.fy = event.y;
      })
      .on('end', (event, d) => {
        if (!event.active) simulation.alphaTarget(0);
        d.fx = null;
        d.fy = null;
      });

    d3Nodes
      .call(drag as any)
      .on('click', (event, d) => {
        if (event.defaultPrevented) return; 
        onProjectClick(d.project);
      });

    
    const handleResize = () => {
      if (containerRef.current) {
        const { width: newW, height: newH } = containerRef.current.getBoundingClientRect();
        simulation.force('center', d3.forceCenter(newW / 2, newH / 2).strength(0.05));
        simulation.alpha(0.3).restart();
      }
    };
    window.addEventListener('resize', handleResize);

    return () => {
      simulation.stop();
      window.removeEventListener('resize', handleResize);
    };
  }, [projects]);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden">
      
      <svg ref={svgRef} className="absolute inset-0 w-full h-full pointer-events-none" />

      
      {projects.map((project) => (
        <div
          key={project.id}
          className="constellation-node absolute top-0 left-0 cursor-grab active:cursor-grabbing"
          ref={(el) => {
            if (el) nodesRef.current.set(project.id, el);
          }}
        >
          <ProjectIcon project={project} />
        </div>
      ))}
    </div>
  );
}
