import {useState} from 'react'
import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'
import {
  MainContainer,
  TextAppContainer,
  TextImgBox,
  EditorBox,
  TextEditorImg,
  TextBox,
  ButtonBox,
  BoldLetter,
  UnderlineLetter,
  ItalicLetter,
} from './styledComponents'
import './index.css'

const TextEditor = () => {
  const [text, setText] = useState('')
  const [boldFont, setBold] = useState(false)
  const [italicFont, setItalic] = useState(false)
  const [underLine, setUnderline] = useState(false)

  const setTextValue = e => {
    setText(e.target.value)
  }

  const setItalicValue = () => {
    const italicVal = !italicFont
    setItalic(italicVal)
  }

  const setBoldValue = () => {
    const boldVal = !boldFont
    setBold(boldVal)
  }

  const setUnderlineValue = () => {
    const underlineVal = !underLine
    setUnderline(underlineVal)
  }

  return (
    <MainContainer>
      <TextAppContainer>
        <TextImgBox>
          <h1>Text Editor</h1>
          <TextEditorImg
            src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
            alt="text editor"
            className="text-editor-img"
          />
        </TextImgBox>
        <EditorBox>
          <ButtonBox>
            <li className="item">
              <BoldLetter
                type="button"
                onClick={setBoldValue}
                data-testid="bold"
                boldFont={boldFont}
              >
                <VscBold size={25} />
              </BoldLetter>
            </li>
            <li className="item">
              <ItalicLetter
                type="button"
                onClick={setItalicValue}
                italicFont={italicFont}
                data-testid="italic"
              >
                <GoItalic size={25} />
              </ItalicLetter>
            </li>
            <li className="item">
              <UnderlineLetter
                type="button"
                onClick={setUnderlineValue}
                data-testid="underline"
                underLine={underLine}
              >
                <AiOutlineUnderline size={25} />
              </UnderlineLetter>
            </li>
          </ButtonBox>
          <div>
            <TextBox
              value={text}
              underLine={underLine}
              italicFont={italicFont}
              boldFont={boldFont}
              rows="4"
              cols="50"
              onChange={setTextValue}
            />
          </div>
        </EditorBox>
      </TextAppContainer>
    </MainContainer>
  )
}

export default TextEditor
