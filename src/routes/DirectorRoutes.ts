import { Router, Request, Response } from "express";
import DirectorController from "../controller/DirectorController";
import IDirector from "../models/Director";

const router = Router();
const controller = new DirectorController()

router.get('/', (req: Request, res: Response) => {
  controller.getAllDirectors().then(directors => {
      console.log('All auteurs:', directors);
      res.status(200).json({directors});
  })
  .catch(error => {
      console.error('Error:', error);
  });
    
});

router.get('/:id', (req: Request, res: Response) => {
  controller.getDirectorById(req.params.id).then(director => {
    console.log('auteur:', director);
    res.status(200).json({director});
  })
  .catch(error => {
    console.error('Error:', error);
  });
  // if (!auteur) return res.status(404).send('Auteur non trouvé');
  // res.json(auteur);
});


router.post('/', (req: Request, res: Response) => {
  controller.addDirector(req.body).then(director =>{
    res.status(201).send('Director ajouté');
  }).catch(error => {
    console.log('Error', error);
  });   
});

router.put('/:id', (req: Request, res: Response) => {
  controller.updateDirectorById(req.params.id, req.body as IDirector)
  res.send('Auteur mis à jour');
});
  

router.delete('/:id', (req: Request, res: Response) => {
    controller.deleteDirectorById(req.params.id).then(director => {
      res.status(200).send('Auteur supprimé')
    }).catch(error=>{
      console.log("Error",error);
    res.status(404).send('error');
  });
});

export default router