import app from 'app';
import BrowserWindow from 'browser-window';
import crashReporter from 'crash-reporter';

crashReporter.start();
var mainWindow = null;

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('ready', () => {
    mainWindow = new BrowserWindow({width: 800,
      height: 600,
       resizable: true,
       backgroundColor: '#2e2c29',
       autoHideMenuBar : true});

    mainWindow.loadUrl('file://' + __dirname + '/index.html');
    mainWindow.on('closed', () => {
        mainWindow = null;
    });
});
