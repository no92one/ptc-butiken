// Generated from: testing\features\login.feature
import { test } from "playwright-bdd";

test.describe('Login', () => {

  test('User can log in', async ({ Given, When, Then, page }) => { 
    await Given('I am on the login page', null, { page }); 
    await When('I log in with email "alice@example.com" and password "Secret123!"', null, { page }); 
    await Then('I should be redirected to the profile', null, { page }); 
  });

  test('Setup is is working', async ({ Given, page }) => { 
    await Given('I am logged in', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('testing\\features\\login.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":3,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given I am on the login page","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When I log in with email \"alice@example.com\" and password \"Secret123!\"","stepMatchArguments":[{"group":{"start":20,"value":"\"alice@example.com\"","children":[{"start":21,"value":"alice@example.com","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":53,"value":"\"Secret123!\"","children":[{"start":54,"value":"Secret123!","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then I should be redirected to the profile","stepMatchArguments":[]}]},
  {"pwTestLine":12,"pickleLine":8,"tags":[],"steps":[{"pwStepLine":13,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"Given I am logged in","stepMatchArguments":[]}]},
]; // bdd-data-end