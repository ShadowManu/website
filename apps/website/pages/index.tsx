import styled from '@emotion/styled';

import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import SEO from '../components/seo';

import Shell from '../components/shell';
import SlideGroup from '../components/slide-group';

import Networks from '../pages-utils/index/networks';
import Portrait from '../pages-utils/index/portrait';

const Content = styled(Box)`
  padding: ${({ theme }) => theme.spacing(3)};
  flex: 1;
  box-sizing: border-box;
`;

const StyledGrid = styled(Grid)`
  width: 800px;
  max-width: 100%;
`;

const Separator = styled((props: any) => (
  <Divider variant="middle" {...props} />
))`
  margin: ${({ theme }) => theme.spacing(2)} 0 !important;
`;

const Phrase = styled((props: any) => (
  <Typography variant="body1" {...props} />
))`
  margin-top: ${({ theme }) => theme.spacing(2)};
`;

const Index = () => {
  return (
    <Shell centered>
      <SEO />

      <StyledGrid container spacing={0}>
        <Grid item xs={12} md={3}>
          <Portrait />
        </Grid>
        <Grid item xs={12} md={9}>
          <Content>
            <SlideGroup>
              <Typography variant="h5" component="h1">
                Manuel Pacheco
              </Typography>
              <Typography variant="subtitle1" component="p">
                Senior Software Engineer
              </Typography>

              <Separator />

              <Phrase>
                6 years of experience making software for the web.
              </Phrase>
              <Phrase>
                I enjoy building software in a pragmatic, engineered way, using
                state-of-the-art technologies to do as little as possible for
                the best automation available, managing technical debt
                responsibly, even in the oldest of environments.
              </Phrase>
              <Phrase>
                Doing agile, digital transformations and any other trendy
                buzzwords.
              </Phrase>
              <Phrase>
                Typescript. React. Node. Azure. Angular. Haskell. Biking. Video
                Games.
              </Phrase>

              <Networks />
            </SlideGroup>
          </Content>
        </Grid>
      </StyledGrid>
    </Shell>
  );
};

export default Index;
