import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';


interface ConfirmationDialogProps {
    open: boolean;
    onCancel: () => void;
    onConfirm: () => void;
    jobdata : Jobs[];
}

function ConfirmationDialog({ open, onCancel, onConfirm, jobdata } : ConfirmationDialogProps ) {
  return (
    <Dialog open={open} onClose={onCancel}>
      <DialogTitle>{'Confirmer la suppression'}</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Êtes-vous sûr de vouloir supprimer cet élément ? Cette action est irréversible.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onCancel}>Annuler</Button>
        <Button onClick={onConfirm} autoFocus>
          Confirmer
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default ConfirmationDialog;
