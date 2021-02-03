describe("ui-counter", () => {
  beforeEach(() => {
    // 페이지 접속. 띄워진 서버 port를 작성해주세요.
    cy.visit("http://localhost:5500/");
  });

  it("+ 버튼 클릭시 1 증가한다.", () => {
    // btn-inc 클래스를 가진 요소를 클릭
    cy.get(".plus-button").click();

    // value 클래스를 가진 요소의 텍스트가 10
    cy.get(".count-display").should("have.value", "10");
  });
});
