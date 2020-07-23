import { Example } from "../components/example"
import { Context as ResponsiveContext } from 'react-responsive'

export const Home = (): JSX.Element => (
  <div>
    <Example />
    <ResponsiveContext.Provider value={{ width: 500 }}>
      <Example />
    </ResponsiveContext.Provider>
    <ResponsiveContext.Provider value={{ width: 3000 }}>
      <Example />
    </ResponsiveContext.Provider>
  </div>
)

export default Home
