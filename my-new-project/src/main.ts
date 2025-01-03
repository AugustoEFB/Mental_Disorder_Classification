import { App } from './app'; // Import the main application logic

const startApp = async () => {
    const app = new App();
    await app.initialize();
    app.start();
};

startApp().catch(err => {
    console.error('Failed to start the application:', err);
});