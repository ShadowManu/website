import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import SEO from '../components/seo';
import Shell from '../components/shell';
import Job from '../components/job';
import { jobs } from '../core/data';

const Index = () => {
  return (
    <Shell centered>
      <SEO />

      <Box sx={{ paddingX: 2, maxWidth: 800, boxSizing: 'border-box' }}>
        <Typography variant="h5" sx={{ paddingY: 2 }}>
          Experience
        </Typography>
        {jobs.map((job, index) => (
          <Job key={index} job={job} />
        ))}
      </Box>
    </Shell>
  );
};

export default Index;
