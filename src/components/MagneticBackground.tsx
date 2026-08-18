import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export function MagneticBackground({ isActive }: { isActive: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!isActive) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    // Posição inicial fora da tela ou num canto para não iniciar visível
    let mouseX = -1000;
    let mouseY = -1000;
    let strokeColor = '#EEEEEE';

    const updateColor = () => {
      const rootStyles = getComputedStyle(document.documentElement);
      strokeColor = rootStyles.getPropertyValue('--color-text').trim() || '#EEEEEE';
    };

    updateColor();

    const observer = new MutationObserver(() => updateColor());
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    const resize = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.clientWidth;
        canvas.height = parent.clientHeight;
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      ctx.strokeStyle = strokeColor;
      ctx.lineWidth = 1.5;
      ctx.lineCap = 'round';

      const spacing = 40; // Distância entre os traços
      const cols = Math.floor(canvas.width / spacing) + 2;
      const rows = Math.floor(canvas.height / spacing) + 2;

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * spacing;
          const y = j * spacing;

          const dx = mouseX - x;
          const dy = mouseY - y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          const maxDist = 350; // Raio da "lanterna" do mouse

          // Só desenha se estiver perto do mouse (para não poluir o texto)
          if (dist < maxDist) {
            // A opacidade cai gradativamente até 0 na borda do raio maxDist
            const alpha = 0.25 * (1 - dist / maxDist);
            ctx.globalAlpha = alpha;

            const angle = Math.atan2(dy, dx);
            
            ctx.save();
            ctx.translate(x, y);
            ctx.rotate(angle);
            
            // Desenha um traço simples "-" em vez da setinha ">"
            ctx.beginPath();
            ctx.moveTo(-6, 0);
            ctx.lineTo(6, 0);
            ctx.stroke();
            
            ctx.restore();
          }
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouseMove);
    
    resize();
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      observer.disconnect();
      cancelAnimationFrame(animationFrameId);
    };
  }, [isActive]);

  return (
    <AnimatePresence>
      {isActive && (
        <motion.canvas
          ref={canvasRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 z-0 pointer-events-none w-full h-full"
        />
      )}
    </AnimatePresence>
  );
}
