<script setup>
import Tile from '../components/Tile.vue';
let charge = 1000;
let performance = 0;
let dirtyTiles = 18;
let roombaPosition = [7, 0];
let resultMessage = '';

const directions = [
  [-1, 0],  // up
  [0, 1],  // right
  [0, -1], // left
  [1, 0], // down
];
</script>

<template>
  <div class="floor-board">
    <div v-for="(n, i) in 8">
      <div v-for="(n, j) in 8">
        <tile :value="board[i][j]"></tile>
      </div>
    </div>
  </div>

  <div class="controls">
    <button id="randomize" @click="randomize">Randomize</button>
    <button id="simulate" @click="simulation">Simulate</button>
  </div>

  <div class="result">
    <h3>Result</h3>
    <p>moves: {{ 1000 - charge }}</p>
    <p>performance: {{ performance }}</p>
    <p>{{ resultMessage }}</p>
  </div>
</template>

<script>
  export default {
    data() { 
      return {
        board: [
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', ''],
          ]
      } 
    },

    methods: {
      populateFloor() {
        let dirtyTiles = 18;

        while (dirtyTiles > 0) {
          let i = Math.floor(Math.random() * 8);
          let j = Math.floor(Math.random() * 8);

          if (this.board[i][j] === '') {
            this.board[i][j] = 'x';
            dirtyTiles--;
          }
        }
      },

      randomize() {
        
        this.populateFloor();
      },

      determineIfDirty(position) {
        console.log(`here2 ${position}`);

        if (this.board[position[0]][position[1]] === 'x') {
          this.dirtyTiles -= 1;
          this.performance += 250;
          this.board[position[0]][position[1]] = '';
        }
      },

      move(moveNumber) {
        const currMove = this.directions[moveNumber];
        const vert = currMove[0];
        const horiz = currMove[1];

        if (
          (vert+this.roombaPosition[0] < 8 && vert+this.roombaPosition[0] >= 0) && 
          (horiz+this.roombaPosition[1] < 8 && horiz+this.roombaPosition[1] >= 0)
        ) 
        {
          this.roombaPosition = [this.roombaPosition[0] + vert, this.roombaPosition[1] + horiz];
          this.performance -= 10;
          this.charge -= 1;
          this.determineIfDirty(this.roombaPosition);
        }
      },

      simulation() {
        while (this.charge > 0) {
          const firstMove = Math.floor(Math.random()*2);
          this.move(firstMove);

          console.log(`charge: ${this.charge}`);
          console.log(`performance: ${this.performance}`);
          console.log(`dirty tiles: ${this.dirtyTiles}`);
          console.log(`roomba position: ${this.roombaPosition}`);
          console.log(`board: ${this.board}`);
          
          while (this.dirtyTiles > 0) {
            const randomMove = Math.floor(Math.random()*4);
            
            this.move(randomMove);

            console.log(`charge: ${this.charge}`);
            console.log(`performance: ${this.performance}`);
            console.log(`dirty tiles: ${this.dirtyTiles}`);
            console.log(`roomba position: ${this.roombaPosition}`);
            console.log(`board: ${this.board}`);
          }

          while (this.roombaPosition[0] < 7) {
            this.move(3);
          }

          while (this.roombaPosition[1] > 0) {
            this.move(2);
          }
        }

        if (this.charge > 0) {
          this.resultMessage = 'Successfully cleaned!';
        } else {
          this.resultMessage = 'Unsuccessful. Charged finished!';
        }
      },
    }
  }
</script>

<style>
  .floor-board {
    display: flex;
    flex-wrap: wrap;
  }
</style>