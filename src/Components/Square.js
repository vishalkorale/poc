import React,{useState} from 'react';

const Square = ({value}) => {

    // const [value, setValue] = useState(null);
    // const handleOnClick = () =>{
    //      setValue('X');
    // }
        return (
              <button className="square  border-2 border-black w-20 h-20 ">{value}</button>
            //   <button className="square  border-2 border-black w-20 h-20 " onClick={handleOnClick}>{value}</button>
        );

}
        const Board = () => {

            const [squares , setSquares] = useState(Array(9).fill(null));
            return (
              <>
              <div className=' grid grid-cols-1  border-2 border-black'>
          
                <div className="board-row ">
                 <Square value={squares[0]}/>
                 <Square value={squares[1]}/>
                 <Square value={squares[2]}/>
                </div>
                <div className="board-row">
                <Square value={squares[3]}/>
                <Square value={squares[4]}/>
                <Square value={squares[5]}/>
                </div>
                <div className="board-row">
                <Square value={squares[6]}/>
                <Square value={squares[7]}/>
                <Square value={squares[8]}/>
                </div>
              </div>
              </>
            )
}

export default Board
