import React, { useEffect, useRef } from 'react';
import { Box, useTheme } from '@mui/material';

const AnimatedBackground = () => {
  const canvasRef = useRef(null);
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let shapes = [];
    let mouse = { x: null, y: null, radius: 150 };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    class Shape {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 20 + 10;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
        this.rotation = Math.random() * Math.PI * 2;
        this.rotationSpeed = (Math.random() - 0.5) * 0.02;
        this.points = Math.floor(Math.random() * 3) + 3;
        this.hue = Math.random() * 60 - 30;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.rotation += this.rotationSpeed;

        if (mouse.x !== null && mouse.y !== null) {
          const dx = this.x - mouse.x;
          const dy = this.y - mouse.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < mouse.radius) {
            const angle = Math.atan2(dy, dx);
            const force = (mouse.radius - distance) / mouse.radius;
            this.x += Math.cos(angle) * force * 2;
            this.y += Math.sin(angle) * force * 2;
          }
        }

        if (this.x > canvas.width + this.size) this.x = -this.size;
        if (this.x < -this.size) this.x = canvas.width + this.size;
        if (this.y > canvas.height + this.size) this.y = -this.size;
        if (this.y < -this.size) this.y = canvas.height + this.size;
      }

      draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        
        // Enhanced colors for light mode
        const baseColor = isDarkMode ? '160' : '210'; // Adjusted hue for light mode
        const opacity = isDarkMode ? 0.1 : 0.15; // Increased opacity for light mode
        const saturation = isDarkMode ? '100%' : '80%'; // Adjusted saturation for light mode
        
        const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, this.size);
        gradient.addColorStop(0, `hsla(${baseColor}, ${saturation}, 50%, ${opacity})`);
        gradient.addColorStop(1, `hsla(${baseColor}, ${saturation}, 50%, 0)`);
        
        ctx.beginPath();
        for (let i = 0; i < this.points; i++) {
          const angle = (i * 2 * Math.PI) / this.points;
          const x = Math.cos(angle) * this.size;
          const y = Math.sin(angle) * this.size;
          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.closePath();
        
        ctx.fillStyle = gradient;
        ctx.fill();
        
        // Enhanced stroke for better visibility
        ctx.strokeStyle = `hsla(${baseColor}, ${saturation}, 50%, ${opacity * 2.5})`;
        ctx.lineWidth = isDarkMode ? 1 : 1.5; // Thicker lines in light mode
        ctx.stroke();
        
        ctx.restore();
      }
    }

    const init = () => {
      shapes = [];
      const numberOfShapes = Math.floor((canvas.width * canvas.height) / 20000);
      for (let i = 0; i < numberOfShapes; i++) {
        shapes.push(new Shape());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Enhanced background gradient
      const bgGradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      if (isDarkMode) {
        bgGradient.addColorStop(0, 'rgba(0, 0, 0, 0.1)');
        bgGradient.addColorStop(1, 'rgba(0, 229, 160, 0.05)');
      } else {
        bgGradient.addColorStop(0, 'rgba(255, 255, 255, 0.2)');
        bgGradient.addColorStop(1, 'rgba(0, 229, 160, 0.1)');
      }
      ctx.fillStyle = bgGradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      shapes.forEach(shape => {
        shape.update();
        shape.draw();
      });

      // Enhanced connections
      shapes.forEach((shape, index) => {
        for (let j = index + 1; j < shapes.length; j++) {
          const dx = shape.x - shapes[j].x;
          const dy = shape.y - shapes[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.beginPath();
            const baseColor = isDarkMode ? '160' : '210';
            const saturation = isDarkMode ? '100%' : '80%';
            const opacity = (1 - distance / 150) * (isDarkMode ? 0.2 : 0.3);
            ctx.strokeStyle = `hsla(${baseColor}, ${saturation}, 50%, ${opacity})`;
            ctx.lineWidth = isDarkMode ? 0.5 : 0.8;
            ctx.moveTo(shape.x, shape.y);
            ctx.lineTo(shapes[j].x, shapes[j].y);
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    resizeCanvas();
    init();
    animate();

    window.addEventListener('resize', () => {
      resizeCanvas();
      init();
    });

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isDarkMode]);

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        overflow: 'hidden',
        background: isDarkMode
          ? 'linear-gradient(135deg, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.98) 100%)'
          : 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.98) 100%)',
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          width: '100%',
          height: '100%',
        }}
      />
    </Box>
  );
};

export default AnimatedBackground;