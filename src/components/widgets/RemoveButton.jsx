import React from 'react';

export default function RemoveButton({ onRemove, id }) {
  return <button onClick={() => onRemove(id)}>RemoveButton</button>;
}
