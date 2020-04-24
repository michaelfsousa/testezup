const { client } = require('nightwatch-cucumber');
const { Given, Then, When } = require('cucumber');


var product = ''
var pause = 3000


Given(/^I got to Americanas site$/, () => {
  return client
    .url('https://www.americanas.com.br/').waitForElementVisible ("body", 5000);

});

Given(/^a product "(.*?)" of list returned$/, (prod) => {
  product = prod
  return client.assert.visible('div[data-tracker="productgrid-main"]').click('img[alt="'+product+'"]').pause(pause)

});

Given(/^I got to a basket products of site Americanas$/, () => {
  return client
  .url('https://sacola.americanas.com.br/simple-basket/').waitForElementVisible ("body", 5000);

});





When(/^type it "(.*?)" in search bar$/, (search) => {
  return client.assert.visible('input[id=h_search-input]').setValue('input[id=h_search-input]', [search, "\uE007"]).pause(pause)

});

When(/^click in buy$/, () => {
  return client.click('a[id=btn-buy]').pause(pause)

});

When(/^click in continue$/, () => {
  return client.click('button[id=buy-button]').pause(pause)

});

When(/^click in remove$/, () => {  
  return client.click('span[class="basket-productRemoveAct link-primary --mobile"]').pause(pause)
 

});






Then(/^validate the return of search$/, () => {
 return client.assert.visible('div[data-tracker="productgrid-main"]').pause(pause)
  
});

Then(/^validate the product in basket products$/, () => {
  client.assert.visible('div[class="basket-products"]').pause(pause)
  return client.assert.visible('a[title="'+product+'"]').pause(pause)  
   
 });
 
Then(/^view Login$/, () => {
  return client.assert.visible('div[class="entrar__wrapper"]').pause(pause) 
   
 });

Then(/^return a basket empty$/, () => {
  return client.assert.visible('section[class="basket-empty animate-fade"]').pause(pause) 
  
   
 });

