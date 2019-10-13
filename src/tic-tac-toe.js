class TicTacToe {
    constructor() {
        this.field = [[null, null, null],[null, null, null],[null, null, null]];
        this.player = 'x';
    }

    getCurrentPlayerSymbol() {
        return this.player;
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.field[rowIndex][columnIndex] !== null) {
            return this.player;
        } else {
            this.field[rowIndex][columnIndex] = this.player;
            return this.player === 'x' ? this.player = 'o' : this.player = 'x';
        }
    }

    isFinished() {
        if(this.getWinner() !== null || this.isDraw()) {
            return true;
        };
        return false;
    }

    getWinner() {
        let winner = null;
        for(let i = 0; i < this.field.length; i++) {
            if (this.field[i][0] === this.field[i][1] && this.field[i][0] === this.field[i][2]) {
                winner = this.field[i][0];
                break;
            }
            if(this.field[0][i] === this.field[1][i] && this.field[0][i] === this.field[2][i]) {
                winner = this.field[0][i];
                break;
            }
        }
        if(this.field[0][0] === this.field[1][1] && this.field[0][0] === this.field[2][2]) {
            winner = this.field[0][0];
        }else if (this.field[0][2] === this.field[1][1] && this.field[0][2] === this.field[2][0]) {
            winner = this.field[0][2];
        }
        return winner;
    }

    noMoreTurns() {
        let res = 0;
        for(let i = 0; i < this.field.length; i++) {
            for(let j = 0; j < this.field[i].length; j++) {
                if(this.field[i][j] === null) {
                    res++;
                }
            }
        }
        return res === 0;
    }

    isDraw() {
        if(this.noMoreTurns() && this.getWinner() === null) {
            return true;
        }
        return false;
    }

    getFieldValue(rowIndex, colIndex) {
        return this.field[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
