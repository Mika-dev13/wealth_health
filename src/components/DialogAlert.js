import React from 'react'
import { Button, Dialog, DialogActions, DialogTitle } from '@mui/material'

function DialogAlert({ open, setOpen }) {
  const handleClose = () => {
    setOpen(false)
  }
  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="sm"
        fullWidth={true}
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle
          id="alert-dialog-description"
          sx={{ textAlign: 'center', paddingTop: '50px' }}
        >
          Successfully created employee !
        </DialogTitle>

        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default DialogAlert
