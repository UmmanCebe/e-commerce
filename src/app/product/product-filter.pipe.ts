import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './product';

@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {

  transform(value: Product[], filterText: string): Product[] {
    if (filterText) {
      filterText = filterText.toLocaleLowerCase();
      return value.filter((p: Product) => p.name.toLocaleLowerCase().indexOf(filterText) !== -1);
    }
    return value;
  }
}
