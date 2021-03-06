export class Photo {
  id: string;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
  constructor() {
    this.id = '';
    this.author = '';
    this.width = 0;
    this.height = 0;
    this.url = '';
    this.download_url = '';
  }
}
