export const TicTacToe = {
    setup: () => ({ cells: Array(9).fill(null) }),
  
    moves: {
      clickCell: (G, ctx, id) => {
        G.cells[id] = ctx.currentPlayer;
      },
      
    },
  };