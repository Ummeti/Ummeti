'use client';
import { RemoveIcon } from './Icons';

export default function RemoveButton({ onRemove, id }) {
  return (
    <button onClick={() => onRemove(id)}>
      <RemoveIcon />
    </button>
  );
}
