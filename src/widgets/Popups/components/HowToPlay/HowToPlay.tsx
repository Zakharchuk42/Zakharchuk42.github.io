import { useNavigate } from 'react-router-dom'
import { useTypedSelector } from '../../../../helpers/hooks/useTypedSelector'
import { Block } from '../../../../Ui/Block/Block'
import { Button } from '../../../../Ui/Button/Button'
import { PopupBox } from '../../../../Ui/PopupBox/PopupBox'
import { Typography } from '../../../../Ui/Typography/Typography'
import s from './HowToPlay.module.scss'

export const HowToPlay = () => {
  const { guide } = useTypedSelector((s) => s.helperText)
  const navigate = useNavigate()

  return (
    <PopupBox title='How to play?'>
      <Block style={s.guideBody} direction='column'>
        {guide.map((item, idx) => {
          return (
            <Block style={s.chapter} direction='column'>
              <Typography font='subtitle' color='white'>
                <span className={s.span}>{`${idx + 1}.`}</span> {item.title}
              </Typography>
              <Block gap='xl' direction='column'>
                {item.text.map((paragraph) => (
                  <Typography color='white'>{paragraph}</Typography>
                ))}
              </Block>
            </Block>
          )
        })}
      </Block>
      <Block justify='end'>
        <Button onClick={() => navigate(-1)}>Got it</Button>
      </Block>
    </PopupBox>
  )
}
