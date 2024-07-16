import { Express, Request, Response } from 'express'
import { Product } from '../models/product'
import { DataSource, Repository } from 'typeorm'



const mapProductEndpoints = (app: Express, db: DataSource): void =>{
    const productRepository = db.getRepository(Product)

    app.get('/api/products', async (req: Request, res: Response) => {
        const products = await productRepository.find()
        res.json(products)
    });

    app.post('/api/products', async (req: Request, res: Response) => {
        const result = await productRepository.create(req.body);
        const product = await productRepository.save(result);
        res.json(product)
    });

    app.get('/api/products/:id', async (req: Request, res: Response) => {
        const params: any = req.params;
        const product = await productRepository.findOne({
            where: {
                id: params.id
            }
        })
        res.json(product)
    });

    app.put('/api/products/:id', async (req:Request, res: Response) => {
        const params: any = req.params;
        const product = await productRepository.findOne({
            where: {
                id: params.id
            }
        })
        productRepository.merge(product, req.body)
        const result = await productRepository.save(product)
        res.json(result)
    })

    app.delete('/api/products/:id', async (req:Request, res: Response) => {
        const params: any = req.params;
        const result = await productRepository.delete(params.id)
        res.json(result)
    });

    app.post('/api/products/:id/like', async (req:Request, res:Response) => {
        const params: any = req.params;
        const product = await productRepository.findOne({
            where: {
                id: params.id
            }
        });
        product.likes++;
        const result = await productRepository.save(product);
        res.json(result);
    })
}

export default mapProductEndpoints;