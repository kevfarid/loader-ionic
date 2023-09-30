import { Component, OnInit } from '@angular/core';
import { ImagesService } from './services/images.service';
import { FakeService } from './services/fake.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  isLoading: boolean = false;
  images: string[] = [];

  constructor(
    private imagesService: ImagesService,
    private fakeService: FakeService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getImages();
  }

  onClick() {
    this.isLoading = !this.isLoading;
    this.getData();
  }

  getImages() {
    this.imagesService.getAllImages().subscribe((images) => {
      this.images = images;
      this.isLoading = false;
    });
  }

  getData() {
    this.fakeService.getData({ timeout: 5000 }).subscribe(() => {
      this.isLoading = false;
      this.router.navigate(['/feedback']);
    });
  }
}
