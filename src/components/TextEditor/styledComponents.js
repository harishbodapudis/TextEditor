import styled from 'styled-components'

export const MainContainer = styled.div`
  background-color: #25262c;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const TextAppContainer = styled.div`
  background-color: #1b1c22;
  width: 90%;
  margin: auto;
  height: 80vh;
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const TextImgBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  height: 100%;
  padding: 10px 10px;
  color: #f8fafc;
`
export const TextEditorImg = styled.img`
  width: 250px;
  height: 350px;
  padding: 10px 0px;
`
export const EditorBox = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #25262c;
  width: 48%;
  border: 1px solid#334155;
  border-radius: 5px;
  height: 100%;
  padding: 10px 0px;
  height: 75vh;
`
export const TextBox = styled.textarea`
  width: 98%;
  margin: auto;
  height: 64vh;
  background-color: transparent;
  border: 0px;
  padding: 5px 10px;
  color: #f8fafc;
  outline: none;
  font-family: roboto;
  text-decoration: ${props => (props.underLine ? 'underline' : 'normal')};
  font-weight: ${props => (props.boldFont ? 'bold' : 'normal')};
  font-style: ${props => (props.italicFont ? 'italic' : 'normal')};
`
export const ButtonBox = styled.ul`
  border-bottom: 1px solid #334155;
  width: 100%;
  padding: 10px 5px;
  list-style-type: none;
  margin: 0px;
  display: flex;
  flex-direction: row;
`
export const BoldLetter = styled.button`
  border: 0px;
  background-color: transparent;
  font-weight: bold;
  color: ${props => (props.boldFont ? '#faff00' : '#f1f5f9')};
  cursor: pointer;
  font-size: 8px;
`
export const ItalicLetter = styled.button`
  border: 0px;
  background-color: transparent;
  color: ${props => (props.italicFont ? '#faff00' : '#f1f5f9')};
  font-style: italic;
  cursor: pointer;
  font-size: 8px;
`
export const UnderlineLetter = styled.button`
  border: 0px;
  background-color: transparent;
  color: ${props => (props.underLine ? '#faff00' : '#f1f5f9')};
  text-decoration: underline;
  cursor: pointer;
  font-size: 8px;
`
