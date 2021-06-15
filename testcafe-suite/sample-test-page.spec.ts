import { Selector } from "testcafe";

fixture`Getting Started` // declare the fixture
  .page`https://nextjs-steel-kappa-16.vercel.app/`; // specify the start page

//then create a test and place your code there
test('homepage', async (t) => {
  await t
  .expect(Selector('h1').innerText)
  .eql('Welcome to Next.js!');
});

