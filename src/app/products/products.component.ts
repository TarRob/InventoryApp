import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct, ProductsService } from '../product.service';

@Component({
  selector: 'in-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsComponent {

  products$: Observable<IProduct[]> = this.productsService.products$;

  constructor(private productsService: ProductsService) { }

  trackById(index, item) {
    return item.id;
  }

  delete = false;
  productToBeDeleted;

  onDelete(product) {
    this.delete = true;
    this.productToBeDeleted = product;
  }
  
  handleCancel() {
    this.delete = false;
  }
  
  confirmDelete() {
    this.handleCancel();
    
    this.productsService.removeProduct(this.productToBeDeleted);
  }

  addProduct() { }
}
