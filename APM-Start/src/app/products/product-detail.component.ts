import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'pm-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  constructor(private route : ActivatedRoute,
              private router: Router
              ) {
    console.log(this.route.snapshot.paramMap.get('id'));
   }

  ngOnInit(): void {
  }
  onBack(): void {
    this.router.navigate(['/products']);
  }
}
