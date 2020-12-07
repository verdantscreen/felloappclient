let APIURL = '';

switch (window.location.hostname) {
    case 'localhost' || '127.0.0.1':
        APIURL = 'http:localhost:3001';
        break;
    case 'client-fello-app.herokuapp.com':
        APIURL = 'https://server-fello-app.herokuapp.com/'
}

export default APIURL;