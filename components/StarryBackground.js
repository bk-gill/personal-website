import React, { useEffect, useRef } from "react";

const StarryBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const handleMouseMove = (event) => {
      const rect = canvas.getBoundingClientRect();
      const mouseX = event.clientX - rect.left;
      const mouseY = event.clientY - rect.top;
      updateStarsOnMouseMove(mouseX, mouseY);
    };

    canvas.addEventListener("mousemove", handleMouseMove);

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resizeCanvas, false);
    resizeCanvas();

    let stars = []; // Array for twinkling stars
    const starCount = 100; // Twinkling stars count
    let shootingStar = { active: false }; // Initial state for shooting star

    const generateStars = () => {
      stars = [];
      for (let i = 0; i < starCount; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const size = Math.random() * 2;
        const speed = Math.random() * 0.05 + 0.01; // Adjusted speed for a more subtle twinkle
        const colors = [
          "#ffccaa",
          "#ff9966",
          "#fffacd",
          "#f0e68c",
          "#add8e6",
          "#87ceeb",
          "#ffffff",
          "#f0f8ff",
          "#e0ffff",
        ];
        const color = colors[Math.floor(Math.random() * colors.length)]; // Randomly assign color
        stars.push({ x, y, size, speed, color });
      }
    };

    // Generate a new shooting star
    const generateShootingStar = () => {
      shootingStar = {
        x: Math.random() * canvas.width,
        y: 0, // Starts from the top
        length: 100 + Math.random() * 300, // Length of the shooting star
        speed: 2 + Math.random() * 2, // Speed of the shooting star
        active: true,
      };
    };

    const updateStars = () => {
      stars.forEach((star) => {
        // Adjust the star size with a random factor to make the twinkle effect more natural
        star.size += star.speed * (Math.random() - 0.5);

        // Ensure the star size does not become negative
        if (star.size <= 0) {
          star.size = Math.abs(star.size); // Make the size positive
          star.speed *= -1; // Reverse the direction of the speed change
        }

        // Add a condition to prevent the star from growing too large, if desired
        if (star.size > 2.5) {
          // Adjust maximum size as needed
          star.speed *= -1; // Reverse the direction to make the star start shrinking
        }
      });
    };

    const updateShootingStar = () => {
      if (shootingStar.active) {
        shootingStar.x += shootingStar.speed;
        shootingStar.y += shootingStar.speed; // Moves diagonally
        // Deactivate the shooting star if it moves off-screen
        if (shootingStar.x > canvas.width || shootingStar.y > canvas.height) {
          shootingStar.active = false;
        }
      } else if (Math.random() < 0.001) {
        // ~1% chance to activate per frame
        generateShootingStar();
      }
    };

    const drawStars = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach((star) => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = star.color;
        ctx.fill();

        // Adjust the glow based on color
        ctx.shadowBlur = star.size * 3;
        ctx.shadowColor = star.color;
        ctx.fill(); // Fill the star again to apply the glow effect
        ctx.shadowBlur = 0; // Reset shadowBlur for other elements
      });
    };

    const drawShootingStar = () => {
      if (shootingStar.active) {
        // Calculate the tail end position
        const tailEndX =
          shootingStar.x - Math.cos(Math.PI / 4) * shootingStar.length;
        const tailEndY =
          shootingStar.y - Math.sin(Math.PI / 4) * shootingStar.length;

        // Create a linear gradient for the shooting star tail
        const gradient = ctx.createLinearGradient(
          shootingStar.x,
          shootingStar.y,
          tailEndX,
          tailEndY
        );
        gradient.addColorStop(0, "rgba(255, 255, 255, 1)"); // Start with bright white
        gradient.addColorStop(0.3, "rgba(89, 24, 223, 0.8)"); // Transition to bright purple
        gradient.addColorStop(1, "rgba(89, 24, 223, 0)"); // End with transparent purple

        ctx.beginPath();
        ctx.moveTo(shootingStar.x, shootingStar.y);
        ctx.lineTo(tailEndX, tailEndY);
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 4;
        ctx.stroke();

        // Update shooting star position
        shootingStar.x += Math.cos(Math.PI / 4) * shootingStar.speed;
        shootingStar.y += Math.sin(Math.PI / 4) * shootingStar.speed;

        // Deactivate the shooting star if it moves off-screen
        if (shootingStar.x > canvas.width || shootingStar.y > canvas.height) {
          shootingStar.active = false;
        }
      } else if (Math.random() < 0.001) {
        // ~1% chance to activate per frame
        generateShootingStar();
      }
    };

    const animate = () => {
      updateStars();
      updateShootingStar(); // Update shooting star position
      drawStars();
      drawShootingStar(); // Draw shooting star if active
      requestAnimationFrame(animate);
    };

    generateStars();
    animate();

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("resize", resizeCanvas);
      canvas.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
      }}
    />
  );
};

export default StarryBackground;
