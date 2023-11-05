import React from 'react';

/**
 * just display information about company
 * @returns About page details
 */
export default function About() {
  const esLintTest = 'title-test';

  /**
   * Add two numbers.
   * @return {int} The sum of the two numbers.
   */
  function addNum(num1, num2) {
    return num1 + num2;
  }
  addNum(1, 2);

  return (
    <div>
      <p>about page</p>
    </div>
  );
}
