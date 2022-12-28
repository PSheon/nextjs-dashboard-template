// ** Next Import
import Link from 'next/link'

// ** MUI Imports
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'

// ** Type Import
import { LayoutProps } from 'src/@core/layouts/types'

// ** Theme Config Import
import themeConfig from 'src/configs/themeConfig'

interface Props {
  hidden: LayoutProps['hidden']
  settings: LayoutProps['settings']
  saveSettings: LayoutProps['saveSettings']
  appBarContent: NonNullable<NonNullable<LayoutProps['horizontalLayoutProps']>['appBar']>['content']
  appBarBranding: NonNullable<NonNullable<LayoutProps['horizontalLayoutProps']>['appBar']>['branding']
}

const StyledLink = styled(Link)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none',
  marginRight: theme.spacing(8)
}))

const AppBarContent = (props: Props) => {
  // ** Props
  const { appBarContent: userAppBarContent, appBarBranding: userAppBarBranding } = props

  return (
    <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      {userAppBarBranding ? (
        userAppBarBranding(props)
      ) : (
        <StyledLink href='/'>
          <Typography variant='h6' sx={{ ml: 2, fontWeight: 700, lineHeight: 1.2 }}>
            {themeConfig.templateName}
          </Typography>
        </StyledLink>
      )}
      {userAppBarContent ? userAppBarContent(props) : null}
    </Box>
  )
}

export default AppBarContent
