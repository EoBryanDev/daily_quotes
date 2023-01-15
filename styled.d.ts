import 'styled-components'

interface IColor {
  color: string
}
interface ISize {
  size: string
}
declare module 'styled-components' {
  export interface DefaultTheme  {
    author: string
    projectStyle: {
      colors: {
        primaryColor: IColor
        secondaryColor: IColor
        thirdColor: IColor
        backgroundColor: IColor
      }
      fontSize: {
        title: ISize
        subtitle: ISize
        body: ISize
      }
    }
  }
}
