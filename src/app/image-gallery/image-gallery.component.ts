import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-image-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './image-gallery.component.html',
  styleUrl: './image-gallery.component.css'
})
export class ImageGalleryComponent {
  title = 'Galería de Imágenes para Blog Personal';
  
  // Array de URLs de imágenes (placeholders)
  images = [
    'https://picsum.photos/id/1/1200/800',
    'https://picsum.photos/id/2/800/600',
    'https://picsum.photos/id/3/600/400',
    'https://picsum.photos/id/4/400/300',
    'https://picsum.photos/id/5/1000/700',
    'https://picsum.photos/id/6/900/600',
    'https://picsum.photos/id/7/700/500',
    'https://picsum.photos/id/8/500/400',
    'https://picsum.photos/id/9/1100/900',
    'https://picsum.photos/id/10/950/750'
  ];
}