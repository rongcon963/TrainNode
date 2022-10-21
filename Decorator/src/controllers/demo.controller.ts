import { Request, Response } from 'express';
export default class CatController {
    private cats: Array<{ name: string }> = [
      { name: 'Tom' },
      { name: 'Kitty' },
    ];
    
    public index(req: Request, res: Response): void {
      res.json({ cats: this.cats });
    }
    
    public add(req: Request, res: Response): void {
      this.cats.push(req.body);
      res.status(204).json();
    }
    
    public findByName(req: Request, res: Response): unknown {
      const { name } = req.params;
      const foundCat = this.cats.find((c) => c.name === name);
      if (foundCat) {
        return res.json({ cat: foundCat });
      }
      return res.status(404).json({ message: 'Cat not found!' });
    }
  }