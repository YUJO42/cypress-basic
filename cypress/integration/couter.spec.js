describe('ui-counter', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/woowa/cypress-basic/#');
  });

  it('생성시 버튼과 초기값(10)을 렌더링 한다', () => {
    cy.get('.count-display').then(($input) => {
      assert.equal(+$input.val(), 10);
    });
  });

  it('+ 버튼 클릭시 1 증가한다.', () => {
    cy.get('.count-display').then(($input) => {
      const prevInputValue = +$input.val();

      cy.get('.plus-button').click();
      cy.get('.count-display').then(($input) => {
        assert.equal(+$input.val(), prevInputValue + 1);
      });
    });
  });

  it('- 버튼 클릭시 1 감소한다.', () => {
    cy.get('.count-display').then(($input) => {
      const prevInputValue = +$input.val();

      cy.get('.minus-button').click();
      cy.get('.count-display').then(($input) => {
        assert.equal(+$input.val(), prevInputValue - 1);
      });
    });
  });

  it('count max값이 12이다.', () => {
    for (let i = 0; i < 10; i++) {
      cy.get('.plus-button').click();
    }

    cy.get('.count-display').then(($input) => {
      assert.isAtMost(+$input.val(), 12);
    });
  });

  it('count min값이 8이다.', () => {
    for (let i = 0; i < 10; i++) {
      cy.get('.minus-button').click();
    }

    cy.get('.count-display').then(($input) => {
      assert.isAtLeast(+$input.val(), 8);
    });
  });
});
