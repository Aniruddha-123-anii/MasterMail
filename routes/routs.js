import express from 'express'
import { getEmails, moveEmailsTotrash, saveDraftMail, saveSendMail ,deleteMailFromtrash,toggleStarredMails} from '../controller/email-controller.js'

const routes = express.Router()

routes.post("/save",saveSendMail)
routes.post("/save-draft",saveDraftMail)
routes.get('/emails/:type',getEmails) 
routes.post('/trash',moveEmailsTotrash)     
routes.post('/remove-trash',deleteMailFromtrash)     
routes.post('/starred',toggleStarredMails)     

export default routes;