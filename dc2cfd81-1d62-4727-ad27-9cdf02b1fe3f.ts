export default {
  entity: {
    id: 'dc2cfd81-1d62-4727-ad27-9cdf02b1fe3f',
    name: '愤怒揭发批判“四人帮”及其王体之流利用公安机关推行反革命政治纲领的滔天罪行',
    internal: false,
    type: 'img',
    official: false,
    author: '赵世训',
    files: [
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives17/main/dc2cfd81-1d62-4727-ad27-9cdf02b1fe3f/1.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives17/main/dc2cfd81-1d62-4727-ad27-9cdf02b1fe3f/2.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives17/main/dc2cfd81-1d62-4727-ad27-9cdf02b1fe3f/3.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives17/main/dc2cfd81-1d62-4727-ad27-9cdf02b1fe3f/4.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives17/main/dc2cfd81-1d62-4727-ad27-9cdf02b1fe3f/5.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives17/main/dc2cfd81-1d62-4727-ad27-9cdf02b1fe3f/6.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives17/main/dc2cfd81-1d62-4727-ad27-9cdf02b1fe3f/7.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives17/main/dc2cfd81-1d62-4727-ad27-9cdf02b1fe3f/8.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives17/main/dc2cfd81-1d62-4727-ad27-9cdf02b1fe3f/9.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives17/main/dc2cfd81-1d62-4727-ad27-9cdf02b1fe3f/10.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives17/main/dc2cfd81-1d62-4727-ad27-9cdf02b1fe3f/11.jpg',
    ],
  },
  parser_option: {
    articles: [
      {
        title: '愤怒揭发批判“四人帮”及其王体之流利用公安机关推行反革命政治纲领的滔天罪行',
        authors: [
          '赵世训',
        ],
        page_start: 1,
        page_end: 11,
        dates: [
          {
            year: 1977,
            month: 12,
            day: 26,
          },
        ],
      },
    ],
    ocr: {
      use_onnx: true,
      det_model_dir: './paddle/onnx/ch_PP-OCRv4_det_infer.onnx',
      rec_model_dir: './paddle/onnx/ch_PP-OCRv4_rec_infer.onnx',
    },
  },
  parser_id: 'automation',
  path: 'dc2cfd81-1d62-4727-ad27-9cdf02b1fe3f',
  resource_type: 'book',
  version: 2,
};