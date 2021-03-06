import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'image',
})
export class ImagePipe implements PipeTransform {
  transform(id: string): string {
    return `https://picsum.photos/id/${id}/200/300`;
  }
}
