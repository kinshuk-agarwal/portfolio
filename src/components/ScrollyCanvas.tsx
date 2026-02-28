"use client";

import { useEffect, useRef, useState } from "react";
import { MotionValue, useMotionValueEvent, useTransform } from "framer-motion";

const FRAME_COUNT = 120;

interface ScrollyCanvasProps {
    scrollYProgress: MotionValue<number>;
}

export default function ScrollyCanvas({ scrollYProgress }: ScrollyCanvasProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);

    const frameIndex = useTransform(scrollYProgress, [0, 1], [1, FRAME_COUNT]);

    useEffect(() => {
        const loadedImages: HTMLImageElement[] = [];
        let loadedCount = 0;

        for (let i = 1; i <= FRAME_COUNT; i++) {
            const img = new Image();
            const frameNumber = i.toString().padStart(3, '0');
            img.src = `/sequence/ezgif-frame-${frameNumber}.png`;
            img.onload = () => {
                loadedCount++;
                if (loadedCount === FRAME_COUNT) {
                    if (canvasRef.current && loadedImages[0]) {
                        const ctx = canvasRef.current.getContext("2d");
                        if (ctx) {
                            drawImageCover(ctx, loadedImages[0], canvasRef.current);
                        }
                    }
                }
            };
            loadedImages.push(img);
        }
        setImages(loadedImages);
    }, []);

    useEffect(() => {
        const handleResize = () => {
            if (canvasRef.current) {
                canvasRef.current.width = window.innerWidth;
                canvasRef.current.height = window.innerHeight;
            }

            if (canvasRef.current && images.length > 0) {
                const ctx = canvasRef.current.getContext("2d");
                const currentIndex = Math.min(
                    Math.max(1, Math.round(frameIndex.get())),
                    FRAME_COUNT
                ) - 1;
                if (ctx && images[currentIndex]) {
                    drawImageCover(ctx, images[currentIndex], canvasRef.current);
                }
            }
        };

        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, [images, frameIndex]);

    useMotionValueEvent(frameIndex, "change", (latest) => {
        if (!canvasRef.current || images.length === 0) return;
        const ctx = canvasRef.current.getContext("2d");
        if (!ctx) return;

        const index = Math.min(Math.max(1, Math.round(latest)), FRAME_COUNT) - 1;
        const currentImage = images[index];

        if (currentImage && currentImage.complete) {
            drawImageCover(ctx, currentImage, canvasRef.current);
        }
    });

    const drawImageCover = (ctx: CanvasRenderingContext2D, img: HTMLImageElement, canvas: HTMLCanvasElement) => {
        const canvasRatio = canvas.width / canvas.height;
        const imgRatio = img.width / img.height;

        let drawWidth = canvas.width;
        let drawHeight = canvas.height;
        let offsetX = 0;
        let offsetY = 0;

        if (canvasRatio > imgRatio) {
            drawHeight = canvas.width / imgRatio;
            offsetY = (canvas.height - drawHeight) / 2;
        } else {
            drawWidth = canvas.height * imgRatio;
            offsetX = (canvas.width - drawWidth) / 2;
        }

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    };

    return (
        <canvas
            ref={canvasRef}
            className="w-full h-full block absolute inset-0 z-0 pointer-events-none"
        />
    );
}
