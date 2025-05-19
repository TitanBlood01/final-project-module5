import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageGalleryOptimizedComponent } from './image-gallery-optimized.component';

describe('ImageGalleryOptimizedComponent', () => {
  let component: ImageGalleryOptimizedComponent;
  let fixture: ComponentFixture<ImageGalleryOptimizedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageGalleryOptimizedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageGalleryOptimizedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
