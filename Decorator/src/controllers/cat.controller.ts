import { Request, Response, NextFunction } from 'express';
import Controller, { Guards } from '../utils/controller.decorator';
import { Get, Post, Param } from '../utils/handlers.decorator';

const myLogger = function (req: Request, res: Response, next: NextFunction) {
  console.log('LOGGED');
  return next();
}
@Controller('/cats')
@Guards(myLogger)
export default class CatController {
  private cats: Array<{ name: string }> = [
    { name: 'Tom' },
    { name: 'Kitty' },
  ];
  @Get('/')
  // @Param()
  //   @Query()
  //   @Body body: 
  // public index(req: Request, res: Response): void {
  //   res.json({ cats: this.cats });
  // }
  public index(req: Request, res: Response): void {
    res.json({ cats: this.cats });
  }

  @Post('')
  public add(req: Request, res: Response): void {
    this.cats.push(req.body);
    res.status(204).json();
  }
  @Get('/:name')
  public findByName(@Param('name') name: string, res: Response): unknown {
    //const { name } = req.params;
    console.log(`findByName1`);
    
    const foundCat = this.cats.find((c) => c.name === name);
    if (foundCat) {
      return res.json({ cat: foundCat });
    }
    return res.status(404).json({ message: 'Cat not found!' });
  }
}