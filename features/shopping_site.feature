Feature: Shopping in site

Scenario: Search a product

  Given I got to Americanas site
  When type it "caixa de bombom garoto" in search bar
  Then validate the return of search

Scenario: Include a product on basket products

  Given a product "Bombons Sortidos Garoto Caixa 300 G" of list returned
  When click in buy
  Then validate the product in basket products

Scenario: Continue shopping

  Given I got to a basket products of site Americanas
  When click in continue
  Then view Login

Scenario: Remove product of basket products

  Given I got to a basket products of site Americanas
  When click in remove
  Then return a basket empty


