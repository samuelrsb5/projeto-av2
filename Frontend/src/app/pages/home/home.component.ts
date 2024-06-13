import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FakestoreServiceService } from '../../services/fakestore.service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  produtos!: any;

  constructor(
    private fakestore: FakestoreServiceService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const category = params.get('category');
      if (category) {
        this.fakestore.getProductsByCategory(category).subscribe({
          next: (dado: any) => {
            this.produtos = dado;
          },
          error: (erro: any) => {
            console.log(erro);
          }
        });
      } else {
        this.fakestore.getAllProducts().subscribe({
          next: (dado: any) => {
            this.produtos = dado;
          },
          error: (erro: any) => {
            console.log(erro);
          }
        });
      }
    });
  }
}





