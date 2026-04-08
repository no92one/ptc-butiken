import { defineConfig } from '@playwright/test';
import { defineBddConfig } from 'playwright-bdd';

// Här talar vi om för playwright-bdd var våra feature-filer och step-filer finns.
// Resultatet blir en testkatalog som Playwright sedan kan använda.
const testDir = defineBddConfig({
    features: 'testing/features/**/*.feature',
    steps: 'testing/steps/**/*.js',
});

// Här exporterar vi hela Playwright-konfigurationen.
export default defineConfig({
    // Alla testresultat, till exempel screenshots och traces,
    // sparas i denna mapp.
    outputDir: 'testing/results',
    // Här bestämmer vi vilken typ av rapport som ska skapas efter testkörningen.
    // I detta fall skapas en HTML-rapport i mappen "playwright-report".
    // "open: 'never'" betyder att rapporten inte öppnas automatiskt efter körning.
    reporter: [['html', { outputFolder: 'playwright-report', open: 'never' }]],

    // Här delar vi upp testkörningen i två projekt.
    // Först körs "setup", sedan körs "tests".
    projects: [
        {
            // Detta projekt används bara för att skapa en inloggad session.
            name: 'setup',
            // Här säger vi att Playwright ska leta efter testfilen i "testing"-mappen.
            testDir: './testing',
            // Endast filen som matchar "auth.setup.js" ska köras i detta projekt.
            testMatch: /auth\.setup\.js/,
            // Inställningar som gäller för detta projekt.
            use: {
                video: 'off',
                screenshot: 'only-on-failure',
                trace: 'on-first-retry',
            },
        },
        {
            // Detta projekt innehåller dina vanliga tester.
            name: 'tests',
            // Här använder vi den testkatalog som skapades av defineBddConfig,
            // alltså de tester som bygger på feature-filer och step-filer.
            testDir: testDir,
            // Detta gör att "tests"-projektet väntar på att "setup"-projektet ska köras klart först.
            // På så sätt hinner auth.setup.js skapa auth.json innan testerna startar.
            dependencies: ['setup'],
            use: {
                video: 'off',
                screenshot: 'only-on-failure',
                trace: 'on-first-retry',
                // Här laddas den sparade inloggade sessionen från testing/auth.json.
                // Det gör att testerna kan börja som en redan inloggad användare.
                storageState: 'testing/auth.json',
            },
        },
    ]
});