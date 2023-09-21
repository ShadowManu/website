import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { useMediaQuery } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Link from 'next/link';
import { useRouter } from 'next/router';

const StyledToolbar = styled(Toolbar)`
  justify-content: center;
`;

const StyledButton = styled(Button)`
  /* padding-left: ${({ theme }) => theme.spacing(4)}; */
  /* padding-right: ${({ theme }) => theme.spacing(4)}; */

  width: ${({ theme }) => theme.spacing(20)};

  div.wrap {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const routes = [
  { path: '/', name: 'Me' },
  { path: '/experience', name: 'Experience' },
  // { path: '/interests', name: 'Interests' },
  // { path: '/projects', name: 'projects' },
];

const Bar: React.FC = () => {
  const router = useRouter();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  const variant = (path: string) =>
    path === router.asPath ? 'outlined' : 'text';

  return (
    <AppBar position={matches ? 'sticky' : 'fixed'}>
      <StyledToolbar>
        {routes.map((route) => (
          <Link key={route.path} href={route.path}>
            <StyledButton color="inherit" variant={variant(route.path)}>
              <div className="wrap">{route.name}</div>
            </StyledButton>
          </Link>
        ))}
      </StyledToolbar>
    </AppBar>
  );
};

export default Bar;
