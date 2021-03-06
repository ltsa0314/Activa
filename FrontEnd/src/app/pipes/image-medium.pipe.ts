import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imageMedium'
})
export class ImageMediumPipe implements PipeTransform {

  transform(id: string): string{
    return `https://picsum.photos/id/${id}/418/800`;
  }

}
