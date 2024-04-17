import { Router, Request, Response } from "express";
import FilmController from "../controller/FilmController";
import IFilm from "../models/Film";

const router = Router();
const controller = new FilmController()

router.get('/', (req: Request, res: Response) => {
  controller.getAllFilms().then(Films => {
      console.log('All auteurs:', Films);
      res.status(200).json({Films});
  })
  .catch(error => {
      console.error('Error:', error);
  });
    
});

router.get('/:id', (req: Request, res: Response) => {
  controller.getFilmById(req.params.id).then(Film => {
    console.log('auteur:', Film);
    res.status(200).json({Film});
  })
  .catch(error => {
    console.error('Error:', error);
  });
});


router.post('/', (req: Request, res: Response) => {
  controller.addFilm(req.body).then(Film =>{
    res.status(201).send('Film ajouté');
  }).catch(error => {
    console.log('Error', error);
  });   
});

router.put('/:id', (req: Request, res: Response) => {
  controller.updateFilmById(req.params.id, req.body as IFilm)
  res.send('Auteur mis à jour');
});
  

router.delete('/:id', (req: Request, res: Response) => {
    controller.deleteFilmById(req.params.id).then(Film => {
      res.status(200).send('Auteur supprimé')
    }).catch(error=>{
      console.log("Error",error);
    res.status(404).send('error');
  });
});

export default router