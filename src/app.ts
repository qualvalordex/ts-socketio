import express, { Request, Response } from 'express';

const app = express();

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    res.send('<h1>Hello!</h1>');
});

export default app;