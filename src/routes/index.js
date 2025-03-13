import { router as submission } from './submissionRoutes.js';

export const routes = (app) => {
    app.use(
        submission
    )
}