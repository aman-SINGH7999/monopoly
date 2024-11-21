import React, { useState} from "react";
import { useDispatch } from "react-redux";
import { addPlayers } from "../redux/slice";
import { useNavigate } from 'react-router-dom'

export default function Home() {
  const colors = ['bg-red-600', 'bg-yellow-600', 'bg-blue-600', 'bg-green-600'];
  const parent = 39;
  const ids = ['player-1', 'player-2', 'player-3', 'player-4'];
  const [price, setPrice] = useState(1500);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [players, setPlayers] = useState([
    {
        id: 'player-1',
        name : 'player-1',
        color: 'bg-red-600',
        parent: 39,
        ref: undefined,
        gap: 0
    },
  ])

  const handleAddPlayer = ()=>{
    const newPlayer = {
      id : ids[players.length],
      name : ids[players.length],
      color : colors[players.length],
      parent : parent,
      ref: undefined,
      gap: 0
    }
    setPlayers([...players, newPlayer])
  }

  const handleStart = ()=>{
    dispatch(addPlayers(players));
    navigate("/monopoly")
  }

  return (
    <div className="w-screen h-screen">
      <div className="h-full w-full bg-blue-200 text-center p-4">
        <div className="text-3xl font-bold text-red-700">Welcome to MonoPoly</div>
            <div className="flex pt-4 justify-around items-center">
              <div>
                  <div>
                    {
                      players.length < 4 ? <button className="bg-blue-500 rounded-full py-2 px-4" onClick={handleAddPlayer}>add players</button> : null
                    }
                    {
                      players?.map((p)=>{
                        return <div>
                          {p.name}
                        </div>
                      })
                    }
                  </div>
              </div>
              <div className="flex flex-col">
                  <button className="bg-blue-500 rounded-full py-2 px-4">set Price</button>
                  <input type="text" value={price} onChange={(e)=> setPrice(e.target.value)} />
              </div>
          </div>
          <div>
            <button className="bg-green-500 py-2 px-4 rounded-full" onClick={handleStart}>Start</button>
          </div>
      </div>
    </div>
  );
}
