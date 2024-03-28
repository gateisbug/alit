import { Button, Modal } from '@ui';
import { useState } from 'react';

export default function ModalNote() {
  const [open, setOpen] = useState(false);

  return (
    <article style={{ marginBottom: '2rem' }}>
      <Button
        onClick={() => {
          setOpen(!open);
        }}
      >
        open
      </Button>
      <Modal
        open={open}
        onClickAway={() => {
          setOpen(false);
        }}
        theme={{ surface: '#242424' }}
        style={{ padding: 32 }}
      >
        <h1>Vite + React</h1>
        <div className='card'>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className='read-the-docs'>
          Click on the Vite and React logos to learn more
        </p>
      </Modal>
    </article>
  );
}
