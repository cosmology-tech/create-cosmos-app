import { useState } from 'react';

export function useModal(title = '') {
  const [modal, setModal] = useState({ open: false, title });

  const open = () => setModal(modal => ({ ...modal, open: true }));
  const close = () => setModal(modal => ({ ...modal, open: false }));
  const toggle = () => setModal(modal => ({ ...modal, open: !modal.open }));

  const setTitle = (title: string) => setModal(modal => ({ ...modal, title }));

  return { modal, open, close, toggle, setTitle }
}