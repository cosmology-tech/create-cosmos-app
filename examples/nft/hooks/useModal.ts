import { useState } from 'react';

export function useModal(title: string) {
  const [modal, setModal] = useState({ open: false, title });

  const open = () => setModal(modal => ({ ...modal, open: true }));
  const close = () => setModal(modal => ({ ...modal, open: false }));
  const toggle = () => setModal(modal => ({ ...modal, open: !modal.open }));

  return { modal, open, close, toggle }
}