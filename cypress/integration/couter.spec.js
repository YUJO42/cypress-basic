describe("ui-counter", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5500/");
  });

  it("생성시 버튼과 초기값(10)을 렌더링 한다", () => {
    cy.get(".count-display").should("have.value", "10");
  });

  it("+ 버튼 클릭시 1 증가한다.", () => {
    cy.get(".count-display").then(($input) => {
      const prevInputValue = Number($input.val());

      cy.get(".plus-button").click();
      cy.get(".count-display").should("have.value", prevInputValue + 1);
    });
  });

  it("- 버튼 클릭시 1 감소한다.", () => {
    cy.get(".count-display").then(($input) => {
      const prevInputValue = Number($input.val());

      cy.get(".minus-button").click();
      cy.get(".count-display").should("have.value", prevInputValue - 1);
    });
  });

  it("count max값이 12이다.", () => {
    for (let i = 0; i < 10; i++) {
      cy.get(".plus-button").click();
    }

    cy.get(".count-display").should("have.value", "12");
  });

  it("count min값이 8이다.", () => {
    for (let i = 0; i < 10; i++) {
      cy.get(".minus-button").click();
    }

    cy.get(".count-display").should("have.value.", "8");
  });
});
