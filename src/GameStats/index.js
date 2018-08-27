import React, {Component} from 'react';

export default (game) =>
    <div>
        <p>PlayerA: {game.playerA}</p>
        <p>PlayerB: {game.playerB}</p>
        <p>Last player: {game.lastPlayer}</p>
        <p>round 1 player A points: {game.round1PlayerAPoints}</p>
        <p>round 2 player A points:  {game.round2PlayerAPoints}</p>
        <p>round 3 player A points:  {game.round3PlayerAPoints}</p>
        <p>round 1 player B points: {game.round1PlayerBPoints}</p>
        <p>round 2 player B points: {game.round2PlayerBPoints}</p>
        <p>round 3 player B points: {game.round2PlayerBPoints}</p>
    </div>