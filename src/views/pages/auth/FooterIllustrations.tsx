// ** React Imports
import { ReactNode } from 'react'

// ** MUI Components
import useMediaQuery from '@mui/material/useMediaQuery'
import { styled, useTheme } from '@mui/material/styles'

interface FooterIllustrationsProp {
  image?: ReactNode
}

// Styled Components
const MaskImg = styled('img')(({ theme }) => ({
  zIndex: -1,
  bottom: '7%',
  width: '100%',
  position: 'absolute',
  [theme.breakpoints.down('lg')]: {
    bottom: '17.5%'
  }
}))

const FooterIllustrations = (props: FooterIllustrationsProp) => {
  // ** Props
  const { image } = props

  // ** Hook
  const theme = useTheme()

  // ** Vars
  const hidden = useMediaQuery(theme.breakpoints.down('md'))

  const src = (image as string) || `/images/pages/auth-login-mask-${theme.palette.mode}.png`

  if (!hidden) {
    return <>{image && typeof image !== 'string' ? image : <MaskImg alt='mask' src={src} />}</>
  } else {
    return null
  }
}

export default FooterIllustrations
