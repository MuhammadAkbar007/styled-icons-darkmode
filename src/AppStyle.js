import styled, {css} from 'styled-components'
import {Settings} from '@styled-icons/ionicons-sharp/Settings'
import {KeyboardArrowLeft} from '@styled-icons/material/KeyboardArrowLeft'
import {Switch} from '@styled-icons/icomoon/Switch'
import {Moon} from '@styled-icons/boxicons-solid/Moon'
import {Grid} from '@styled-icons/bootstrap/Grid'
import {UserCheck} from '@styled-icons/boxicons-regular/UserCheck'
import {UserPlus} from '@styled-icons/boxicons-regular/UserPlus'
import {PermMedia} from '@styled-icons/material-outlined/PermMedia'
import {CommentDots} from '@styled-icons/boxicons-regular/CommentDots'
import {BellFill} from '@styled-icons/bootstrap/BellFill'

import Toggle from 'react-dark-mode-toggle'

export const ToggleMode = styled(Toggle)`
  margin-left: auto;
  outline: none`

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: fit-content;
  padding: 100px 500px;
  box-sizing: border-box`

export const MobileContainer = styled.div`
  width: 400px;
  height: 630px;
  box-shadow: 5px 5px 12px 6px rgba(0, 0, 0, 0.25);
  background-color: ${({color}) => color};
  box-sizing: border-box`

export const IconCon = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  box-sizing: border-box`

export const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column`

export const Img = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin: 10px;`

export const TitleImg = styled.div`
  font-size: 22px;
  font-weight: bold;
  color: ${({color}) => color}`

export const Desc = styled.div`
  font-size: 15px;
  color: ${({color}) => color}`

export const Item = styled.div`
  display: flex;
  padding: 10px 30px`

export const Title = styled.div`
  font-size: 17px;
  font-weight: bold;
  padding-left: 10px;
  color: ${({color}) => color}`

export const Line = styled.div`
  width: 85%;
  height: 1px;
  background-color: #e9e9e9;
  margin: 10px 30px;
  box-sizing: border-box`

export const Icon = styled.div``

Icon.Arrow = styled(KeyboardArrowLeft)`
  color: ${({color}) => color};
  width: 20px;
  height: 30px;
  cursor: pointer`

Icon.Switch = styled(Switch)`
  color: ${({color}) => color};
  width: 20px;
  height: 30px;
  cursor: pointer;
  margin-left: auto`

Icon.Dark = styled(Moon)`
  width: 25px;
  height: 25px;
  color: ${({color}) => color}`

Icon.Grid = styled(Grid)`
  width: 25px;
  height: 25px;
  color: #fbb65c`

Icon.User = styled(UserCheck)`
  width: 25px;
  height: 25px;
  color: #ff7eb0`

Icon.Group = styled(UserPlus)`
  width: 25px;
  height: 25px;
  color: #36e3ff`

Icon.Media = styled(PermMedia)`
  width: 25px;
  height: 25px;
  color: #5476ff`

Icon.Settings = styled(Settings)`
  width: 25px;
  height: 25px;
  color: #397245`

Icon.Comment = styled(CommentDots)`
  width: 25px;
  height: 25px;
  color: #0bc630`

Icon.Notification = styled(BellFill)`
  width: 25px;
  height: 25px;
  color: #a394c2`