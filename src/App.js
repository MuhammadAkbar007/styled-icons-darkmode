import {useState, useContext} from "react";
import {
    Container,
    MobileContainer,
    IconCon,
    Icon,
    Img,
    ImgWrapper,
    TitleImg,
    Desc,
    Title,
    Item,
    Line,
    ToggleMode
} from "./AppStyle";
import myImg from './assets/Coming prophet in sunshine.jpg'
import {ThemeContext} from './context'
import './index.css'

function App() {

    const [mode, setMode] = useState(false)
    const [theme, setTheme] = useContext(ThemeContext)

    const dark = {
        icon: 'white',
        title: 'white',
        background: 'black'
    }

    const light = {
        icon: 'black',
        title: 'black',
        background: 'whitesmoke'
    }

    function onChange() {
        setMode(!mode)
        setTheme(mode ? dark : light)
    }

    return <Container>
        <MobileContainer color={theme.background}>
            <IconCon>
                <Icon.Arrow color={theme.icon}/>
                <Icon.Switch color={theme.icon}/>
            </IconCon>
            <ImgWrapper>
                <Img src={myImg} alt={'my image'}/>
                <TitleImg color={theme.title}>
                    Muhammad Akbar
                </TitleImg>
                <Desc color={theme.title}>Software Engineer</Desc>
            </ImgWrapper>

            <Item>
                <Icon.Dark color={theme.icon}/>
                <Title color={theme.title}>Dark Mode</Title>
                <ToggleMode onChange={onChange} checked={mode} size={50}/>
            </Item>

            <Item>
                <Icon.Grid/>
                <Title color={theme.title}>Story</Title>
            </Item>

            <Item>
                <Icon.User/>
                <Title color={theme.title}>Chat Head</Title>
            </Item>

            <Item>
                <Icon.Group/>
                <Title color={theme.title}>Groups</Title>
            </Item>

            <Line/>

            <Item>
                <Icon.Media/>
                <Title color={theme.title}>Media and Photos</Title>
            </Item>

            <Item>
                <Icon.Settings/>
                <Title color={theme.title}>Settings and Privacy</Title>
            </Item>

            <Item>
                <Icon.Comment/>
                <Title color={theme.title}>Help Center</Title>
            </Item>

            <Item>
                <Icon.Notification/>
                <Title color={theme.title}>Notification</Title>
            </Item>

        </MobileContainer>
    </Container>
}

export default App;
