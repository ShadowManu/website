/* eslint-disable @next/next/no-img-element */
// TODO REMOVE

import React, { PropsWithChildren } from 'react';

import styled from '@emotion/styled';

import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Unstable_Grid2';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import CheckIcon from '@mui/icons-material/Check';
import PublicIcon from '@mui/icons-material/Public';

import { formatYearMonth } from '../core/time';
import { Job as JobType, Company } from '../core/data';

const Local = {
  Company: styled<React.FC<{ company: Company; role?: string }>>(
    ({ company, role, ...props }) => (
      <Grid container columnSpacing={2} {...props}>
        <Grid sx={{ justifyContent: 'center' }}>
          <a href={company.url} target="_blank" rel="noreferrer">
            <img
              style={{ display: 'block' }}
              src={company.logo}
              alt={company.name}
            />
          </a>
        </Grid>
        <Grid>
          {role ? (
            <Typography variant="h6">{role}</Typography>
          ) : (
            <Typography variant="subtitle1">contracted under</Typography>
          )}
          <Link
            href={company.url}
            target="_blank"
            rel="noreferrer"
            underline="none"
            variant="subtitle1"
          >
            {company.name}
          </Link>
        </Grid>
      </Grid>
    )
  )`
    img {
      width: 64px;
      height: 64px;
      object-fit: contain;

      transition: filter 300ms ease;
      filter: grayscale(100%);

      &:hover {
        filter: none;
      }
    }
  `,

  Time: ({ time }: { time: { start: string; end?: string } }) => (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <CalendarTodayIcon />
      <Typography variant="overline" sx={{ paddingLeft: 1 }}>
        {formatYearMonth(time.start)} —{' '}
        {time.end ? formatYearMonth(time.end) : 'Present'}
      </Typography>
    </Box>
  ),

  Location: ({ children }: PropsWithChildren) => (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <PublicIcon />
      <Typography variant="overline" sx={{ paddingLeft: 1 }}>
        {children}
      </Typography>
    </Box>
  ),

  Techs: styled<React.FC<{ techs: string[] }>>(({ techs, ...props }) => (
    <ol {...props}>
      {techs.map((tech, index) => (
        <Chip key={index} label={tech} />
      ))}
    </ol>
  ))`
    grid-area: techs;
    margin: 0;
    padding: 0;
    & > * {
      margin-right: ${({ theme }) => theme.spacing(1)};
      margin-bottom: ${({ theme }) => theme.spacing(1)};
    }
  `,

  Description: styled<React.FC<{ description: string[] }>>(
    ({ description, ...props }) => (
      <ol {...props}>
        {description.map((line, index) => (
          <li key={index}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <CheckIcon />
              <Typography variant="body2" sx={{ paddingLeft: 1 }}>
                {line}
              </Typography>
            </Box>
          </li>
        ))}
      </ol>
    )
  )`
    margin: 0;
    padding: 0;
    list-style: none;

    li {
      margin-top: ${({ theme }) => theme.spacing(1)};
    }
  `,
};

const Job: React.FC<{ job: JobType }> = ({ job }) => (
  <Box>
    <Divider sx={{ marginX: -2 }} />

    <Box sx={{ paddingY: 2 }}>
      <Grid container>
        <Grid xs={12} md={6}>
          <Local.Company company={job.company} role={job.role} />
        </Grid>

        {job.intermediary && (
          <Grid xs={12} md={6}>
            <Local.Company company={job.intermediary} />
          </Grid>
        )}
      </Grid>

      <Grid container sx={{ paddingY: 2 }}>
        <Grid xs={12} sm={6}>
          <Local.Time time={job.time}></Local.Time>
        </Grid>
        <Grid xs={12} sm={6}>
          <Local.Location>{job.location}</Local.Location>
        </Grid>
      </Grid>

      <Local.Techs techs={job.techs} />

      <Local.Description description={job.description} />
    </Box>
  </Box>
);

export default Job;
