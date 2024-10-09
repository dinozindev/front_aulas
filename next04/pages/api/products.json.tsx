import productData from './products.json';

export default function handler(req: any, res: any) {
    res.status(200).json(productData);
}