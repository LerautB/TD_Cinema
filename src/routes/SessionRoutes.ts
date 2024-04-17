import { Router, Request, Response } from "express";
import SessionController from "../controller/SessionController";
import ISession from "../models/Session";

const router = Router();
const controller = new SessionController()

router.get('/', (req: Request, res: Response) => {
  controller.getAllSessions().then(Sessions => {
      console.log('All sessions:', Sessions);
      res.status(200).json({Sessions});
  })
  .catch(error => {
      console.error('Error:', error);
  });
    
});

router.get('/:id', (req: Request, res: Response) => {
  controller.getSessionById(req.params.id).then(Session => {
    console.log('session:', Session);
    res.status(200).json({Session});
  })
  .catch(error => {
    console.error('Error:', error);
  });
  // if (!auteur) return res.status(404).send('Auteur non trouvé');
  // res.json(auteur);
});


router.post('/', (req: Request, res: Response) => {
  controller.addSession(req.body).then(Session =>{
    res.status(201).send('Session ajouté');
  }).catch(error => {
    console.log('Error', error);
  });   
});

router.put('/:id', (req: Request, res: Response) => {
  controller.updateSessionById(req.params.id, req.body as ISession)
  res.send('Session mis à jour');
});
  

router.delete('/:id', (req: Request, res: Response) => {
    controller.deleteSessionById(req.params.id).then(Session => {
      res.status(200).send('Session supprimé')
    }).catch(error=>{
      console.log("Error",error);
    res.status(404).send('error');
  });
});

export default router