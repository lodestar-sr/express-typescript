import express from 'express';
import session from 'express-session';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import path from 'path';
import helmet from 'helmet';
import router from '../routes';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from '../../swagger.json';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const sessionOptions: session.SessionOptions = {
    secret: '1qazxsw2',
    resave: false,
    saveUninitialized: false,
    cookie: {
        path: '/',
        httpOnly: true,
        secure: false,
        maxAge: 60 * 60 * 1000,
    },
};

app.set('views', path.join(__dirname, '..', 'views'));
app.set('view engine', 'ejs');
app.set('port', 3000);
app.set('x-powered-by', false);

app.use('/api', router);
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(cookieParser());
app.use(session(sessionOptions));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

export default app;
