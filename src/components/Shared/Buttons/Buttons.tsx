import './buttons.css'

interface PropsBtn {
  btnName: string;
  btnHandleClick: () => void;
}

export const BtnOk = ({btnHandleClick, btnName}:PropsBtn) => {

  return (
    <button className='btnOk' onClick={() => btnHandleClick()}>{btnName}</button>
  )
}

export const BtnCancel = ({btnHandleClick, btnName}:PropsBtn) => {

  return (
    <button className='btnCancel' onClick={() => btnHandleClick()}>{btnName}</button>
  )
}

