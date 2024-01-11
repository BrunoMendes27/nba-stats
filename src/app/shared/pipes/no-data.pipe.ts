import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noData',
  standalone: true,
})
export class NoDataPipe implements PipeTransform {
  transform(value: string | number | null, text: string): string | number {
    return value != null ? value + text : 'N/A';
  }
}
