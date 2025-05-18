const validLogin = "bropet@mail.ru";
const validPassword = "123";
const bookName = "Война и мир";
const bookDescription = "Роман";
const bookAuthors = "Л.Н.Толстой";

describe("Собственные тесты", () => {
  it("Отображение стартовой страницы", () => {
    cy.visit("/");
    cy.get("body").should("be.visible");
  });

  it("Отсутствие книг в избранном", () => {
    cy.visit("/");
    cy.login(validLogin, validPassword);
    cy.contains("Favorites").click();
    cy.contains("Please add some book to favorit on home page!").should(
      "be.visible"
    );
  });

  it("Добавление новой книги в избранное", () => {
    cy.visit("/");
    cy.login(validLogin, validPassword);
    cy.addNewBookInFavorites(bookName, bookDescription, bookAuthors);
    cy.contains("Favorites").click();
    cy.contains(bookName).should("be.visible");
    cy.contains(bookAuthors).should("be.visible");
  });

  it("Удаление единственной книги из избранного", () => {
    cy.visit("/");
    cy.login(validLogin, validPassword);
    cy.addNewBookInFavorites(bookName, bookDescription, bookAuthors);
    cy.contains("Favorites").click();
    cy.contains("Delete from favorite").should("be.visible").click();
    cy.contains("Please add some book to favorit on home page!").should(
      "be.visible"
    );
  });
});

describe("Тесты с лекции", () => {
  beforeEach;
  it("Валидный логин", () => {
    cy.visit("/");
    cy.login(validLogin, validPassword);
    cy.contains("Добро пожаловать bropet@mail.ru").should("be.visible");
  });

  it("Логин с невалидным email", () => {
    cy.visit("/");
    cy.login(" ", validPassword);
    cy.get("#mail")
      .then((elements) => elements[0].checkValidity())
      .should("be.false");
  });

  it("Логин с невалидным паролем", () => {
    cy.visit("/");
    cy.login(validLogin, " ");
    cy.contains("Неправильая почта или пароль").should("be.visible");
  });
});
