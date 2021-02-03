describe('ui-counter', () => {
  beforeEach(() => {
    // 페이지 접속. 띄워진 서버 port를 작성해주세요.
    cy.visit('http://localhost:5500/');
  });

  it('생성시 버튼과 초기값(10)을 렌더링 한다', () => {
    // count-display 클래스를 가진 요소의 텍스트가 10
    cy.get('.count-display').should('have.value', '10');
  });

  it('+ 버튼 클릭시 1 증가한다.', () => {
    // value 클래스를 가진 요소의 텍스트가 10
    const prevInputValue = cy.get('.count-display');

    // btn-inc 클래스를 가진 요소를 클릭
    cy.get('.plus-button').click();
    cy.get('.count-display').should('have.value', +prevInputValue + 1);
  });

  it('- 버튼 클릭시 1 증가한다.', () => {
    // value 클래스를 가진 요소의 텍스트가 10
    const prevInputValue = cy.get('.count-display');

    // btn-inc 클래스를 가진 요소를 클릭
    cy.get('.minus-button').click();
    cy.get('.count-display').should('have.value', +prevInputValue - 1);
  });

  it('count max값이 12이다.', () => {
    const prevInputValue = cy.get('.count-display');

    // btn-inc 클래스를 가진 요소를 클릭
    cy.get('.minus-button').click();
    cy.get('.count-display').should('have.value.of.at.most', 13);
  });

  it('count min값이 8이다.', () => {
    const prevInputValue = cy.get('.count-display');

    // btn-inc 클래스를 가진 요소를 클릭
    cy.get('.minus-button').click();
    cy.get('.count-display').should('have.value.of.at.least', 8);
  });
});
