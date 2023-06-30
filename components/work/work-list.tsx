import React, { Fragment } from 'react'
import { Work } from '../../models'
import { Box } from '@mui/system'
import { Divider } from '@mui/material'

export interface IWorkListProps {
  workList: Work[]
}

export function WorkList({ workList }: IWorkListProps) {
  if (workList.length === 0) return null

  return (
    <Box>
      {workList.map((work) => (
        <Fragment key={work.id}>
          <Box>{work.title}</Box>
          <Divider sx={{ my: 3 }} />
        </Fragment>
      ))}
    </Box>
  )
}
