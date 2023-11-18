import Counter from './Counter/index.jsx'
import Timer from './Timer/index.jsx'
import TimerAdvanced from './TimerAdvanced/index.jsx'
import TimerSimple from './TimerSimple/index.jsx'
import InputText from './InputText/index.jsx'
import Profile from './Profile.jsx/index.jsx'

export default function UseStateApp() {

  return (
    <>
      <hr />
      <h1>UseStateComponents</h1>
      <Counter />
      <Timer />
      <TimerAdvanced
        timerEvent='Christmas'
        deadline={new Date('December 25, 2023 00:00:00').toString()}
      />
      <TimerSimple />
      <InputText />
      <Profile />
      <hr />
    </>
  )
}
