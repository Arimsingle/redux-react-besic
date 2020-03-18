import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { NumberActions } from './redux/number/action'
import { PhotoActions } from './redux/photo/action'
import { bindActionCreators } from 'redux';
export default () => {
  const actionsNumberActions = bindActionCreators(NumberActions, useDispatch());
  const actionsPhotoActions = bindActionCreators(PhotoActions, useDispatch());
  const number = useSelector(state => state.number) //number = 0
  const photo = useSelector(state => state.photo)
  useEffect(() => {
    console.log(photo)
  }, [])
  const [img, setImg] = useState('');
  const change = () => {
    actionsPhotoActions.SHOWPHOTO(img) 
  }
  return (
    <div>
      <img src={photo} />
      <h2>Counter {number} </h2>
      <button onClick={() => actionsNumberActions.INCREMENT(number)}>INCREMENT</button>
      <button onClick={() => actionsNumberActions.DECREMENT(number)}>DECREMENT</button>
      <div>
        <label>PHOTO</label>
        <input onChange={(e) => setImg(e.target.value)} />
        <button onClick={change}>SHOWPHOTO</button>
      </div>
    </div>
  )
}
y