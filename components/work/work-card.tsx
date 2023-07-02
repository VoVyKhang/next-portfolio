import * as React from 'react'
import { Work } from '../../models'
import { Box } from '@mui/system'
import { Chip, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import image1 from '../../images/image1.png'

export interface IWorkCardProps {
  work: Work
}

export function WorkCard({ work }: IWorkCardProps) {
  return (
    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
      <Box width={{ xs: '100%', sm: '246px' }}>
        <Image
          src={work.thumbnailUrl}
          width={246}
          height={180}
          alt="work thumbnail"
          layout="responsive"
        />
      </Box>
      <Box>
        <Typography variant="h5" fontWeight="bold">
          {work.title}
        </Typography>
        <Stack direction="row" spacing={2} my={2}>
          <Chip
            color="secondary"
            size="small"
            label={new Date(Number.parseInt(work.createdAt)).getFullYear()}
          />
          <Typography color="GrayText">{work.tagList.join(',')}</Typography>
        </Stack>
        <Typography>{work.shortDescription}</Typography>
      </Box>
    </Stack>
  )
}
