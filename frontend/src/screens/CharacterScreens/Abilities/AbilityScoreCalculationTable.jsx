import React from 'react';

const AbilityScoreCalculationTable = ({ ability }) => {
  return (
    <div>
      AbilityScoreCalculationTable
      <table>
        <thead>{ability.name}</thead>
        <tbody>
          <tr>
            <td>Total Score</td>
            <td>--</td>
          </tr>
          <tr>
            <td>Modifier</td>
            <td>--</td>
          </tr>
          <tr>
            <td>Base Score</td>
            <td>--</td>
          </tr>
          <tr>
            <td>Racial Bonus</td>
            <td>--</td>
          </tr>
          <tr>
            <td>Ability Improvements</td>
            <td>--</td>
          </tr>
          <tr>
            <td>Misc Bonus</td>
            <td>--</td>
          </tr>
          <tr>
            <td>Set Score</td>
            <td>--</td>
          </tr>
        </tbody>
      </table>
      <p>
        Other Modifier
        <span>--</span>
      </p>
      <p>
        Override Score
        <span>--</span>
      </p>
    </div>
  );
};

export default AbilityScoreCalculationTable;
