import { Routes } from '@angular/router';
import { PostListComponent } from './post-list/post-list.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { ImageGalleryComponent } from './image-gallery/image-gallery.component';
import { ContactPageComponent } from './contact-page/contact-page.component';

export const routes: Routes = [
    { path: '', redirectTo: '/posts', pathMatch: 'full' },
    { path: 'posts', component: PostListComponent },
    { path: 'post/:id', component: PostDetailComponent },
    { path: 'gallery', component: ImageGalleryComponent },
    { path: 'gallery-optimized', loadComponent: () => import('./image-gallery-optimized/image-gallery-optimized.component').then(m => m.ImageGalleryOptimizedComponent) },
    { path: 'contact', component: ContactPageComponent }
];
