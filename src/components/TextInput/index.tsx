import { Dispatch, SetStateAction } from 'react'
import * as Styled from './styles'

interface ITextInputProps {
  width: number
  text: string
  setText: Dispatch<SetStateAction<string>>
}

export const TextInput = ({ width, text, setText }: ITextInputProps) => {
  const handleOnChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault
    setText(e.target.value)
  }

  const handleOnClickButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault
    setText('')
  }
  return (
    <Styled.Container>
      <Styled.TextInput width={width} onChange={handleOnChangeText} value={text} />
      <button type='reset' onClick={handleOnClickButton}>Clear</button>
    </Styled.Container>
  )
}
