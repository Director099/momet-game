const cats = [
  {
    'id': 'YdAqiUkUoWA',
    'url': 'img/cats-1.jpg',
    'description': '',
  }, {
    'id': 'hX_hf2lPpUU',
    'url': 'img/cats-2.jpg',
    'description': '',
  }, {
    'id': 'w1JE5duY62M',
    'url': 'img/cats-3.jpg',
    'description': '',
  }, {
    'id': '3tYZjGSBwbk',
    'url': 'img/cats-4.jpg',
    'description': '',
  }, {
    'id': 'NoXUQ54pDac',
    'url': 'img/cats-5.jpg',
    'description': '',
  }, {
    'id': 'OZhYgZh0bAg',
    'url': 'img/cats-6.jpg',
    'description': '',
  }
];

const cars = [
  {
    'id': 'YdAqiUkUoWA',
    'url': 'img/cars-1.jpg',
    'description': '',
  }, {
    'id': 'hX_hf2lPpUU',
    'url': 'img/cars-2.jpg',
    'description': '',
  }, {
    'id': 'w1JE5duY62M',
    'url': 'img/cars-3.jpg',
    'description': '',
  }, {
    'id': '3tYZjGSBwbk',
    'url': 'img/cars-4.jpg',
    'description': '',
  }, {
    'id': 'NoXUQ54pDac',
    'url': 'img/cars-5.jpg',
    'description': '',
  }, {
    'id': 'OZhYgZh0bAg',
    'url': 'img/cars-6.jpg',
    'description': '',
  }
];

const flowers = [
  {
    'id': 'YdAqiUkUoWA',
    'url': 'img/flowers-1.jpg',
    'description': '',
  }, {
    'id': 'hX_hf2lPpUU',
    'url': 'img/flowers-2.jpg',
    'description': '',
  }, {
    'id': 'w1JE5duY62M',
    'url': 'img/flowers-3.jpg',
    'description': '',
  }, {
    'id': '3tYZjGSBwbk',
    'url': 'img/flowers-4.jpg',
    'description': '',
  }, {
    'id': 'NoXUQ54pDac',
    'url': 'img/flowers-5.jpg',
    'description': '',
  }, {
    'id': 'OZhYgZh0bAg',
    'url': 'img/flowers-6.jpg',
    'description': '',
  }
];

interface IImageOptions {
  [key: string]: {
    id: string,
    url: string
  }[]
}

export const imageCollection: IImageOptions = {
  flowers, cats, cars,
};
