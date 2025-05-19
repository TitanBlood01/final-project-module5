import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-image-gallery-optimized',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './image-gallery-optimized.component.html',
  styleUrl: './image-gallery-optimized.component.css'
})
export class ImageGalleryOptimizedComponent {
  title = 'Galería de Imágenes Optimizada';
  
  // Array de URLs de imágenes con formato WebP y fallback a JPG
  images = [
    {
      webp: 'https://picsum.photos/id/1/1200/800.webp',
      jpg: 'https://picsum.photos/id/1/1200/800',
      width: 1200,
      height: 800
    },
    {
      webp: 'https://picsum.photos/id/2/800/600.webp',
      jpg: 'https://picsum.photos/id/2/800/600',
      width: 800,
      height: 600
    },
    {
      webp: 'https://picsum.photos/id/3/600/400.webp',
      jpg: 'https://picsum.photos/id/3/600/400',
      width: 600,
      height: 400
    },
    {
      webp: 'https://picsum.photos/id/4/400/300.webp',
      jpg: 'https://picsum.photos/id/4/400/300',
      width: 400,
      height: 300
    },
    {
      webp: 'https://picsum.photos/id/5/1000/700.webp',
      jpg: 'https://picsum.photos/id/5/1000/700',
      width: 1000,
      height: 700
    },
    {
      webp: 'https://picsum.photos/id/6/900/600.webp',
      jpg: 'https://picsum.photos/id/6/900/600',
      width: 900,
      height: 600
    },
    {
      webp: 'https://picsum.photos/id/7/700/500.webp',
      jpg: 'https://picsum.photos/id/7/700/500',
      width: 700,
      height: 500
    },
    {
      webp: 'https://picsum.photos/id/8/500/400.webp',
      jpg: 'https://picsum.photos/id/8/500/400',
      width: 500,
      height: 400
    },
    {
      webp: 'https://picsum.photos/id/9/1100/900.webp',
      jpg: 'https://picsum.photos/id/9/1100/900',
      width: 1100,
      height: 900
    },
    {
      webp: 'https://picsum.photos/id/10/950/750.webp',
      jpg: 'https://picsum.photos/id/10/950/750',
      width: 950,
      height: 750
    }
  ];
}
