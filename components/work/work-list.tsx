import React, { Fragment } from 'react'
import { Work } from '../../models'
import { Box } from '@mui/system'
import { Divider } from '@mui/material'
import { WorkCard } from './work-card'

export interface IWorkListProps {
  workList: Work[]
}

export function WorkList({ workList }: IWorkListProps) {
  if (workList.length === 0) return null

  return (
    <Box>
      {workList.map((work) => (
        <Fragment key={work.id}>
          <WorkCard work={work} />
          <Divider sx={{ my: 3 }} />
        </Fragment>
      ))}
    </Box>
  )
}
